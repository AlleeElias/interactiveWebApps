console.log("--------- falsy en truthy  -----------");
//voer dit eerst uit zoals het hier staat: variabele v is niet geinitialiseerd
let v;
if (v)
    console.log("variable has a value");
else
    console.log("variable is empty");

//pas dan aan, initialiseer v, probeer dit uit met een aantal verschillende waardes:
//null, undefined, 0, 55, "", "0", "55", " ", "aap", NaN, 5/0

console.log("--------- conditional operator  -----------");
const age = 18;
const insurancePremium = age > 21 ? 100 : 200;
console.log(`insurancePremium = ${insurancePremium}`);
//probeer met een andere age

console.log("--------- short circuit met OR operator  -----------");

const prompt = require("prompt");
prompt.start();

prompt.get(['username'], function (err, result) {
    const userName = result.username || "anoniempje";
    console.log(`userName = ${userName}`);


    console.log("--------- short circuit met AND operator  -----------");
    let undefinedProduct;
    let productName = undefinedProduct && undefinedProduct.name;
    console.log(`productName = ${productName}`);

    const nullProduct = null;
    productName = nullProduct && nullProduct.name;
    console.log(`productName = ${productName}`);

    const emptyProduct = {};
    productName = emptyProduct && emptyProduct.name;
    console.log(`productName = ${productName}`);

    const productWithName = {name: "Hansje"};
    productName = productWithName && productWithName.name;
    console.log(`productName = ${productName}`);

    const undefinedVar = undefined;
    console.log("De name of undefinedVar = " + undefinedVar?.name);
    const undefinedVar2 = false;

    console.log(undefinedVar || "||undefined");
    console.log(undefinedVar ?? "??undefined");
    console.log(undefinedVar2 || "||undefined2");
    console.log(undefinedVar2 ?? "??undefined2");
});

