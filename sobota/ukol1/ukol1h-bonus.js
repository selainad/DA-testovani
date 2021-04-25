/**
 * Napis funkci, ktera prijme 2 parametry, 
 * secte jejich absolutni hodnotu: 
 * secti(-4,5); // vrati 9
 */
let x;
let y;
let vypocitej;

function absolutniSoucet(x,y){
    let vysledek;
    vysledek = Math.abs(x) + Math.abs(y);
    return vysledek;
}
vypocitej = absolutniSoucet(-4,5);

console.log(vypocitej);

/**
 * Napis funkci, ktera prijme pole a prvek a vrati hodnotu true/false podle toho,
 * jestli se prvek v poli nachazi (Funkce indexOf vraci index a nebo -1 pokud prvek nenajde - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf):
 * zkontroluj([6,4,3], 3) // true 
 * zkontroluj([6,4,3], 2) // false
 */

let pole = [];
let prvek;
let pritomny = false;
let cislo = 0;

function jeVPoli (pole, prvek){
    let index = pole.indexOf(prvek);
    if (index == -1){
        console.log(false);
    } else{
        console.log(true);
    }
}

cislo = jeVPoli([6,4,3], 3)


/**
 * Napis funkci, prijme pole, index1,index2 a prehodi prvky v poli na techto indexech. 
 * Vrati pole.
 * prehod([5,8,4,7], 1, 3) // [5,7,4,8]
 */
let cisla = [];
let vysledek = [];
let index1;
let index2;

function prohod(cisla, index1, index2){
    let mezikrok;
    mezikrok = cisla[index1];
    cisla[index1] = cisla[index2];
    cisla[index2] = mezikrok;
    return cisla;
}

vysledek =  prohod([5,8,4,7], 1, 3);
console.log(vysledek);

