
import styles from '../../styles/home.module.css';
import SliderSectionContainer from "../../data/sliderData";

function Slider() {
  return (
    <section className={styles.sliderSection}>
      <SliderSectionContainer/>
    </section>
  );
}

export default Slider;
