import React from "react";
import "../styles/Calculator.css";

const OperatorButtons = ({ onOperatorClick, onEqualsClick, onRestClick}) => {
    return (
        <div className="operator-buttons">
            <button onClick={() => onOperatorClick("+")} className="button"></button>
            <button onClick={() => onOperatorClick("-")} className="button"></button>
            <button onClick={() => onOperatorClick("x")} className="button"></button>
            <button onClick={onEqualsClick} className="button">=</button>
            <button onClick={onRestClick} className="button">Reset</button>
        </div>
    )
};

export default OperatorButtons;