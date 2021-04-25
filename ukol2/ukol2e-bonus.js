/**
 * Ukol 2e
 * 
 * Do promene X pripocti promenou y pouze tehdy pokud je promena y vetsi jak 10;
 * 
 * let x = 5;
 * let y = 20;
 * console.log("Promena X: " + x);  // Vysledek: Promena X: 25
 * 
 * let x = 5;
 * let y = 6;
 * console.log("Promena X: " + x);  // Vysledek: Promena X: 5
 */

//let x = 5;
//let y = 20;
let x = 5;
let y = 6;

if(y>10){
    console.log("Promena x: " + (x+y));
} else {
    console.log("Promena x: " + x);
}