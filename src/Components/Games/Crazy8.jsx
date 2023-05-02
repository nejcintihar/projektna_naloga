import "../../styles/crazy8.css";
import React, {
  useState,
  useEffect,
} from "react";

const deck = [
  { value: "A", suit: "diamonds" },
  { value: "2", suit: "diamonds" },
  { value: "3", suit: "diamonds" },
  { value: "4", suit: "diamonds" },
  { value: "5", suit: "diamonds" },
  { value: "6", suit: "diamonds" },
  { value: "7", suit: "diamonds" },
  { value: "8", suit: "diamonds" },
  { value: "9", suit: "diamonds" },
  { value: "10", suit: "diamonds" },
  { value: "P", suit: "diamonds" },
  { value: "Q", suit: "diamonds" },
  { value: "K", suit: "diamonds" },
  { value: "A", suit: "clubs" },
  { value: "2", suit: "clubs" },
  { value: "3", suit: "clubs" },
  { value: "4", suit: "clubs" },
  { value: "5", suit: "clubs" },
  { value: "6", suit: "clubs" },
  { value: "7", suit: "clubs" },
  { value: "8", suit: "clubs" },
  { value: "9", suit: "clubs" },
  { value: "10", suit: "clubs" },
  { value: "P", suit: "clubs" },
  { value: "Q", suit: "clubs" },
  { value: "K", suit: "clubs" },
  { value: "A", suit: "hearts" },
  { value: "2", suit: "hearts" },
  { value: "3", suit: "hearts" },
  { value: "4", suit: "hearts" },
  { value: "5", suit: "hearts" },
  { value: "6", suit: "hearts" },
  { value: "7", suit: "hearts" },
  { value: "8", suit: "hearts" },
  { value: "9", suit: "hearts" },
  { value: "10", suit: "hearts" },
  { value: "P", suit: "hearts" },
  { value: "Q", suit: "hearts" },
  { value: "K", suit: "hearts" },
  { value: "A", suit: "spades" },
  { value: "2", suit: "spades" },
  { value: "3", suit: "spades" },
  { value: "4", suit: "spades" },
  { value: "5", suit: "spades" },
  { value: "6", suit: "spades" },
  { value: "7", suit: "spades" },
  { value: "8", suit: "spades" },
  { value: "9", suit: "spades" },
  { value: "10", suit: "spades" },
  { value: "P", suit: "spades" },
  { value: "Q", suit: "spades" },
  { value: "K", suit: "spades" },
];

function shuffleDeck() {
  for (
    let i = deck.length - 1;
    i > 0;
    i--
  ) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );
    [deck[i], deck[j]] = [
      deck[j],
      deck[i],
    ];
  }
}

function getSuitSymbol(suit) {
  switch (suit) {
    case "hearts":
      return "♥";
    case "diamonds":
      return "♦";
    case "clubs":
      return "♣";
    case "spades":
      return "♠";
    default:
      return "";
  }
}

