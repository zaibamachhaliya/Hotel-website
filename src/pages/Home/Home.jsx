import Slider from "./slider";
import WelcomeHotel from "./WelcomHotel";
import styles from "../../styles/home.module.css";
import Service from "./services";
import Facilites from "./Facilites";
import ReviewSection from "./reviewSection";
import NearbyAttractions from "./NearbyAttractions";
import FAQSection from "./FAQSection";

function Home() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <Slider />
        <WelcomeHotel />
        <Service />
        <Facilites />
        <ReviewSection />
        <NearbyAttractions/>
        <FAQSection/>
      </div>
    </main>
  );
}

export default Home;
