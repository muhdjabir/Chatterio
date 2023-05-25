import { Link } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const LoginForm = () => {
    return (
        <Card className="mx-auto" color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Login
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Email" />
                    <Input type="password" size="lg" label="Password" />
                </div>
                <Button className="mt-6" fullWidth>
                    Login
                </Button>
                <Link to="/register">
                    <Typography
                        color="blue"
                        className="mt-4 text-center font-normal hover:underline"
                    >
                        Don't have an account? Sign Up
                    </Typography>
                </Link>
            </form>
        </Card>
    );
};

export default LoginForm;
