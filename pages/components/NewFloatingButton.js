import React from 'react';
import styles from '../../Styles/NewFloatingButton.module.css';
// import WhatsAppButton from '../Assets/WhatsApp.svg';

const NewFloatingButton = ({onclickFunc}) => {
    return (
        <div className={styles["floating-button"]}>
            <a href={onclickFunc} target='_blank' rel='noreferrer'>
                 <img src="./Static/img/Assets/WhatsApp.svg" alt='WhatsAppButton' /> Chat With Us
            </a>
        </div>
    )
}

export default NewFloatingButton;