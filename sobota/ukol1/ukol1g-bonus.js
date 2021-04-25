/**
 * 1g) bonus
 * 
 * Napis funkci superPole(), ktere prijme cislo X a
 * vrati pole plne cisel 0 - X (1 az X)
 * 
 * let vysledek = superPole(5);
 * console.log(vysledek); // [0,1,2,3,4]
 * 
 * 
let pole = [];

function superPole(pocet) {
    let pole = [];
    for (let i = 0; i < pocet; i++) {
        pole[i] = i;
    }
    return pole;
}
//pole = superPole(10);
pole = superPole(5);
console.log(pole)

 */



/**
 * 1gg)
 * Uprav funkci, tak at prijima 2 cisla.
 * Prvni urci zacatek cisel, druhe urci pocet cisel v poli.
 * 
 * let vysledek = superPole(5,3);
 * console.log(vysledek); // [5,6,7]
 */

let pole = [];

function superPole(zacatek, pocet) {
    let pole = [];
    for (let i = 0; i < pocet; i++) {
        pole[i] = zacatek;
        zacatek = zacatek + 1;
    }
    return pole;
}
//pole = superPole(10);
pole = superPole(5, 3);

console.log(pole)