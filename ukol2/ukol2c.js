/**
 * Ukol 2c)
 * Vstup na atrakci je povolne pouze osobam starsim 18 let a soucasne musi byt
 * osoba mladsi 65 let. 
 * 
 * Vytvor si promneou vek, a vypis jestli je vstup povolen. Pouzij logicky operator &&
 * 
 * let vek = 15; // vysledek: Vstup zakazan
 * let vek = 45; // vysledek: Vstup povolen
 * let vek = 75; // vysledek: Vstup zakazan
 */

//let vek = 15;
//let vek = 45;
let vek = 75;

if (vek > 18 && vek < 65) {
    console.log("Vstup na atrakci povolen.");
} else {
    console.log("Vstup na atrakci zakazan.");
}