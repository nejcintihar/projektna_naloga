import React from "react";

export default function CheckoutItem(props) {
    return (
        <div className="checkout-container">
            <h2 className="game-name-style">Item: {props.name}</h2>
            <p className="game-price-style">Price: <span className="bolded-price">{props.price}$</span></p>
        </div>
    )
}