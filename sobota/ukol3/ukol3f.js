/**
 * Pouzij predchozi funkci pro vytvoreni dvou promenych.
 * let osoba1 = vytvorOsobu("Karel", "Polivka");
 * let osoba2 = vytvorOsobu("tomas", "boruvka");
 * console.log(osoba1); // {jmeno: "Karel", prijmeni: "Polivka"}
 * console.log(osoba2); // {jmeno: "tomas", prijmeni: "boruvka"}
 */

 function vytvorOsobu(jmeno, prijmeni){
    let osoba = {
        jmeno: jmeno,
        prijemni: prijmeni
    }
    return osoba;
}
let osoba1 = vytvorOsobu("Karel", "Polivka");
let osoba2 = vytvorOsobu("Tomas", "Boruvka");

console.log(osoba1);
console.log(osoba2);

/**
 * Vytvor si pole z osoba1 a osoba2
 * let mojePole = [osoba1, osoba2]
 * console.log(mojePole)
 * 
 * Vypis prijmeni z objektu na indexu 1 v poli. // boruvka
 */

let mojePole = [osoba1, osoba2];
console.log(mojePole[1].prijemni);
