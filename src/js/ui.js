let calculatorInstance;
let displayElement;

function update() {
  const valueToDisplay =
    calculatorInstance.currentOperand ||
    calculatorInstance.previousOperand ||
    '0';
  displayElement.innerHTML = valueToDisplay;
}

export function init(calculator) {
  calculatorInstance = calculator;

  displayElement = document.querySelector('.calculator__display');

  const numberBtns = document.querySelectorAll('[data-number]');
  const operationBtns = document.querySelectorAll('[data-operation]');
  const clearBtn = document.querySelector('[data-action="clear"]');
  const changeBtn = document.querySelector('[data-action="changeSign"]');
  const percentBtn = document.querySelector('[data-action="percent"]');
  const equalsBtn = document.querySelector('[data-operation="equals"]');

  numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
      calculatorInstance.appendNumber(button.dataset.number);
      update();
    });
  });

  operationBtns.forEach((button) => {
    button.addEventListener('click', () => {
      let operation = button.dataset.operation;
      if (operation === 'equals') return;
      console.log();
      calculatorInstance.choseOperation(operation);
      update();
    });
  });

  clearBtn.addEventListener('click', () => {
    calculatorInstance.clear();
    update();
  });

  changeBtn.addEventListener('click', () => {
    calculatorInstance.changeSign();
    update();
  });

  percentBtn.addEventListener('click', () => {
    calculatorInstance.getPercentage();
    update();
  });

  equalsBtn.addEventListener('click', () => {
    calculatorInstance.calculate();
    update();
  });

  update();
}
