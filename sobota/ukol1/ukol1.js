/**
 * 1a)
 * Napis funkci predstaveni(), funkce vypise 3 radky textu. 
 * Funkce nebude prijimat zadny parametr. Zavolej funkci.
 * 
 * Vysledek:
 * 
 * predstaveni(); // zavolam funkci
 * // vypise na konzoli 3 radky
 * Ahoj
 * Moje jmeno je Tina
 * Jak se mas?
 */
console.log("Ukol 1a) funkce bez parametru");

function predstaveni1(){
    console.log("Ahoj jmeno je Tina. Jak se mas?")
}
predstaveni1();
predstaveni1();
predstaveni1();


/**
 * 1b)
 * Uprav funkci predstaveni, tak aby prijmala 1 parametr a to jmeno.
 * Nahrad jmeno ve vypisu timto parametrem.
 * 
 * Napriklad:
 * predstaveni("Petr");
 * // vypise
 * Ahoj
 * Moje jmeno je Petr
 * Jak se mas?
 */
console.log("Ukol 1b) funkce s parametrem.");

 function predstaveniJmenem(jmeno){
    console.log("Ahoj jmenuji se " +jmeno + ". Jak se mas?" );
}

predstaveniJmenem("Marcela");
predstaveniJmenem("Alice");
predstaveniJmenem("Petr");