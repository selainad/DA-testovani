//Vypis vsechny suda cisla vetsi nez 0, mensi nez 100. Pouzij cyklus! (obtiznost 1)
let cislo;
let sude;

for(let i=0; i< 100; i++){
    cislo = i;
    if(cislo % 2 == 0){
        sude = cislo + " ";
        console.log(sude);
    }
}
