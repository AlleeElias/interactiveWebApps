console.log("======================================");
console.log("=== Basic datatypes en berekeningen");
console.log("hallo!");
console.log(5 + 5);

const text = "dit is een tekst";
console.log(text);

let undefinedvariable;
console.log(undefinedvariable)


const berekening = 25987 * 342;
console.log(berekening);

console.log("Dit is een enkel aanhalingsteken: ‘\nEn dit een dubbel: \"");
console.log("deze string wordt geconcateneerd " + "met deze string");
console.log(`dit is een template literal en bevat een expressie: ${5 * 22}`);

console.log("======================================");
console.log("=== Operator typeof");
console.log(`typeof(\"x\") = ${typeof ("x")}`);
console.log(`typeof(55) = ${typeof (55)}`);
console.log(`typeof(true) = ${typeof (true)}`);
const c = '44';
console.log(`typeof(c) = ${typeof (c)}`);

//voer dit uit in de console:
typeof ("x")
3 > 2
false ? 1 : 2

console.log("======================================");
console.log("=== Declaratie en Strict mode");
// dit werkt nu:
a = 4;
console.log(a);
// maar als je bovenaan in de file 'use strict' activeert geeft dit een error

console.log("======================================");
console.log("=== Speciale Numbers");
//voer deze lijnen 1 voor 1 uit in de console:
Infinity
9 / 0
- 9 / 0;
(9 / 0) + 5
9 / (0 + 5)
0 / 0
"aap" / 100
NaN == NaN // NaN is aan niks gelijk !


console.log("======================================");
console.log("=== Type conversies");
//voer deze lijnen 1 voor 1 uit in de console:
8 * null
"5" - 1
"5" + 1;
"vijf" * 2;
false == 0;
false === 0
null == undefined
null == 0
null || "user"
"Agnes" || "user"
2.5


console.log("======================================");
console.log("=== Equality operators");
//voer deze lijnen 1 voor 1 uit in de console:
5 == 6
5 == 5
true == 1
true === 1
null == 0
0 == ""
0 === ""
5 == "5"
5 === "5"


