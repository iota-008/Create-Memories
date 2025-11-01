import Register from "./componets/UserForm/Register";
import { useSelector } from "react-redux";
import Home from "./componets/Home/Home";
import React from "react";
import Login from "./componets/UserForm/Login";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ResetPassword from "./componets/UserForm/ResetPassword";

const App = () => {
    const user = useSelector((state) => state.users);
    const token = localStorage.getItem("auth-token");
    const isLoggedIn = user.length && user[0] != null && token != null;
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const sharedId = params.get('post');
    return (
        <Routes>
            {isLoggedIn ? (
                <>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </>
            ) : (
                <>
                    {/* Allow public access to Home ONLY when a shared post id is present */}
                    <Route path='/' element={sharedId ? <Home /> : <Navigate to='/auth/login' replace />} />
                    <Route path='/auth/login' element={<Login />} />
                    <Route path='/auth/register' element={<Register />} />
                    <Route path='/auth/reset' element={<ResetPassword />} />
                    <Route path='*' element={<Navigate to='/auth/login' replace />} />
                </>
            )}
        </Routes>
    );
};
export default App;
