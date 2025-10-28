import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import styles from "../styles/topbar.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function TopBar() {
  const phoneNumber = "+9574352195";
  const emailAddress = "hotelgolden.info@gmail.com";

  return (
    <div className={styles.topbar}>
      <div className={styles.topbarContainer}>
        <div className={styles.phoneEmail}>
          <a
            href={`tel:${phoneNumber}`}
            className={styles.phonenumber}
            style={{ color: "#333", textDecoration: "none" }}
          >
            <span>
              <FaPhoneAlt />
            </span>
            <p>{phoneNumber}</p>
          </a>

          <a
            href={`mailto:${emailAddress}`}
            className={styles.email}
            style={{ color: "#333", textDecoration: "none" }}
          >
            <span>
              <MdOutlineMail />
            </span>
            <p>{emailAddress}</p>
          </a>
        </div>

        <div className={styles.topbarLinks}>
          <ul>
            <li>
              <NavLink
                to="/about-us"
                className="navItem"
                style={({ isActive }) => ({
                  color: isActive ? "#ff8c42" : "",
                })}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className="navItem"
                style={({ isActive }) => ({
                  color: isActive ? "#ff8c42" : "",
                })}
              >
                Contact Us
              </NavLink>
            </li>

            <li className={styles.socailIcon}>
              <span>
                <FaSquareInstagram />
              </span>
              <span>
                <FaSquareFacebook />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaYoutube />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
