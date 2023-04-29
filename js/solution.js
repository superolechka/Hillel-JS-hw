'use strict'

void function() {

    const list = document.getElementById("ulId");
    const count = list.children.length;
    const arrayOfLi = [];

    for (const li of list.children) {
        console.log(li);
        arrayOfLi.push(li.innerHTML);
    }

    console.log(count);
    console.log(arrayOfLi);

}()