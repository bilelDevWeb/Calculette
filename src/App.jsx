import React from "react";
import Display from "./components/Display";
import NumberButtons from "./components/NumberButtons";
import OperationButtons from "./components/OperatorButtons";
import "./styles/Calculator.css";

const App = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [firstOprand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (number) => {
    if (waitingForSecondOperand) {
      setDisplayValue(number);
      setWaitingForSecondOperand(false)
    } else {
      setDisplayValue(displayValue === "0" ? number : displayValue + number);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (operator && waitingForSecondOperand) {
      setOperator(nextOperator);
      return;
    }

    if (firstOprand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOprand, inputValue, operator);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (first, second, operator) => {
    switch (operator) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "x":
        return first * second;
      default:
        return second;
    }
  };

  const handleReset = () => {
    setDisplayValue("");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleEqualsClick = () => {
    if (operator && firstOprand !== null) {
      const result = calculate(firstOprand, parseFloat(displayValue), operator);
      setDisplayValue(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue || "0"} />
      <div className="button-container">
        <NumberButtons onNumberClick={handleNumberClick} />
        <OperatorButtons
          onOperatorClick={handleOperatorClick}
          onEqualsClick={handleEqualsClick}
          onResetClick={handleReset}
        />
      </div>
    </div>
  );
};

export default App;
