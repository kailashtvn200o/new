import React from 'react';
// import Link from 'next/link';
// import Hero2 from '../../Assets/Banner_3.png';
import styles from '../../Styles/YourStyle.module.css';
import Carousel from 'react-bootstrap/Carousel';
// import H1 from '../../Assets/Banner_1.png';
// import H2 from '../../Assets/Banner_2.png';



const YourStyle = () => {
    return (
        <div className={styles.subcontainer1}      >
            <div className={styles.herocontainer}>
                <Carousel>
                    <Carousel.Item>
                    <div className={styles['heroimage-widget']}>
                            <img src="./Static/img/Assets/Banner_1.png" alt='heroimage' className={styles.h1imageContainer} />
                        </div>

                        <Carousel.Caption className={styles['text-left']}>
                            <div className={styles.caption}>
                                <h5 className={styles.blueheading}>Let your style shine</h5>
                                <h2 className={styles.boldheading} >Your Design,<br/>Our Expert Craftsmanship</h2>
                                <p className={styles.smallsubheading}>Turn Your Fashion Ideas into Stunning Reality with Our Expert Tailoring</p>
                                <a href="#download" className={`${styles.btn} ${styles['btn-primary']}`}>Personalise Your Style</a>

                                
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className={styles['heroimage-widget']}>
                            <img src="./Static/img/Assets/Banner_2.png" alt='heroimage' className={styles.h2imageContainer} />
                        </div>
                        <Carousel.Caption className={styles['text-left']}>
                            <div className={styles.caption}>
                                <h5 className={styles.blueheading}>Add uniqueness to your daily style</h5>
                                <h2 className={styles.boldheading} style={{ marginBottom: '20px' }}>Budget-Friendly Custom Clothing</h2>
                                <span className={styles.smallsubheading} style={{ marginBottom: '20px' }}>Fashion that's made just for you and doesn't cost much.</span>
                                <a href="#download" className={`${styles.btn} ${styles['btn-primary']}`}>Personalise Your Style</a>

                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className={styles['heroimage-widget']}>
                              <img src="./Static/img/Assets/Banner_3.png" alt='heroimage' className={styles.h2imageContainer} />
                        </div>                       
                        <Carousel.Caption className={styles['text-left']}>
                            <div className={styles.caption}>
                                <div className={styles.blueheading}>Convenience and Comfort Combined</div>
                                <div className={styles.boldheading} style={{ marginBottom: '20px' }}> Perfect Fit Home Delivered</div>
                                <span className={styles.smallsubheading} style={{ marginBottom: '20px' }}>Discover the joy of a perfect fit, conveniently delivered to your home, ensuring comfort and satisfaction.</span>
                                <a href="#download" className={`${styles.btn} ${styles['btn-primary']}`}>Personalise Your Style</a>

                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default YourStyle;