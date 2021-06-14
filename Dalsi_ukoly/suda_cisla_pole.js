/* 3. Vloz vsechny suda cisla vetsi nez 0, mensi nez 100 do pole a pole vypis. (obtiznost 2)
Vysledek: 
[
  0,  2,  4,  6,  8, 10, 12, 14, 16, 18, 20,
 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42,
 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64,
 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86,
 88, 90, 92, 94, 96, 98
]
*/
let cislo;
let sude = new Array();
let k = 0;

for(let i=0; i< 100; i++){
    cislo = i;
    if(cislo % 2 == 0){
        sude[k] = cislo;
        k = k+1;
    }
}
console.log(sude);