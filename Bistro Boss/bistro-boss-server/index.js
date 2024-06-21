const express = require("express")
const cors = require("cors")
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb")
const jwt = require("jsonwebtoken")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Welcome to Bistro Boss server")
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y3rtmj6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// const uri = "mongodb://localhost:27017"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    const userCollection = client.db("bistroBossDB").collection("users")
    const menuCollection = client.db("bistroBossDB").collection("menus")
    const reviewCollection = client.db("bistroBossDB").collection("reviews")
    const cartCollection = client.db("bistroBossDB").collection("cats")

    // jwt
    app.post("/jwt", async (req, res) => {
      const user = req.body
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      })
      res.send({ token })
    })

    // middlewares
    const verifyToken = (req, res, next) => {
      if (!req.headers.authorization)
        return res.status(401).send({ message: "unauthorized access" })

      const token = req.headers.authorization.split(" ")[1]

      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).send({ message: "forbidden access" })
        req.decoded = decoded
        next()
      })
    }

    const verifyAdmin = async (req, res, next) => {
      const query = { email: req.decoded.email }
      const user = await userCollection.findOne(query)
      const isAdmin = user?.role === "admin"
      if (!isAdmin) return res.status(403).send({ message: "forbidden access" })
      next()
    }

    // admin
    app.get("/users/admin/:email", verifyToken, async (req, res) => {
      const email = req.params.email
      if (email !== req.decoded.email) {
        return res.status(401).send({ message: "Unauthorized access" })
      }
      const query = { email: email }
      const userAdmin = await userCollection.findOne(query)

      let admin = false
      if (userAdmin) {
        return (admin = userAdmin?.role === "admin")
      }
      res.send({ admin })
    })

    // Users
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      const users = await userCollection.find().toArray()
      res.send(users)
    })

    app.post("/users", async (req, res) => {
      const user = req.body

      const query = { email: user.email }
      const existingUser = await userCollection.findOne(query)
      if (existingUser)
        return res.send({ message: "user already exist", insertedId: null })

      const createUser = await userCollection.insertOne(user)
      res.send(createUser)
    })

    app.patch(
      "/users/admin/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const filter = { _id: new ObjectId(req.params.id) }
        const updatedDoc = {
          $set: {
            role: "admin",
          },
        }
        const updatedUser = await userCollection.updateOne(filter, updatedDoc)
        res.send(updatedUser)
      }
    )

    app.delete("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) }
      const deleteUser = await userCollection.deleteOne(query)
      res.send(deleteUser)
    })

    // Menus
    app.get("/menus", async (req, res) => {
      const menus = await menuCollection.find().toArray()
      res.send(menus)
    })

    app.get("/menus/:category", async (req, res) => {
      const query = { category: req.params.category }
      const menus = await menuCollection.find(query).toArray()
      res.send(menus)
    })

    app.get("/reviews", async (req, res) => {
      const reviews = await reviewCollection.find().toArray()
      res.send(reviews)
    })

    // Carts
    app.get("/carts", async (req, res) => {
      const carts = await cartCollection.find().toArray()
      res.send(carts)
    })

    app.post("/carts", async (req, res) => {
      const cart = req.body
      const addCart = await cartCollection.insertOne(cart)
      res.send(addCart)
    })

    app.delete("/carts/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) }
      const deleteCart = await cartCollection.deleteOne(query)
      res.send(deleteCart)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 })
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    )
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
