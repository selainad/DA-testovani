/**
 * 1a) Vypis na obrazovku "Ahoj Svete!"
 * 
 * 1aa) Text "Ahoj Svete!" si uloz do promene a vypis pouze tuto promenou. 
 */
console.log("Ahoj svete!"); //1a
let pozdrav = "Ahoj svete!"
console.log(pozdrav); //1aa


/**
 * 1b) 
 * Definuj si dve promene a vypis si jejich soucet.
 * let x = 5;
 * let y = 7;
 * 
 * Vysledek: 12
 * 
 * 2bb) Vypis si jejich soucet i s textem.
 * Vysledek: "Soucet je 12"
 */
//1b
let x = 5;
let y = 7;
let vysledek = x + y; 
console.log(x+y); 
//2bb
console.log("Soucet je: " + vysledek);


/**
 * 1c)
 * Definuj si dve promene, prirad jim nahodne cisla.
 * Vypis na obrazovku vsechny aritmeticke operace mezi temito cisly.
 */
// 1c
let a = 50;
let b = 12;
console.log("Vysledek scitani 50 a 12: " + (a+b));
console.log("Vysledek odcitani 50 a 12: " + (a-b));
console.log("Vysledek nasosbeni 50 a 12: " + a*b);
console.log("Vysledek deleni 50 a 12: "+ (a/b));