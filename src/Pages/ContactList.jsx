import React from 'react';
import contactos from '../Services/contactos.js'
import './ContactList.css';
import { IoSearchSharp } from "react-icons/io5";
import { RiChatNewFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import ProfileContainer from '../Components/ProfileContainer.jsx';



function ContactList() {
    return (
        <section className="contact-general">
            <header className='contact-header'>
                <h1 className='header-title'>ValoChat</h1>
                <div className='header-icons'>
                    <RiChatNewFill size={24} />
                    <SlOptionsVertical size={24} />
                </div>
            </header>
            
            <div className='search-container'>
                <input className='search-input' type="text" placeholder="Buscar un chat o iniciar uno nuevo" />
                <IoSearchSharp className='icon-search'/>
            </div>
            <ProfileContainer className="profile-container" />


        </section>
    );
}
export default ContactList;