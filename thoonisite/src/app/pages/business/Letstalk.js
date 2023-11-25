import React from 'react';
import '../../../Styles/Business.css';
import Talkarrow from '../../Assets/TalkArrow.svg';
import PrimaryButton from '../components/PrimaryButton';


const Letstalk = () => {
    const handleClick = () => {
        // handle button click logic
        console.log('Button clicked');
    };
    return (
        <div className='letstalkcontainer'>
            <div className='letstalksubcontainer'>
                <img src={Talkarrow} alt='Talkarrow' style={{ width: '40px' }} />
                <span className='meettxt'>WE Can't WAIT TO MEET YOU</span>
                <span className='talktxt'>Let’s Talk</span>
                <PrimaryButton onClick={handleClick} text="Try it free now" color='#23A6F0'/>
            </div>
        </div>
    )
}

export default Letstalk;