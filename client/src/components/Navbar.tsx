import { Link } from "react-router-dom";
import { useState } from "react";
import { CloseOutlined, MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const logo = require("../assets/logo.png");

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);

    document.body.style.setProperty("background-color", "#E2EAF1");

    const handleNav = () => {
        setNav(!nav);
    };

    const fetchTodo = async () => {
        const response = await fetch("/todo");
        const json = await response.json();
        if (response.ok) {
            console.log(JSON.stringify(json));
        }
    };

    return (
        <header className="flex justify-between h-12 text-black flex-row font-medium bg-grey">
            <img src={logo} alt="asd" />
            <h1 className="w-full text-3xl font-montserrat pt-2 sm:text-center md:text-left content-around">
                <Link to="/">Chatter.io</Link>
            </h1>
            <div className="justify-between items-l flex-row gap-10 hidden md:flex">
                <button
                    type="button"
                    className="rounded-lg text-xl bg-grey items-center px-5 border"
                    onClick={fetchTodo}
                >
                    <Link to="/">Login</Link>
                </button>
                <button
                    type="button"
                    className="rounded-lg text-xl bg-pink items-center px-5 mr-5 border"
                >
                    <Link to="/register">Register</Link>
                </button>
            </div>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <IconButton>
                        <CloseOutlined fontSize="large" />
                    </IconButton>
                ) : (
                    <IconButton>
                        <MenuOutlined fontSize="large" />
                    </IconButton>
                )}
            </div>
            <ul
                className={
                    nav
                        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-grey ease-in-out duration-500"
                        : "ease-in-out duration-500 fixed left-[-100%] font-poppins "
                }
            >
                <div className="flex">
                    <div className="flex-row m-5">
                        <h1 className="w-full text-3xl font-montserrat ml-4">
                            Chatter.io
                        </h1>
                    </div>
                </div>
                <li className="p-4 text-2xl" onClick={handleNav}>
                    <Link to="/">Login</Link>
                </li>
                <li className="p-4 text-2xl" onClick={handleNav}>
                    <Link to="/">Register</Link>
                </li>
            </ul>
        </header>
    );
};

export default Navbar;
