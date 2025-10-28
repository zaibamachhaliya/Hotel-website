import styles from "../../styles/home.module.css";

function WelcomeHotel() {
  return (
    <section className={styles.welcomhotelSection}>
      <div className={styles.welcomhotelContainer}>
        <div className={styles.welcomhotelContent}>
          <h1>HOTEL GOLDEN</h1>
          <h3>Where Comfort Meets Royal Elegance</h3>
          <img src='assets/divider.png'/>
          <p>
            Located just a few steps away from Palanpur Railway Station, Hotel
            Golden invites you to experience a perfect blend of luxury, comfort,
            and convenience. Whether you’re arriving for business, leisure, or a
            family trip, our hotel offers the ideal stay with easy access to the
            city’s main attractions.
          </p>
          <p>
            At Hotel Golden, every detail is designed with your comfort in mind
            — from our elegantly styled rooms and modern amenities to our warm
            and personalized service. Enjoy a peaceful ambiance, hygienic
            environment, and an unforgettable stay that truly feels like home.
          </p>
          <p>
            Start your morning with a delicious complimentary breakfast, and let
            our dedicated staff ensure your every need is met with a smile.
            Discover why travelers choose Hotel Golden as their preferred
            destination in Palanpur — where comfort, class, and convenience come
            together to create a truly golden experience. ✨
          </p>
        </div>
      </div>
    </section>
  );
}

export default WelcomeHotel;
