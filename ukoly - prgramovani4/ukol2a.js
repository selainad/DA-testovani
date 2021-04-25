/**
 * Vypis na obrazovku druhy a posledni prvek v poli. Tj 9 a 6
 */

let pole = [7,9,5,4,6];

console.log(pole[1] + ", " + pole[4]);

/**
 * Uloz si druhy a posledni prvek v poli do promene a vypis jejich soucet, tj 9 + 6 = 15
 */

let x = pole[1];
let y = pole[4];
let soucet = x + y;
console.log(soucet);

/** 
 * Napis si funkci, ktera bude prijimat pole, a 2 indexy z pole. Funkce vrati soucet techto prvku.
 */

function mojeFunkce(pole, indexA, indexB){
    let a = pole[indexA];
    let b = pole[indexB];
    let soucet = a + b;
    return soucet;
}

let vysledek = mojeFunkce(pole, 0, 2);
console.log(vysledek); // 7+5 => 12


