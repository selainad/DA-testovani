/**
 * Uprav predchozi funkci vytvorOsobu tak, ze ji predas
 * rok narozeni a ona vypocita  a pridat vek. (neres mesice, jen roky
 * aktulani rok 2021 muzes definovat "natvrdo")
 * 
 * console.log(vytvorOsobu("Tomas", "Zidlicka", 1999))
 * // {jmeno: "Tomas", prijmeni: "Zidlicka", vek: 22, datumNarozeni: 1999}
 * 
 */


 function vytvorOsobu(jmeno, prijmeni, rok){
    let osoba = {
        jmeno: jmeno,
        prijemni: prijmeni,
        vek: 2021 - rok,
        datumNarozeni: rok,
        
    }
    return osoba;
}

console.log(vytvorOsobu("Tomas", "Zidlicka", 1999));