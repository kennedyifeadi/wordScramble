import React, { useState, useEffect } from 'react';
import { Words } from "../../data/words";

export const useScrambledWord = () => {
    const [scrambled, setScrambled] = useState([]);

    
    const scrambleWord = () => {
        const word = Words[0][0].word; 
        const scrambledArray = [...word]; 
        scrambledArray.sort(() => Math.random() - 0.5); 
        setScrambled(scrambledArray); 
    }

    useEffect(() => {
        scrambleWord();
    }, []);

    return scrambled
};
