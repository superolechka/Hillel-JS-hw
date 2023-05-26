'use strict';

void function() {
    const form = document.querySelector('#form');
    const inputs = Array.from(form.querySelectorAll('select, textarea, input:not([type="file"])'));
    const DATA_KEY = 'inputsData';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const data = inputs.reduce((acc, {name, value}) => {
            acc[name] = value;
            return acc;
        }, {});

        localStorage.setItem(DATA_KEY, JSON.stringify(data));
        window.location.href = 'page.html';
    })
    
} ()
