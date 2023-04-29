import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../components/layout/NavBar";
import Routes from "./Routes";
import GridExample from "../components/layout/GridExample";

export default function App() {
    return (
        <>
            <div id="navbar">
                <NavBar />
            </div>
            <div>
                <Routes />
            </div>
            <div>
                <GridExample />
            </div>
        </>
    );
}
