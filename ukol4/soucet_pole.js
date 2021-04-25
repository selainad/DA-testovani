let poleCisel = [2,5,8,12,35,47,21,12];
let soucet = 0;
let prumer = 0;

for(let i = 0; i < poleCisel.length; i++){
    soucet = soucet + poleCisel[i];
}
prumer = soucet/poleCisel.length 
console.log("Soucet pole " + poleCisel + " je: " + soucet);
console.log("Prumer techto cisel je: " + prumer);
