import React from 'react';
import styles from '../../Styles/AboutUs.module.css';

const HappyCustomers = () => {
    return (
        <div className={styles.happycontainer}>
            <div className={styles.happycontainersub}>
                <div className={styles.happysub1}>
                    <span className={styles.happyBoldText}>15K</span>
                    <span className={styles.happySmallText}>Happy Customers</span>
                </div>
                <div className={styles.happysub1}>
                    <span className={styles.happyBoldText}>150K</span>
                    <span className={styles.happySmallText}>Monthly Visitors</span>
                </div>
                <div className={styles.happysub1}>
                    <span className={styles.happyBoldText}>15</span>
                    <span className={styles.happySmallText}>Countries  Worldwide</span>
                </div>
                <div className={styles.happysub1}>
                    <span className={styles.happyBoldText}>100+</span>
                    <span className={styles.happySmallText}>Top Partners</span>
                </div>
            </div>
        </div>
    )
}

export default HappyCustomers;