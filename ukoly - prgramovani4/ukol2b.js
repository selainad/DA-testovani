// Nezajima nas jak tato funkce funguje. 
function magicFunction(){
    return [...Array(5).keys()].map(x => x*2);
}


/**
 * UKOL 2 - B
 * Funkce magic function nam vraci pole [ 0, 2, 4, 6, 8 ];
 */

let mojePole = magicFunction();
console.log(mojePole);

/**
 * Pomoci cyklu vypis vsechny prvky pole krome cisla 0
 */

 for(let i = 1; i < mojePole.length; i++){
   console.log(mojePole[i]);
 }


 /**
  * Spocitej soucet prvku v poli;
  */

  let soucet = 0;
  for(let i = 0; i < mojePole.length; i++){
    soucet = soucet + mojePole[i];
  }

  console.log("Soucet prvku v poli je: " + soucet);




