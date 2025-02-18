import React, { useEffect, useState } from 'react'
import { Keyboard } from './Keyboard'
import { InputBox } from './InputBox'
import { Timer } from './Timer';
import { useScrambledWord } from './hooks/useScrambledWord'

export const Gameplay = () => {
    const[wordPassedCount, setWordPassedCount] = useState(0);
    const [scrambledCorrect, setScrambledCorrect] = useState(false)
    const scrambled = useScrambledWord();
    useEffect(()=>{
        if (scrambledCorrect) {
            setWordPassedCount(wordPassedCount + 1);
            setScrambledCorrect(false); 
        }
    }, [scrambledCorrect])
  return (
    <div className='w-full h-full bg-[#121212] flex justify-center items-center'>
        <div className='bg-[#181818] p-4 w-[35%] h-[80%] flex flex-col border-2 border-[#302f2f] shadow-md rounded-md'>
            <div className='flex w-full h-max justify-between mb-8'>
                <div className='w-[80%] flex justify-between items-center'>
                    <InputBox letter={scrambled[0]} isReadOnly={true} />
                    <div className='w-[4%] h-[2px] bg-[#333333] '>
                    </div>
                    <InputBox letter={scrambled[1]} isReadOnly={true} />
                    <div className='w-[4%] h-[2px] bg-[#333333] '>
                    </div>
                    <InputBox letter={scrambled[2]} isReadOnly={true} />
                    <div className='w-[4%] h-[2px] bg-[#333333] '>
                    </div>
                    <InputBox letter={scrambled[3]} isReadOnly={true} />
                    <div className='w-[4%] h-[2px] bg-[#333333] '>
                    </div>
                    <InputBox letter={scrambled[4]}isReadOnly={true} />
                </div>
                <div className='flex gap-4 justify-center items-center'>
                    <div className='w-max h-max px-1 text-[#EDEDED] font-bold text-[12px] rounded-full flex justify-center items-center border-2 border-[#302f2f]'>{wordPassedCount}</div>
                    <div className='w-max h-max text-[#EDEDED] font-bold rounded-full flex justify-center items-center border-2 border-[#302f2f] px-1'>
                        <Timer duration={30 * 1000} noOfWordsPassed={wordPassedCount} wordCorrect={wordPassedCount}/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[80%] h-max gap-4'>
                <div className='flex w-full justify-between'>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                </div>
                <div className='flex w-full justify-between'>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                </div>
                <div className='flex w-full justify-between'>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                </div>
                <div className='flex w-full justify-between'>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                </div>
                <div className='flex w-full justify-between'>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                </div>
                <div className='flex w-full justify-between'>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                    <InputBox/>
                </div>
            </div>
            <div>
                <Keyboard/>
            </div>
        </div>
    </div>
  )
}
