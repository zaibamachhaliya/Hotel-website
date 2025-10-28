import styles from "../../styles/facilites.module.css";

const facilitesArray = [
  { src: "assets/services.webp", h1: "Concierge Service" },
  { src: "assets/wifi.jpg", h1: "Free Wi-Fi" },
  { src: "assets/Airconditionre.jpg", h1: "Air-Conditioned Rooms" },
  { src: "assets/housePaking.jpg", h1: "Daily Housekeeping" },

  { src: "assets/Parking.jpg", h1: "Parking" },
   { src: "assets/Lift.jpg", h1: "Lift Service" },
  { src: "assets/Tv.jpg", h1: "Smart TV" },
  { src: "assets/rain.jpg", h1: "Rain Shower" },
 
  { src: "assets/cloudBad.jpg", h1: "Cloud Beds" },
];

function Facilites() {
  return (
    <main>
      <div className={styles.facilitesHading}>
        <div className={styles.facilitesHadingContainer}>
          <h1>Facilities At Hotel Golden Palanpur</h1>
          <p>
            Indulge in the luxury of comfort with our state-of-the-art
            facilities and personalized services designed for your perfect stay.
          </p>
          <img src="assets/divider.png" />
        </div>
      </div>

      <div className={styles.fcilitePhotosSection}>
        <div className={styles.facilitesPhotosContainer}>
          {facilitesArray.map((item, idx) => {
            return (
              <div className={styles.facilitesCard} key={idx}>
                <img src={item.src} />
                <p>{item.h1}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Facilites;
