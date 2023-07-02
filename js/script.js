'use strict'

void function () {

    const gradeMap = new WeakMap();
    function saveGrades(student, grades) {
        gradeMap.set(student, grades);
    }
      
    const student = { name: 'Иван Иванов' };
    const grades = { math: 90, fiz: 85, eng: 95 };
      
    saveGrades(student, grades);
    console.log(gradeMap);
      
} ()