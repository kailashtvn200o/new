'use client'
import React, { useState } from "react";
import '../../Styles/Business.module.css';
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
      return <div className='contactcontainer' id='designersadvice'>
      <Row style={{ backgroundColor: '#EDF8FF' }} className='align-items-center'>
          <Col xs={12} md={6}>
              <div className="contactimage-container1">
                  <img src="./Static/img/Assets/ContactUs.svg" alt="card" className="contact2Img" />
                  <div className="contactoverlay"></div>
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
            <Row className="faq0 m-0">
            <Col sm={12} >
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px', marginBottom: '12px' }}>
                        <span className='faq1'>Contact Us</span>
                    </div>
                </Col>
            <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '12px' }}>
                        <h5 className='faq2'>Design with confidence: Expert fashion tips at your finger tips!</h5>
                    </div>
                </Col>
                <Col sm={12}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', width: '75%' }}>
                        <span className='faq3'>Would you like fashion tips while designing? Our experts are ready to assist you.</span>
                    </div>
                </Col>
            </Row>
        <div className='contactcontainer' id='designersadvice'>
            
            <Row style={{ backgroundColor: '#EDF8FF' }} >
            
            
                <Col xs={12} md={6}>
                    <div className="contactimage-container1">
                        <img src="./Static/img/Assets/ContactUs.svg" alt="card" className="contact2Img" />
                        <div className="contactoverlay"></div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                <form onSubmit={handleSubmit} className='contactForm'>
                
                     <div className='contactinputs' >
                        <input id="name" type="text" name="name" placeholder='Name*' required />
                        <input id="email" type="email" name="email" placeholder='Email*' required />
                        <ValidationError field="email" prefix="Email" errors={state.errors} />
                        <input  maxlength = "10" id="number" type="number" name="number" placeholder='Contact' onChange={(e) => {
                    setmobile(e.target.value);
                    if (!pattern.test(e.target.value))
                        setIsError(true);
                    else setIsError(false);
                }} 
                 
                /> <small className="text-danger d-block text-start position-relative" style={{top:'-10px'}}>{isError ? "Please enter a valid 10 digit number" : ''}</small>
                        <textarea className='fonttextarea' id="message" rows="4" cols="50" name="message" placeholder='Message' ></textarea>                        
                    </div>
                    <PrimaryButton className='btn btn-primary' type="submit" disabled={state.submitting} text={'Submit'} color={'#23A6F0'} />
               
                </form>
                   
                    
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default ContactUs;