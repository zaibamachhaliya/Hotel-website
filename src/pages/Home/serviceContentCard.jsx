import styles from "../../styles/home.module.css";
import { Link } from "react-router-dom";
import slugify from "../../data/slugify";
import roomsData from "../../data/RoomDeta";


function ServiceCardContent() {
  return (
    <div className={styles.serviceCardContaienr}>
      {roomsData.map((room, index) => (
        <section
          key={room.id}
          className={
            index % 2 === 0 ? styles.sectionNormal : styles.sectionReverse
          }
        >
          <div className={styles.roomImg}>
            <img src={room.img} alt={room.title} />
          </div>

          <div className={styles.roomContent}>
            <h3>{room.title}</h3>
            <p>{room.desc}</p>

            <Link to={`/rooms/${slugify(room.title)}`} style={{ color: "white" }}>
              <button>View More</button>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}

export default ServiceCardContent;
