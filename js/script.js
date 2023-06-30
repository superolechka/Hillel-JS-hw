'use strict'

void function () {

    function uniqSymbolsCount(string) {

        const uniqSymbols = new Set();
        
        for (let i = 0; i < string.length; i++) {
            uniqSymbols.add(string[i]);
        }
        
        return uniqSymbols.size;

    }
    
    const testString = "abracadabra";
    console.log(uniqSymbolsCount(testString))

} ()

  