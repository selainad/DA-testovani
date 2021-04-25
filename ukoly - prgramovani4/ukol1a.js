/** UKOL 1 A:
 * Napis program, ktery aplikuje 50% slevu po 16 hodine na cenu. 
 * Tedy pokud je v promena hodina vetsi jako 16, chceme na obrazovku vypsat polovicni (/2) cenu.
 * Podivej se na ukazkove vystupy z programu na konci souboru. 
 * 
 * Muzes upravovat a prepisovat radky, ale nesmis pouzit zadne console.log navic, krome tech 
 * ktere uz jsou definovane. 
 *  
 */

let cena = 100;
//let hodina = 14; 
hodina = 17;
let sleva;

if(hodina > 16){
    sleva = cena/2;
} else {
    sleva = cena;
}


console.log("Puvodni cena je: " + cena);
console.log("Aktualne je: " + hodina);
console.log("Aktualni cena je: " + sleva); // bude potreba upravit tento radek


//// Ukazky vystupu programu:

// Puvodni cena je: 100
// Aktualne je: 14
// Aktulani cena je: 100

// Puvodni cena je: 100
// Aktualne je: 17
// Aktulani cena je: 50


// Napoveda: staci pouzit jeden if a jednu promenou navic 

