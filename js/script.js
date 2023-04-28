'use strict'

void function() {

    let steps = 0;

    const mirrorNum = (num) =>  {
        let newNum = 0;
        while (num) {
            newNum = newNum * 10 + num % 10;
            num = Math.floor(num / 10);
        }
        return newNum;  
    }

    const makePalindrom = (num) => {
        steps++;
        const result = num + mirrorNum(num);
        return (result === mirrorNum(result)) ? result : makePalindrom(result);       
    }

    const getPalindrom = (num) => {
        return {
            result: makePalindrom(num),
            steps
        }   
    }
    
    console.log(getPalindrom(96))

}()