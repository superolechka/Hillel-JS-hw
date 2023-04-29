'use strict'
void function() {

    function counter(number = 0) {
        let quantity = number;
        let increaseCount = 0;
        let decreaseCount = 0;
        let valueCount = 0;
      
        function increase() {
            increaseCount++;  
            quantity++; 
        }
      
        function decrease() {
            decreaseCount++;
            quantity--;  
        }
      
        function value() {
            valueCount++;
            return quantity;
        }
      
        function getStatistic() {
            return { increaseCount, decreaseCount, valueCount };
        }
      
        function reset() {
            quantity = number;
            increaseCount = 0;
            decreaseCount = 0;
            valueCount = 0;
        }
      
        return {
            increase,
            decrease,
            value,
            getStatistic,
            reset,
        };
    }
     
    const counter1 = counter(10);
    const counter2 = counter(50);
      
    counter1.increase();
    counter1.increase();
    counter1.decrease();
    counter1.increase();
    counter1.value();
    console.log(counter1.getStatistic());
      
    counter2.increase();
    counter2.decrease();
    counter2.decrease();
    counter2.value();
    console.log(counter2.getStatistic());  
      
    counter1.reset();
    counter2.reset();

}()