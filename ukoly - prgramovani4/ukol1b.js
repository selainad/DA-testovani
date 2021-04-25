/** UKOL 1b
 * Napis funkci ktera vrati TRUE pokud cislo vetsi jak 15 a mensi jak 60
 * v opacnem pripada funkce vrati FALSE;
 * 
 * Napoveda:
 * && logicke AND, "a soucasne", obe dve strany musi byt pravda aby vysledek byl pravda
 * || logicke OR, "a nebo ", jedna ze stran musi byt pravda aby vysledek byl pravda
 */

function kontrola(cislo) {
  let vysledek;
  if (cislo > 15 && cislo < 60) {
    vysledek = true;
  } else {
    vysledek = false;
  }
  return vysledek;
}

let vysledek = kontrola(20);
console.log(vysledek); // TRUE
vysledek = kontrola(5);
console.log(vysledek); // FALSE
vysledek = kontrola(70);
console.log(vysledek); // FALSE


/**
 * Funkce vrati TRUE pokud je cislo vetsi jak 15 a mensi jako 60 A NEBO se cislo rovna 2
 */

function kontrola2(cislo) {
  let vysledek;
  if (cislo > 15 && cislo < 60 || cislo == 2) {
    vysledek = true;
  } else {
    vysledek = false;
  }
  return vysledek;
}

vysledek = kontrola2(20);
console.log(vysledek); // TRUE
vysledek = kontrola2(5);
console.log(vysledek); // FALSE
vysledek = kontrola2(70);
console.log(vysledek); // FALSE
