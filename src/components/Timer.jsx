import React, { useContext, useEffect, useRef, useState } from 'react'
import { GameContext } from "./context/GameContext"

export const Timer = ({duration, noOfWordsPassed, wordCorrect}) => {
    const [time, setTime] = useState(duration);
    const { timerState, setTimerState } = useContext(GameContext);

    useEffect(()=>{
        if( timerState && time > 0){
            setTimeout(() => {
                setTime(time - 1000)
            }, 1000);
        }else{
            resetTimer()
        }
    },[time, timerState])

    const resetTimer = () =>{
        setTime(duration)
    }
    const timerFormat = (milli) => {
        let totalSeconds = parseInt(Math.floor(milli / 1000))
        let totalMinitues = parseInt(Math.floor(totalSeconds / 60))

        let seconds = parseInt(totalSeconds % 60)
        let mintues = parseInt(totalMinitues % 60)

        return `${mintues}: ${seconds}`
    }
  return (
    <div>{timerFormat(time)}</div>
  )
}
