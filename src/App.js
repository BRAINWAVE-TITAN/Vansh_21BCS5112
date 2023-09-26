import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginSignupform from './components/loginandsignup.jsx';
import "./styles/loginandsignup.css"
import Nav from './components/nav';
import "./App.css"
import Chatbody from './components/chatbody';
import RingLoader from "react-spinners/RingLoader";
import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])
    return (
        <>
            {
                loading ? <RingLoader
                text="Loader Text"
                animation="clock"
                color="#FFF"
                /> :

                    <Router>
                        <Routes>
                            <Route path="/" element={<Nav />} />
                            <Route path="/nav" element={<LoginSignupform />} />
                            <Route path="/chats" element={<Chatbody />} />

                        </Routes>
                    </Router>
            }
        </>
    )
}

export default App;
