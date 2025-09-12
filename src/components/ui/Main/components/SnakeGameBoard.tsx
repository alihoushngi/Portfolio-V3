"use client";

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  IoIosClose,
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

  const cellSize = 10;

  // init snake & food when board is ready
  useEffect(() => {
    if (gameBoardRef.current) {
      const h = gameBoardRef.current.clientHeight;
      const w = gameBoardRef.current.clientWidth;

      if (h && w) {
        const startTop = Math.floor(h / 2 / cellSize) * cellSize;
        const startLeft = Math.floor(w / 2 / cellSize) * cellSize;

        setSnake([{ top: startTop, left: startLeft }]);
        setSnakeFood({
          top: Math.floor(Math.random() * (h / cellSize)) * cellSize,
          left: Math.floor(Math.random() * (w / cellSize)) * cellSize,
        });
        setBoardReady(true); // ✅ mark board as ready
      }
    }
  }, []);

  // keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && boardReady) {
        setIsStart("true");
      }
      if (e.key === "Escape") {
        setIsStart("pause");
      }
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
  }, [isStart, direction, boardReady]);

  const resetGame = () => {
    if (!gameBoardRef.current) return;
    const h = gameBoardRef.current.clientHeight;
    const w = gameBoardRef.current.clientWidth;

    const startTop = Math.floor(h / 2 / cellSize) * cellSize;
    const startLeft = Math.floor(w / 2 / cellSize) * cellSize;

    setSnake([{ top: startTop, left: startLeft }]);
    setSnakeFood({
      top: Math.floor(Math.random() * (h / cellSize)) * cellSize,
      left: Math.floor(Math.random() * (w / cellSize)) * cellSize,
    });
    setSnakeFoodTrack(0);
    setDirection(null);
    setIsStart("false");
    setGameMessage("");
  };

  // move snake loop
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

        // check wall collision
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

        // check eat food
        if (
          Math.abs(newHead.top - snakeFood.top) < cellSize &&
          Math.abs(newHead.left - snakeFood.left) < cellSize
        ) {
          setSnakeFoodTrack((prev) => prev + 1);
          setSnakeFood({
            top:
              Math.floor(Math.random() * (boardHeight / cellSize)) * cellSize,
            left:
              Math.floor(Math.random() * (boardWidth / cellSize)) * cellSize,
          });
        } else {
          newSnake.pop(); // move
        }

        // check collision with self
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
  }, [direction, isStart, snakeFood, boardReady]);

  // Show toast when gameMessage changes
  useEffect(() => {
    if (gameMessage) {
      toast.error(gameMessage);
      const timer = setTimeout(() => setGameMessage(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [gameMessage]);

  // ui button controls
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
      {/* corners */}
      <IoIosClose className="hidden md:block bg-teal-950 text-teal-950 text-4 bg-bolt-radial shadow-bolt p-1 rounded-full absolute top-3 left-3" />
      <IoIosClose className="hidden md:block bg-teal-950 text-teal-950 text-4 bg-bolt-radial shadow-bolt p-1 rounded-full absolute top-3 right-3" />
      <IoIosClose className="hidden md:block bg-teal-950 text-teal-950 text-4 bg-bolt-radial shadow-bolt p-1 rounded-full absolute bottom-3 left-3" />
      <IoIosClose className="hidden md:block bg-teal-950 text-teal-950 text-4 bg-bolt-radial shadow-bolt p-1 rounded-full absolute bottom-3 right-3" />

      {/* Snake Game Board */}
      <div
        className="bg-Appearance-Slate-800 rounded-lg relative overflow-hidden w-full h-[200px] md:w-[250px] md:h-full"
        ref={gameBoardRef}
      >
        {/* food */}
        <div
          className="w-4 h-4 bg-[#43d9ad] absolute rounded-full animate-bounce-halo"
          style={{
            top: `${snakeFood.top}px`,
            left: `${snakeFood.left}px`,
          }}
        />
        {/* snake */}
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
              onClick={() => setIsStart("true")}
              className="bg-Primary-Orange-300_Main text-xs rounded-lg px-3 py-1 text-black"
            >
              {`Tap to Start`}
            </button>
          </div>
        )}
      </div>

      {/* Snake Game Controls & Info */}
      <div className="h-auto md:h-full w-full md:w-1/2 mt-4 md:mt-0">
        <div className="bg-Appearance-Slate-800 rounded-lg p-3 flex flex-col justify-start items-center gap-3">
          {/* keyboard hint only for desktop */}
          <div className="hidden md:flex flex-col justify-start items-start gap-1 flex-wrap text-1 text-Appearance-Slate-50 font-light w-full">
            <span>{"//"} use keyboard</span>
            <span>{"//"} arrows to play</span>
          </div>

          {/* Mobile Controls */}
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <div>
              <IoMdArrowDropup
                onClick={() => handleMove("UP")}
                className="cursor-pointer bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-7 text-white w-16 py-1 max-md:text-5 max-md:py-0 max-md:w-10"
              />
            </div>
            <div className="flex justify-center items-center gap-3">
              <IoMdArrowDropleft
                onClick={() => handleMove("LEFT")}
                className="cursor-pointer bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-7 text-white w-16 py-1 max-md:text-5 max-md:py-0 max-md:w-10"
              />
              <IoMdArrowDropdown
                onClick={() => handleMove("DOWN")}
                className="cursor-pointer bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-7 text-white w-16 py-1 max-md:text-5 max-md:py-0 max-md:w-10"
              />
              <IoMdArrowDropright
                onClick={() => handleMove("RIGHT")}
                className="cursor-pointer bg-gray-950 border border-Appearance-Slate-700 rounded-lg text-7 text-white w-16 py-1 max-md:text-5 max-md:py-0 max-md:w-10"
              />
            </div>
          </div>
        </div>

        {/* Food Left */}
        <div className="flex flex-col justify-start items-start gap-1 w-full flex-wrap text-1 text-Appearance-Slate-50 font-light mt-6 p-3 max-md:mt-2">
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
