import React from 'react';
// import PhoneHand from '../../Assets/PhoneHand.svg'
// import GetItOn1 from '../../Assets/Foot1.png';
// import GetItOn2 from '../../Assets/Foot2.png';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import '../../Styles/YourStyle.module.css';
const Download = () => {
    return (
        <div className='downloadContainer'>
            <div className='downloadleftContainer'>
                <div className='downloadText'>
                    <h5 className='downloadbluetxt'>Red Carpet Style on a Budget, Get It with Our App!</h5>
                    <h2 className='downloadblacktxt'>No need for lots of money or your own stylist to get a fancy, red carpet style. Just use our app.
                    </h2>
                    <div className='downloadIcons'>
                    <Link href={'https://play.google.com/store/apps/details?id=com.thooni.thooni'} target='_blank'>
                                <img alt='GetItOn' src="./Static/img/Assets/Foot2.png" style={{ width: '140px' }} />
                            </Link>
                            <Link href={'https://apps.apple.com/in/app/thooni/id6452012641'} target='_blank'>
                                <img alt='GetItOn' src="./Static/img/Assets/Foot1.png" style={{ width: '140px' }} />
                            </Link>
                    </div>
                    
                </div>
            </div>
            <div className='downloadrightContainer'>
                <img src="./Static/img/Assets/PhoneHand.svg" alt='PhoneHand' className='phonestyle' />
            </div>
        </div>
    )
}

export default Download;