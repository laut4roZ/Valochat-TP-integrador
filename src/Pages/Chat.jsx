import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';  // agregué Link
import './Chat.css';
import contactos from '../Services/contactos.js';
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsCheckAll } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { GoSearch } from "react-icons/go";

function Chat() {
    const { id } = useParams();
    const navigate = useNavigate();

    const contacto = contactos.find(c => c.id === parseInt(id));

    const [nuevoMensaje, setNuevoMensaje] = useState("");
    const [chatHistory, setChatHistory] = useState(contacto ? contacto.chatHistory : []);

    useEffect(() => {
        if (contacto) {
            setChatHistory(contacto.chatHistory);
        }
    }, [contacto]);

    if (!contacto) return <div>Chat no encontrado</div>;

    const handleVolverHome = () => {
        navigate('/');
    };

    const handleEnviarMensaje = (e) => {
        e.preventDefault();

        if (nuevoMensaje.trim() === "") return;

        const nuevo = {
            id: chatHistory.length + 1,
            sender: "Tú",
            message: nuevoMensaje,
            timestamp: "22:12"
        };

        setChatHistory([...chatHistory, nuevo]);
        setNuevoMensaje("");
    };

    return (
        <div className="chat-main">

            <header className="chat-header">
                <div className="left-header">
                    <button onClick={handleVolverHome} className="back-button">
                        <IoMdArrowRoundBack className="back-icon" />
                    </button>
                        <img src={contacto.img} alt={contacto.nombre} className="imagenepica" />
                    
                    <div className="contact-name-status">
                        <h2>{contacto.nombre}</h2>
                        <span>{contacto.ultimavez}</span>
                    </div>
                </div>
                <div className="right-header">
                    <GoDeviceCameraVideo />
                    <GoSearch className="search-iconheader" />
                    <BsThreeDotsVertical />
                </div>
            </header>
            <div style={{ backgroundImage: `url(${contacto.fondo})` }} className="chat-messages">
                {chatHistory.map(m => (
                    <div
                        key={m.id}
                        className={`mensajechat ${m.sender === "Tú" ? "mensaje-propio" : "mensaje-contacto"}`}
                    >
                        <div className="horamensaje">
                            <p>{m.message}</p>
                            <div className="hora-visto">
                                <span className="hora">{m.timestamp}</span>
                                {m.sender === "Tú" && <BsCheckAll className="check-icon" />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleEnviarMensaje} className="formulario-mensaje" style={{ backgroundImage: `url(${contacto.fondo})` }}>
                <input
                    type="text"
                    placeholder="Escribe un mensaje"
                    value={nuevoMensaje}
                    onChange={(e) => setNuevoMensaje(e.target.value)}
                    className="input-mensaje"
                />

                <button type="submit" className="boton-enviar"><IoMdSend /></button>
            </form>
        </div>
    );
}

export default Chat;