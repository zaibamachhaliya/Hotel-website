import styles from "../../styles/home.module.css";
import React, { useEffect } from "react";

function ReviewSectionContainer() {
 
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
    <section className={styles.reviewsSectionContainer}>
      <h2 className={styles.reviewsSectionHeading}>Guest Reviews</h2>
      <div className={styles.reviewsWidgetWrapper}>
        <div
          className="elfsight-app-e39b0081-a1cb-4d99-a27c-3cc5469f3677"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}

export default ReviewSectionContainer;

