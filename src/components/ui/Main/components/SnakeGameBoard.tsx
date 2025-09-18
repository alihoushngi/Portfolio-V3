"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  IoMdArrowDropdown,
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT" | null;

const SnakeGameBoard = () => {
  const gameBoardRef = useRef<HTMLDivElement>(null);

  const [snakeFoodTrack, setSnakeFoodTrack] = useState(0);
  const [isStart, setIsStart] = useState<"true" | "false" | "pause">("false");
  const [direction, setDirection] = useState<Direction>(null);
  const [snake, setSnake] = useState<{ top: number; left: number }[]>([
    { top: 100, left: 100 },
  ]);
  const [snakeFood, setSnakeFood] = useState<{ top: number; left: number }>({
    top: 150,
    left: 150,
  });
  const [gameMessage, setGameMessage] = useState<string | null>(null);
  const [boardReady, setBoardReady] = useState(false);

  const foodConsumed = useRef(false);

  const cellSize = 10;

  const generateFood = (boardWidth: number, boardHeight: number) => {
    const minOffset = 10;
    const top =
      Math.floor((Math.random() * (boardHeight - 2 * minOffset)) / cellSize) *
        cellSize +
      minOffset;
    const left =
      Math.floor((Math.random() * (boardWidth - 2 * minOffset)) / cellSize) *
        cellSize +
      minOffset;
    return { top, left };
  };

  useEffect(() => {
    if (gameBoardRef.current) {
      const h = gameBoardRef.current.clientHeight;
      const w = gameBoardRef.current.clientWidth;
      if (h && w) {
        const startTop = Math.floor(h / 2 / cellSize) * cellSize;
        const startLeft = Math.floor(w / 2 / cellSize) * cellSize;
        setSnake([{ top: startTop, left: startLeft }]);
        setSnakeFood(generateFood(w, h));
        setBoardReady(true);
      }
    }
  }, []);

  const startGame = useCallback(() => {
    if (!boardReady) return;
    setIsStart("true");
    setDirection("UP");
  }, [boardReady]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && boardReady) startGame();
      if (e.key === "Escape") setIsStart("pause");

      if (isStart === "true") {
        switch (e.key) {
          case "ArrowUp":
            if (direction !== "DOWN") setDirection("UP");
            break;
          case "ArrowDown":
            if (direction !== "UP") setDirection("DOWN");
            break;
          case "ArrowLeft":
            if (direction !== "RIGHT") setDirection("LEFT");
            break;
          case "ArrowRight":
            if (direction !== "LEFT") setDirection("RIGHT");
            break;
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isStart, direction, boardReady, startGame]);

  const resetGame = useCallback(() => {
    if (!gameBoardRef.current) return;
    const h = gameBoardRef.current.clientHeight;
    const w = gameBoardRef.current.clientWidth;
    const startTop = Math.floor(h / 2 / cellSize) * cellSize;
    const startLeft = Math.floor(w / 2 / cellSize) * cellSize;

    setSnake([{ top: startTop, left: startLeft }]);
    setSnakeFood(generateFood(w, h));
    setSnakeFoodTrack(0);
    setDirection(null);
    setIsStart("false");
    setGameMessage("");
    foodConsumed.current = false;
  }, [cellSize]);

  useEffect(() => {
    if (isStart !== "true" || !direction || !boardReady) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        if (!gameBoardRef.current) return prevSnake;

        const boardHeight =
          Math.floor(gameBoardRef.current.clientHeight / cellSize) * cellSize;
        const boardWidth =
          Math.floor(gameBoardRef.current.clientWidth / cellSize) * cellSize;

        if (boardHeight === 0 || boardWidth === 0) return prevSnake;

        const head = prevSnake[0];
        const newHead = { ...head };

        if (direction === "UP") newHead.top -= cellSize;
        if (direction === "DOWN") newHead.top += cellSize;
        if (direction === "LEFT") newHead.left -= cellSize;
        if (direction === "RIGHT") newHead.left += cellSize;

        if (
          newHead.top < 0 ||
          newHead.left < 0 ||
          newHead.top >= boardHeight ||
          newHead.left >= boardWidth
        ) {
          setGameMessage("You burned out! You hit the wall.");
          setIsStart("false");
          setDirection(null);
          resetGame();
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        if (
          newHead.top === snakeFood.top &&
          newHead.left === snakeFood.left &&
          !foodConsumed.current
        ) {
          setSnakeFoodTrack((prev) => prev + 1);
          setSnakeFood(generateFood(boardWidth, boardHeight));
          foodConsumed.current = true;
        } else if (
          newHead.top !== snakeFood.top ||
          newHead.left !== snakeFood.left
        ) {
          newSnake.pop();
          foodConsumed.current = false;
        }

        if (
          prevSnake.some(
            (seg) => seg.top === newHead.top && seg.left === newHead.left,
          )
        ) {
          setGameMessage("You burned! You ate yourself.");
          setIsStart("false");
          setDirection(null);
          resetGame();
          return prevSnake;
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [direction, isStart, snakeFood, boardReady, resetGame]);

  useEffect(() => {
    if (gameMessage) {
      toast.error(gameMessage);
      const timer = setTimeout(() => setGameMessage(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [gameMessage]);

  const handleMove = (dir: Direction) => {
    if (isStart === "true") {
      if (dir === "UP" && direction !== "DOWN") setDirection("UP");
      if (dir === "DOWN" && direction !== "UP") setDirection("DOWN");
      if (dir === "LEFT" && direction !== "RIGHT") setDirection("LEFT");
      if (dir === "RIGHT" && direction !== "LEFT") setDirection("RIGHT");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-start items-start h-full gap-4 w-full max-w-[500px] rounded-lg border border-Appearance-Slate-700 p-4 md:p-7 bg-glass-gradient bg-opacity-70 shadow-inner-white backdrop-blur-60 z-20 relative max-md:gap-1">
      {/* Snake Game Board */}
      <div
        className="bg-Appearance-Slate-800 rounded-lg relative overflow-hidden w-full h-[200px] md:w-[250px] md:h-full"
        ref={gameBoardRef}
      >
        <div
          className="w-4 h-4 bg-[#43d9ad] absolute rounded-full animate-bounce-halo"
          style={{
            top: `${snakeFood.top}px`,
            left: `${snakeFood.left}px`,
          }}
        />
        {snake.map((seg, idx) => (
          <div
            key={idx}
            className={`absolute flex justify-center items-center transition-all duration-150 ${
              idx === 0
                ? "w-5 h-3 bg-gradient-to-r from-[#43D9AD] to-white rounded-full border-2 border-[#43D9AD] animate-headPulse"
                : "w-4 h-3 bg-gradient-to-br from-[#43D9AD] to-[#1a7a5e] rounded-[50%] shadow-[0_0_4px_#1a7a5e] animate-snakeWave"
            }`}
            style={{
              top: `${seg.top}px`,
              left: `${seg.left}px`,
              zIndex: idx === 0 ? 10 : 5,
            }}
          >
            {idx === 0 && (
              <div className="flex gap-[2px]">
                <div className="w-[3px] h-[3px] bg-black rounded-full shadow-[0_0_2px_white]" />
                <div className="w-[3px] h-[3px] bg-black rounded-full shadow-[0_0_2px_white]" />
              </div>
            )}
          </div>
        ))}
        {isStart !== "true" && boardReady && (
          <div className="w-full bottom-6 max-md:bottom-1 absolute left-0 flex justify-center">
            <button
              onClick={startGame}
              className="bg-Primary-Orange-300_Main text-xs rounded-lg px-3 py-1 text-black"
            >
              Tap to Start
            </button>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="h-auto md:h-full w-full md:w-1/2 mt-4 md:mt-0">
        <div className="bg-Appearance-Slate-800 rounded-lg p-3 flex flex-col justify-start items-center gap-3">
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <div>
              <IoMdArrowDropup
                onClick={() => handleMove("UP")}
                className="cursor-pointer bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-7 text-white w-16 py-1"
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <IoMdArrowDropleft
                onClick={() => handleMove("LEFT")}
                className="cursor-pointer bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-7 text-white w-16 py-1"
              />
              <IoMdArrowDropdown
                onClick={() => handleMove("DOWN")}
                className="cursor-pointer bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-7 text-white w-16 py-1"
              />
              <IoMdArrowDropright
                onClick={() => handleMove("RIGHT")}
                className="cursor-pointer bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-7 text-white w-16 py-1"
              />
            </div>

            {isStart === "true" && (
              <button
                onClick={() => setIsStart("pause")}
                className="bg-red-500 text-white px-4 py-1 rounded-lg text-sm mt-2"
              >
                Stop
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-1 w-full text-1 text-Appearance-Slate-50 font-light mt-6 p-3">
          <span>{"//"} food left</span>
          <div className="flex gap-3 w-full flex-wrap mt-5">
            {Array.from({ length: snakeFoodTrack }).map((_, idx) => (
              <div
                key={idx}
                className="w-4 h-4 bg-[#43d9ad] rounded-full animate-bounce-halo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGameBoard;
