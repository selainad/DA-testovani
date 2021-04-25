/**
 * Ukol 4a
 * 
 * Vytvor pole obsahujici jmena Jana, Pavla, Klara a vypis jej 
 * na obrazovku.
 * 
 * Vysledek: ["Jana", "Pavla", "Klara"]
 */
let a = new Array();
/* 
a[0] = "Jana", ;
a[1] = "Pavla";
a[2] = "Klara";
*/
a = ["Jana", "Pavla", "Klara"];

console.log(a);

//for( let i = 0; i < a.length; i++){
//    console.log(a[i] + " ");
//}

/**
 * Ukol 4b
 * Vypis pouze prvek na druhe pozici.
 * 
 * Vysledek: Pavla
 */
console.log("Ukol 4b, pouze prvek na druhe pozici: " + a[1]);


/**
 * Ukol 4c
 * Vypis delku pole.
 * 
 * Vysledek: 3
 */
console.log("Ukol 4c, delka pole: " + a.length);


/**
 * Ukol 4d
 * Pridej do pole jmeno Veronika(funkce push) a vypis delku pole
 * pred a po pridani. 
 * 
 * Vysledek:
 * ["Jana", "Pavla", "Klara"]
 * 3
 * ["Jana", "Pavla", "Klara","Veronika"]
 * 4
 */
console.log("Ukol 4d, pred pridani jmena do pole: " + a.length);
console.log(a);
//for(let i = 0; i < a.length; i++){
//    console.log(a[i] + " ");
//}


a.push("Veronika");
console.log("Ukol 4d, po pridani jmena do pole, delka pole: " + a.length);
console.log(a);
//for(let i = 0; i < a.length; i++){
//    console.log(a[i] + " ");
//}


