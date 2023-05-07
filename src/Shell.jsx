import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import SingleTweet from "./Pages/SingleTweet";
import './App.css';
const Shell = () => {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tweet/:id" element={<SingleTweet />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Shell;