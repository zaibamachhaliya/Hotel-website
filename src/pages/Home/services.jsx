import styles from '../../styles/home.module.css'
import ServicesContent from './serviseContent';
import ServiceCardContent from './serviceContentCard';

function Service(){
    return <section className={styles.servicesSection} id='ServiseSection'>
         <div className={styles.servicesContainer}>
               <ServicesContent/>
               <ServiceCardContent/>
         </div>
    </section>
}

export default Service;