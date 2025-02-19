import React, { useEffect, useState, useRef, useContext } from 'react';
import { GameContext } from './context/GameContext';
import { Words } from '../data/words';

export const Gameplay = () => {
  const {
    currentAttempt, setCurrentAttempt,
    gameOver, setGameOver,
    score, setScore,
    hint, setHint
  } = useContext(GameContext);

  const [currentGuess, setCurrentGuess] = useState(Array(5).fill(''));
  const [scrambledWord, setScrambledWord] = useState('');
  const [message, setMessage] = useState('');
  const inputRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * 5));
  const [currentWordIndex, setCurrentWordIndex] = useState(Math.floor(Math.random() * 5));

  useEffect(() => {
    scrambleCurrentWord();
    setHint(Words[currentIndex][currentWordIndex].hint);
  }, [currentIndex, currentWordIndex]);

  const scrambleCurrentWord = () => {
    const word = Words[currentIndex][currentWordIndex].word.toUpperCase();
    let scrambled = word;
    while (scrambled === word) {
      scrambled = [...word].sort(() => Math.random() - 0.5).join('');
    }
    setScrambledWord(scrambled);
  };

  const handleKeyDown = (index, e) => {
    if (gameOver) return;

    if (e.key === 'Backspace') {
      e.preventDefault();
      
      // If current input is empty, move to and clear previous input
      if (currentGuess[index] === '' && index > 0) {
        const newGuess = [...currentGuess];
        newGuess[index - 1] = '';
        setCurrentGuess(newGuess);
        inputRefs.current[index - 1]?.focus();
      } else {
        // Clear current input
        const newGuess = [...currentGuess];
        newGuess[index] = '';
        setCurrentGuess(newGuess);
      }
    }
  };

  const handleInput = (index, value) => {
    if (gameOver) return;

    // Handle regular input
    const char = value.slice(-1).toUpperCase();
    if (/^[A-Z]$/.test(char)) {
      const newGuess = [...currentGuess];
      newGuess[index] = char;
      setCurrentGuess(newGuess);

      // Auto-advance to next input
      if (index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const checkWord = () => {
    const guess = currentGuess.join('').toUpperCase();
    const correctWord = Words[currentIndex][currentWordIndex].word.toUpperCase();

    if (guess === correctWord) {
      handleCorrectGuess();
    } else {
      handleIncorrectGuess();
    }
  };

  const handleCorrectGuess = () => {
    setScore(score + 100);
    setMessage('Correct! Well done!');

    if (currentWordIndex < Words[currentIndex].length - 1) {
      setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
        setCurrentGuess(Array(5).fill(''));
        setCurrentAttempt(1);
        setMessage('');
      }, 1500);
    } else {
      handleGameOver();
    }
  };

  const handleIncorrectGuess = () => {
    if (currentAttempt >= 3) {
      handleGameOver();
      return;
    }

    setCurrentAttempt(currentAttempt + 1);
    setCurrentGuess(Array(5).fill(''));
    setMessage('Incorrect! Try again.');
  };

  const handleGameOver = () => {
    setGameOver(true);
    setMessage('Game Over! Restarting...');
    if (currentIndex < 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentWordIndex(currentIndex - 4);
    }

    setTimeout(() => {
      setGameOver(false);
      setCurrentWordIndex(0);
      setCurrentGuess(Array(5).fill(''));
      setCurrentAttempt(1);
      setScore(0);
      setMessage('');
    }, 1000);
  };

  return (
    <div className='w-full h-full bg-[#121212] flex justify-center items-center'>
      <div className='bg-[#181818] px-4 py-2 w-[90%] md:w-[35%] h-max md:h-[80%] flex flex-col border-2 border-[#302f2f] shadow-md rounded-md'>
        <div className='w-full h-max mb-4 flex flex-col items-center'>
          <h1 className='font-bold text-3xl md:text-5xl text-[#EDEDED] mb-4'>
            Un<span className='text-[#6A0DAD]'>Scramble</span> me!!
          </h1>
          <div className='text-[#EDEDED] mb-2'>Hint: {hint}</div>
          <div className='text-[#6A0DAD] font-bold'>Score: {score}</div>
          {message && <div className='text-[#EDEDED] mt-2'>{message}</div>}
        </div>

        <div className='flex justify-center mb-4'>
          <div className='text-[#EDEDED] text-2xl font-bold tracking-wider'>
            {scrambledWord}
          </div>
        </div>

        <div className='flex justify-center gap-2 mb-8'>
          {currentGuess.map((letter, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              value={letter}
              maxLength={1}
              inputMode="text"
              type="text"
              autoCapitalize="characters"
              onClick={() => inputRefs.current[index]?.focus()}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onChange={(e) => handleInput(index, e.target.value)}
              className='w-12 h-12 bg-[#2d2d2d] text-[#EDEDED] text-center text-2xl font-bold rounded'
            />
          ))}
        </div>

        <button
          onClick={checkWord}
          className='mt-4 py-2 bg-[#6A0DAD] text-[#EDEDED] active:scale-95 ease-in-out duration-1000 rounded font-bold hover:bg-[#7d1dbe] transition-colors'
          disabled={currentGuess.includes('')}
        >
          Submit
        </button>
      </div>
    </div>
  );
};