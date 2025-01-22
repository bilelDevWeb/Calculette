import React from "react";
import "../styles/Calculator.css";

const NumberButtons = ({ onNumberClick }) => {
  const numbers = Array.from({ length: 10 }, (_, i) => i); // Génère les chiffres de 0 à 9

  return (
    <div className="number-buttons">
      {numbers.map((number) => (
        <button
          key={number}
          onClick={() => onNumberClick(String(number))}
          className="button"
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default NumberButtons;