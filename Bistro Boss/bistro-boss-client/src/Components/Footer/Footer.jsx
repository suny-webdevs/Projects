import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <div className="mt-10 lg:mt-20">
      <footer className="text-neutral-content flex flex-col lg:flex-row justify-center">
        <aside className="bg-[#1F2937] w-full py-10 flex flex-col items-center justify-center gap-2">
          <h1 className="uppercase font-semibold text-3xl">contact us</h1>
          <div className="text-center text-lg">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </aside>
        <nav className="bg-[#111827] w-full py-10 flex flex-col items-center justify-center gap-3">
          <h6 className="text-2xl uppercase font-semibold">Social</h6>
          <p className="text-lg">Join us on social media</p>
          <div className="flex items-center gap-4 text-3xl">
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaTwitter />
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-[#151515] text-white">
        <aside>
          <p>Copyright © {currentYear} - All right reserved by Bistro Boss</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
