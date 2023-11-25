import React from 'react';

const PrimaryButton = ({ onClick, text, color,width,minWidth }) => {
    const styles = {
        button: {
            backgroundColor: color,
            border: 'none',
            color: 'white',
            padding: '15px 40px 15px 40px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '14px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '5px',
            maxWidth: width ? width : '191px',
            minWidth: minWidth ? minWidth : '191px'
        },
    };
    return (
        <button onClick={onClick} style={styles.button}>
            {text}
        </button>
    );
};



export default PrimaryButton;
