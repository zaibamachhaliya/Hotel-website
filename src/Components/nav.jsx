import styles from "../styles/navBar.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import slugify from "../data/slugify";

const roomsList = [
  "Royal Ac",
  "Standard Ac",
  "Royal Non-Ac",
  "Standard Non-Ac",
  "Economic Room",
  "Dormitory Hall",
];

function Nav() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(() => {
    setClick(false);
  }, [location]);


  const handleScrollToService = () => {
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1211) {
        setClick(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [click]);

  return (
    <nav>
      <div className={styles.navContainer}>
        <Link to="/">
          <div className={styles.logo}>
            <img src="/assets/logo.png" alt="Hotel Golden Logo" />
          </div>
        </Link>

        <div className={click ? styles.active : styles.navLinks}>
          <ul>
            <li className={styles.dropdownParent} style={{ cursor: "pointer" }}>
              <span onClick={handleScrollToService} className="navItem">
                <span className={styles.dropdownLi}>
                  Rooms <RiArrowDropDownLine />
                </span>
              </span>
              <ul className={styles.nestedUl}>
                {roomsList.map((room, idx) => {
                  return (
                    <li key={idx}>
                      <NavLink
                        to={`/rooms/${slugify(room)}`}
                        className={({ isActive }) =>
                          isActive ? styles.activeRoomLink : styles.roomLink
                        }
                      >
                        {room}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className="navItem"
                style={({ isActive }) => ({
                  color: isActive ? "#ff8c42" : "",
                })}
              >
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/facilities"
                className="navItem"
                style={({ isActive }) => ({
                  color: isActive ? "#ff8c42" : "",
                })}
              >
                Facilities
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/review"
                className="navItem"
                style={({ isActive }) => ({
                  color: isActive ? "#ff8c42" : "",
                })}
              >
                Review
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.menuIcon}>
          <IoMdMenu onClick={() => setClick(!click)} />
        </div>

        <div className={styles.headerButoon}>
          <a
            href="https://hotels.eglobe-solutions.com/hotelgolden/booking/hotels/hotel-golden-palanpur-palanpur?roomId=49722&checkIn=2025-09-23&nights=1&adults=2&child=0&ghaRef=UIK8Ppc5epin4djduXJX"
            target="_blank"
          >
            <button>Book Now !</button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
