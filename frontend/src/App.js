import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

// Public Views
import Home from "./components/public/home";
import Contact from "./components/public/contact";
import Signup from "./components/public/signup";
import Login from "./components/public/login";
import Error from "./components/public/error"
import About from "./components/public/about"
import Terms from "./components/public/terms"
import Users from "./components/public/users"
import Header from './components/header';
import Footer from './components/footer';

// Protected Views
import Rooms from "./components/protected/rooms"
import {useEffect} from "react";

function App() {

    useEffect(() => {

        assignClientId()

    }, []);

    // Assigns new client on new connection
    const assignClientId = () => {
        if (localStorage.getItem("clientId") != null) {
            console.log("Client ID found!");
        } else {
            console.log("Client ID not found!");
            let newClientId = Math.floor(new Date().getTime() / 1000);
            localStorage.setItem("clientId", newClientId);
            console.log("Set Client ID to " + newClientId);
        }
    }


    // Setup routes for website
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/rooms" element={<Rooms/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
