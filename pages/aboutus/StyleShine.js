import React from 'react';
import styles from'../../Styles/AboutUs.module.css';
// import AboutUs from '../../Assets/AboutUs1.svg';

const StyleShine = () => {
    return (
        <div className={styles.bannerCard} >
            <img alt='aboutus' src="./Static/img/Assets/AboutUs1.svg" className={styles.bannerImg} />
            <div className={styles.bannerText}>
                <div className={styles.bannerCont}>
                    <span className={styles.fonth5}>Let your style shine</span>
                    <span className={styles.fonth2}>About Us</span>
                    <span className={styles.fonth4}>
                        Welcome to Thooni, your ultimate destination for high-quality fashion and lifestyle products.
                        We are passionate about helping you express your unique style and enhancing your everyday life
                        with our carefully curated selection.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StyleShine;