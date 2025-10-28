import { useEffect, useState } from "react";
import styles from "../../styles/Gallery.module.css";
import { RiFullscreenFill } from "react-icons/ri";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const allImges = [
  // All
  { src: "assets/Gallery1.jpg", category: "All" },
  { src: "assets/Gallery2.jpg", category: "All" },
  { src: "assets/Gallery3.jpg", category: "All" },
  { src: "assets/Gallery4.jpg", category: "All" },
  { src: "assets/Gallery5.jpg", category: "All" },
  { src: "assets/Gallery6.jpg", category: "All" },
  { src: "assets/Gallery7.jpg", category: "All" },
  { src: "assets/Gallery8.jpg", category: "All" },
  { src: "assets/Gallery9.jpg", category: "All" },
  { src: "assets/Gallery10.jpg", category: "All" },
  { src: "assets/Gallery11.jpg", category: "All" },
  { src: "assets/Gallery12.jpg", category: "All" },
  { src: "assets/Gallery13.jpg", category: "All" },
  { src: "assets/Gallery14.jpg", category: "All" },
  { src: "assets/Gallery15.jpg", category: "All" },
  { src: "assets/Gallery16.jpg", category: "All" },
  { src: "assets/Gallery17.jpg", category: "All" },
  { src: "assets/Gallery18.jpg", category: "All" },
  { src: "assets/Gallery19.jpg", category: "All" },
  { src: "assets/Gallery20.jpg", category: "All" },
  { src: "assets/Gallery21.jpg", category: "All" },
  { src: "assets/Gallery22.jpg", category: "All" },
  { src: "assets/Gallery23.jpg", category: "All" },
  { src: "assets/Gallery24.jpg", category: "All" },
  { src: "assets/Gallery25.jpg", category: "All" },
  { src: "assets/Gallery26.jpg", category: "All" },
  { src: "assets/Gallery27.jpg", category: "All" },
  { src: "assets/Gallery28.jpg", category: "All" },
  { src: "assets/Gallery29.jpg", category: "All" },
  { src: "assets/Gallery30.jpg", category: "All" },
  { src: "assets/Gallery31.jpg", category: "All" },
  { src: "assets/Gallery32.jpg", category: "All" },
  { src: "assets/Gallery33.jpg", category: "All" },
  { src: "assets/Gallery34.jpg", category: "All" },
  { src: "assets/Gallery35.jpg", category: "All" },
  { src: "assets/Gallery36.jpg", category: "All" },
  { src: "assets/Gallery37.jpg", category: "All" },
  { src: "assets/Gallery38.jpg", category: "All" },
  { src: "assets/Gallery39.jpg", category: "All" },
  { src: "assets/Gallery40.jpg", category: "All" },
  { src: "assets/Gallery41.jpg", category: "All" },
  { src: "assets/Gallery42.jpg", category: "All" },
  { src: "assets/Gallery43.jpg", category: "All" },

  // rooms

  { src: "assets/Gallery4.jpg", category: "rooms" },
  { src: "assets/Gallery5.jpg", category: "rooms" },
  { src: "assets/Gallery7.jpg", category: "rooms" },
  { src: "assets/Gallery8.jpg", category: "rooms" },
  { src: "assets/Gallery9.jpg", category: "rooms" },
  { src: "assets/Gallery10.jpg", category: "rooms" },
  { src: "assets/Gallery11.jpg", category: "rooms" },
  { src: "assets/Gallery12.jpg", category: "rooms" },
  { src: "assets/Gallery13.jpg", category: "rooms" },
  { src: "assets/Gallery14.jpg", category: "rooms" },
  { src: "assets/Gallery15.jpg", category: "rooms" },
  { src: "assets/Gallery16.jpg", category: "rooms" },
  { src: "assets/Gallery17.jpg", category: "rooms" },
  { src: "assets/Gallery18.jpg", category: "rooms" },
  { src: "assets/Gallery19.jpg", category: "rooms" },
  { src: "assets/Gallery20.jpg", category: "rooms" },
  { src: "assets/Gallery21.jpg", category: "rooms" },
  { src: "assets/Gallery22.jpg", category: "rooms" },
  { src: "assets/Gallery23.jpg", category: "rooms" },
  { src: "assets/Gallery24.jpg", category: "rooms" },
  { src: "assets/Gallery25.jpg", category: "rooms" },
  { src: "assets/Gallery26.jpg", category: "rooms" },
  { src: "assets/Gallery27.jpg", category: "rooms" },
  { src: "assets/Gallery28.jpg", category: "rooms" },
  { src: "assets/Gallery29.jpg", category: "rooms" },
  { src: "assets/Gallery30.jpg", category: "rooms" },
  { src: "assets/Gallery31.jpg", category: "rooms" },
  { src: "assets/Gallery32.jpg", category: "rooms" },
  { src: "assets/Gallery33.jpg", category: "rooms" },
  { src: "assets/Gallery34.jpg", category: "rooms" },
  { src: "assets/Gallery35.jpg", category: "rooms" },
  { src: "assets/Gallery36.jpg", category: "rooms" },
  { src: "assets/Gallery37.jpg", category: "rooms" },
  { src: "assets/Gallery38.jpg", category: "rooms" },
  { src: "assets/Gallery39.jpg", category: "rooms" },
  { src: "assets/Gallery40.jpg", category: "rooms" },

  // Interior

  { src: "assets/Gallery1.jpg", category: "Interior" },
  { src: "assets/Gallery35.jpg", category: "Interior" },
  { src: "assets/Gallery41.jpg", category: "Interior" },
  { src: "assets/Gallery42.jpg", category: "Interior" },
  { src: "assets/Gallery43.jpg", category: "Interior" },
  { src: "assets/Gallery11.jpg", category: "Interior" },
  { src: "assets/Gallery13.jpg", category: "Interior" },
  { src: "assets/Gallery17.jpg", category: "Interior" },
  { src: "assets/Gallery19.jpg", category: "Interior" },
  { src: "assets/Gallery32.jpg", category: "Interior" },
  { src: "assets/Gallery33.jpg", category: "Interior" },
  { src: "assets/Gallery35.jpg", category: "Interior" },

  // Reception

  { src: "assets/Gallery2.jpg", category: "Reception" },
  { src: "assets/Gallery3.jpg", category: "Reception" },
  { src: "assets/Gallery6.jpg", category: "Reception" },
  { src: "assets/Gallery42.jpg", category: "Reception" },
  { src: "assets/Gallery41.jpg", category: "Reception" },
];

