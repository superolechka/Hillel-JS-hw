'use strict';

const userYear = prompt('Введіть свій рік народження');
if (userYear === null || userYear === '' || isNaN(+userYear)) {
    alert('Шкода, що Ви не захотіли ввести рік народження')
} else {
    const userAge = 2023 - Number(userYear);
    const userCity = prompt('Введіть назву міста, у якому Ви живете');  
    if (userCity === null || userCity === '') {
        alert('Шкода, що Ви не захотіли ввести назву міста')
    } else {
        const userSport = prompt('Вкажіть свій улюблений вид спорту');
        if (userSport === null || userSport === '') {
            alert('Шкода, що Ви не захотіли вказати вид спорту')
        } 
        let result;
        switch(userCity) {
            case 'Київ':
                result = 'Ви живете у столиці України';
                break;
            case 'Тбілісі':
                result = 'Ви живете у столиці Грузії';
                break;
            case 'Рига':
                result = 'Ви живете у столиці Латвії';
                break;
            default:
                result = `Ви живете у місті ${userCity}`;
                break;
        }
        let sportInfo;
        switch(userSport) {
            case 'Футбол':
                sportInfo = 'Круто! Хочете стати як Андрій Шевченко?';
                break;
            case 'Бокс':
                sportInfo = 'Круто! Хочете стати як брати Кличко?';
                break;
            case 'Плавання':
                sportInfo = 'Круто! Хочете стати як Яна Клочкова?';
                break;
            default:
                sportInfo = `${userSport} - чудовий вибір! Бажаю успіху!`;
                break;
        }
        const userInfo = `Вам ${userAge}. \n${result}. \n${sportInfo}`; 
        alert(userInfo);
    }
}
