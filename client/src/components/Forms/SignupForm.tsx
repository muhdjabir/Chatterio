import { Link } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Header from "../Header";

const SignupForm = () => {
    return (
        <Card
            className="mx-auto justify-center"
            color="transparent"
            shadow={false}
        >
            <Header />
            <Typography variant="h4" color="blue-gray">
                Create an account
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Username" />
                    <Input size="lg" label="Email" />
                    <Input type="password" size="lg" label="Password" />
                </div>
                <Button className="mt-6 " fullWidth>
                    Signup
                </Button>
                <Link to="/login">
                    <Typography
                        color="blue"
                        className="mt-4 text-center font-normal hover:underline"
                    >
                        Already have an account? Signup
                    </Typography>
                </Link>
            </form>
        </Card>
    );
};

export default SignupForm;
