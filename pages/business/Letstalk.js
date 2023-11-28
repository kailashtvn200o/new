import React from 'react';
import styles from '../../Styles/Business.module.css';
// import Talkarrow from '../../Static/img/Assets/TalkArrow.svg';
import PrimaryButton from '../components/PrimaryButton';


const Letstalk = () => {
    const handleClick = () => {
        // handle button click logic
        console.log('Button clicked');
    };
    return (
        <div className={styles.letstalkcontainer}>
            <div className={styles.letstalksubcontainer}>
                <img src="./public/Static/img/Assets/TalkArrow.svg" alt='Talkarrow' style={{ width: '40px' }} />
                <span className={styles.meettxt}>WE Can't WAIT TO MEET YOU</span>
                <span className={styles.talktxt}>Let’s Talk</span>
                <PrimaryButton onClick={handleClick} text="Try it free now" color='#23A6F0'/>
            </div>
        </div>
    )
}

export default Letstalk;