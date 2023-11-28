import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap';
import NewAccordion from '../components/NewAccordtion';
import styles from '../../Styles/YourStyle.module.css'
const Faq = () => {
    const items = [
        { title: 'Accordion Item 1', content: 'Content for Accordion Item 1' },
        { title: 'Accordion Item 2', content: 'Content for Accordion Item 2' },
        // Add more items as needed
      ];
    return (
        <div className={styles.faq0}>
            <Row >
                <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px', marginBottom: '12px' }}>
                        <span className={styles.faq1}>Frequestly Asked Questions</span>
                    </div>
                </Col>
                {/* <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                        <h5 className='faq2'>Design with confidence: Expert fashion tips at your finger tips!</h5>
                    </div>
                </Col>
                <Col sm={8}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', width: '75%' }}>
                        <span className='faq3'>Would you like fashion tips while designing? Our experts are ready to assist you.</span>
                    </div>
                </Col> */}
            </Row>
            <Row style={{marginTop:'30px'}}>
                <Col sm={12} className='p-0'>
                    <NewAccordion title={'How Does 3D visualization work?'} content="Our 3D visualization feature allows you to upload 3D models of your designs, which customers can interact with on your website and app."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'Can I customize my website and app?'} content="Yes, you can customize the look and feel of your website and app to match your brand identity."/>
                </Col>
            </Row>
        </div>
    )
}

export default Faq;
