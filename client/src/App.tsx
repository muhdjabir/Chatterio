import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingScreen from "./pages/LandingScreen";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="text-center text-3xl font-montserrat">
                <Routes>
                    <Route path="/" element={<LandingScreen />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
