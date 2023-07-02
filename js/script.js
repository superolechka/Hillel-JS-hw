'use strict'

void function () {

    const students = [
        { name: 'John', age: 20, subject: 'Math' },
        { name: 'Alice', age: 22, subject: 'English' },
        { name: 'Bob', age: 21, subject: 'History' }
    ];
      
    function printGreetings(students) {
        students.forEach(({ name, subject }) => {
            console.log(`Привет, ${name}! Ты изучаешь предмет ${subject}`);
        });
    }
      
    printGreetings(students);
      
}()