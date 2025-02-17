import React from 'react'

export const GameRules = () => {
  return (
    <div className='w-[18rem] h-[18rem] bg-[#1E1E1E] rounded-md relative text-[#EDEDED] border-3 shadow-2xl border-[#2c2c2c] overflow-auto'>
      <h1 className='font-bold text-center text-2xl sticky bg-[#1E1E1E] border-b-3 border-[#2c2c2c] top-0'>Don't <span className='text-[#6A0DAD]'>Click</span> Me!!</h1>
      <ul className='list-decimal px-6 text-[#EDEDED]'>
        <li className=''>
          <h1 className='font-bold text-[#6A0DAD]'>Objective</h1>
          <p className='text-[14px]'>Unscramble the letters to find the correct word. </p>
        </li>
        <li className=''>
          <h1 className='font-bold text-[#6A0DAD]'>⏳30-Second Per Word Rule</h1>
          <p className='text-[14px]'>Each word must be solved within 30 seconds. If the timer runs out, you lose that word, and the next one appears. </p>
        </li>
        <li className=''>
          <h1 className='font-bold text-[#6A0DAD]'>⏱️Bonus Time Carryover</h1>
          <p className='text-[14px]'>If you solve a word before the 30 seconds expire, the remaining time is added to the next word's time. </p>
        </li>
        <li className=''>
          <h1 className='font-bold text-[#6A0DAD]'>⏰Total Game Duration</h1>
          <p className='text-[14px]'>The entire game lasts for 2 minutes 30 seconds (150 seconds total). After this, the game ends. </p>
        </li>
        <li className=''>
          <h1 className='font-bold text-[#6A0DAD]'>🚨Game Over Condition </h1>
          <p className='text-[14px]'>The game ends when the total 2 minutes 30 seconds runs out, even if you still have words left. </p>
        </li>
      </ul>
    </div>
  )
}
