/**
 * 4) bonus 1
 * Najdi na kterem indexu se v poli nachazi jmeno Klara
 * za pouziti FOR cyklu! (nepouzivej funkci indexOf)
 * 
 * Vysledek:
 * ["Jana", "Pavla" "Klara"]
 * Klara je na indexu 2 
 */

/**
 * Pokud to tak nemas, uprav kod tak aby jmeno "Klara", ktere hledame
 * v poli, slo jednoduse nahradit za jine jmeno. Tj abychom mohli 
 * jednoduse vyhledat jakekoliv jmeno v poli za zmeny jednoho radku.
 * 
 * Zaroven vypis krome indexu i poradi.
 * Vysledek:
 * ["Jana", "Pavla" "Klara"]
 * Pavla je na indexu 1, poradi 2
 */

 let pole = ["Jana", "Pavla", "Klara"];
 let jmeno;

 for( let i = 0; i < pole.length; i++){
     jmeno = pole[i];
     if (jmeno == "Klara"){
        console.log(jmeno + " je na indexu " + i);
     }
}

for( let i = 0; i < pole.length; i++){
    jmeno = pole[i];
    if (jmeno == "Pavla"){
       console.log(jmeno + " je na indexu " + i + ", poradi " + (i+1));
    }
}
