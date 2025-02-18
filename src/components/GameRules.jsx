import React, { useState } from 'react';

export const GameRules = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  // Function to get random rotation for each word
  const getRotationStyle = (index) => {
    if (!isAnimating) return {};
    
    const randomRotation = -180 + Math.random() * 360;
    const randomDelay = Math.random() * 0.3;
    
    return {
      transform: `rotate(${randomRotation}deg)`,
      transition: `transform 0.5s ease-in-out ${randomDelay}s`,
    };
  };

  // Function to wrap words for animation
  const wrapWords = (text) => {
    return text.split(' ').map((word, index) => (
      <span
        key={index}
        className="inline-block mx-1"
        style={getRotationStyle(index)}
      >
        {word}
      </span>
    ));
  };

  return (
    <div 
      className='w-[95dvw] md:w-72 h-[240px] md:h-72 bg-[#1E1E1E] rounded-md relative text-[#EDEDED] border-3 shadow-2xl border-[#2c2c2c] overflow-auto cursor-pointer'
      onClick={handleClick}
    >
      <h1 className='font-bold text-center text-2xl sticky bg-[#1E1E1E] border-b-3 border-[#2c2c2c] top-0'>Don't <span className='text-[#6A0DAD]'>Click</span> Me!!
      </h1>
      
      <ul className='list-decimal px-[26px] text-[#EDEDED]'>
        <li>
          <h1 className='font-bold text-[#6A0DAD]'>{wrapWords("Objective")}</h1>
          <p className='text-sm'>{wrapWords("Unscramble the letters to find the correct word.")}</p>
        </li>
        <li>
          <h1 className='font-bold text-[#6A0DAD]'>{wrapWords("⏳ Limited Attempts")}</h1>
          <p className='text-sm'>{wrapWords("You have 5 attempts to guess the correct word. If you fail after 5 tries, the game will restart from the first word.")}</p>
        </li>
        <li>
          <h1 className='font-bold text-[#6A0DAD]'>{wrapWords("⏱️Scoring System")}</h1>
          <p className='text-sm'>{wrapWords("Each correct guess earns 100 points. If you guess the word correctly, you move to the next round.")}</p>
        </li>
        <li>
          <h1 className='font-bold text-[#6A0DAD]'>{wrapWords("⏰Letter Entry")}</h1>
          <p className='text-sm'>{wrapWords("Letters can only be entered one at a time in the input boxes.")}</p>
        </li>
        <li>
          <h1 className='font-bold text-[#6A0DAD]'>{wrapWords("🚨Game Over and Restart")}</h1>
          <p className='text-sm'>{wrapWords("If you run out of attempts or complete all words, the game will display 'Game Over' and restart from the beginning after 2 seconds.")}</p>
        </li>
      </ul>
    </div>
  );
};
