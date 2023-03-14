import React from "react";
import CheckoutItem from "./CheckoutItem"
import gamesData from "../gamesData"
import GameCard from "./GameCard"

export default function Games() {

    const [games, setGames] = React.useState(gamesData)

    function toggle(id) {
        setGames(prevGames => {
            return prevGames.map((game) => {
                return game.id === id ? {...game, basket: !game.basket} : game
            })
        })
    }

    const basketItems = games.map(game => {
        if(game.basket === true) {
            return <CheckoutItem 
                name={game.name}
                price={game.price}
            />
        } 
    }
    )

    const totalItems = []
    games.map(game => game.basket ? totalItems.push(game.price) : "")

    const gameElements = games.map(game => {
       return <GameCard 
            name={game.name}
            price={game.price}
            basket={game.basket}
            play={game.play}
            id={game.id}
            key={game.key}
            toggle={() => toggle(game.id)}
            path={game.path}
       />
    })

    const sum = totalItems.reduce((partialSum, a) => partialSum + a, 0);

    return (
        <div className="games-wrapper-main">
            <div className="checkout-wrapper">
            <h1>Items in basket</h1>
                <div className="checkout-list">
                    {basketItems}
                </div>
                <h1 className="total-items-style">{totalItems.length} Items</h1>
                <h1 className="price-checkout">Price: {sum}$</h1>
                <div className="place-order-button">Place your order</div>
            </div>
                <div className="games-wrapper">
                    <h1 className="games-title">Games</h1>
                    <div className="games-container">{gameElements}</div>
            </div>
        </div>
    )
}