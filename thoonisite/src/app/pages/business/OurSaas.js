import React from 'react';
import '../../Styles/Business.module.css';
// import BusinessBg from '../../Assets/BusinessBg.svg';

const OurSaas = () => {
    return (
        <div className='bannerCard'>
            <img alt='aboutus' src="./Static/img/Assets/BusinessBg.svg" className='bannerImg' />
            <div class="businessoverlay"></div>
            <div className='bannerText'>
                <div className='bannerCont'>
                    <span className='fonth5'>For Business</span>
                    <span className='fonth2'>Elevate Your Fashion Business with Our SAAS Solution</span>
                    <span className='fonth4'>
                        Welcome to Thooni, where technology meets fashion. Our SAAS solution is designed to 
                        empower fashion designers and boutiques, revolutionizing the way you do business.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OurSaas;