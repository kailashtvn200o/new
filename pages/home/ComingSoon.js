import React from 'react';
import styles from '../../Styles/YourStyle.module.css';
// import PhoneHand from '../../Assets/CommingSoon.svg';

const ComingSoon = () => {
    return (
        <div className={styles.comingContainer}  id="Stylesh">
            <div className={styles.downloadrightContainer}>
                <img src="./Static/img/Assets/CommingSoon.svg" alt='PhoneHand' className={styles.phonestyle1} />
            </div>
            <div className={styles.downloadleftContainer}>
                <div className={styles.comingText} style={{maxWidth:600}}>
                    <h2 className={styles.soonText}>Design with Confidence: Expert Fashion Tips at Your Fingertips!</h2>
                    {/* <h3 className='soonTexth3'>Design with Confidence: Expert Fashion Tips at Your Fingertips!</h3> */}
                    <h6 className={styles.soonTexth6}>Would you like fashion tips while designing? Our experts are ready to assist you.
</h6>
                    <span className={styles.soonTextspan} style={{width:'80%'}}>Reach out to our designer to craft a style that's uniquely yours, reflecting your personality and fashion tastes. Elevate your wardrobe.</span>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;