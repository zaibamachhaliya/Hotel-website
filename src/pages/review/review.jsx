import React, { useEffect } from "react";
import styles from "../../styles/review.module.css";

function Review() {

  
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);


  return (
    <main className={styles.reviewPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Guest Reviews</h1>
          <p>
            Discover what our valued guests have to say about their stay. Your
            feedback inspires us to serve you even better every day.
          </p>
        </div>
      </section>

      <section className={styles.reviewsWidgetSection}>
        <h2>What Our Guests Say</h2>
        <p>Read authentic reviews shared by guests who stayed with us.</p>

        <div className={styles.reviewsWidgetBox}>
          <div
            className="elfsight-app-e39b0081-a1cb-4d99-a27c-3cc5469f3677"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      <section className={styles.manualReviews}>
        <h2>More Guest Experiences</h2>
        <div className={styles.reviewGrid}>
          <div className={styles.reviewCard}>
            <h3>⭐ 5.0</h3>
            <p>
              “Beautiful rooms, clean environment and great staff! I will
              definitely come back again.”
            </p>
            <span>- Priya Sharma</span>
          </div>

          <div className={styles.reviewCard}>
            <h3>⭐ 4.8</h3>
            <p>
              “The hotel was so comfortable and peaceful. Food was amazing and
              staff were polite.”
            </p>
            <span>- Rohan Mehta</span>
          </div>

          <div className={styles.reviewCard}>
            <h3>⭐ 5.0</h3>
            <p>
              “Perfect location and service. Rooms were neat and the management
              was very helpful.”
            </p>
            <span>- Ayesha Khan</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Review;
