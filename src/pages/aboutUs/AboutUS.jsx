import styles from "../../styles/Aboutus.module.css";

function AboutUs() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.aboutUsImg}>
          <img src="assets/img2.jpg" />
        </div>

        <div className={styles.aboutUsContentContainer}>
          <span className={styles.subtitle}>HOTEL GOLDEN</span>
          <h1>About Us</h1>
          <div className={styles.underline}></div>
          <div style={{marginBlock:'2rem'}}>
            <p>
              Welcome to <strong>Hotel Golden</strong>, where comfort meets
              className and every moment shines with warmth and elegance.
              Nestled near <strong>Kirtistambh Circle</strong> at the heart of
              Palanpur, our hotel offers the perfect blend of sophistication,
              serenity, and convenience. Whether you’re traveling for business,
              leisure, or a family vacation, Hotel Golden invites you to
              experience hospitality that feels like home—only better.
            </p>

            <p>
              Step into a space where modern design meets traditional warmth.
              Each of our well-appointed rooms is designed to provide
              relaxation, privacy, and comfort. With elegant interiors, premium
              furnishings, and essential amenities, we ensure every guest enjoys
              a truly unforgettable stay.
            </p>

            <p>
              Located just minutes away from{" "}
              <strong>Palanpur Railway Station</strong>, the city{" "}
              <strong>Bus Depot</strong>, and easy access to major transport
              links, Hotel Golden offers seamless connectivity while maintaining
              a peaceful ambiance away from the city’s rush.
            </p>
          </div>

          <ul className={styles.list} aria-hidden="false">
            <li>Prime location near city landmarks</li>
            <li>Comfortable, well-furnished rooms</li>
            <li>Complimentary breakfast & Wi-Fi</li>
            <li>24×7 front desk and room service</li>
          </ul>

          <div
            className={styles.visionMission}
            role="region"
            aria-label="Vision and mission"
          >
            <h2 className={styles.sectionTitle}>Vision &amp; Mission</h2>
            <p>
              <strong>Vision:</strong> To become Palanpur’s most trusted and
              loved hospitality brand, known for comfort, className, and care.
            </p>
            <p>
              <strong>Mission:</strong> To deliver exceptional guest experiences
              through attentive service, continuous improvement, and thoughtful
              amenities—creating memorable stays that make guests feel valued
              and at ease.
            </p>
          </div>

          <p>
            At <strong>Hotel Golden</strong>, we believe true luxury lies in the
            details—the warmth of a greeting, the comfort of a quiet night, and
            the joy of personalized service. Discover a stay that redefines
            simplicity with sophistication.{" "}
            <em>Your comfort, our priority — that's the Golden Promise.</em>
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
