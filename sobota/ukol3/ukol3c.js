/**
 * 3c)
 * Definuj novy objet s nazvem recept, ktery bude mit klic jmeno (string)
 * a klic ingredience (pole stringu). Vypis objekt na obrazovku.
 * 
 * console.log(recept); // {jmeno: "Palacinky", ingredience: ["mleko", "sul", "hladka mouka", "vejce"]}
 */
let recept = {
    jmeno: "Palacinky",
    ingredience: ["mleko", "sul", "hladka mouka", "vejce"],
}

console.log(recept);


/**
 * Vypis na obrazovku 2 prvek z ingredienci. tj "sul"
 */
console.log(recept.ingredience[1]);


/**
 * Zmen hladkou mouku na hrubou mouku (za behu, NE v definici).
 */

recept.ingredience[2] = "hruba mouka";
console.log(recept);
