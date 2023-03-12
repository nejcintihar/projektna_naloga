import React from "react";
import { Link, NavLink } from "react-router-dom"
import "../index.css"
import logo from "../assets/Epic_Games_logo.svg"
import Applelogo from "../assets/Apple_logo.svg"

export default function Header() {
    return (
        <header>
            <nav className="header-nav">
                <img src={ Applelogo } width="22px" className="logo-header"></img>
                    <NavLink to=".">About</NavLink>
                    <NavLink to="games">Games</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                <button className="login-button">Login</button>
            </nav>
        </header>
    )
}