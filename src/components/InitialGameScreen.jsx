import React from "react";
import { Squares } from "./Utilities/Squares";

export const InitialGameScreen = () => {
  return (
    <div className="w-full h-full bg-[#060606] text-[#ffffff1a]">
      <Squares
        speed={0.1}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#ffffff1a"
        hoverFillColor="#222"
      />
    </div>
  );
};
