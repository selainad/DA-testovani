/** UKOL 1C - KALKULACKA
 * Napis 4 funkce, ktere budou resit matematicke operace +,-,*,/
 * Napis funkci kalkulacka, ktera bude prijimat operator, a dve hodnoty.
 * Funkce kalkulacka na zaklade operatoru zavola prislusnou funkci a vrati vysledek.
 *   
 */

 function scitani(a,b){ 
    let scitani = a + b;
    return scitani;
 };

 function odecitani(a,b){ 
    let odecitani = a - b;
    return odecitani;
 };

 function nasobeni(a,b){ 
    let nasobeni = a * b;
    return nasobeni;
 };

 function deleni(a, b){ 
   let deleni = a / b;
   return deleni;
 };

 function kalkulacka(operator, x, y){
    let vysledek;
    if(operator == "+"){
      vysledek = scitani(x,y);
    } else if(operator == "-"){
       vysledek = odecitani(x,y);
    } else if (operator == "*"){
       vysledek = nasobeni(x,y);
    } else if(operator == "/"){
       vysledek = deleni(x,y);
    } else {
       vysledek = null;
    }
    return vysledek;
 };


let cislo1 = 4;
let cislo2 = 5;
let vysledek = kalkulacka("+", cislo1, cislo2);
console.log(vysledek); // 9


/**
 * BONUS UPRAVY:
 * Pokud jsi pouzil ve funkci kalkulacka nekolikrat return, prepis to tak, aby byl pouzit jen 1x.
 * Zkontroluj jestli mas osetreny takovyto vstup: kalkulacka("blbost",7 ,9), v tomto pripade kalukacka vrati
 * hodnotu null
 */