import React from "react";

export default function CheckoutItem(props) {
    return (
        <div>
            <h2>Game: {props.name}</h2>
            <p>Price: {props.price}$</p>
        </div>
    )
}