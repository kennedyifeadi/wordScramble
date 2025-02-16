import React, { useEffect, useState } from "react";
import { Squares } from "./Utilities/Squares";
import { DecryptedText } from './Utilities/DecryptedText'

export const InitialGameScreen = () => {
  const [clicked, setClicked] = useState(false)
  useEffect(()=>{
    console.log(clicked);
  }, [clicked])
  return (
    <div className={`${clicked ? "" : ""} w-full h-full bg-[#060606] text-[#ffffff1a] absolute top-0 flex flex-col justify-center items-center`}>
      <Squares
        speed={0.1}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#ffffff1a"
        hoverFillColor="#222"
      />
      <div className="flex text-[72px] z-10 font-extrabold gap-1.5">
        <h1 className="text-white text-[72px] z-10 font-extrabold">Word</h1>
        <div className="text-[#6A0DAD]">
          <DecryptedText
            speed={150}
            characters="ABCD1234"
            text="Scramble"
            animateOn="view"
            revealDirection="center"
          />
        </div>
      </div>
      <div className="flex gap-2.5 w-[20%] z-20 justify-between h-max">
        <div className="w-max h-max">
          <button className="h-[2.3rem] w-[5rem] text-[#EDEDED] hover:bg-[#7D1DBE] duration-300 ease-in-out cursor-pointer font-bold rounded-sm bg-[#6A0DAD]" onClick={() => setClicked(!clicked)}>
            Ready
          </button>
        </div>
        <div className="w-max h-max">
          <button className="h-[2.3rem] w-[5rem] bg-[#3A3A3A] text-[#EDEDED] hover:bg-[#4A4A4A] duration-300 ease-in-out cursor-pointer font-bold rounded-sm">
            Rules
          </button>
        </div>
      </div>
    </div>
  );
};
