// 'use client'
import React from 'react';

import { Col, Row } from 'react-bootstrap';
// import GetItOn from '../../Assets/GetItOn.svg';
// import Twitter from '../../Assets/Twitter.svg';
// import Instagram from '../../Assets/Instagram.svg';
// import Facebook from '../../Assets/Facebook.svg';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
// import GetItOn1 from '../../Assets/Foot1.png';
// import GetItOn2 from '../../Assets/Foot2.png';
// import GetItOn3 from '../../Assets/Foot3.svg';



const Footer = () => {
    const scrollToContact = () => {
        const contactSection = document?.getElementById('designersadvice');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToFaq = () => {
        const contactSection = document?.getElementById('faq');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='footercontainer'>
            <div className='footerline' />
            <Row >
                <Col md={4} lg={3}>
                    <div className='footerthooni'>
                        <span className='thoonihead'>Thooni</span>
                        <span className='thoonibody'>Thooni, exclusively owned by Snyder Looms Pvt. Ltd., is headquartered in Chennai. 1A, Plot - 105, Door No.31, Firms Nandhana, Vaikasi Street, Chinamaya Nagar,Chennai, India</span>
                    </div>
                </Col>
                <Col md={4} lg={3}>
                    <div className='footerthooni'>
                        <span className='thoonihead'>Explore</span>
                        <div className='exploremenus footer-nav'>
                            <span className='exploremenutexts'>
                                <Link href='/aboutus' className='exploremenutextsNolink'>About Us</Link>
                            </span>
                            <span className='exploremenutexts'>
                                <Link  href='/business' className='exploremenutextsNolink'>For Business</Link >
                            </span>
                            <span className='exploremenutexts' style={{ cursor: 'pointer' }}>
                                <Link href={'/returns'} className='exploremenutextsNolink' target='_blank'>
                                    Alterations & Returns
                                </Link>
                            </span>
                            <span className='exploremenutexts' onClick={scrollToFaq}  style={{ cursor: 'pointer' }}>
                                <Link href={'/#faq'} className='exploremenutextsNolink'>FAQ</Link></span>
                            {/* <span className='exploremenutextsNolink' onClick={scrollToContact} style={{ cursor: 'pointer' }}>Contact Us</span> */}
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3}>
                    <div className='footerthooni'>
                        <span className='thoonihead'>Experience thooni app on</span>
                        <div className='exploremenus'>
                            <Link href={'https://play.google.com/store/apps/details?id=com.thooni.thooni'} target='_blank'>
                                <img alt='GetItOn' src="./Static/img/Assets/Foot2.png" style={{ width: '140px' }} />
                            </Link>
                            <Link href={'https://apps.apple.com/in/app/thooni/id6452012641'} target='_blank'>
                                <img alt='GetItOn' src="./Static/img/Assets/Foot1.png" style={{ width: '140px' }} />
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col md={4} lg={3}>
                    <div className='footerthooni'>
                        <span className='thoonihead'>Social Links</span>
                        <div className='sociallinks'>
                           {/* <img src={Twitter} alt='Twitter' className='socialmedia' />*/}
                           <Link href='https://www.instagram.com/thooni.in/' target='_blank'>
                           <img src="./Static/img/Assets/Instagram.svg" alt='Instagram' className='socialmedia' />
              </Link>
                            
                            {/* <img src={Facebook} alt='Facebook' className='socialmedia' />*/}
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='footerline2' />
            <div className='headcont'>
                <h2 className='headtxt'>thooni</h2> 
            </div>
            <div style={{ display: 'inline-block' }}>
                <div className='reserved'>
                    <span className='reservedtext'>© 2023 Thooni.com. All Rights Reserved.</span>
                    <span className='reservedtext pointer'>
                        <span>
                            <Link href='/privacypolicy' target='_blank'  style={{ color: 'black', textDecorationLine: 'none' }}>Privacy</Link></span> | <span>
                            <Link href='/termsservice'  target='_blank' style={{ color: 'black', textDecorationLine: 'none' }}>Terms of Service</Link></span> | <span>
                            <Link href='/returns'  target='_blank' style={{ color: 'black', textDecorationLine: 'none' }}>Alterations and Returns</Link></span></span>
                    <hr className='line' />
                </div>
            </div>
        </div>
    )
}

export default Footer;