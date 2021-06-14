//Secti vsechny suda cisla vetsi nez 0, mensi nez 100. Cyklus, promenna (obtiznost 2)
//Vysledek: 2450

let cislo;
let sude = new Array();
let k = 0;
let soucet = 0;

for(let i=0; i< 100; i++){
    cislo = i;
    if(cislo % 2 == 0){
        sude[k] = cislo;
        k = k+1;
    }
}
for(let i = 0; i<sude.length;i++){
    soucet = soucet + sude[i]
}
console.log(soucet);