/** OTOCENI POLE - TEZKE
 * Napis funkci ktera bude prijimat pole a vrati jej otocene.
 * 1# Prvni reseni musi obsahovat cyklus.
 * 
 * 2# Vygoogli jak muzes otocit pole bez cyklu ;-)   
 */

function otocPole(pole) {
   let otoc = [];
   let k = pole.length;
   for (let i = 0; i < pole.length; i++) {
      otoc[i] = pole[k-1];
      k = k - 1;
   }
   return otoc;
}

let krasnePole = [9, 7, 6, 2];
let otocnePole = otocPole(krasnePole);
console.log("Otocceni pole pomoci cyklu: ")
console.log(otocnePole) // [2,6,7,9]

//otoceni pole pomoci funkce reverse
let poleFunkce = [2, 4, 9, 10, 12];
let otocFunkce = poleFunkce.reverse();
console.log("Otocene pole pomoci funkce reverse: ");
console.log(otocFunkce);