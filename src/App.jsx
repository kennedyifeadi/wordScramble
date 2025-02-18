import React from 'react'
import { InitialGameScreen } from './components/InitialGameScreen'
import { Gameplay } from './components/Gameplay'
import { GameProvider } from './components/context/GameContext'
const App = () => {
  return (
    <div className='w-full h-[100dvh] flex relative overflow-hidden'>
      <GameProvider>
        <InitialGameScreen/>
        <Gameplay/>
      </GameProvider>
    </div>
  )
}

export default App