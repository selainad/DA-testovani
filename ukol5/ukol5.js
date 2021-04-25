/**
 * 5)
 * Vytvor promenou kostka s timto kodem: 
 * Math.floor(Math.random()*6+1)
 * Vypis “Czechitas je nejlepsi” tolikrat, kolikrat jsi hodila na kostce
 * 
 */
let kostka = Math.floor(Math.random()*6+1);

console.log("Hodila jsem " + kostka + ", napis tolikrat: ");
for(let i = 0; i < kostka; i++){
    console.log("Czechitas je nejlepsi")
}
