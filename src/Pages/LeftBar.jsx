
import './LeftBar.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsCheckAll } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { BsChatLeftDots } from "react-icons/bs";
import { BsBrowserEdge } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BsGear } from "react-icons/bs";





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