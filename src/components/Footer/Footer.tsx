import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div>
            <h3 className="title">Murang'a University Tech Club</h3>
            <p className="description">
              Empowering students with tech skills and fostering innovation at
              Murang'a University.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="title">Quick Links</h3>
            <ul className="links">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="link">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/tracks" className="link">
                  Tracks
                </Link>
              </li>
              <li>
                <Link to="/events" className="link">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="title">Contact Us</h3>
            <address className="address">
              <p className="info">Murang'a University of Technology</p>
              <p className="info">P.O. Box 75-10200</p>
              <p className="info">Murang'a, Kenya</p>
              <p className="info">Email: mutc@example.com</p>
              <p className="info">Phone: +254 700 000000</p>
            </address>
          </div>
        </div>

        <div className="copyright">
          <p>Murang'a University Tech Club. All rights reserved.</p>
          &copy;{currentYear}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
