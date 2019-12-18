/**
 * Given a collection of games with mentioned least required RAM, 
 * buy the collection, if atleast one of the games 
 * can run in your computer (return true/false)
 */

const games = [
    { name: "Counter Strike", ram: 8 },
    { name: "GTA 5", ram: 16 },
    { name: "Need for speed", ram: 12 },
    { name: "Road Rash", ram: 2 },
]

const myRam = 12;

// Without some helper
function canBuy1 (games, requiredRam) {
    let canBuy = false;
    for (let i=0; i<games.length; i++) {
        if (games[i].ram >= requiredRam) {
            canBuy = true;
            break;
        }
    }
    return canBuy;
}
console.log ('1. Can buy games? ', canBuy1 (games, myRam));

// With some, without arrow functions
function canBuy2 (games, requiredRam) {
    return games.some (function (game) {
        return game.ram >= requiredRam;
    });
}
console.log ('2. Can buy games? ', canBuy2 (games, myRam));

// With some, with arrow function  (one liner)
const canBuy3 = (games, requiredRam) => games.some (game => game.ram>=requiredRam);
console.log ('3. Can buy games? ', canBuy3 (games, myRam));