// Vubec nas nemusi zajimat jak tato funkce funguje
// << klikni si na sipku na radku 3 a klidne si jij skryj
function magicFunction(){    
    let array = [];
    for(let i=0;i< ((Math.random() * 10) + 5);i++){
        array.push({
            name: Math.random().toString(36).substring(7),
            age: Math.random(),
            triggerMe: () => {
                console.log("I am triggered");
                return ((Math.random() * 10) + 5);
            }
        })
    }
    return array;
}

let pole = magicFunction();
console.log(pole);

/**
 *  Funkce magicFunction() nam vraci POLE objektu. 
 *  Objek vypada takto:
 *  { name: 'y2stzg',
 *    age: 0.07817525779425005,
 *    triggerMe: [Function: triggerMe] } 
 * 
 *  Ma atributy name, age a triggerME - coz je funkce kterou muzeme zavolat triggerMe();
 *  Funkce triggerMe() vypise na obrozovku "I am triggered" a vrati nahodne cislo.
 *  
 *  Ukol 1:
 *  - Projdi pole objektu (for cyklus) a secti jejich atribut .age, ktery pak vypises
 * 
 */

 let soucet = 0;

 for(let i = 0; i < pole.length; i++){
     soucet = soucet + pole[i].age;
 }

 console.log("Soucet attributu age je: " + soucet);


 /**
  * Ukol 2:
  * - Projdi pole objektu v promene pole a u kazdeho o zavolej funkci triggerMe()  
  */

  for(let i = 0; i < pole.length; i++){
    let pomocnePole
    pomocnePole = [];
    pomocnePole[i] = pole[i].triggerMe();
    console.log(pole[i].triggerMe());
}

/**
 * Ukol 3:
 * - Projdi pole objektu v promene pole, u kazdeho zavolej funkci triggerMe() a secti hodnoty, ktere tato funkce vraci;
 */

 let triggerMeSoucet = 0;

 for(let i = 0; i < pole.length; i++){
    triggerMeSoucet = triggerMeSoucet + pole[i].triggerMe();
}


 console.log("Soucet hodnoty, ktere vraci vsechny triggerme funkce je: " + triggerMeSoucet)