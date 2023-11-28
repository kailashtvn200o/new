import React from 'react';
import styles from '../../Styles/Business.module.css';
import about from "../../Styles/AboutUs.module.css"
// import BusinessBg from '../../Assets/BusinessBg.svg';

const OurSaas = () => {
    return (
        <div className={styles.bannerCard}>
            <img alt='aboutus' src="./Static/img/Assets/BusinessBg.svg" className={about.bannerImg} />
            <div class={styles.businessoverlay}></div>
            <div className={styles.bannerText}>
                <div className={about.bannerCont}>
                    <span className={about.fonth5}>For Business</span>
                    <span className={about.fonth2}>Elevate Your Fashion Business with Our SAAS Solution</span>
                    <span className={about.fonth4}>
                        Welcome to Thooni, where technology meets fashion. Our SAAS solution is designed to 
                        empower fashion designers and boutiques, revolutionizing the way you do business.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OurSaas;