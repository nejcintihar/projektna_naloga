import React from "react";
import { Link, NavLink } from "react-router-dom"
import "../index.css"
import logo from "../assets/Epic_Games_logo.svg"
import Applelogo from "../assets/Apple_logo.svg"
import { FaGamepad } from "react-icons/fa"

export default function Header() {

    const activeStyles = {
        fontWeight: "600",
        textDecoration: "underline",
        textDecorationColor: "#D9DDE2",
        color: "white"
    }

    return (
        <header >
            <FaGamepad  className="logo-header"/>
            {/* <img src={ FaGamepad } width="22px" className="logo-header"></img> */}
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