import React from 'react'
import YourStyle from '../home/YourStyle';
import HowItWorks from './HowItWorks';
import Download from './Download';
import BeStylish from './BeStylish';
import ComingSoon from './ComingSoon';
import CustomerSays from './CustomerSays';
import Faq from './Faq';
import ContactUs from '../business/ContactUs';
import NewFloatingButton from '../components/NewFloatingButton';

const Home = () => {
  return (
    <div>
      <div className='mb-150'>
        <YourStyle />
      </div>
      {/* <div className='mb-150'>
        <HowItWorks />
      </div>
      <div className='mb-150' id="download">
        <Download />
      </div>
      <div className='mb-150'>
        <BeStylish />
      </div>
      <div className='mb-150'>
        <ComingSoon />
      </div>
      <div className='mb-150'>
        <CustomerSays />
      </div>
      <div className='' id='faq'>
               <Faq />
      </div>
      <div className='mb-150' id='designersadvice'>
        
        <ContactUs />
      </div> */}
    </div>
  )
}

export default Home;