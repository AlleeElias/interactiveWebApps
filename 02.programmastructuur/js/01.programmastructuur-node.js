const prompt = require("prompt");
prompt.start();

prompt.get(['paswoord', 'nummer', 'jenaam', 'hetweer'], function (err, result) {
    let paswoord = result.paswoord;
    let nummer = result.nummer;
    let jeNaam = result.jenaam;
    let hetweer = result.hetweer;
    console.log("--------- variabelen -----------");
    console.log(paswoord + Math.min(2, 4) + 10);
    console.log(paswoord);

    if (nummer < 10) {
        console.log(nummer + " is een klein getal");
    } else if (nummer < 100) {
        console.log(nummer + " is een gemiddeld getal");
    } else {
        console.log(nummer + " is een groot getal");
    }

    console.log("--------- while lus -----------");
    result = 1;
    let counter = 0;
    while (counter < 10) {
        result = result * 2;
        counter++;
    }
    console.log(result);
    console.log("--------- do lus -----------");
    /*
    let jeNaam;
    do {
        jeNaam = prompt("Wie ben je?");
    } while (!jeNaam);
    */
    console.log(jeNaam);

    console.log("--------- for lus -----------");
    result = 1;
    for (let counter = 0; counter < 10; counter++) {
        result *= 2;
    }
    console.log(result);

    console.log("--------- break -----------");
    for (let current = 20; ; current++) {
        if (current % 7 == 0) {
            console.log(current);
            break;
        }
    }

    console.log("--------- switch -----------");
    let weerType;
    switch (hetweer) {
        case "regenachtig":
            // regenachtig
            weerType = "Het regent vandaag";
            break;
        case "zonnig":
            /*
             Het zonnetje schijnt vandaag
             */
            weerType = "De zon schijnt vandaag";
            break;
        case "bewolkt":
            weerType = "Het is bewolkt vandaag";
            break;
        default:
            weerType = "Onbekend weertype";
    }
    console.log(weerType);
});
