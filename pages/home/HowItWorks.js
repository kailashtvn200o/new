import React from 'react';
import  styles from '../../Styles/YourStyle.module.css';
import heads from '../../Styles/Header.module.css'
import { Col, Row } from 'react-bootstrap';
// import HowItWork from '../../Assets/HowItWorks.svg';


const HowItWorks = () => {
    return (
        <div className={heads.subcontainer}>
            <Row className={styles['align-items-center']}>
            <Col md={5} xl={5}>
                    <img alt='' src="./Static/img/Assets/HowItWorks.svg" className={styles.HowItWorkImg} />
                </Col>
                {/* <Col sm={8}>
                    <div className='howworkcontainer'>
                        <Row>
                            <Col sm={12}>
                                <h3 className='headinghow1'>HOW IT WORKS</h3>
                            </Col>
                            <Col sm={12}>
                                <h6 className='headinghow2'>Our Process for Making This a Reality</h6>
                            </Col>
                            <Row className='subhowworkcontainer'>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>1.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext'>Choose the item you wish to personalize</span>
                                            <span className='smallblacktext'>Pick your desired product for custom design and personalisation.</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>2.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext'>Pick the material</span>
                                            <span className='smallblacktext' style={{ width: '175px' }}>Select the fabric that you would like to use for your project. Choose from our extensive range of various textures and patterns.</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>3.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext' style={{ width: '120px' }}>Provide Sizing Details</span>
                                            <span className='smallblacktext' style={{ width: '175px' }}>Please supply accurate measurements for a perfect-fitting custom garment. </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='subhowworkcontainer1'>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>4.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext' style={{width:'154px'}}>Virtual Try-On: See the Real Look Before You Choose!</span>
                                            <span className='smallblacktext'>Experience its true appearance on you with virtual try-on technology.</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='numbandtext'>
                                        <h2 className='blueandtext'>5.</h2>
                                        <div className='textandtext'>
                                            <span className='boldblacktext'>Get Your Dream Delivered Home</span>
                                            <span className='smallblacktext' style={{ width: '175px' }}>Experience the joy of having your dream delivered right to your home.</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                </Col> */}
                <Col md={7} xl={7}>
                    <Row className={styles['how-it-work-info']}>
                        <Col sm={12}>
                            <h3 className={styles.headinghow1} style={{marginBottom:'10px'}}>HOW IT WORKS</h3>
                        </Col>
                        <Col sm={12}>
                            <h6 className={styles.headinghow2}>Our Process for Making This a Reality</h6>
                        </Col>
                        <Row className={styles.subhowworkcontainer}>
                        <Col sm={6} lg={6} xl={6} xxl={4} >
                                <div className={styles.numbandtext}>
                                    <h2 className={styles.blueandtext}>1.</h2>
                                    <div className={styles.textandtext}>
                                        <span className={styles.boldblacktext}>Choose the item you wish to personalize</span>
                                        <span className={styles.smallblacktext}>Pick your desired product for custom design and personalisation.</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} lg={6} xl={6} xxl={4}>
                                <div className={styles.numbandtext}>
                                    <h2 className={styles.blueandtext}>2.</h2>
                                    <div className={styles.textandtext}>
                                        <span className={styles.boldblacktext}>Pick the material</span>
                                        <span className={styles.smallblacktext} style={{ width: '175px' }}>Select the fabric that you would like to use for your project. Choose from our extensive range of various textures and patterns.</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} lg={6} xl={6} xxl={4}>
                                <div className={styles.numbandtext}>
                                    <h2 className={styles.blueandtext}>3.</h2>
                                    <div className={styles.textandtext}>
                                        <span className={styles.boldblacktext} style={{ width: '120px' }}>Provide Sizing Details</span>
                                        <span className={styles.smallblacktext} style={{ width: '175px' }}>Please supply accurate measurements for a perfect-fitting custom garment.  </span>
                                    </div>
                                </div>
                            </Col>
                           <Col sm={6} lg={6} xl={6} xxl={4}>
                                <div className={styles.numbandtext}>
                                    <h2 className={styles.blueandtext}>4.</h2>
                                    <div className={styles.textandtext}>
                                        <span className={styles.boldblacktext} style={{ width: '154px' }}>Virtual Try-On: See the Real Look Before You Choose!</span>
                                        <span className={styles.smallblacktext}>Experience its true appearance on you with virtual try-on technology.</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} xl={6} xxl={4}>
                                <div className={styles.numbandtext}>
                                    <h2 className={styles.blueandtext}>5.</h2>
                                    <div className={styles.textandtext}>
                                        <span className={styles.boldblacktext}>Get Your Dream Delivered Home</span>
                                        <span className={styles.smallblacktext} style={{ width: '175px' }}>Experience the joy of having your dream delivered right to your home.</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        </Row>
                        
                </Col>
            </Row>
        </div>
    )
}

export default HowItWorks;