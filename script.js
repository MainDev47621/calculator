class Calculator {
    constructor(prevOperandElement, currOperandElement) {
        this.prevOperandElement = prevOperandElement;
        this.currOperandElement = currOperandElement
        this.clear();
    }

    clear() {
        this.prevOperand = '';
        this.currOperand = '';
        this.operation = '';
    }

    delete() {
        this.currOperand = this.currOperand.slice(0, -1);
    }

    addNumber(number) {
        if (number === '.' && this.currOperand.includes('.')) return;
        this.currOperand += number;
    }

    selectOperation() {

    }

    compute() {

    }

    updateDisplay() {
        this.prevOperandElement.innerText = this.prevOperand;
        this.currOperandElement.innerText = this.currOperand;
    }
}

const prevOperandElement = document.querySelector('.prev-operand');
const currOperandElement = document.querySelector('.curr-operand');

const numberBtns = document.querySelectorAll('[btn-number]');
const operationsBtns = document.querySelectorAll('[btn-operation]');
const clearBtn = document.querySelector('[btn-clear]');
const deleteBtn = document.querySelector('[btn-clear]');
const equalsBtn = document.querySelector('[equals-btn]');

const calculator = new Calculator(prevOperandElement, currOperandElement);