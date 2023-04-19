'use strict'

const isEven = (element) => {
    return element % 2 === 0;
}

const pseudoIndexOf = (array, element, n = 0) => {
    let result = -1;
    if (n >= array.length) return result;
    if (n < 0) {
        if (array.length + n < 0) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === element) {
                    result = i;
                    break;
                }
            }
        } else {
            for (let i = array.length + n; i < array.length; i++) {
                if (array[i] === element) {
                    result = i;
                    break;
                } 
            }
        }   
    } else {
         for (let i = n; i < array.length; i++) {
            if (array[i] === element) {
                result = i;
                break;
            } 
        }   
    }
    return result
}
console.log(pseudoIndexOf ([1, 12, 4, 5, 8, 12, 4, 2, 1, 12], 1, -10))


const pseudoLastIndexOf = (array, element, n = array.length - 1) => {
    let result = -1;
    if (n < 0) {
        if (array.length + n < 0) {
            return result;
        } else {
            for (let i = array.length + n; i >= 0 ; i--) {
                if (array[i] === element) {
                    result = i;
                    break;
                } 
            } 
        }    
    } else {
        for (let i = n; i >= 0 ; i--) {
            if (array[i] === element) {
                result = i;
                break;   
            } 
        }
    }
    return result
}
console.log(pseudoLastIndexOf([1, 12, 4, 5, 8, 4, 2, 1, 12], 4, 4))


const pseudoFind = (array, condition) => {
    let result = undefined;
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            result = array[i];
            break;
        }
    }
    return result;    
}
console.log(pseudoFind([7, 11, 5, 14, 9, 44, 23, 100, 12], isEven))


const pseudoFindIndex = (array, condition) => {
    let result = -1;
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            result = i;
            break;
        }
    }
    return result;    
}
console.log(pseudoFindIndex([7, 12, 5, 14, 9, 44, 23, 100, 12], isEven))


const pseudoIncludes = (array, element, n = 0) => {
    let result = false;
    if (n >= array.length) return result;
    if (n < 0) {
        if (array.length + n < 0) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === element) {
                    result = true;
                    break;
                }  
            } 
        } else {
            for (let i = array.length + n; i < array.length; i++) {
                if (array[i] === element) {
                    result = true;
                    break;
                }  
            }
        }    
    } else {
          for (let i = n; i < array.length; i++) {
            if (array[i] === element) {
                result = true;
                break;
            } 
        }
    }
    return result
}
console.log(pseudoIncludes([1, 12, 4, 5, 8, 4, 2, 1, 12], 5, -5));


const pseudoEvery = (array, condition) => {
    let result = true;
    if (array.length === 0) return result;
    for (let i = 0; i < array.length; i++) {
        if (!condition(array[i])) {
        result = false;
        break;
        }
    }
    return result;    
}
console.log(pseudoEvery([7, 12, 4, 14, 8, 44, 23, 100, 12], isEven))


const pseudoSome = (array, condition) => {
    let result = false;
    if (array.length === 0) return result;
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
        result = true;
        break;
        }
    }
    return result;    
}
console.log(pseudoSome([6, 11, 4, 14, 9, 44, 23, 100, 12], isEven))
console.log(pseudoSome([], isEven))