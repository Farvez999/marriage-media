import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import NavHome from "../Pages/Shared/Navbar/NavHome";

const Main = () => {
    return (
        <div>
            <div className="flex justify-end mr-6 p-2 gap-2 bg-gray-300">
                <div className="bg-white text-gray-500">
                    <p className="mx-2">+880 1776711862</p>
                </div>
                <div className="bg-white text-gray-500">
                    <p className="mx-2">+880 1640184044</p>
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