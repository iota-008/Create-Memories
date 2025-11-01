import Register from "./componets/UserForm/Register";
import { useSelector } from "react-redux";
import Home from "./componets/Home/Home";
import React from "react";
import Login from "./componets/UserForm/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import ResetPassword from "./componets/UserForm/ResetPassword";

const App = () => {
    const user = useSelector((state) => state.users);
    const token = localStorage.getItem("auth-token");
    const isLoggedIn = user.length && user[0] != null && token != null;
    return (
        <Routes>
            {/* Home is accessible to both authenticated and unauthenticated users (read-only when unauthenticated) */}
            <Route path='/' element={<Home />} />
            {isLoggedIn ? (
                <Route path='*' element={<Navigate to='/' replace />} />
            ) : (
                <>
                    <Route path='/auth/login' element={<Login />} />
                    <Route path='/auth/register' element={<Register />} />
                    <Route path='/auth/reset' element={<ResetPassword />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </>
            )}
        </Routes>
    );
};
export default App;
