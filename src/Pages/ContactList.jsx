import React from 'react';
import contactos from '../Services/contactos.js'
import './ContactList.css';
import ProfileContainer from '../Components/ProfileContainer/ProfileContainer.jsx';
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsCheckAll } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";





function ContactList() {
    return (
        <section className="contact-general">
            <header className='contact-header'>
                <h1 className='header-title'>ValoChat</h1>
                <div className='header-icons'>
                    <IoMdArrowRoundBack/>
                    <IoMdSend />
                </div>
            </header>

            <div className='search-container'>
                <input className='search-input' type="text" placeholder="Buscar un chat o iniciar uno nuevo" />
                <IoSearchSharp className='icon-search' />
            </div>
            <ProfileContainer className="profile-container" />


        </section>
    );
}
export default ContactList;