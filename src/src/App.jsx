import React, { useReducer } from "react";
import Display from "./components/Display";
import NumberButtons from "./components/NumberButtons";
import OperatorButtons from "./components/OperatorButtons";
import calculatorReducer, { initialState } from "./reducers/calculatorReducer";
import "./styles/Calculator.css";

const App = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleNumberClick = (number) => {
    dispatch({ type: "INPUT_NUMBER", payload: number });
  };

  const handleOperatorClick = (operator) => {
    dispatch({ type: "SET_OPERATOR", payload: operator });
  };

  const handleEqualsClick = () => {
    dispatch({ type: "CALCULATE" });
  };

  const handleResetClick = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="calculator">
      <Display value={state.displayValue} />
      <div className="button-container">
        <NumberButtons onNumberClick={handleNumberClick} />
        <OperatorButtons
          onOperatorClick={handleOperatorClick}
          onEqualsClick={handleEqualsClick}
          onResetClick={handleResetClick}
        />
      </div>
    </div>
  );
};

export default App;
