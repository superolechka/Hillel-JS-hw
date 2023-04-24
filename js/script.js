'use strict'

void function() {
    function newFlat (...argument) {
        if (argument.length > 1) throw new Error('Function accepts only 1 argument, too much arguments provided');
        const newArray = [];
        function preFlat (argument) {
            for(const a of argument) {
                !Array.isArray(a) ? newArray.push(a) :  preFlat(a)
            }
        }
        preFlat(argument)
        return newArray
    }

    console.log(newFlat([1, [2, 3], 4, [5, [6, [7, 8, 9, 10]]]]));
}()
