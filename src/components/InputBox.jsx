import React, { useEffect, useState } from 'react'

export const InputBox = ({letter, isReadOnly}) => {
  const [wordLetter, setWordLetter] = useState('')
  const handleChange = (e) => {
    if (!isReadOnly) {
      setWordLetter(e.target.value);
    }
  };

  useEffect(()=>{
    setWordLetter(letter)
  }, [letter]) 

  return (
    <div className='bg-[#1E1E1E] border-2 border-[#383838] w-7 h-7 rounded-sm'>
      <input type="text" className='w-full h-full bg-transparent outline-0 border-0 text-[#EDEDED] font-bold text-2xl uppercase text-center overflow-hidden' value={wordLetter} readOnly={isReadOnly} onChange={handleChange}/>
    </div>
  )
}
