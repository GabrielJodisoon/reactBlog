import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";


//Pages
import About from 'pages/About';
import Contact from 'pages/Contact';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Post from 'pages/Post';
import Profile from 'pages/Profile';
import Search from 'pages/Search';
import Home from 'pages/Home';


const Paths = () => {

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/search" element={<Search/>}/>

                    <Route path="/post/:idPost" element={<Post/>}/>
                    
                    <Route path="/about" element={<About/>}/>

                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        
        
        
        </>
    )
}

export default Paths;