import styles from '../../styles/home.module.css';
import ReviewSectionContainer from './reviewSectionContainer';

function ReviewSection(){
    return <section>
       <div className={styles.reviewSection}>
            <ReviewSectionContainer/>
       </div>
    </section>
}

export default ReviewSection;