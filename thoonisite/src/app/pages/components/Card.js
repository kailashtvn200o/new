// 'use client'
import React, { useState } from 'react';
 import '../../Styles/Card.module.css';

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
        className="owncard" 
        // className={isHovered ? 'cardhovered' : 'owncard'}
        onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered ?
                <div class="image-container1">
                    <img src={image} alt="card" className="image" />
                    <div class="overlay"></div>
                    <span class="text-over-image1 ">
                        {para}
                    </span>
                </div>

                :
                <div className="image-container">
                    <img src={image} alt="card" className="image" />
                    <div className="category-text">
                        <div className="card-content">
                            {/* <h6 className='category-subtext'>
                        {subtext}
                    </h6> */}
                            <h3 className='category-maintext'>
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
