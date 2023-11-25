import React from 'react';
import '../../Styles/AboutUs.module.css';

const WeDo = () => {
    return (
        <div>
            <div className='wedocontainer'>
                <span className='wedoBoldText'>WHAT DO WE DO!</span>
                <span className='wedoSmallText'>We have something for everyone</span>
                <div className='videoControls'>
                    <video src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' controls className='videoplayerControls' />
                </div>
            </div>
        </div>
    )
}

export default WeDo;