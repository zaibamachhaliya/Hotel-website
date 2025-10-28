
import { PiPhoneCallFill } from "react-icons/pi";
import styles from '../styles/CallIcon.module.css';

const CallIcon = () => {
  return (
    <a href="tel:+919574352195" className={styles.callFloatingBtn}>
      <PiPhoneCallFill size={28} />
    </a>
  );
};

export default CallIcon;
