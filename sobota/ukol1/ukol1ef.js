/**
 * Napis funkci opakuj. Bude prijimat 2 parametry.
 * Text a cislo. Funkce vypise na obrazovku text tolikrat kolik specifikuje cislo.
 * (napoveda: pouzij for cyklus uvnitr funkce)
 * 
 * Ukazka:
 * opakuj("Czechitas", 3);
 * // vypise:
 * Czechitas
 * Czechitas
 * Czechitas
 * 
 */
let zvoltext = "";
let zvolPocet = 0;

function opakuj (zvoltext, zvolPocet){
    for(let i = 0; i < zvolPocet; i++){
        console.log(zvoltext);
    }
}
opakuj("Czechitas", 4);
opakuj("Sobota!", 10);