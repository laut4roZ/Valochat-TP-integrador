import react from 'react';
import contactos from '../Services/contactos.js';
import './ContactoItem.css';

const ContactoItem = ({ nombre, img, chatHistory }) => {
    const ultimoMensaje = chatHistory[chatHistory.length - 1];

    return (
        <div className="container">
            <div className="imageWrapper">
                <img src={img} alt={nombre} className="image" />
            </div>

            <div className="info">
                <div className="nombre">{nombre}</div>
                <div className="mensaje">{ultimoMensaje?.message}</div>
            </div>

            <div className="timestamp">{ultimoMensaje?.timestamp}</div>
        </div>
    );
};

export default ContactoItem;