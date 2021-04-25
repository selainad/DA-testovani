/**
 * e) bonus
 * Vytvor funkci, ktere predas pole, a cislo indexu (pozice v poli).
 * Funkce nahradi v prvek v poli na indexu za slovo “Czechitas”.
 * 
 * let vysledek = nahrad([5,6,7,0], 2) // [5,6,"Czechitas", 0]
 */
let pole = [];
let index;

function nahrad(pole,index){
    pole[index] = "Czechitas";
    return pole;
}

pole = nahrad([5,6,7,0], 2);
console.log(pole);


/**
 * e) bonus -- dva 
 * Vytvor funkci, ktere predas pole, a cislo indexu (pozice v poli).
 * Funkce nahradi v prvek v poli na indexu za slovo “Czechitas”.
 * Parametrizuj text nahrazeno prvku.
 * 
 * let vysledek = nahrad([5,6,7,0], 2, "lopata") // [5,6,"lopata", 0]
 */
 let pole1 = [];
 let index1;
 let text;
 
 function nahrad1(pole1,index1, text){
     pole1[index1] = text;
     return pole1;
 }
 
 pole1 = nahrad1([5,6,7,0], 2, "lopata");
 console.log(pole1);
