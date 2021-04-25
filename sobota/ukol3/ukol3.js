/**
 * Ukol 3a)
 * Definuj objekt, ktery bude mit klice: jmeno, prijmeni, vek . 
 * Vypis objekt na consoli.
 * 
 * Vysledek:
 * console.log(mujObjekt); //{jmeno: "petr", prijmeni: "jahoda", vek: 98}  
 */
let osoba = {
    jmeno : "Daniela",
    prijemni: "Kavova",
    vek: 30
}
console.log(osoba);

/**
 * Vypis pouze vek z objektu:
 * // 98
 */

console.log(osoba.vek);

/**
 * Zmen jmeno v objektu:
 * console.log(mujObjekt); // {jmeno: "karel", prijmeni: "jahoda", vek: 98}
 */

let mujObjekt = osoba;
mujObjekt.jmeno = "Anezka";
console.log(mujObjekt);