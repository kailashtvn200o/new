import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap';
import NewAccordion from '../components/NewAccordtion';
import '../../Styles/YourStyle.module.css';

const Faq = () => {
    const items = [
        { title: 'Accordion Item 1', content: 'Content for Accordion Item 1' },
        { title: 'Accordion Item 2', content: 'Content for Accordion Item 2' },
        // Add more items as needed
      ];
    return (
        <div className='faq0' id="faq">
            <Row >
                <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px', marginBottom:'12px' }}>
                        <span className='faq1'>FAQ</span>
                    </div>
                </Col>
                {/* <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                        <h5 className='faq2' >Design with confidence: Expert fashion tips at your finger tips!</h5>
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
                    <NewAccordion title={'How does the custom dress design process work?'} content="Our custom dress design process is user-friendly. You can begin by selecting a dress style from our collection. Then, use our intuitive design app to pick colors, patterns, and any additional personalization options. You can choose from the default sizes or provide your measurements to ensure a perfect fit. Once you're satisfied with your design, simply place your order, and we'll take it from there."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'What is the cost of a custom dress?'} content="The cost of a custom dress can vary based on factors such as dress style, fabric choice, and additional customizations."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'How do I use the design app?'} content="Using our design app is simple. After selecting a dress style, explore various design options for colors, patterns, and customizations. The app will guide you through the design process step by step. If you have any questions or need assistance, our customer support team is ready to help."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'What fabrics are available for custom dresses?'} content="We offer a wide selection of high-quality fabrics. We constantly strive to expand the collection of fabrics, colors and patterns."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'Can I provide my own design or inspiration for the dress?'} content="Absolutely, you can share your own design ideas or request specific alterations to existing designs. We can accommodate it based on the doability factor. Our design app is designed to accommodate customization, and our team is ready to collaborate with you to bring your vision to life."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'What body measurements are required?'} content="You can find a comprehensive measurement guide on our website to help you choose from default sizes or you can provide specific measurements."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'How long does it take to receive my custom dress?'} content="Typically you can expect your custom dress to arrive within 20 days from the date of order. Please note that this is an estimate, and we strive to deliver orders as swiftly as possible. Production and delivery times may vary based on the complexity of your custom dress and your location."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'What is your return and exchange policy?'} content="Please refer to our comprehensive policy on our website, which outlines the procedures for returns and quality-related issues."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'Do you offer international shipping?'} content="Yes, we do offer international shipping. Please be aware that international shipping may involve additional costs and longer delivery times."/>
                </Col>
            </Row>
            <Row >
                <Col sm={12} p={0} className='p-0'>
                    <NewAccordion title={'Is my personal information secure?'} content="Yes, your personal information is secure. We take data security and privacy seriously. We employ industry-standard security measures to safeguard your personal and payment information."/>
                </Col>
            </Row>
        </div>
    )
}

export default Faq;