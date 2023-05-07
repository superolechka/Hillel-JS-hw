'use strict'

const list = document.querySelectorAll('#ulId li');
list.forEach(item => console.log(item.textContent));


const ul = document.querySelector('#ulId');
const attributesValue = [];
const attributesName = [];
for (const atr of ul.attributes) {
    attributesValue.push(atr.value);
    attributesName.push(atr.name);
}
console.log(attributesValue);
console.log(attributesName);


const userName = "Olechka";
const lastLi = document.querySelector('#ulId li:last-child');
lastLi.innerHTML = `Привет меня зовут ${userName}`;


const firstLi = document.querySelector('#ulId li:first-child');
firstLi.setAttribute('data-my-name', userName);


ul.removeAttribute('data-dog-tail');