function Game() {
  const [discardPile, setDiscardPile] =
    useState([]);
  const [playerHand, setPlayerHand] =
    useState([]);
  const [enemyHand, setEnemyHand] =
    useState([]);

  const [player_turn, setPlayerTurn] =
    useState("Your");

  const [draw_limit, setDrawLimit] =
    useState(0);

  useEffect(() => {
    startGame();
  }, []);

  function dealCards() {
    let newPlayerHand = [];
    let newEnemyHand = [];
    for (let i = 0; i < 10; i++) {
      let card = deck.shift();
      let newCard = {
        value: card.value,
        suit: card.suit,
        onClick: (card) =>
          playCard(card),
      };
      if (i < 5) {
        newPlayerHand.push(newCard);
      } else {
        newEnemyHand.push(newCard);
      }
    }
    setPlayerHand(newPlayerHand);
    setEnemyHand(newEnemyHand);
  }

  function discardPileDeck() {
    let card = deck.shift();
    let newCard = {
      value: card.value,
      suit: card.suit,
      onClick: (card) => playCard(card),
    };
    setDiscardPile([newCard]);
  }

  function startGame() {
    shuffleDeck();
    dealCards();
    discardPileDeck();
  }

  function playCard(card) {
    setDiscardPile((discardPile) => [
      ...discardPile,
      card,
    ]);
    setPlayerHand((hand) =>
      hand.filter((c) => c !== card)
    );

    setEnemyHand((hand) =>
      hand.filter((c) => c !== card)
    );
  }

  function playCard_player(card) {
    if (player_turn === "Your") {
      setPlayerTurn("Opponent");
      setDiscardPile((discardPile) => [
        ...discardPile,
        card,
      ]);
      setPlayerHand((hand) =>
        hand.filter((c) => c !== card)
      );
      setDrawLimit(0);
    } else {
      alert("Wait for Opponent's turn");
    }
  }

  function playCard_enemy(card) {
    if (player_turn === "Opponent") {
      setPlayerTurn("Your");
      setDiscardPile((discardPile) => [
        ...discardPile,
        card,
      ]);
      setEnemyHand((hand) =>
        hand.filter((c) => c !== card)
      );
      setDrawLimit(0);
    } else {
      alert("Wait for player's turn");
    }
  }

  function drawCard() {
    if (draw_limit < 3) {
      if (player_turn == "Your") {
        let card = deck.shift();
        let newCard = {
          value: card.value,
          suit: card.suit,
          onClick: (card) =>
            playCard(card),
        };
        setPlayerHand((hand) => [
          ...hand,
          newCard,
        ]);
      }

      if (player_turn == "Opponent") {
        let card = deck.shift();
        let newCard = {
          value: card.value,
          suit: card.suit,
          onClick: (card) =>
            playCard(card),
        };
        setEnemyHand((hand) => [
          ...hand,
          newCard,
        ]);
      }
      setDrawLimit(draw_limit + 1);
    } else {
      alert(
        "Your out of draws. Players switched"
      );
      if (player_turn == "Opponent") {
        setPlayerTurn("Your");
      }
      if (player_turn == "Your") {
        setPlayerTurn("Opponent");
      }
      setDrawLimit(0);
    }
  }

  return (
    <div className="game">
      <div className="enemy-hand">
        <div className="hand-title">
          Enemy Hand
        </div>
        <div className="hand">
          {enemyHand.map(
            (card, index) => (
              <div
                className="card enemy-card"
                key={index}
                onClick={() =>
                  playCard_enemy(card)
                }
              >
                <div className="top-left-enemy">
                  {card.value}
                </div>
                <div className="center-enemy">
                  {getSuitSymbol(
                    card.suit
                  )}
                </div>
                <div className="bottom-right-enemy">
                  {card.value}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="container">
        <center>
          <button
            className="deck"
            onClick={drawCard}
          >
            Draw Card
          </button>
        </center>
        <div className="discard-pile">
          <div className="discard-pile-card">
            {discardPile.length > 0 ? (
              <>
                <div className="top-left">
                  {
                    discardPile[
                      discardPile.length -
                        1
                    ].value
                  }
                </div>
                <div className="center">
                  {getSuitSymbol(
                    discardPile[
                      discardPile.length -
                        1
                    ].suit
                  )}
                </div>
                <div className="bottom-right">
                  {
                    discardPile[
                      discardPile.length -
                        1
                    ].value
                  }
                </div>
              </>
            ) : (
              <div className="no-card">
                No card played yet
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="player-hand">
        <div className="hand-title">
          Your Hand
        </div>
        <div className="hand">
          {playerHand.map(
            (card, index) => (
              <div
                className="card"
                key={index}
                onClick={() =>
                  playCard_player(card)
                }
              >
                <div className="top-left">
                  {card.value}
                </div>
                <div className="center">
                  {getSuitSymbol(
                    card.suit
                  )}
                </div>
                <div className="bottom-right">
                  {card.value}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <marquee>
        <h2>
          It's `{player_turn}` turn.
        </h2>
      </marquee>
    </div>
  );
}

export default Game;
