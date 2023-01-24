import React from "react"
import {  Routes, Route } from "react-router-dom";
import App from "./App"
import UserDetails from "./Components/UserDetails"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
    )
}

export default AppRoutes