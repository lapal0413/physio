import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react";
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter= ({isLoggedIn}) =>{
    // const [isLoggedIn,setisLoggedIn] = useState(false);
    return(
        <Router>
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path = "/" element={<Home/>}/>
                </>
                ):( 
                <Route exact path = "/" element={<Auth/>}/>)
                }
            </Routes>
        </Router>
    );
};
export default AppRouter;

