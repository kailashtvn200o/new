// 'use client'
import React, { useState, useRef } from 'react';
// import '../../src/app/Styles/SubHeader.module.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
// import ThooniLogo from '../../Assets/ThooniLogo.svg';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
const SubHeader = () => {
  const collapseRef = useRef(null);


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
    <div className='subHeader'>

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="home">
            <div className='logoContainer'>
              {/* <Link href="/" className='navtext1'>
              
                  <img src="../Static/img/Assets/ThooniLogo.svg" alt='logo' className='logo' />
                  <span className='ms-2 brand-name1'>Thooni</span>
                
              </Link> */}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" data-toggle="collapse"
            data-target="#basic-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation" />
          {/* <Navbar.Collapse id="basic-navbar-nav" className='navalignment2'> */}
          <Nav>
            <Link href="/Home" className='navtext'>Home</Link>
            <Link href='/aboutus' className='navtext' onClick={() => handleItemClick('aboutus')}>About Us</Link>
            <Link href='/index' className='navtext' onClick={() => handleItemClick('index')} >For Business</Link>
            <Link href='/ContactUs' className='navtext' onClick={() => handleItemClick('ContactUs')} >Fashion Advice</Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>


    </div>
  )
}

export default SubHeader;