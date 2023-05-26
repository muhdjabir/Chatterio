import LoginForm from "../components/Forms/LoginForm";
const pic = require("../assets/loginpic.jpg");

const Login = () => {
    return (
        <div className="flex grid-cols-2">
            <img
                src={pic}
                alt=""
                className="hidden md:flex md:w-1/2 lg:w-3/5 h-screen object-cover"
            />
            {/* <Typography variant="h2">Login</Typography> */}
            <LoginForm />
        </div>
    );
};

export default Login;
