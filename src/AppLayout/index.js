import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout(props) {
    return (
        <div>
            <Navbar /> 
            {props.children} 
            <Footer /> 
        </div>
    );
}
