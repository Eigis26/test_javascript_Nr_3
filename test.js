// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// let a = prompt("Pirmas skaičius");
// let b = prompt("Antrasis skaičius");
// if (a > b) {
//     console.log("Disesnis skaičius: " + a);
// }
// else if (a < b){
//     console.log("Disesnis skaičius: " + b);
// }
// else if (a == b) {
//     console.log("Skaičiai yra lygus");
// }

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
// for(i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
// let a = 2;
// for(i = 0; i <= 10; i++) {
//     if (Number.isInteger(i / a)){
//         console.log(i);
//     }
// }

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// for(i = 0; i < 5; i++){
//     a = Math.floor(Math.random()*(10-1+1)+1);
//     console.log(a);
// }

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// let i = 1;
// do {
//     i = Math.floor(Math.random()*(10-1+1)+1);
//     console.log(i);
//   }
//   while (i !== 5);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// let suskaiciuoti = {};
// array = [];
// for (i = 0; i < 100; i++) {
//     raides = Math.floor(Math.random()*(4-1+1)+1); 
//     if (raides == 1) {
//         array.push("A");
//     }
//     else if (raides == 2){
//         array.push("B");
//     }
//     else if (raides == 3){
//         array.push("C");
//     }
//     else if (raides == 4){
//         array.push("D");
//     }
// }
// console.log(array);
// array.forEach (iteam => {
//     suskaiciuoti[iteam] = (suskaiciuoti[iteam] || 0) +1;
// });
// console.log(suskaiciuoti);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
function lygineSuma (a, b) {
    ats = a + b;
    if (ats >= 0) {
        return console.log( "Skaičius yra lyginis " + ats);
    }
    else if (ats < 0) {
        return console.log("Skaičius yra nelyginis " + ats);
    }
}
lygineSuma(2, 4);
lygineSuma(1, -4);
