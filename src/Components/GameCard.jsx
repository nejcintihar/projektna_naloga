import React from "react"
import "../styles/index.css"
import { Link } from "react-router-dom"


export default function GameCard(props) {
    return (
        <div className="game-holder-main">
            <div className="body-of-game">
                <h1 className="game-name">{props.name}</h1>
                    <div className="info-buttons"> 
                        {props.play ? <Link className="play-now" to={props.path}>play game</Link> : <span class="no-trial">no demo</span>}
                        <p className="game-price">{props.price}$</p>
                    </div>
            </div>
            <div className={`${props.basket ? "remove" : "add"}-from-basket`}
                onClick={props.toggle}>
                {props.basket ? "Remove from basket" : "Add to basket"}
            </div>
        </div>
    )
}