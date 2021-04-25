/** 
 * 3e)
 * Vytvor funkci, ktere predas jmeno a prijmeni a ona vrati objekt
 * s klicemi jmeno a prijmeni. 
 * 
 * let vysledek = vytvorOsobu("Tomas", "Jahoda")
 * console.log(vysledek); // {jmeno: "Tomas", prijmeni: "Jahoda"}
 */

function vytvorOsobu(jmeno, prijmeni){
    let osoba = {
        jmeno: jmeno,
        prijemni: prijmeni
    }
    return osoba;
}

let vysledek = vytvorOsobu("Tomas", "Jahoda");
console.log(vysledek);