import React from 'react';
import styles from  '../../Styles/AboutUs.module.css';

const WeDo = () => {
    return (
        <div>
            <div className={styles.wedocontainer}>
                <span className={styles.wedoBoldText}>WHAT DO WE DO!</span>
                <span className={styles.wedoSmallText}>We have something for everyone</span>
                <div className={styles.videoControls}>
                    <video src='https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' controls className={styles.videoplayerControls} />
                </div>
            </div>
        </div>
    )
}

export default WeDo;