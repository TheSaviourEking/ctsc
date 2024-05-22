import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Navbar />
            <div className="content-wrapper">
                <Outlet />
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default MainLayout;
