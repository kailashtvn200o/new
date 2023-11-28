// 'use client'
import React, { useState, useRef } from 'react';
import styles from '../../Styles/SubHeader.module.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
// import ThooniLogo from '../../Assets/ThooniLogo.svg';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const SubHeader = () => {
  const collapseRef = useRef(null);

  const route = useRouter();

  const [activeItem, setActiveItem] = useState('Home');

  const scrollToContact = () => {
    const contactSection = document?.getElementById('designersadvice');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  const navigateToContact = () => {
    window.location.href = '/designersadvice';
  };


  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    // collapseRef.current.setAttribute("class", "navbar-collapse collapse");
  };

  return (
    <div className={styles.subHeader}>

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand >
            <div className={styles.logoContainer}>
              <div onClick={() => route.push('/')} className={styles.navtext1}>
              
                  <img src="../Static/img/Assets/ThooniLogo.svg" alt='logo' className={styles.logo1} />
                  <span className={styles['brand-name1']}>Thooni</span>
                
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" data-toggle="collapse"
            data-target="#basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation" />
          <Navbar.Collapse id="basic-navbar-nav" className={styles.navalignment2}>
          <Nav>
            <Link href="/" className={styles.navtext}>Home</Link>
            <Link href='/aboutus' className={styles.navtext} onClick={() => handleItemClick('aboutus')}>About Us</Link>
            <Link href='/business' className={styles.navtext} onClick={() => handleItemClick('business')} >For Business</Link>
            <Link href='/ContactUs' className={styles.navtext} onClick={() => handleItemClick('ContactUs')} >Fashion Advice</Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}

export default SubHeader;