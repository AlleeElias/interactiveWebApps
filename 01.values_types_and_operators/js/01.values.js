console.log("=====================================");
console.log("== Basic datatypes en berekeningen ==");
console.log("=====================================");
console.log("hallo!");
console.log(5 + 5);

const text = "dit is een tekst";
console.log(text);

let undefinedvariable;
console.log(undefinedvariable)

const berekening = 25987 * 342;
console.log(berekening);

console.log("Dit is een enkel aanhalingsteken: '\nEn dit een dubbel: \"");
console.log("deze string wordt geconcateneerd " + "met deze string");
console.log(`dit is een template literal en bevat een expressie: ${5 * 22} en de berekening is ${berekening}`);
console.log("======================================");
console.log();

console.log("=====================");
console.log("== Operator typeof ==");
console.log("=====================");
console.log(`typeof(\"x\") = ${typeof ("x")}`);
console.log(`typeof(55) = ${typeof (55)}`);
console.log(`typeof(true) = ${typeof (true)}`);
const c = '44';
console.log(`typeof(c) = ${typeof (c)}`);

//voer dit uit in de console:
console.log(typeof ("x"));
console.log(3 > 2);
console.log(false ? 1 : 2);

console.log("=====================");
console.log();

console.log("===============================");
console.log("== Declaratie en Strict mode ==");
console.log("===============================");
// dit werkt nu:
a = 4;
console.log(a);
// maar als je bovenaan in de file 'use strict' activeert geeft dit een error
console.log("===============================");
console.log();

console.log("======================");
console.log("== Speciale Numbers ==");
console.log("======================");
//voer deze lijnen 1 voor 1 uit in de console:
console.log(9 / 0);
console.log(- 9 / 0);
console.log((9 / 0) + 5);
console.log(9 / (0 + 5));
console.log(0 / 0);
console.log("aap" / 100);
console.log(NaN == NaN) // NaN is aan niks gelijk !
console.log("======================");
console.log();

console.log("=====================");
console.log("== Type conversies ==");
console.log("=====================");
//voer deze lijnen 1 voor 1 uit in de console:
console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log("vijf" * 2);
console.log(false == 0);
console.log(false === 0);
console.log(null == undefined);
console.log(null == 0);
console.log(null || "user");
console.log("Agnes" || "user");
console.log(2.5);
console.log("=====================");
console.log();

console.log("========================");
console.log("== Equality operators ==");
console.log("========================");
//voer deze lijnen 1 voor 1 uit in de console:
console.log(5 == 6);
console.log(5 == 5);
console.log(true == 1);
console.log(true === 1);
console.log(null == 0);
console.log(0 == "");
console.log(0 === "");
console.log(5 == "5");
console.log(5 === "5");

const bmi = 67 / Math.pow(1.8, 2);
console.log(bmi);
console.log("========================");
console.log();


