import React from 'react'
import StyleShine from './StyleShine';
import HappyCustomers from './HappyCustomers';
import WeDo from './WeDo';
import OurMission from './OurMission';
import Container from '../../components/container';

const Aboutus = () => {
  return (
    <div>
      <Container>
        <StyleShine/>
         {/* <HappyCustomers/> */}
        <WeDo/>
        <OurMission/>
        </Container >
    </div>
  )
}

export default Aboutus;