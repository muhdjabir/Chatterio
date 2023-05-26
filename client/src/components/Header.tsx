import { Typography } from "@material-tailwind/react";

const Header = () => {
    const logo = require("../assets/logo.png");
    return (
        <div className="mb-10 justify-center">
            <img src={logo} alt="" className="h-32 w-32 mx-auto" />
            <Typography variant="h-6">Get Connected</Typography>
        </div>
    );
};

export default Header;
