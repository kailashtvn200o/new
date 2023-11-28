// 'use client'
import React, { useState } from 'react';
 import styles from  '../../Styles/Card.module.css';

const Card = ({ image, subtext, maintext, para }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div 
        className={styles.owncard} 
        // className={isHovered ? 'cardhovered' : 'owncard'}
        onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ?
                <div class={styles["image-container1"]}>
                    <img src={image} alt="card" className={styles.image} />
                    <div class={styles.overlay}></div>
                    <span class={styles.textoverimage1 }>
                        {para}
                    </span>
                </div>

                :
                <div className={styles["image-container"]}>
                    <img src={image} alt="card" className={styles.image} />
                    <div className={styles["category-text"]}>
                        <div className={styles["card-content"]}>
                            {/* <h6 className='category-subtext'>
                        {subtext}
                    </h6> */}
                            <h3 className={styles['category-maintext']}>
                                {maintext}
                            </h3>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Card;