const cetegory = ["All", "rooms", "Interior", "Reception"];

function Gallery() {
  const [selectedCetegory, setSelectedCetegory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [animationClass, setAnimationClass] = useState("fadeInOut");

  const filterImg =
    selectedCetegory === "All"
      ? allImges
      : allImges.filter((img) => img.category == selectedCetegory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const nextImg = () => {
    setAnimationClass("");
    setTimeout(() => {
      setAnimationClass("slideLeft");
      setCurrentIndex((prev) => (prev + 1 === filterImg.length ? 0 : prev + 1));
    }, 10);
  };

  const prevImg = () => {
    setAnimationClass("");
    setTimeout(() => {
      setAnimationClass("slideRight");
      setCurrentIndex((prev) => (prev === 0 ? filterImg.length - 1 : prev - 1));
    }, 10);
  };

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }


  }, [currentIndex]);

  
  return (
    <main>
      <div className={styles.filter}>
        <div className={styles.filterContainer}>
          <ul>
            {cetegory.map((item, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => setSelectedCetegory(item)}
                  className={selectedCetegory === item ? styles.active : ""}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.galleryHading}>
        <h2>{selectedCetegory}</h2>
        <img src="assets/divider.png" />
      </div>

      <div className={styles.gallerySection}>
        <div className={styles.gallerySectionContainer}>
          {filterImg.map((img, idx) => {
            return (
              <div className={styles.Card} key={idx}>
                <img src={img.src} alt={img.category} />
                <div
                  className={styles.fuulscreenIcon}
                  onClick={() => openLightbox(idx)}
                >
                  <RiFullscreenFill />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {currentIndex !== null && filterImg[currentIndex] && (
        <div className={styles.lightbox}>
          <span className={styles.closeBtn} onClick={closeLightbox}>
            <IoMdClose />
          </span>

          <img
            src={filterImg[currentIndex].src}
            alt="fullscreen view"
            className={`${styles.lightboxImg} ${styles[animationClass]}`}
          />

          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={prevImg}
          >
            <IoChevronBackOutline />
          </button>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={nextImg}
          >
            <IoChevronForwardOutline />
          </button>
        </div>
      )}
    </main>
  );
}

export default Gallery;
