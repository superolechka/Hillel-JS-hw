'use strict'

void function () {
    const numInRange = (range) => Math.floor(Math.random() * range) + 1;
    
    const generateRandomNum = (length = 100) => {
        const arrOfNums = [];
        const numGenerator = () => {
            if(arrOfNums.length === length) return NaN;
            const randomNum = numInRange(length)
            if (arrOfNums.includes(randomNum)) return numGenerator()
            arrOfNums.push(randomNum);
            return randomNum;
        }
        return numGenerator
    }

    const numGeneratorInstance = generateRandomNum()
    let shouldWork = true;
    while(shouldWork) {
        const genNum = numGeneratorInstance();
        if(isNaN(genNum)) shouldWork = false
        console.log(genNum)
    }
}()