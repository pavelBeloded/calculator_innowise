export class Calculator {
  currentOperand = null;
  previousOperand = null;
  operation = null;

  operationChange = {
    subtract: 'add',
    add: 'subtract',
    divide: 'multiply',
    multiply: 'divide',
  };

  clear() {
    this.operation = null;
    this.previousOperand = null;
    this.currentOperand = null;
  }

  appendNumber(number) {
    let stringOperand = this.currentOperand ? String(this.currentOperand) : '';
    if (number === ',') number = '.';

    if (stringOperand === '' && number === '.') stringOperand += '0';

    if (stringOperand[stringOperand.length - 1] === '.' && number === '.')
      return;

    stringOperand += number;
    this.currentOperand = stringOperand;
  }

  choseOperation(operation) {
    if (this.currentOperand === null && this.previousOperand !== null) {
      this.operation = operation;
      return;
    }

    if (this.previousOperand !== null) {
      this.calculate();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = null;
  }

  changeSign() {
    if (this.currentOperand === null || this.currentOperand === '0') return;

    this.currentOperand = String(parseFloat(this.currentOperand) * -1);
  }

  getPercentage() {
    if (this.currentOperand === null) return;

    const value = parseFloat(this.currentOperand);
    this.currentOperand = String(value / 100);
  }

  calculate() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case 'add':
        result = this.add(+this.previousOperand, +this.currentOperand);
        break;
      case 'subtract':
        result = this.subtract(+this.previousOperand, +this.currentOperand);
        break;
      case 'multiply':
        result = this.multiply(+this.previousOperand, +this.currentOperand);
        break;
      case 'divide':
        result = this.divide(+this.previousOperand, +this.currentOperand);
        break;
      default:
        return;
    }

    this.currentOperand = result;
    this.operation = null;
    this.previousOperand = null;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) return 'Error';
    return a / b;
  }
}

let calc = new Calculator();

calc.currentOperand;
