// 'use client'
import React, { useState } from 'react';
import styles from '../../Styles/Alert.module.css';
// import Close from '../Assets/Close - X.svg';

const Alert = ({ message, color }) => {
    const [show, setShow] = useState(true);

    return (
        <>{show ?
            <div className={styles['new-alert']} style={{ backgroundColor: color }}>
                {/* <span className="closebtn" onClick={() => setShow(false)}>
                    &times;
                </span> */}
                <div className={styles.alertmsgcontainer}>
                    <div className={styles.alertsubcontainer1}>
                        <span className={styles.alertmsg}>{message}</span>
                    </div>
                    <div className={styles.alertsubcontainer2}>
                        <span onClick={() => setShow(false)} style={{ cursor: 'pointer' }}>
                            <img src="./Static/img/Assets/Close - X.svg" alt='close'/>
                        </span>
                    </div>
                </div>
            </div>
            : null}
        </>
    );
};

export default Alert;
