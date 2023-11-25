import React from 'react';
import '../../Styles/Business.module.css';
import { Col, Row } from 'react-bootstrap';
// import Benefits1 from '../../Assets/Benfits1.svg';

const Benefits = () => {
    return (
        <div className='benefitcontainer'>
            <div style={{ width: '100%' }}>
                <Row>
                    <Col xs={12} md={4}>
                        <div className='benefitrow1'>
                            <h5 className='benefitrow1heading'>
                                Benefits for Fashion Designers and Boutiques
                            </h5>
                            <span className='benefitrow1subheading'>
                                Problems trying to resolve the conflict between the
                                two major realms of Classical physics: Newtonian mechanics
                            </span>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='benefitrow2'>
                            <img src="./Static/img/Assets/Benfits1.svg" alt='Benefits' className='benefitrow2Img' />
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='benefitrow3'>
                            <div className='benefitrow3container' style={{marginBottom:'22px'}}>
                                <h5 className='benefitrow3heading'>
                                    Choose the item you wish to personalize
                                </h5>
                                <span className='benefitrow3subheading'>
                                    Spend less time on administrative tasks and more time on your creative pursuits.
                                </span>
                            </div>
                            <div className='benefitrow3container'>
                                <h5 className='benefitrow3heading'>
                                    Pick the Material
                                </h5>
                                <span className='benefitrow3subheading'>
                                    Reach a global audience and grow your customer base.
                                </span>
                            </div>
                            <div className='benefitrow3container'>
                                <span className='benefitrow3heading'>
                                    Provide Sizing Details
                                </span>
                                <span className='benefitrow3subheading'>
                                    Provide an immersive shopping experience that sets you apart from the competition.
                                </span>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Benefits;