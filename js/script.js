'use strict'

void function() {

    const getAdder = function (n) { 
        let result = 0; 
        return function(n) { 
            result += n; 
            return result; 
        } 
    };
    let sum = getAdder();
    console.log(sum(3));
    console.log(sum(5)); 
    console.log(sum(20)); 

}()