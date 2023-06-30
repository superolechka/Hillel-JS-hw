"use strict";

(function () {
    function Student(firstName, lastName, yearOfBirth, lessonsCount = 10) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.lessonsCount = lessonsCount;

        this.attendance = new Array(lessonsCount);
        this.marks = new Array(lessonsCount);
        this.currentLesson = 0;
    }

    Student.prototype.setAttendance = function (flag, increment = true) {
        if (this.lessonsCount === this.currentLesson) return;
        this.attendance[this.currentLesson] = flag;
        increment ? this.currentLesson += 1 : null;
    }

    Student.prototype.present = function (mark = null) {
        this.setAttendance(true, mark === null);
        if (mark !== null && !this.validateMark(mark)) return;
        if (mark !== null) {
            this.mark(mark);
            this.currentLesson += 1
        }
    }

    Student.prototype.absent = function () {
        this.setAttendance(false)
    }

    Student.prototype.age = function () {
        let realDate = new Date();
        return realDate.getFullYear() - Number(this.yearOfBirth)    
    }

    Student.prototype.lessonRetake = function (lessonIndex, mark) {
        this.attendance[lessonIndex] = true;
        this.mark (mark, lessonIndex)
    }

    Student.prototype.validateMark = function (mark) {
        if (mark >= 0 && mark <= 10) return true; 
        console.warn('Wrong mark');
        return false;
    }

    Student.prototype.mark = function (mark, lessonIndex) {
        if (!this.validateMark) return;
        if (typeof lessonIndex === 'number') {
            this.marks[lessonIndex] = mark;
            return; 
        }
        this.marks[this.currentLesson] = mark    
    }

    Student.prototype.calcAvgAttd = function () {
        const attdCalc = this.attendance.reduce((acc, item) => {
            item ? acc += 1 : null;
            return acc;
        }, 0)

        return attdCalc / this.currentLesson
    }

    Student.prototype.calcAvgMark = function () {
        const markCalc = this.marks.reduce((acc, item) => {
                if (typeof item !== 'undefined') {
                    acc.sum += item;
                    acc.lessonsCount += 1
                }
                return acc
            },
            {
                sum: 0,
                lessonsCount: 0
            }
        )
        return markCalc.sum / markCalc.lessonsCount
    }

    Student.prototype.summary = function () {
        const avgMark = this.calcAvgMark();
        const avgAttd = this.calcAvgAttd();
        if (avgMark >= 9 && avgAttd >= 0.9) return "Ути какой молодчинка!";
        if (avgMark < 9 && avgAttd < 0.9) return "Редиска!";
        if (avgMark < 9 || avgAttd < 0.9) return "Норм, но можно лучше";    
    }

    const st = new Student('Vova', 'Shaitan', '1997', 10)

    st.present(1);
    st.present(10);
    st.present(3);
    st.present(5);
    st.present(10);
    st.present(10);
    st.present(6);
    st.absent();
    st.absent();
    st.absent();

    console.log(st);
    console.log(st.calcAvgAttd());
    console.log(st.calcAvgMark());
    console.log(st.age());
    console.log(st.summary())


    const st1 = new Student('Olechka', 'Skorobagach', '1975', 10)

    st1.present(10);
    st1.present(9);
    st1.absent(1);
    st1.present(10);
    st1.present(10);
    st1.present(10);
    st1.present(10);
    st1.present(9);
    st1.present(10);
    st1.present(10);
    
    console.log(st1);
    console.log(st1.calcAvgAttd());
    console.log(st1.calcAvgMark());
    console.log(st1.age());
    console.log(st1.summary())

})()

