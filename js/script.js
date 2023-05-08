'use strict'

void function () {

    function generateList(array) {

        const list = document.createElement("ul");
      
        array.forEach((item) => {
            const li = document.createElement('li'); 
            if (Array.isArray(item)) {
                li.appendChild(generateList(item));  
            } else {
                li.textContent = item; 
            }
            list.appendChild(li);
          });

        return list;
    }
    
    const exemple = [1, [1.1, 1.2, 1.3], 2, 3, 4 ,[4.1, 4.2], 5];
    const testList = generateList(exemple);
    document.body.appendChild(testList);
    
} ()