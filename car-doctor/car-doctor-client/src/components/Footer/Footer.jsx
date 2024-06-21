import { FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import logo from "../../assets/logo-footer.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="mt-20">
      <footer className="footer p-10 bg-[#151515] text-white text-base flex flex-col items-start lg:flex-row lg:items-center lg:justify-around">
        <aside>
          <img
            src={logo}
            className="w-32 h-32"
          />
          <p>
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br />
            trainer who is also a serial.
          </p>
          <div className="text-lg flex items-center gap-3 mt-3">
            <Link className="bg-[#ffffff0d] rounded-full p-3">
              <FaGoogle />
            </Link>
            <Link className="bg-[#ffffff0d] rounded-full p-3">
              <FaTwitter />
            </Link>
            <Link className="bg-[#ffffff0d] rounded-full p-3">
              <FaInstagram />
            </Link>
            <Link className="bg-[#ffffff0d] rounded-full p-3">
              <FaLinkedinIn />
            </Link>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer
