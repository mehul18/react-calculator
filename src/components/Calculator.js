import React, { useEffect, useState } from "react";
import Keypad from "./Keypad";
import Display from "./Display";
import HistoryToggle from "./HistoryToggle";
import HistoryInfo from "./HistoryInfo";

const math = require("mathjs");

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const [currentValue, setCurrentValue] = useState("");
  const [register, setRegister] = useState([]);
  const [result, setResult] = useState("");
  const [isEqualClick, setEqualClick] = useState(false);

  const handleOnDigit = (number) => {
    if (isNaN(number)) {
      throw Error("Only numeric input is allowed");
    }

    let cVal = "";

    if (result !== "") {
      setResult("");
      setCurrentValue("");
      cVal = "";
    } else {
      cVal = currentValue;
    }

    setCurrentValue((cVal += number));
  };

  const clearCurrentValue = () => {
    setCurrentValue("");
  };

  const clearResult = () => {
    setResult("");
  };

  const handleOnClear = () => {
    clearCurrentValue();
    clearResult();
    setRegister([]);
  };

  const handleOnClearAll = () => {
    clearCurrentValue();
    clearResult();
    setRegister([]);
    setHistory([]);
  };

  const handleOnClearHistory = () => {
    setHistory([]);
    clearCurrentValue();
    clearResult();
    setExpression("");
    setShowHistory(false);
  };

  const handleOnDecimalPoint = () => {
    if (result !== "") {
      clearCurrentValue();
      clearResult();
    }

    if (currentValue.indexOf(".") >= 0) {
      return;
    }

    let cVal = currentValue;

    if (cVal === "") {
      setCurrentValue((cVal += "0."));
    } else {
      setCurrentValue((cVal += "."));
    }
  };

  const handleOnDelete = () => {
    if (currentValue === "") {
      return;
    }

    setCurrentValue(currentValue.substring(0, currentValue.length - 1));
  };

  const handleOnCalc = (calcType) => {
    if (currentValue === "") {
      return;
    }

    let registerData = [...register];
    registerData.push(currentValue);

    switch (calcType) {
      case "+":
        registerData.push("+");
        break;
      case "-":
        registerData.push("-");
        break;
      case "*":
        registerData.push("*");
        break;
      case "/":
        registerData.push("/");
        break;
      default:
        registerData.push("+");
    }

    setRegister(registerData);
    clearCurrentValue();
  };

  const handleOnAdd = () => {
    handleOnCalc("+");
  };

  const handleOnDivide = () => {
    handleOnCalc("/");
  };

  const handleOnMultiply = () => {
    handleOnCalc("*");
  };

  const handleOnSubtract = () => {
    handleOnCalc("-");
  };

  const handleOnEquals = () => {
    if (currentValue === "") {
      return;
    }

    let calcData = [...register];
    calcData.push(currentValue);
    setRegister(calcData);

    setEqualClick(true);
  };

  const handleOnHistorySelected = (index) => {
    let historyDetail = history[index].result.toString();
    setCurrentValue(historyDetail);
    setExpression(history[index].expression);
  };

  const handleOnToggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const handleOnToggleSign = () => {
    setCurrentValue((parseFloat(currentValue) * -1).toString());
  };

  useEffect(() => {
    setCurrentValue(currentValue.toString());
  }, [currentValue]);

  useEffect(() => {
    setExpression(register.join(" "));
  }, [register]);

  useEffect(() => {
    if (isEqualClick === true) {
      const expression = register.join(" ");

      let result = math.eval(expression);

      setCurrentValue(result.toString());
      setResult(result);
      history.splice(0, 0, { expression, result });
      setRegister([]);
      setEqualClick(false);
    }
  }, [isEqualClick]);

  return (
    <div className="calculator mx-auto">
      <Display value={currentValue} expression={expression} />

      <HistoryToggle
        anyHistory={history.length > 0}
        onToggleHistory={handleOnToggleHistory}
      />

      {!showHistory && (
        <Keypad
          onDigit={handleOnDigit}
          onAdd={handleOnAdd}
          onSubtract={handleOnSubtract}
          onDivide={handleOnDivide}
          onMultiply={handleOnMultiply}
          onDecimalPoint={handleOnDecimalPoint}
          onEquals={handleOnEquals}
          onClear={handleOnClear}
          onClearAll={handleOnClearAll}
          onDelete={handleOnDelete}
          onToggleSign={handleOnToggleSign}
        />
      )}

      {showHistory && (
        <HistoryInfo
          history={history}
          onClearHistory={handleOnClearHistory}
          onSelected={handleOnHistorySelected}
        />
      )}
    </div>
  );
};

export default Calculator;
