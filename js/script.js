'use strict'

void function () {

    const calculator = {
        read() {
            this.num1 = Number(prompt('Введіть перше число'));
            this.num2 = Number(prompt('Введіть друге число'));
            if (isNaN(this.num1) || isNaN(this.num1) || this.num1 === '' || this.num2 === '') alert('Введено некоректні дані')
        },
        sum() {
            return `${this.num1} + ${this.num2} = ${this.num1 + this.num2}`;
        },
        mul() {
            return `${this.num1} x ${this.num2} = ${this.num1 * this.num2}`;
        }
    };
    
    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );

}()