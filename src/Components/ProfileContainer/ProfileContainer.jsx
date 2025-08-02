import react from 'react';
import { Link } from 'react-router-dom';
import contactos from "../../Services/contactos.js";
import ContactoItem from '../ContactoItem/ContactoItem';



const ProfileContainer = () => {
    return (
        <div style={{ width: "100%", border: "1px solid", borderRadius: 8, overflow: "hidden" }}>
            {contactos.map((contacto) => (
                <Link
                    to={`/chat/${contacto.id}`}
                    key={contacto.id}
                >
                    <ContactoItem
                        nombre={contacto.nombre}
                        img={contacto.img}
                        chatHistory={contacto.chatHistory}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ProfileContainer;