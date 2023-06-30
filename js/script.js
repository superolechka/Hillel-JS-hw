'use strict'

void function() {

    function totalCost(products) {

        const productsMap = new Map();

        products.forEach(([product, price]) => productsMap.set(product, price));
      
        let totalSum = 0;
      
        for (const price of productsMap.values()) {
            totalSum  += price;
        }

        return totalSum;

    }

    const goods = [['футболка', 15], ['шорты', 25], ['носки', 5]];
    console.log(totalCost(goods)); 
      
} ()