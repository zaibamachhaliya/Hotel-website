import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/home.module.css";
import { IoIosPause } from "react-icons/io";
import { IoMdPlay } from "react-icons/io";

let silderArray = [
  { img: "assets/img1.jpg" },
  { img: "assets/img2.jpg" },
  { img: "assets/img3.jpg" },
  { img: "assets/img4.jpg" },
  { img: "assets/img5.jpg" },
  { img: "assets/img6.jpg" },
  { img: "assets/img7.jpg" },
  { img: "assets/img8.jpg" },
  { img: "assets/img9.jpg" },
  { img: "assets/img10.jpg" },
];


function SliderSectionContainer() {
  const [currentidx, setCurrentidx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentidx((prev) => (prev + 1) % silderArray.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleNext = () =>
    setCurrentidx((prev) => (prev + 1) % silderArray.length);

  const handlePrev = () =>
    setCurrentidx((prev) => (prev === 0 ? silderArray.length - 1 : prev - 1));

  return (
    <div className={styles.sliderContainer}>
      {silderArray.map((item, index) => (
        <img
          key={index}
          src={item.img}
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
  );
}

export default SliderSectionContainer;
