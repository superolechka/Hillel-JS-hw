'use strict';

const base = prompt('Введіть основу степеня');
const exponent = prompt('Введіть показник степеня');

function exponentiation( base , exponent = 1 ) {
    if (!!(+base) == false || isNaN(+exponent)) {
        return "Some error"} else {
        const result = Number(base) ** Number(exponent);
        return result
    }
}
const power = exponentiation(base, exponent);
alert(power);



