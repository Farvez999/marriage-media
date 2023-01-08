import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import NavHome from "../Pages/Shared/Navbar/NavHome";

const Main = () => {
    return (
        <div>
            <NavHome></NavHome>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;