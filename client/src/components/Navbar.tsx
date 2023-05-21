import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between justify-items-center items-l h-12 text-black flex-row m-10 font-medium">
            <h1 className="w-full text-3xl font-montserrat">
                <Link to="/">Chatter.io</Link>
            </h1>
            {/* <div className="hidden md:flex">
                <ul className="text-xl hidden md:flex">
                    <li className="p-4">
                        <button className="rounded-xs text-xl bg-grey items-center px-5 ">
                            <Link to="/">Log In</Link>
                        </button>
                    </li>
                    <li className="p-4">
                        <button className="rounded-xs text-xl bg-grey items-center px-5">
                            <Link to="/">Register</Link>
                        </button>
                    </li>
                </ul>
            </div> */}
            <div className="justify-between items-l flex-row gap-10 hidden md:flex">
                <button
                    type="button"
                    className="rounded-xl text-xl bg-grey items-center px-5 "
                >
                    <Link to="/login">Login</Link>
                </button>
                <button
                    type="button"
                    className="rounded-xl text-xl bg-lime items-center px-5 "
                >
                    <Link to="/register">Register</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
