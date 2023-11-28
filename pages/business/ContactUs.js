'use client'
import React, { useState } from "react";
import styles from '../../Styles/Business.module.css';
import yours from '../../Styles/YourStyle.module.css'
import { Col, Row } from 'react-bootstrap';
// import ContactUsDone from '../../Assets/ContactUs.svg';
import { ValidationError, useForm } from '@formspree/react';
import Alert from 'react-bootstrap/Alert';
import PrimaryButton from "../components/PrimaryButton";



const ContactUs = () => {
    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);
    const pattern = new RegExp(/^([+]\d{2}[ ])?\d{10}$/);
    const [state, handleSubmit] = useForm('mnqkawqk');
    if (state.succeeded) {
      return <div className={styles.contactcontainer} id='designersadvice'>
      <Row style={{ backgroundColor: '#EDF8FF' }} className={styles['align-items-center']}>
          <Col xs={12} md={6}>
              <div className={styles["contactimage-container1"]}>
                  <img src="./Static/img/Assets/ContactUs.svg" alt="card" className={styles.contact2Img} />
                  <div className={styles.contactoverlay}></div>
              </div>
          </Col>
          <Col xs={12} md={6}>
          <Alert variant="success">Thank you for submitting the details, we will get back to you ASAP!</Alert>
              
          </Col>
      </Row>
  </div>;
    }
    return (
        <div>
            <Row className={yours.faq0}>
            <Col sm={12} >
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px', marginBottom: '12px' }}>
                        <span className={yours.faq1}>Contact Us</span>
                    </div>
                </Col>
            <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                        <h5 className={yours.faq2}>Design with confidence: Expert fashion tips at your finger tips!</h5>
                    </div>
                </Col>
                <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', width: '75%' }}>
                        <span className={yours.faq3}>Would you like fashion tips while designing? Our experts are ready to assist you.</span>
                    </div>
                </Col>
            </Row>
        <div className={styles.contactcontainer} id='designersadvice'>
            
            <Row style={{ backgroundColor: '#EDF8FF' }} >
            
            
                <Col xs={12} md={6}>
                    <div className={styles["contactimage-container1"]}>
                        <img src="./Static/img/Assets/ContactUs.svg" alt="card" className={styles.contact2Img} />
                        <div className={styles.contactoverlay}></div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                
                     <div className={styles.contactinputs} >
                        <input id="name" type="text" name="name" placeholder='Name*' required />
                        <input id="email" type="email" name="email" placeholder='Email*' required />
                        <ValidationError field="email" prefix="Email" errors={state.errors} />
                        <input  maxlength = "10" id="number" type="number" name="number" placeholder='Contact' onChange={(e) => {
                    setmobile(e.target.value);
                    if (!pattern.test(e.target.value))
                        setIsError(true);
                    else setIsError(false);
                }} 
                 
                /> <small className={styles["text-danger d-block text-start position-relative"]} style={{top:'-10px'}}>{isError ? "Please enter a valid 10 digit number" : ''}</small>
                        <textarea className={styles.fonttextarea} id="message" rows="4" cols="50" name="message" placeholder='Message' ></textarea>                        
                    </div>
                    <PrimaryButton className={styles['btn btn-primary']} type="submit" disabled={state.submitting} text={'Submit'} color={'#23A6F0'} />
               
                </form>
                   
                    
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default ContactUs;