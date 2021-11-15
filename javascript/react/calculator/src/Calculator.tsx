import './Calculator.css';
import { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState('');
  const [left, setLeft] = useState('0');
  const [right, setRight] = useState('0');

  function addDigit(digit: string) {
    if (!operator) {
      const value = !parseFloat(left) ? digit : left + digit;
      setLeft(value);
      setDisplay(value);
    } else {
      const value = !parseFloat(right) ? digit : right + digit;
      setRight(value);
      setDisplay(value);
    }
  }

  function addOperator(op: string) {
    setOperator(op);
  }

  function addComma() {
    if (!operator) {
      const value = left.includes('.') ? left : left + '.';
      setLeft(value);
      setDisplay(value);
    } else {
      const value = right.includes('.') ? right : right + '.';
      setRight(value);
      setDisplay(value);
    }
  }

  function onClear() {
    setDisplay('0');
    setOperator('');
    setLeft('0');
    setRight('0');
  }

  function onPercent() {
    if(!left && !right) {
      return;
    }

    if (!operator) {
      const value = parseFloat(left) / 100;
      setLeft(value.toString());
      setDisplay(value.toString());
    } else {
      const value = parseFloat(right) / 100;
      setRight(value.toString());
      setDisplay(value.toString());
    }
  }

  function onInvert() {
    if(!left && !right) {
      return;
    }

    if(!operator) {
      const value = left.includes('-') ? left.substr(1) : '-' + left;
      setLeft(value);
      setDisplay(value);
    } else {
      const value = right.includes('-') ? right.substr(1) : '-' + right;
      setRight(value);
      setDisplay(value);
    }
  }

  function calculate() {
    if (!operator) {
      return;
    }

    const value = getAction()(parseFloat(left), parseFloat(right));
    setLeft(value.toString());
    setDisplay(value.toString());
    setRight('0');
    setOperator('');
  }

  function getAction() {
    switch (operator) {
      case '+':
        return sum;
      case '-':
        return sub;
      case '*':
        return mul;
      case '/':
        return div;
      default:
        throw new Error('Unsupported operator: ' + operator);
    }
  }

  const sum = (left: number, right: number): number => left + right;

  const sub = (left: number, right: number): number => left - right;

  const mul = (left: number, right: number): number => left * right;

  const div = (left: number, right: number): number => left / right;

  return (
    <div className="container">
      <div className="display">
        <span>{display}</span>
      </div>
      <div className="cellpad">
        <div className="row">
          <div className="cell wd_25" onClick={() => onClear()}>C</div>
          <div className="cell wd_25" onClick={() => onInvert()}>+-</div>
          <div className="cell wd_25" onClick={() => onPercent()}>%</div>
          <div className="cell wd_25" onClick={() => addOperator('/')}>/</div>
        </div>
        <div className="row">
          <div className="cell wd_25" onClick={() => addDigit('7')}>7</div>
          <div className="cell wd_25" onClick={() => addDigit('8')}>8</div>
          <div className="cell wd_25" onClick={() => addDigit('9')}>9</div>
          <div className="cell wd_25" onClick={() => addOperator('*')}>X</div>
        </div>
        <div className="row">
          <div className="cell wd_25" onClick={() => addDigit('4')}>4</div>
          <div className="cell wd_25" onClick={() => addDigit('5')}>5</div>
          <div className="cell wd_25" onClick={() => addDigit('6')}>6</div>
          <div className="cell wd_25" onClick={() => addOperator('-')}>-</div>
        </div>
        <div className="row">
          <div className="cell wd_25" onClick={() => addDigit('1')}>1</div>
          <div className="cell wd_25" onClick={() => addDigit('2')}>2</div>
          <div className="cell wd_25" onClick={() => addDigit('3')}>3</div>
          <div className="cell wd_25" onClick={() => addOperator('+')}>+</div>
        </div>
        <div className="row">
          <div className="cell wd_25" onClick={() => addDigit('0')}>0</div>
          <div className="cell wd_25" onClick={() => addComma()}>.</div>
          <div className="cell wd_50 total" onClick={() => calculate()}>=</div>
        </div>
      </div>
    </div>
  )
}

export default Calculator;