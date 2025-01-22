export const initialState = {
    displayValue: "0",
    firstOperand: null,
    operator: null,
    waitingForSecondOperand: false,
  };
  
  const calculatorReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_NUMBER":
        if (state.waitingForSecondOperand) {
          return {
            ...state,
            displayValue: action.payload,
            waitingForSecondOperand: false,
          };
        }
        return {
          ...state,
          displayValue:
            state.displayValue === "0"
              ? action.payload
              : state.displayValue + action.payload,
        };
  
      case "SET_OPERATOR":
        if (state.operator && state.waitingForSecondOperand) {
          return {
            ...state,
            operator: action.payload,
          };
        }
  
        if (state.firstOperand === null) {
          return {
            ...state,
            firstOperand: parseFloat(state.displayValue),
            operator: action.payload,
            waitingForSecondOperand: true,
          };
        }
  
        if (state.operator) {
          const result = calculate(
            state.firstOperand,
            parseFloat(state.displayValue),
            state.operator
          );
          return {
            ...state,
            displayValue: String(result),
            firstOperand: result,
            operator: action.payload,
            waitingForSecondOperand: true,
          };
        }
  
        return {
          ...state,
          operator: action.payload,
          waitingForSecondOperand: true,
        };
  
      case "CALCULATE":
        if (state.operator && state.firstOperand !== null) {
          const result = calculate(
            state.firstOperand,
            parseFloat(state.displayValue),
            state.operator
          );
          return {
            ...state,
            displayValue: String(result),
            firstOperand: null,
            operator: null,
            waitingForSecondOperand: false,
          };
        }
        return state;
  
      case "RESET":
        return { ...initialState };
  
      default:
        return state;
    }
  };
  
  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "x":
        return firstOperand * secondOperand;
      default:
        return secondOperand;
    }
  };
  
  export default calculatorReducer;