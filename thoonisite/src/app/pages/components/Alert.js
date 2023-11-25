// 'use client'
import React, { useState } from 'react';
import '../../Styles/Alert.module.css';
// import Close from '../Assets/Close - X.svg';

const Alert = ({ message, color }) => {
    const [show, setShow] = useState(true);

    return (
        <>{show ?
            <div className="new-alert" style={{ backgroundColor: color }}>
                {/* <span className="closebtn" onClick={() => setShow(false)}>
                    &times;
                </span> */}
                <div className="alertmsgcontainer">
                    <div className="alertsubcontainer1">
                        <span className='alertmsg'>{message}</span>
                    </div>
                    <div className="alertsubcontainer2">
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
