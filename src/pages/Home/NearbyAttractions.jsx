// import styles from "./NearbyAttractions.module.css";
import styles from "../../styles/home.module.css";

const ATTRACTIONS = [
  {
    id: 1,
    name: "Ambaji Temple",
    img: "assets/ambaji.jpg",
    desc: "Ancient Shakti Peetha located in the Arasur hills — one of the most sacred pilgrimage sites in Gujarat.",
    dist: "25 km",
    map: "https://www.google.com/maps/search/?api=1&query=Ambaji+Temple",
  },
  {
    id: 2,
    name: "Sabarmati Ashram",
    img: "assets/ashram.jpg",
    desc: "Historic residence of Mahatma Gandhi — a peaceful place reflecting India’s freedom struggle and simplicity.",
    dist: "150 km",
    map: "https://www.google.com/maps/search/?api=1&query=Sabarmati+Ashram+Ahmedabad",
  },
  {
    id: 3,
    name: "Dantiwada Dam",
    img: "assets/dam.jpg",
    desc: "Built on the Banas River, Dantiwada Dam helps in irrigation and flood control — scenic during monsoon season.",
    dist: "25 km",
    map: "https://www.google.com/maps/search/?api=1&query=Dantiwada+Dam",
  },
  {
    id: 4,
    name: "Mount Abu",
    img: "assets/mountAbu.jpg",
    desc: "Rajasthan’s only hill station, known for Nakki Lake, Dilwara Temples, and stunning mountain views — perfect weekend getaway.",
    dist: "150 km",
    map: "https://www.google.com/maps/search/?api=1&query=Mount+Abu",
  },
  {
    id: 5,
    name: "Dandi Kutir Museum",
    img: "assets/mandir.jpg",
    desc: "India’s largest museum dedicated to Mahatma Gandhi, showcasing his life, principles, and the Dandi March through 3D exhibits.",
    dist: "165 km",
    map: "https://www.google.com/maps/search/?api=1&query=Dandi+Kutir+Museum+Gandhinagar",
  },
  {
    id: 6,
    name: "Balaram Palace",
    img: "assets/medan.jpg",
    desc: "Once the hunting retreat of the Lohani Nawab of Palanpur, now a luxurious heritage palace turned boutique hotel.",
    dist: "15 km",
    map: "https://www.google.com/maps/search/?api=1&query=Balaram+Palace+Chitrasani",
  },
];

export default function NearbyAttractions() {
  return (
    <section className={styles.attractionSection}>
      <div className={styles.attractionContainer}>
        <header className={styles.attractionHeader}>
          <h2>Nearby Attractions</h2>
          <p>
            Explore the most popular places around Hotel Golden, Kirtistambh
            Circle, Palanpur
          </p>
        </header>

        <div className={styles.attractionGrid}>
          {ATTRACTIONS.map((a) => (
            <article className={styles.attractionCard} key={a.id}>
              <img src={a.img} alt={a.name} className={styles.attractionImg} />
              <div className={styles.attractionBody}>
                <h3>{a.name}</h3>
                <p className={styles.attractionDesc}>{a.desc}</p>
                <div className={styles.attractionMeta}>
                  <span className={styles.attractionBadge}>{a.dist}</span>
                  <a
                    className={styles.attractionBtn}
                    href={a.map}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
