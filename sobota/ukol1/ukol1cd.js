/**
 * 1c)
 * Napis funkci soucet, ktera bude prijimat 2 parametry. 
 * Funkce vrati soucet techto 2 parametru.
 * 
 * Priklad:
 * let vysledek = soucet(3,4);
 * console.log(vysledek); // vypise 7
 */

let a;
let b;

function soucet(a, b){
    
    let vysledek = a + b;
    return vysledek
}

let vysledek = soucet(5,7);
console.log("Soucet cisel je:" + vysledek);


/**
 * Napis funkci vetsi, ktera bude prijimat 2 parametry. 
 * Funkce vrati vetsi z techto dvou parametru (napoveda: pouzij if)
 * 
 * let vysledek = vetsi(2,4);
 * console.log(vysledek); // 4
 * 
 * let vysledek = vetsi(8,1);
 * console.log(vysledek);  // 8
 * 
 */
let x;
let y;

function vetsi(x, y){
    if(x > y){
        return x;
    } else{
        return y;
    }
}

let vysledekVetsi = vetsi(8,4);
//let vysledekVetsi = vetsi(1,90);
console.log("Vetsi z cisel je: " + vysledekVetsi);