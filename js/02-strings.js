console.clear();
/*
strings - simboliu sarasas/junginys, tekstas

kintamuju inicijavimas:
- const (default)
- let (tik jei yra poreikis keisti reiksme)
- var (nenaudoti, nebent TIKRAI zinote ka darote)

string'o inicijavimas:
- viengubos kabutes
- dvigubos kabutes

*/

//kintamuju inicijavimas

const vardas = 'Petras';
console.log(vardas);

const keturi = 4;
console.log(keturi);

let pinigine = 0;
console.log(pinigine);

pinigine = 5
console.log(pinigine);

pinigine = 55;
console.log(pinigine);



console.log('labas');
console.log('rytas');
console.log('labas rytas');

console.log("labas");
console.log("rytas");
console.log("labas rytas");

//

//strings

const firstname = 'maryte';
console.log(firstname);

const lastname = "marytaite";
console.log(lastname);

//labas rytas, maryte!
console.log('labas rytas,', firstname, '!'); //netinkamas sprendimas

const pasisveikinimas = 'labas rytas, ' + firstname + '!';
console.log(pasisveikinimas);

//string + string
//number + number

//string + number
//number + string

//sveiki, mano vardas jonas ir man 88 metai
const name1 = 'jonas';
const age1 = '88';

const prisistatymas = 'sveiki, mano vardas ' + name1 +' ir man ' + age1 + ' metai!';
console.log(prisistatymas);

// 81 / 3 -> 27

const word1 = 'vasara';
const perPuse = word1 / 2;
console.log(perPuse);

console.log(4 + 4);
console.log(4 + '4');
console.log('4' + 4);
console.log('4' + '4');

console.log(4 - 4);
console.log(4 - '4');
console.log('4' - 4);
console.log('4' - '4');

console.log(4 / 4);
console.log(4 / '4');
console.log('4' / 4);
console.log('4' / '4');

console.log(4 * 4);
console.log(4 * '4');
console.log('4' * 4);
console.log('4' * '4');

const x = '4'; // '4' -> 4
const y = 5;

console.log(y + y);
console.log(x + y);
console.log(y + x);
console.log(x + x);

console.log(y - y);
console.log(x - y);
console.log(y - x);
console.log(x - x);

console.log(y / y);
console.log(x / y);
console.log(y / x);
console.log(x / x);

console.log(y * y);
console.log(x * y);
console.log(y * x);
console.log(x * x);


