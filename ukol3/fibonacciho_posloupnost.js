/* prvniPrvek = 0;
    druhyPrvek = 1;
0 1 1 2 3 5 8 13 21 34 55

druhyClen = prvniClen + a
tretiClen = druhyClen + prvniClen 
ctvrtyClen = tretiClen + druhyClen

*/

let posloupnost = new Array();
let dalsiPrvek;

for (let i = 0; i < 21; i++){
    if (i == 0 ) {
        posloupnost[0] = 0;
        console.log(posloupnost[0] + " ");
    } else if (i == 1)  { 
        posloupnost[1] = 1;
        console.log(posloupnost[1] + " ");
    } else {
    dalsiPrvek = posloupnost[i-2] + posloupnost[i-1];
    posloupnost[i] = dalsiPrvek;
    console.log(posloupnost[i] + " ");
    }
}