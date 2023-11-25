import React from 'react';
import '../../Styles/AboutUs.module.css';
// import AboutUs from '../../Assets/AboutUs1.svg';

const StyleShine = () => {
    return (
        <div className='bannerCard mb-150'>
            <img alt='aboutus' src="./Static/img/Assets/AboutUs1.svg" className='bannerImg' />
            <div className='bannerText'>
                <div className='bannerCont'>
                    <span className='fonth5'>Let your style shine</span>
                    <span className='fonth2'>About Us</span>
                    <span className='fonth4'>
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