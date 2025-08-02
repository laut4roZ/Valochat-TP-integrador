import React from 'react';
import Logovalochat from "../../assets/images/Logovalochat.png";
import './welcome.css';
const Welcome = () => {
    return (
        <div className='welcome-container'>
            <img src={Logovalochat} alt="Logo de bienvenida" className='welcome-logo' />
            <h2 className='welcome-title'>Bienvenido a ValoChat</h2>
            <p className='welcome-text'>Seleccioná un chat para comenzar a conversar.</p>
        </div>
    );
};

export default Welcome;

