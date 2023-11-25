import React from 'react';
import '../../Styles/Business.module.css';
import OurSaas from './OurSaas';
import Features from './Features';
import Benefits from './Benefits';
import Faq from './Faq';
// import Letstalk from './Letstalk';
import ContactUs from './ContactUs';

const Business = () => {
  return (
    <div>
      <OurSaas />
      <Features />
      <div className='mb-150'>
        <Benefits />
      </div>
      <div className='mb-150'>
        <Faq />
      </div>
      <div className='mb-150 d-none'>
        <ContactUs />
      </div>
    </div>
  )
}

export default Business;