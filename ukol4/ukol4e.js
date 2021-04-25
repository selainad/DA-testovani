/**
 * Ukol 4e
 * Odeber posledni prvke z pole. (pouzij funkci pop)
 * 
 * Vysledek:
 * ["Jana", "Pavla", "Klara","Veronika"]
 * ["Jana", "Pavla", "Klara"]
 */
 let a = ["Jana", "Pavla", "Klara", "Veronika"];
 let posledni;

 console.log("Pole pred funkci pop: ");
 for(let i = 0; i < a.length; i++){
    console.log(a[i] + " ");
}

 posledni = a.pop();

 console.log("Pole po funkci pop: ")
 for(let i = 0; i < a.length; i++){
     console.log(a[i] + " ");
 }

/**
 * Ukol 4f
 * Najdi na kterem prvku v poli se nachazi "Pavla" (pouzij .indexOf)
 * 
 * Vysledek:
 * 1
 */

hledanyIndex = a.indexOf("Pavla");
console.log("Ukol 4f - Pavla se nachazi na inexu: " + hledanyIndex);