import React from "react";
import { Squares } from "./Utilities/Squares";

export const InitialGameScreen = () => {
  return (
    <div className="w-full h-full bg-[#060606] text-[#ffffff1a] relative flex flex-col justify-center items-center">
      <Squares
        speed={0.1}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#ffffff1a"
        hoverFillColor="#222"
      />
      <h1 className="text-white text-[72px] z-10 font-extrabold">Word Scramble</h1>
      <div className="flex gap-2.5 w-[20%] z-20 justify-between h-max">
        <div className="w-max h-max">
            <button className="h-[2.3rem] w-[5rem] text-[#EDEDED] hover:bg-[#7D1DBE] duration-300 ease-in-out cursor-pointer font-bold rounded-sm bg-[#6A0DAD]">Ready</button>
        </div>
        <div className="w-max h-max">
            <button className="h-[2.3rem] w-[5rem] bg-[#3A3A3A] text-[#EDEDED] hover:bg-[#4A4A4A] duration-300 ease-in-out cursor-pointer font-bold rounded-sm">Rules</button>
        </div>
      </div>
    </div>
  );
};
