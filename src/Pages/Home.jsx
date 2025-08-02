import { Outlet, useParams } from 'react-router-dom';
import ContactList from './ContactList';
import Chat from './Chat';
import LeftBar from './LeftBar';
import './Home.css'
function Home() {
    const { id } = useParams(); // si hay ID, hay chat abierto
    const isChatOpen = Boolean(id);

    return (
        <div className={`home-container ${isChatOpen ? 'chat-open' : ''}`}>
            <div className="leftbar-section leftbarmobile">
                <LeftBar />
            </div>
            <div className="contact-section contactmobile">
                <ContactList />
            </div>
            <div className="chat-section chatmobile">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;