import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <div className="text-center">
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
