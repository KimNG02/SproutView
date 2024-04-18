import React from 'react';
import './Alphabet.css';

const Alphabet = ({ onLetterClick }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="alphabet-container">
      {letters.map((letter) => (
        <button key={letter} className="letter" onClick={() => onLetterClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Alphabet;
