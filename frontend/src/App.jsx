import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/layout/NavBar"

export default function App() {
    return (
        <>
            <div id="navbar">
                <NavBar />
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
