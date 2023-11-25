import React from 'react'
import styles from '../../Styles/AboutUs.module.css';
// import Missiongirl from '../../Assets/MissionGirl1.svg'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Container } from 'react-bootstrap';
const OurMission = () => {
    return (
        <div className=''>
            <div className={styles.ourmission1}>
                <div className={styles.ourmissionmenus}>
                    <h2 className={styles.missionblue}>Our Mission</h2>
                    <h3 className={styles.missionsmall}>Curated Selection</h3>
                    <h3 className={styles.missionsmall}>Customer Satisfaction</h3>
                    <h3 className={styles.missionsmall}>Community and Inspiration</h3>
                    <h3 className={styles.missionsmall}>Connect with Us</h3>

                </div>
            </div>
            <div className={styles.vertiline} />
            <div className={styles.ourmission3}>
                <div className={styles.missionrightContainer}>
                    <span className={styles.ourmissionright}>At Thooni, our mission is to provide you with a seamless online shopping
                        experience that combines convenience, affordability, and style. We believe that
                        fashion and lifestyle choices should be accessible to everyone, regardless of
                        their location or budget. That's why we strive to offer a wide range of
                        products that cater to diverse tastes, ensuring there's something for everyone.
                    </span>
                </div>
                <div className={styles.imageposi}>
                    <img alt='' src="./Static/img/Assets/MissionGirl1.svg" className='imagegirl' />
                </div>
                <div className={styles.imageposi2}>
                    <img alt='' src="./Static/img/Assets/MissionGirl1.svg" className='imagegirl2' />
                </div>
            </div>


            <div className='text-start tab-container'>
               
               
                <Container className={styles.positionrelative}>
                <div className={styles.imageposi}>
                    <img alt='' src="./Static/img/Assets/MissionGirl1.svg" className={styles.imagegirl} />
                </div>
                <div className={styles.imageposi2}>
                    <img alt='' src="./Static/img/Assets/MissionGirl1.svg" className={styles.imagegirl2} />
                </div>
                   <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    
                    <Col lg={4}>
                    <Nav variant="pills">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Our Mission</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Curated Selection</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Customer Satisfaction</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fourth">Community and Inspiration</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="fifth">Connect with Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col lg={7}>
                    <Tab.Content className={styles.ourmissionright}>
                        <Tab.Pane eventKey="first">At Thooni, our mission is to provide you with a seamless online shopping experience that combines convenience, affordability, and style. We believe that fashion and lifestyle choices should be accessible to everyone, regardless of their location or budget. That's why we strive to offer a wide range of products that cater to diverse tastes, ensuring there's something for everyone.</Tab.Pane>
                        <Tab.Pane eventKey="second">We understand that finding the perfect fashion and lifestyle items can be overwhelming. That's why our team of experienced buyers meticulously handpick each product, taking into consideration the latest trends, quality, and value for money. From trendy clothing and accessories to home decor and personal care essentials, every item on Thooni reflects our commitment to offering you the best.
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">Your satisfaction is our top priority. We go the extra mile to ensure that your shopping experience on Thooni is enjoyable and hassle-free. Our user-friendly website is designed to make navigation and product discovery effortless, and our secure payment system ensures that your transactions are safe and protected. If you ever have any questions or need assistance, our dedicated customer support team is always ready to help. We value your feedback and continuously strive to improve our services based on your suggestions.
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">Thooni is not just an online store; it's a community of fashion and lifestyle enthusiasts. We believe that style is a form of self-expression and individuality. That's why we aim to inspire and empower you to embrace your unique identity through our diverse range of products and style content.

                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">Stay connected with us to stay updated on the latest trends, promotion, and exciting offers. Follow us on social media platforms, subscribe to our newsletter, and join our thriving community of like-minded individuals who share a passion for fashion and lifestyle.

                        </Tab.Pane>

                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
    </Container>
        </div>
        </div>
  
    )
}

export default OurMission;