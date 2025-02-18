import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [timerState, setTimerState] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState('');

  return (
    <GameContext.Provider value={{
      timerState, setTimerState,
      currentWordIndex, setCurrentWordIndex,
      currentAttempt, setCurrentAttempt,
      gameOver, setGameOver,
      score, setScore,
      hint, setHint
    }}>
      {children}
    </GameContext.Provider>
  );
};