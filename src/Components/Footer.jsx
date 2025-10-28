
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { scroller } from "react-scroll";
import styles from "../styles/Footer.module.css";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToRooms = () => {
    if (location.pathname === "/") {
      scroller.scrollTo("ServiseSection", {
        smooth: true,
        duration: 500,
        offset: -130,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("ServiseSection", {
          smooth: true,
          duration: 500,
          offset: -130,
        });
      }, 600);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Section */}
        <div className={styles.col}>
          <h3 className={styles.title}>Hotel Golden</h3>
          <p className={styles.text}>
            Experience comfort and luxury at Hotel Golden, near Kirtistambh Circle, Palanpur. Your perfect destination for a peaceful stay.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.title}>Quick Links</h4>
          <ul className={styles.links}>
            <li onClick={handleScrollToRooms} className={styles.linkItem}>Rooms</li>
            <li><Link to="/gallery" className={styles.linkItem}>Gallery</Link></li>
            <li><Link to="/facilities" className={styles.linkItem}>Facilities</Link></li>
            <li><Link to="/review" className={styles.linkItem}>Review</Link></li>
            <li><Link to="/about-us" className={styles.linkItem}>About Us</Link></li>
            <li><Link to="/contact-us" className={styles.linkItem}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.col}>
          <h4 className={styles.title}>Contact Info</h4>
          <ul className={styles.contact}>
            <li>
              <a href="https://www.google.com/maps?q=Hotel+Golden+Kirtistambh+Circle+Palanpur" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt className={styles.icon} /> Kirtistambh Cir, Palanpur, Gujarat
              </a>
            </li>
            <li>
              <a href="tel:+919574352195">
                <FaPhoneAlt className={styles.icon} /> +91 9574352195
              </a>
            </li>
            <li>
              <a href="mailto:hotelgolden.info@gmail.com">
                <FaEnvelope className={styles.icon} /> hotelgolden.info@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.col}>
          <h4 className={styles.title}>Follow Us</h4>
          <div className={styles.social}>
            <a href="#" className={styles.socialIcon}><FaInstagram /></a>
            <a href="#" className={styles.socialIcon}><FaFacebook /></a>
            <a href="#" className={styles.socialIcon}><FaTwitter /></a>
            <a href="#" className={styles.socialIcon}><IoLogoYoutube /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Hotel Golden, Palanpur — All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
