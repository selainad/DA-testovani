/*
4. Mas tento kod
// tenhle blok vygeneruje pole o nahodne delce (v rozmezi 5-14) s hodnotami 1-100
// tyto radky si zkopiruj k sobe a pracuj s promennou numbers!
let numbers = [];
let delka = Math.ceil(Math.random() * 10) + 5
for (let i = 0; i < delka; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100))
}
a vypis: 
a) cele pole, (obtiznost 1)
b) delku pole (obtiznost 1)
c) prvni prvek, (obtiznost 1)
d) posledni prvek, (obtiznost 1)
e) nejvetsi cislo, (obtiznost 2)
f) nejmensi cislo, (obtiznost 2)
g) soucet cisel, (obtiznost 2)
h) rozdil nejvetsiho a nejmensiho cisla (obtiznost 3)
i) prumer vsech cisel v poli (obtiznost 3)
j) index nejvetsiho cisla v poli (obtiznost 2)
k) vypis suda cisla, pokud v poli zadne neni, vypis "Sude cislo nenalezeno!"  (obtiznost 3) // napoveda v threadu
l) vypis pole, ve kterem bude kazda hodnota vynasobena 2x. Takze z pole [1,2,3] -> [2,4,6]  (obtiznost 2)
m) pokud je v poli cislo mensi nez 10, vypis "Hele, v poli je prdola!"  (obtiznost 2)
n) vytvor nove pole (a vypis) a do nej vloz 2x dvojicky cisel. Takze z pole [1,2,3] -> [1,1,2,2,3,3]  (obtiznost 2)
o) vytvor dve nove pole (a vypis) a do jednoho vloz jen suda cisla, a do druheho vloz licha cisla. A vypis  (obtiznost 4)
p) Vsechno krasne s popisky vypis, aby bylo na prvni pohled jasne, co je co.  (obtiznost 1 ^^ kombinace vseho nadtim)

*/
// tenhle blok vygeneruje pole o nahodne delce (v rozmezi 5-14) s hodnotami 1-100
// tyto radky si zkopiruj k sobe a pracuj s promennou numbers!
let numbers = [];
let delka = Math.ceil(Math.random() * 10) + 5
for (let i = 0; i < delka; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100))
}

//a) vypis cele toto pole
console.log("a) vypis celeho pole: " + numbers);

//b) delka pole
console.log("b) delka pole: " + numbers.length);

//c) prvni prvek
console.log("c) prvni prvek je: " + numbers[0]);

//d) posledni prvek
console.log("d) posledni prvek je: " + numbers[numbers.length-1]);

//e) nejvetsi cislo, (obtiznost 2)
let cislo;
let max = numbers[0];

for(let i = 0; i < numbers.length; i++){
    cislo = numbers[i];
    if(cislo > max){
        max = cislo;
    }
}
console.log("e) nejvetsi cislo je: " + max);

//f) nejmensi cislo, (obtiznost 2)
let number;
let = min = numbers[0];

for(let i = 0; i < numbers.length; i++){
    number = numbers[i];
    if(number < min){
        min = number;
    }
}
console.log("f) nejmensi cislo je: " + min);

// g) soucet cisel, (obtiznost 2)
let soucet = 0;
let mezisoucet;
for(let i = 0; i < numbers.length; i++) {
    mezisoucet = numbers[i];
    soucet = mezisoucet + soucet;
}
console.log("g) soucet cisel v poli: " + soucet);

//h) rozdil nejvetsiho a nejmensiho cisla
let rozdil = max - min;
console.log("h) rozdil nejvetsiho a nejmensiho cisla je: " + rozdil);

//i) prumer vsech cisel v poli (obtiznost 3)
let prumer = soucet/numbers.length;
console.log("i) prumer cisel v poli je: " + prumer);

//j) index nejvetsiho cisla v poli (obtiznost 2)
let nejvetsiIndex = numbers.length
console.log("j) index nejvetsiho cisla v poli je: " + nejvetsiIndex);

//k) vypis suda cisla, pokud v poli zadne neni, vypis "Sude cislo nenalezeno!"  (obtiznost 3)
let cisla;
let sude = "";

for(let i=0; i< numbers.length; i++){
    cisla = numbers[i];
    if(cisla % 2 == 0){
        sude = sude + " " + cisla;
    }
}

if(sude == " "){
    console.log("Sude cislo nenalezeno!")
} else {
    console.log("k) vypis suda cisla: " + sude);
}

//l) vypis pole, ve kterem bude kazda hodnota vynasobena 2x. Takze z pole [1,2,3] -> [2,4,6]
let nasobek = 0;
let poleNasobku = new Array();

for(let i = 0; i < numbers.length; i++){
    nasobek = numbers[i] * 2;
    poleNasobku[i] = nasobek;
}
console.log("l) vypis pole kde je kazda hodnota vynasobena 2x: puvodni pole: " + numbers + ", vynasobene pole: " + poleNasobku);

//m) pokud je v poli cislo mensi nez 10, vypis "Hele, v poli je prdola!"  (obtiznost 2)
let prdola = false;
for(let i =0; i < numbers.length; i++){
    if(numbers[i] < 10){
        prdola = true;
        break;
    }
}
if (prdola == true){
    console.log("m) je v poli prdola? Hele, v poli je prdola!");
} else {
    console.log("m) je v poli prdola? V poli neni prdola!")
}

//n) vytvor nove pole (a vypis) a do nej vloz 2x dvojicky cisel. Takze z pole [1,2,3] -> [1,1,2,2,3,3]
let dvojicky = [];
let kopie;
let k = 0;

for(let i = 0; i < numbers.length; i++){
    kopie = numbers[i];
    dvojicky[k] = kopie;
    dvojicky[k+1] = kopie;
    k = k + 2
}
console.log("n)Vytvor pole s 2x dvojcemi cisel: " + dvojicky);

//o) vytvor dve nove pole (a vypis) a do jednoho vloz jen suda cisla, a do druheho vloz licha cisla. A vypis
let jenSuda = [];
let jenLicha = [];
let x = 0;
let y = 0;

for(let i=0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        jenSuda[x] = numbers[i]
        x = x + 1;
    } else {
        jenLicha[y] = numbers[i];
        y = y + 1;
    }
}
console.log("o) suda cisla v poli jsou: " + jenSuda);
console.log("o) licha cisla v poli jsou: " + jenLicha);
