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
          <h1 className='font-bold text-[#6A0DAD]'>{wrapWords("⏳30-Second Per Word Rule")}</h1>
          <p className='text-sm'>{wrapWords("Each word must be solved within 30 seconds. If the timer runs out, you lose that word, and the next one appears.")}</p>
        </li>
        <li>
          <h1 className='font-bold text-[#6A0DAD]'>{wrapWords("⏱️Bonus Time Carryover")}</h1>
          <p className='text-sm'>{wrapWords("If you solve a word before the 30 seconds expire, the remaining time is added to the next word's time.")}</p>
        </li>
        <li>
          <h1 className='font-bold text-[#6A0DAD]'>{wrapWords("⏰Total Game Duration")}</h1>
          <p className='text-sm'>{wrapWords("The entire game lasts for 2 minutes 30 seconds (150 seconds total). After this, the game ends.")}</p>
        </li>
        <li>
          <h1 className='font-bold text-[#6A0DAD]'>{wrapWords("🚨Game Over Condition")}</h1>
          <p className='text-sm'>{wrapWords("The game ends when the total 2 minutes 30 seconds runs out, even if you still have words left.")}</p>
        </li>
      </ul>
    </div>
  );
};
