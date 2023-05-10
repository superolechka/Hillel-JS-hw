'use strict'

void function () {

    function createTable() {

        const table = document.createElement('table');
        let number = 1;
        
        for (let i = 0; i < 10; i++) {
            const tableRow = document.createElement('tr');
        
            for (let j = 0; j < 10; j++) {
                const tableCell = document.createElement('td');
                tableCell.textContent = number;
                tableRow.appendChild(tableCell);
                number++;
            }
        
            table.appendChild(tableRow);
        }
        
        document.body.appendChild(table);
    }
  
    createTable();

} ()