import { Outlet } from 'react-router-dom';
import ContactList from './ContactList';
import Chat from './Chat';
import LeftBar from './LeftBar';
import './Home.css'

function Home() {
    return (
        <div className="home-container">
            <div className="leftbar-section">
                <LeftBar />
            </div>
            <div className="contact-section">
                <ContactList />
            </div>
            <div className="chat-section">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;