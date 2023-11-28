import React from 'react';
import styles from  '../../Styles/YourStyle.module.css';
// import Men1 from '../../Assets/man-striped-shirt-closing-his-buttonier.jpg';
// import Womens1 from '../../Assets/young-woman-beautiful-yellow-dress.jpg';
// import Kids1 from '../../Assets/pretty-toddler-sucking-lollipop.jpg';
import { Col, Row } from 'react-bootstrap';
// import Accesories1 from '../../Assets/D0.png';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const BeStylish = () => {
    return (
        <>
            <div className={styles.stylishContainer}>
                {/* <div style={{ display: 'flex' }}>
                    <div className='stylishleftContainer'>
                        <div className='stylishgrpText'>
                            <h3 className='stylishtxt1'>Wear Better and Be Stylish</h3>
                            <h6 className='stylishtxt2'>We have something for everyone</h6>
                            <span className='stylishtxt3'>At Thooni Custom Clothing, we're all about making your fashion
                                dreams come true. Our talented designers and crafty creators work
                                hard to make clothes that are just for you, showing off your one-of-a-kind
                                style. We promise to give you great quality, new ideas, and keep you happy – we're your go-to
                                friend for custom fashion.</span>
                        </div>
                    </div>
                    <div className='stylishrightContainer'>
                        <div class="styleimgcontainer">
                            <img src={Accesories} alt="Accesories" style={{ width: '100%' }} />
                            <div class="styleimgcontent">
                                <span class="accesoriestxt">ACCESSORIES</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stylishContainer1'>
                    <div className='stylishrightContainer1'>
                        <div class="styleimgcontainer">
                            <img src={Men1} alt="Accesories" />
                            <div class="styleimgcontent">
                                <span class="accesoriestxt">MEN</span>
                            </div>
                        </div>
                    </div>
                    <div className='stylishrightContainer2'>
                        <div class="styleimgcontainer">
                            <img src={Womens1} alt="Accesories" />
                            <div class="styleimgcontent">
                                <span class="accesoriestxt">WOMEN</span>
                            </div>
                        </div>
                    </div>
                    <div className='stylishrightContainer3'>
                        <div class="styleimgcontainer">
                            <img src={Kids1} alt="Accesories" style={{ width: '100%', height: '500px' }} />
                            <div class="styleimgcontent">
                                <span class="accesoriestxt">KIDS</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            
                <Row className={styles['justify-content-between']}>
                   <Col md={7} className={styles['order-lg-first order-last']}>
                   <div className={styles.stylishleftContainer}>
                            <div className={styles.stylishgrpText}>
                                <h3 className={styles.stylishtxt1}>Wear Better and Be Stylish</h3>
                                <h6 className={styles.stylishtxt2}>We have something for everyone</h6>
                                <span className={styles.stylishtxt3}>At Thooni Custom Clothing, we're all about making your fashion dreams come true. Our talented designers and crafty creators work hard to make clothes that are just for you, showing off your one-of-a-kind style. We promise to give you great quality, new ideas, and keep you happy – we're your go-to friend for custom fashion.</span><br/>
                                <Link href='aboutus' className={styles['btn btn-primary btn-sm mt-3']} onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }}>Read More</Link>
                            </div>
                        </div>
                    </Col> 
                    <Col md={5}  lg={4} className={styles['order-lg-last order-first']}>
                    <Link href="#" className={styles.stylishrightContainer}>
                            <div className={styles.styleimgcontainer}>
                                <img src="./Static/img/Assets/D0.png" alt="Accesories" style={{ width: '100%',height:'281px' }} />
                                <div className={styles.styleimgcontent}>
                                    <span className={styles.accesoriestxt}>ACCESSORIES</span>
                                </div>
                            </div>
                        </Link>
                    </Col>
                 
                </Row>
                <Row>
                    <Col md={4}>
                        <Link href="#">
                            <div className={styles.styleimgcontainer}>
                                <img src="./Static/img/Assets/man-striped-shirt-closing-his-buttonier.jpg" alt="Accesories" className='stylishMen'/>
                                <div className={styles.styleimgcontent} style={{minWidth:'33%'}}>
                                    <span className={styles.accesoriestxt}>MEN</span>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md={4}>
                    <Link href="#">
                            <div className={styles.styleimgcontainer}>
                                 <img src="./Static/img/Assets/young-woman-beautiful-yellow-dress.jpg" alt="Accesories" className='stylishWoMen' />
                                <div className={styles.styleimgcontent}>
                                    <span class={styles.accesoriestxt}>WOMEN</span>
                                </div>
                            </div>
                        </Link>
                            
                    </Col>
                    <Col md={4}>
                    <Link href="#">
                            <div class={styles.styleimgcontainer}>
                             <img src="./Static/img/Assets/pretty-toddler-sucking-lollipop.jpg" alt="Accesories" />
                                <div className={styles.styleimgcontent}>
                                    <span className={styles.accesoriestxt}>KIDS</span>
                                </div>
                            </div>
                        </Link>
                            
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default BeStylish;