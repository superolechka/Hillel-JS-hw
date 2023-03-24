'use strict';

const potatoWeight = 75;
const volume = 48;
const price = 13;

const costOfPotatoes = (volume, price, potatoWeight) => {
    const consumption = potatoWeight * 4;
    const totalCost = consumption * volume * 0.001 * price;
    return Math.ceil(totalCost);
}

console.log(costOfPotatoes(volume, price, potatoWeight));