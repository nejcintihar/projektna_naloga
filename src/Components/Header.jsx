import React from "react";
import { Link, NavLink } from "react-router-dom"
import "../styles/index.css"

export default function Header() {

    const activeStyles = {
        fontWeight: "600",
        textDecoration: "underline",
        textDecorationColor: "#D9DDE2",
        color: "white"
    }

    return (
        <header >
           
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
            <button className="login-button"><Link to="/login">Login</Link></button>
        </header>
    )
}