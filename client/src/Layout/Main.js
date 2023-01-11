import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import Facebook from "@mui/icons-material/Facebook";

const Main = () => {
    return (
        <div>
            <div className="flex justify-between p-2 gap-2 bg-white">
                <div className="flex">
                    <div className="bg-white text-gray-500">
                        <a className="link link-hover text-black"><EmailOutlinedIcon /> marriage@media.com</a>
                    </div>
                    <div className="bg-white text-gray-500">
                        <p className="mx-2 text-black"><Facebook></Facebook></p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-white text-gray-500 mr-2">
                        <a className="link link-hover text-black" href='www.google.com'><CallIcon /> +880 1776711862</a>
                    </div>
                    <div className="bg-white text-gray-500">
                        <a className="link link-hover text-black"><WhatsAppIcon /> +880 1776711862</a>
                    </div>
                </div>
            </div>
            {/* <NavHome></NavHome> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;