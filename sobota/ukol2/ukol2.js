/**
 *  a)
 * Definuj promenou x, uloz do ni cislo. 
 * Pokud je cislo vetsi jak 10, tak do promene x uloz x * 10.
 * 
 * let x = 6;
 * // nejaky kod
 * console.log(x); // 6
 * 
 * let x = 12;
 * // nejaky kod
 * console.log(x); // 120
 */
let x = 12;

if(x > 10){
    x = x * 10;
} else {
    x;
}
console.log(x);

/**
 * b)
 * Stejne jako 2a) ale presun svuj kod, ktery meni cislo do funkce! 
 * (Napoveda: funkce bude vracet hodnotu)
 */
let promenna;

function nasobek(y){
    let vysledek
    if(y > 10){
        vysledek = y * 10;
    } else {
        vysledek = y;
    }
    return vysledek;
}
promenna = nasobek(5);
console.log(promenna);
/**
 * c)
 * Napis funkci vetsi, ktera bude prijimat 2 parametry. 
 * Funkce VRATI vetsi z techto dvou parametru (napoveda: pouzij if) 
 * MUZES POUZIT JEN 1X RETURN  || POKUD SI POUZILA DRIVE 1X RETURN POUZIJ JEJ VICEKRAT
 * 
 * UVNITR FUNKCE NENI ZADNY CONSOLE.LOG
 * 
 * Ukazka:
 * let vysledek = vetsi(2,4);
 * console.log(vysledek); // 4 
 */

 let vysledekVetsi

 function vetsi(a, b){
     let vysledek;
     if(a > b){
         vysledek = a;
     } else if ( a < b){
         vysledek = b;
     } else {
         vysledek = 1;
     }
     return vysledek;
 }
 
 vysledekVetsi = vetsi(1,91);
 if(vysledekVetsi == 1){
     console.log("Zadana cisla jsou stejna")
 } else{
    console.log(vysledekVetsi);
 }
 