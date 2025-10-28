import roomDetailDeta from "../../data/RoomDetail";
import { useParams } from "react-router-dom";
import styles from "../../styles/RoomDetail.module.css";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { IoMdPlay } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";

function RoomsDetail() {
  const { id } = useParams();
  const [currentidx, setCurrentidx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const DetailDeta = roomDetailDeta.find((item) => item.id == id);

  useEffect(() => {
    if (!DetailDeta || !DetailDeta.imges || DetailDeta.imges.length === 0)
      return;

    if (!isPaused && DetailDeta?.imges?.length > 0) {
      const interval = setInterval(() => {
        setCurrentidx((prev) => (prev + 1) % DetailDeta.imges.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused, DetailDeta?.imges?.length]);

  useEffect(() => {
    if (!DetailDeta) return;
    if (currentidx >= DetailDeta.imges.length) {
      setCurrentidx(0);
    }
  }, [currentidx, DetailDeta?.imges?.length]);

  const handleNext = () =>
    setCurrentidx((prev) => (prev + 1) % DetailDeta.imges.length);

  const handlePrev = () =>
    setCurrentidx((prev) =>
      prev === 0 ? DetailDeta.imges.length - 1 : prev - 1
    );

  return (
    <main>
      <div className={styles.roomdetailContainer}>
        <div className={styles.detailTopSection}>
          <div className={styles.sliderContainer}>
            {DetailDeta.imges.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`${styles.sliderImg} ${
                  index === currentidx ? styles.active : ""
                }`}
                onClick={() => setIsPaused(!isPaused)}
              />
            ))}

            <button
              className={`${styles.navButton} ${styles.prev}`}
              onClick={handlePrev}
            >
              <FaChevronLeft />
            </button>
            <button
              className={`${styles.navButton} ${styles.next}`}
              onClick={handleNext}
            >
              <FaChevronRight />
            </button>

            <button
              className={styles.pauseButton}
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? <IoMdPlay /> : <IoIosPause />}
            </button>
          </div>

          <div className={styles.DetailContent}>
            <h1>{DetailDeta.name}</h1>
            <div className={styles.outline}></div>
            <p className={styles.mainP}>{DetailDeta.content}</p>
            <div className={styles.priceTable}>
              <div className={styles.priceRow}>
                <span className={styles.roomType}>Single</span>
                <span className={styles.price}>
                  Rs.{DetailDeta.priceSingle}
                </span>
                <span className={styles.priceUSD}>
                  {DetailDeta.priceSingleDoller}
                </span>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.roomType}>Double</span>
                <span className={styles.price}>Rs.{DetailDeta.priceDuble}</span>
                <span className={styles.priceUSD}>
                  {DetailDeta.priceDoubleDoller}
                </span>
              </div>
            </div>

            <a
              href="https://hotels.eglobe-solutions.com/hotelgolden/booking/hotels/hotel-golden-palanpur-palanpur?roomId=49722&checkIn=2025-09-23&nights=1&adults=2&child=0&ghaRef=UIK8Ppc5epin4djduXJX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Book Now</button>
            </a>

            <p className={styles.timing}>
              <CiClock2 /> Check-In (11:00am) & Check-Out (10:00am)
            </p>
            <p className={styles.contact}>
              For more Details Call Us At:
              <span style={{ marginLeft: "1rem" }}>+9574352195</span>
            </p>
          </div>
        </div>

        <div className={styles.DetailFacilites}>
          <p>HOTEL GOLDEN</p>
          <h1>{DetailDeta.name} Amenities</h1>
          <div className={styles.h1outline}></div>

          <div className={styles.facilitiesGrid}>
            {DetailDeta.facilites.map((item, idx) => (
              <div key={idx} className={styles.facilityItem}>
                <FaCheck className={styles.facilityIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default RoomsDetail;
