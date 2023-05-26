'use strict';

void function() {

    const placeForList = document.querySelector('#dataList');

    const listItems = JSON.parse(localStorage.getItem('inputsData'));

    const createList = (listItems) => {
        if (listItems && Object.keys(listItems).length > 0) {
            const ul = document.createElement('ul');

            for (const key in listItems) {
                if (listItems.hasOwnProperty(key)) {
                    let li = document.createElement('li');
                    li.textContent = key + ': ' + listItems[key];
                    ul.appendChild(li);
                }
            }
            placeForList.appendChild(ul);
        } else { 
            placeForList.textContent = 'No data available';
        } 
    };

    createList(listItems);

} ()