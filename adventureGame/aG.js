let characterName;
let age;
let realAge;
let val1 = "";
let val2 = "";
let val3 = "";
let val4 = "";
let val5 = "";

// Variabler för namn, ålder och de olika valen i form av prompts.

function startSekvens() {
  confirm(
    "Välkommen till mitt äventyrsspel i skrift!" +
      "\nDu fortsätter genom att skriva siffrorna som markerar de olika valen." +
      "\nLycka till!"
  );

  while (
    characterName === undefined ||
    age === undefined ||
    characterName === "" ||
    age === "" ||
    characterName === " " ||
    age === " " ||
    realAge === undefined
  ) {
    characterName = prompt("Vad heter du?");
    age = prompt("Hur gammal är du?");
    realAge = parseInt(age);

    if (Number.isInteger(realAge)) {
      realAge = realAge;
    } else {
      realAge = undefined;
    } // Kontrollerar om man angett siffror som sin ålder eller ej.

    if (characterName === null || age === null) {
      console.log("Spelet avbrutet.");
      break;
      // Trycker man på avbryt så avslutas spelet.
    }
  }
  // Man kommer inte vidare om man inte skriver in namn och ålder, pga denna while loop.
  // Detta återkommer i de andra funktionerna, och fungerar ungefär likadant.

  confirm(
    "Hej " +
      characterName +
      "." +
      " Vi får se om dina " +
      realAge +
      " år i livet har förberett dig nog för detta äventyr." +
      " Är du redo att spela?"
  );

  if (realAge < 13) {
    console.log("Spela på egen risk. Det kan bli blodigt..");
  } else {
    console.log("Nu börjar vi! Håll i hatten.");
  }
  // Beroende på ålder får man olika utskrifter.

  console.log(
    "Du står framför en uråldrig skog, som ger ifrån sig mörka och hotfulla känslor. " +
      "Solen börjar gå ner, och du huttrar till lite av kylan."
  );

  while (!(val1 === "1" || val1 === "2")) {
    val1 = prompt("Vill du: \n 1. Gå in i skogen? \n 2. Gå runt skogen?");
    if (val1 === null) {
      console.log("Spelet avbrutet.");
      break;
      // Trycker man på avbryt så avbryts spelet.
    }
  }
  // Första valet.
}
// Startsekvens som utförs först av allt. Tar reda på namn, ålder, samt startar igång storyn.

function trollFight() {
  let i = Math.floor(Math.random() * 10);

  if (i < 5) {
    return false;
    //dödad av trollet
  } else {
    return true;
    //Vann striden mot trollet.
  }
}
// Fight mot trollet baserat på randomness, med en liten fördel för spelaren.

function trollFightSvärd() {
  let i = Math.floor(Math.random() * 10);

  if (i <= 2) {
    return false;
    //dödad av trollet
  } else {
    return true;
    //Vann striden mot trollet.
  }
}
// Fight mot trollet baserat på randomness, med en stor fördel för spelaren pga svärdet.

function inISkogen() {
  if (val1 === "1") {
    console.log(
      "Du går in i skogen, och ser de mörka träden torna upp sig framför dig..." +
        " Lite längre fram ser du en mörk silhuett. Du ser inte vem eller vad silhuetten tillhör."
    );
    //gå in
    val4 = "";
    while (!(val4 === "1" || val4 === "2")) {
      val4 = prompt(
        "Vill du: \n 1. Undersöka vem silhuetten tillhör? \n 2. Gömma dig bland träden?"
      );
      if (val4 === null) {
        console.log("Spelet avbrutet.");
        break;
        // Trycker man på avbryt så avslutas spelet.
      }
    }

    if (val4 === "1") {
      // Undersök silhuetten!
      console.log(
        "Du smyger närmare, och ser att det är ett troll som står framför dig!"
      );
      val5 = "";
      while (!(val5 === "1" || val5 === "2")) {
        val5 = prompt(
          "Vill du: \n 1. Slåss mot trollet? \n 2. Försöka smita undan?"
        );
        if (val5 === null) {
          console.log("Spelet avbrutet.");
          break;
          // Trycker man på avbryt så avslutas spelet.
        }
      }
    } else if (val4 === "2") {
      // Göm dig i skogen!
      console.log(
        "Du gömmer dig bland träden som den fegis du är, och trollet passerar utan att märka dig." +
          " Du fortsätter din färd genom skogen och kommer ut oskadd på andra sidan. " +
          "Det får nog räcka med äventyr för idag! Game over."
      );
    }

    if (val5 === "1") {
      // Slåss mot trollet!
      if (trollFight() === true) {
        console.log(
          "Ni ger er in i en kamp om livet, och du kommer segrande därifrån." +
            "Du skyndar ut genom skogen, och springer hem." +
            " Aldrig under dina " +
            realAge +
            " år har du varit med om något så skrämmande, men barderna kommer sjunga om " +
            characterName +
            ", den tappre, i flera år framöver. Game over!"
        );
      } else {
        console.log(
          "Trollet dödade dig med ett enda slag! Du kommer inte kommas ihåg som en hjälte precis." +
            " Game over!"
        );
      }
    } else if (val5 === "2") {
      // Smit undan
      console.log(
        "Du försöker smyga så tyst du kan därifrån, men trampar på en pinne och avslöjar din position." +
          " Förbered dig på en fight med trollet!"
      );
      if (trollFight() === true) {
        console.log(
          "Du tar upp pinnen som du trampade på och svingar den mot trollet." +
            " På något vänster lyckas du sticka den i hans öga, och springer hem. Game over!"
        );
      } else {
        console.log(
          "Trollet springer fram med ofattbar fart," +
            " får ner dig på marken och stampar på ditt huvud. " +
            characterName +
            ", den fege is no more!" +
            "Game over!"
        );
      }
      // Random ifall spelaren dör eller överlever, och sedan springer hem.
    }
  }
}
// Innehåller all story för skogen, alltså om man väljer första alternativet i början.

