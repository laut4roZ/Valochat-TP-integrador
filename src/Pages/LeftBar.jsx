import { BsChatLeftDots } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BsBrowserEdge } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import './Leftbar.css';




export default function LeftBar() {
    return <div className="leftbaricons">
        <div className="">
            <BsChatLeftDots className="iconsize" />
        </div>
        <div className="">
            <BsBrowserEdge className="iconsize" />
        </div>
        <div className="">
            <IoIosPeople className="iconsize" />
        </div>
        <div className="abajo">
            <BsGear className="iconsize" />
        </div>
    </div>;
}