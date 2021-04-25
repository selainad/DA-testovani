/**
 * 1d) 
 * Definuj si dve promene a prohod jejich obsah.
 */

let x = 7;
let y = 9;
let prohod = x;

x = y;
y = prohod;

console.log(x, y); // Chci aby vypsalo: 9, 7