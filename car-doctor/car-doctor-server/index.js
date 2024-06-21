const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(
  cors({
    origin: [
      // "http://localhost:5173",
      "https://car-doctor-pr.web.app",
      "https://car-doctor-pr.firebaseapp.com",
    ],
    credentials: true,
  })
)
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Welcome to car doctor server")
})

const { DB_USER, DB_PASS } = process.env

// MongoDB
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.y3rtmj6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

// Middle wares
const logger = async (req, res, next) => {
  console.log("user log:", req.method, req.host, req.url)
  next()
}

const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token
  // console.log("VerifyToken:", token)
  if (!token) {
    return res.status(401).send({ message: "Unauthorized access token" })
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized access verify" })
    }
    req.user = decoded
    next()
  })
}

async function run() {
  try {
    const servicesCollection = client
      .db("carDoctorDB")
      .collection("servicesCollection")

    const bookingsCollection = client.db("carDoctorDB").collection("bookings")

    // Auth APIs
    app.post("/jwt", async (req, res) => {
      const user = req.body
      console.log(user)
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      })
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true })
    })

    app.post("/logout", async (req, res) => {
      const user = req.user
      res.clearCookie("token", { maxAge: 0 }).send({ success: true })
    })

    // Service APIs
    app.get("/services", async (req, res) => {
      const getServices = await servicesCollection.find().toArray()
      res.send(getServices)
    })

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const options = {
        projection: { img: 1, title: 1, service_id: 1, price: 1 },
      }
      const getService = await servicesCollection.findOne(query, options)
      res.send(getService)
    })

    // Bookings APIs
    app.get("/bookings", logger, verifyToken, async (req, res) => {
      // console.log("BookingsAPI:", req.user.email, req.cookies?.token)
      console.log(req.query.email, req.user.email)

      if (req.query.email !== req.user.email)
        return res.status(403).send({ message: "Forbidden access" })

      let query = {}
      if (req.query?.email) {
        query = { email: req.query.email }
      }

      const getBookings = await bookingsCollection.find(query).toArray()
      res.send(getBookings)
    })

    app.post("/bookings", async (req, res) => {
      const booking = req.body
      const postBooking = await bookingsCollection.insertOne(booking)
      res.send(postBooking)
    })

    app.patch("/bookings/:id", async (req, res) => {
      const id = req.params.id
      const filter = { _id: new ObjectId(id) }
      const updateBooking = req.body
      const updateDoc = {
        $set: {
          status: updateBooking.status,
        },
      }
      const updatedBookings = await bookingsCollection.updateOne(
        filter,
        updateDoc
      )
      res.send(updatedBookings)
    })

    app.delete("/bookings/:id", async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const deleteBookings = await bookingsCollection.deleteOne(query)
      res.send(deleteBookings)
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

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
)
