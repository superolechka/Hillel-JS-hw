'use strict';

const base = prompt('Введіть основу степеня');
const exponent = prompt('Введіть показник степеня');

function exponentiation( base , exponent = 1 ) {
    if (base === null || exponent === null) return "Some error";
    if (+base === 0 || +exponent === 0) return "Some error";
    if (isNaN(+base) || isNaN(+exponent)) return "Some error";
    const result = Number(base) ** Number(exponent);
    return result
}
const power = exponentiation(base, exponent);
alert(power);



