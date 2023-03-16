import React, { useState, useEffect } from "react";

const tileSize = 10;
const width = 40;
const height = 40;

const snakeGameStyle = `
.snake-game {
  width: ${width * tileSize}px;
  height: ${height * tileSize}px;
  position: absolute;
  border: 3px solid black;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
`;



function generateFood() {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  };
}

function SnakeGame() {

    useEffect(() => {
        // Получаем элемент поля по его селектору
        const gameField = document.querySelector(".snake-game");
      
        // Устанавливаем на него фокус
        gameField.focus();
      }, []);

    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [direction, setDirection] = useState("right");
    const [food, setFood] = useState(generateFood());
    const [gameOver, setGameOver] = useState(false);
  
    function moveSnake() {
        if (gameOver) {
          return;
        }
      
        const head = { ...snake[0] };
      
        switch (direction) {
          case "right":
            head.x++;
            break;
          case "left":
            head.x--;
            break;
          case "up":
            head.y--;
            break;
          case "down":
            head.y++;
            break;
        }
      
        // Check if snake hit food
        if (head.x === food.x && head.y === food.y) {
          setSnake([head, ...snake]);
          setFood(generateFood());
          return;
        }
      
        // Remove tail segment and move head to front
        setSnake([head, ...snake.slice(0, -1)]);
      
        // Check if snake hits the wall
        if (
          head.x < 0 ||
          head.x >= width ||
          head.y < 0 ||
          head.y >= height ||
          checkSnakeCollision()
        ) {
          setGameOver(true);
        }
      }

    function checkSnakeCollision() {
        const head = snake[0];
        return snake.slice(1).some(segment => {
          return segment.x === head.x && segment.y === head.y;
        });
      }
      
    function handleKeyPress(event) {
        switch (event.key) {
          case "ArrowRight":
            if (direction !== "left") {
              setDirection("right");
            }
            break;
          case "ArrowLeft":
            if (direction !== "right") {
              setDirection("left");
            }
            break;
          case "ArrowUp":
            if (direction !== "down") {
              setDirection("up");
            }
            break;
          case "ArrowDown":
            if (direction !== "up") {
              setDirection("down");
            }
            break;
        }
      }

      
    
      function draw() {
        const segments = [...snake, food];
      
        return segments.map((segment, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: segment.x * tileSize,
              top: segment.y * tileSize,
              width: tileSize,
              height: tileSize,
              backgroundColor:
                index === segments.length - 1
                  ? "red"
                  : index === 0
                  ? "blue"
                  : "green",
            }}
          />
        ));
      }
    
      function restartGame() {
        setSnake([{ x: 10, y: 10 }]);
        setDirection("right");
        setFood(generateFood());
      }
    
      useEffect(() => {
        const interval = setInterval(() => {
          moveSnake();
        }, 100);
    
        return () => clearInterval(interval);
      });
    
      useEffect(() => {
        if (snake[0].x < 0 || snake[0].x >= width || snake[0].y < 0 || snake[0].y >= height) {
          alert("Game over! Press 'OK' to restart.");
          restartGame();
        }
        
        if (snake.length > 1 && snake.slice(1).some(segment => segment.x === snake[0].x && segment.y === snake[0].y)) {
            alert("Game over! Press 'OK' to restart.");
            restartGame();
          }

        if (snake.length === width * height) {
            alert("You win! Press 'OK' to restart.");
            restartGame();
            
        }
      }, [snake]);

    
      return (
        <div
        className="snake-game"
        tabIndex={0}
        onKeyDown={handleKeyPress}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        autoFocus
      >
        {draw()}
        <style>
          {`.snake-game {
            width: ${width * tileSize}px;
            height: ${height * tileSize}px;
            position: absolute;
            border: 3px solid black;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }`}
        </style>
      </div>
      );
    }
    
    export default SnakeGame;