'use strict'

void function () {

    const form = document.getElementById('form');

    const button = form.querySelector('button');

    const getData = () => {
        const formData = {};
        const formElements = form.querySelectorAll('input, select, textarea');
        formElements.forEach((element) => {
            formData[element.name] = element.value;
        });
        console.log(formData);
    }

    button.addEventListener('click', getData);

} ()