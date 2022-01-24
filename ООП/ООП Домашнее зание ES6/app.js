// ! 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

//* function Component(tagName) {
//*     this.tagName = tagName || 'div';
//*     this.node = document.createElement(tagName);
//*   }
  
//*   Component.prototype.setText = function (text) { 
//*     this.node.textContent = text;
//*   };

//* Пример вызова:

//* const comp = new Component('span');
class Component {
    constructor(tagName){
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
    setText(text) {
        this.node.textContent = text;
    }
}
const comp = new Component('span');

//! 2. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.

class Calculator {
    constructor(startValue){
        this._startValue = startValue;
    }
    
    get startValue() {
        return this._startValue;
    }

    set startValue(num) {
        this._startValue = num;
    }

    plus(num) {
        this.startValue += num;
        return this.startValue;
    }

    minus(num) {
        this.startValue -= num;
        return this.startValue;
    }

    multiply(num) {
        this.startValue *= num;
        return this.startValue;
    }

    divide(num) {
        this.startValue /= num;
        return this.startValue;
    }
}

const calculator = new Calculator(5);