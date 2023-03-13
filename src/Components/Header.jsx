import React from "react";
import { Link, NavLink } from "react-router-dom"
import "../index.css"
import logo from "../assets/Epic_Games_logo.svg"
import Applelogo from "../assets/Apple_logo.svg"

export default function Header() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        textDecorationColor: "#fed5ff",
        color: "white"
    }


    return (
        <header >
            <img src={ Applelogo } width="22px" className="logo-header"></img>
            <nav className="header-nav">
                    <NavLink to="."
                        style={({isActive}) => isActive ? activeStyles : null}
                    >About</NavLink>
                    <NavLink to="games" 
                        style={({isActive}) => isActive ? activeStyles : null}
                    >Games</NavLink>
                    <NavLink to="contact"
                        style={({isActive}) => isActive ? activeStyles : null}
                    >Contact</NavLink>
            </nav>
            <button className="login-button">Login</button>
        </header>
    )
}