function gåRunt() {
  if (val1 === "2") {
    console.log(
      "Du går runt skogen, vilket tar flera timmar. När du äntligen kommer runt så ser du en flod."
    );
    val1 = "";
    while (!(val1 === "1" || val1 === "2")) {
      val1 = prompt(
        "Vill du: \n 1. Simma över floden. \n 2. Hitta en annan väg."
      );
      if (val1 === null) {
        console.log("Spelet avbrutet.");
        break;
        // Trycker man på avbryt så avslutas spelet.
      }
    }

    if (val1 === "1") {
      // Simma över floden
      console.log(
        "Du simmar över floden, den har starka strömmar men du klarar dig över ändå." +
          " Du hämtar andan efter simturen, och upptäcker att du fryser så du skakar."
      );
      val2 = "";
      while (!(val2 === "1" || val2 === "2")) {
        val2 = prompt(
          "Vill du: " + "\n1. Göra upp en eld?" + "\n2. Springa dig varm?"
        );
        if (val2 === null) {
          console.log("Spelet avbrutet.");
          break;
          // Trycker man på avbryt så avslutas spelet.
        }
      }
      if (val2 === "1") {
        // Göra upp eld
        console.log(
          "Du gör upp en eld, och värmer dig samt torkar dina kläder." +
            " Du ser en till skog, och i skogsbrynet ser du något som glimtar i eldens sken."
        );

        val2 = "";
        while (!(val2 === "1" || val2 === "2")) {
          val2 = prompt(
            "Vill du: \n1. Gå fram och titta? \n2. Sitta kvar vid elden och dega?"
          );
          if (val2 === null) {
            console.log("Spelet avbrutet.");
            break;
            // Trycker man på avbryt så avslutas spelet.
          }
        }
        if (val2 === "1") {
          // Gå fram och titta
          console.log(
            "Du går fram för att undersöka det glänsande föremålet, och så fort du fått se att " +
              "det är ett svärd som ligger där så kommer ett troll rusande ut ur skogen!" +
              " Prepare to fight!"
          );

          if (trollFightSvärd === true) {
            console.log(
              "Du vinner striden mot trollet, och beger dig hem för att berätta för din familj" +
                " om allt du varit med om! Game over."
            );
          } else {
            console.log(
              "Du kämpar tappert mot trollet, men du har ingen erfarenhet i strid så" +
                " trots ditt övertag med svärdet så dör du." +
                age +
                " år och ingen stridserfarenhet?" +
                " Patetiskt! Game over."
            );
          }
        } else if (val2 === "2") {
          // Stanna vid elden
          console.log(
            "Du stannar och latar dig vid elden, somnar och blir uppäten av mygg under natten." +
              " Under nästa dag dör du av malaria. Game over!"
          );
        }
      } else if (val2 === "2") {
        // Springa dig varm
        console.log(
          "Du springer ett par varv runt ditt läger. Plötsligt tappar du fotfäste," +
            " ramlar, och rullar ner för en backe ner i floden. Du slår i huvudet," +
            " drunknar och dör. Game over, " +
            characterName +
            "!"
        );
      }
    } else if (val1 === "2") {
      // Hitta en annan väg
      console.log(
        "Du börjar gå längs med floden, och hittar ett nedfallet träd lite längre bort." +
          " Med hjälp av trädet tar du dig över floden. Lite längre bort ser du ett vattenfall."
      );
      val3 = "";
      while (!(val3 === "1" || val3 === "2")) {
        val3 = prompt(
          "Vill du undersöka?" + "\n1. Ja \n2. Nej, leta efter något att äta."
        );
        if (val3 === null) {
          console.log("Spelet avbrutet.");
          break;
          // Trycker man på avbryt så avslutas spelet.
        }
      }
      if (val3 === "1") {
        //Undersök vattenfallet
        console.log(
          "Du går fram till vattenfallet och kikar över kanten. Det är ungefär fem meter ner" +
            " och till synes väldigt djupt i poolen nedanför."
        );
        val3 = "";
        while (!(val3 === "1" || val3 === "2")) {
          val3 = prompt("Vill du: \n1. Hoppa ner? \n2. Stanna kvar?");
          if (val3 === null) {
            console.log("Spelet avbrutet.");
            break;
            // Trycker man på avbryt så avslutas spelet.
          }
        }
        if (val3 === "1") {
          // Hoppa ner
          console.log(
            "Du hoppar ner och gör spiken ner i den djupa poolen! " +
              "Du kommer så djupt ner att du sugs in i berget av en stark ström." +
              " Hörs!" +
              " Game over!"
          );
        } else if (val3 === "2") {
          // Stanna kvar
          console.log(
            "Du stannar kvar ovanför vattenfallet, och tittar på stjärnorna." +
              " Nog med äventyr för idag! Game over."
          );
        }
      } else if (val3 === "2") {
        // Leta efter mat
        console.log(
          "Du letar i timtal efter mat, men hittar ingen. Till slut svimmar du, och dör av svält." +
            " Game over!"
        );
      }
    }
  }
}
// Innehåller all story som följer om man går runt, om man väljer alternativ 2 i början.

startSekvens();

if (val1 === "1") {
  // Om man går in i skogen hamnar man här.
  inISkogen();
} else if (val1 === "2") {
  // Går man runt så hamnar man här.
  gåRunt();
}
