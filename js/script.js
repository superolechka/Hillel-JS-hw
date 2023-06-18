'use strict'
void function () {

    function createArrayIterator(array) {
        let index = 0;
      
        return {
            next: function () {
                if (index >= array.length) return { done: true };
                return { value: array[index++], done: false };
            }
        };
    }
    
    
    const myArray = ['Ruby', 'C++', 'JavaScript', 'Piton', 'php'];
    const iterator = createArrayIterator(myArray);
    
    let result = iterator.next();
    while (!result.done) {
        console.log(result);
        result = iterator.next();
    }

} ()