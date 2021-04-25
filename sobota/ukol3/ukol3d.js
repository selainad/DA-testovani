/**
 * Pomoci for cyklu vypis na obrazovku vsechny ingredience z objektu
 * recept.
 * 
 * Program vypise:
 * mleko
 * sul
 * hladka mouka
 * vejce
 * 
 */
 let recept = {
    jmeno: "Palacinky",
    ingredience: ["mleko", "sul", "hladka mouka", "vejce"],
}

for(let i = 0 ; i < recept.ingredience.length; i++){
    console.log(recept.ingredience[i]);
}