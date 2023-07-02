'use strict'

void function (){

    const playerProSet = new WeakSet(); 

    function addPlayerToLevelSet(player) {
        playerProSet.add(player);
    } 

    const player1 = { id: 1, name: 'Иван', level: 10 };
    const player2 = { id: 2, name: 'Вова', level: 12 };
    addPlayerToLevelSet(player1);
    addPlayerToLevelSet(player2);
    
    console.log(playerProSet);

} ()