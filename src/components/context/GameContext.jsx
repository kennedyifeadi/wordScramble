import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [timerState, setTimerState] = useState(false);

  return (
    <GameContext.Provider value={{ timerState, setTimerState }}>
      {children}
    </GameContext.Provider>
  );
};