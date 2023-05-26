import SignupForm from "../components/Forms/SignupForm";
const pic = require("../assets/loginpic.jpg");

const Signup = () => {
    return (
        <div className="flex grid-cols-2">
            <img
                src={pic}
                alt=""
                className="hidden md:flex md:w-1/2 lg:w-3/5 h-screen object-cover"
            />
            <SignupForm />
        </div>
    );
};

export default Signup;
