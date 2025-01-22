import React from "react";
import "../styles/Calculator.css";

const OperatorButtons = ({ onOperatorClick, onEqualsClick, onResetClick }) => {
  return (
    <div className="operator-buttons">
      <button onClick={() => onOperatorClick("+")} className="button">+</button>
      <button onClick={() => onOperatorClick("-")} className="button">-</button>
      <button onClick={() => onOperatorClick("x")} className="button">x</button>
      <button onClick={onEqualsClick} className="button">=</button>
      <button onClick={onResetClick} className="button reset">Reset</button>
    </div>
  );
};

export default OperatorButtons;