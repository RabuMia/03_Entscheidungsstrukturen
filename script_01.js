// Entscheidungsstrukturen | control structures

// // Deklaration
// let ageJohn, ageMark;
// let isJohnOlder, isJohnEqual;

// // Wertzuweisung
// ageJohn = 30;
// ageMark = 30;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);
// // Ausgabe 
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);


/**** IF ****/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if (true)
// if (false) 
// if(isJohnOlder)
// {
//     console.log("John ist älter.");
// }

/**** If - Else ****/
// mit Alternative
// entweder ja oder nein

// if (isJohnOlder) 
// {
//     // Ja-zweig / true
//     console.log("John ist älter.");   
// } 
// else 
// {
//     // Nein-zweig / false
//     console.log("John ist jünger."); 
// }

/**** Ternäre (ternary) Schreibweise ****/
//Kurzschreibweise, gut zu wissen
// console.log ( (isJohnOlder) ? "John is older" : "Mark is older");

/**** If - Else If ****/
//mit alternativen Fällen (älter, jünger, gleich alt)


// if (isJohnOlder) 
// // Ja-zweig / true
// {
    
//     console.log("John ist älter.");   
// } 
// // 1. Alternative
// else if(isJohnEqual)
// {

//     console.log("John ist gleich alt.");   
// }
// // ggf. weitere Alternativen

// // Nein-zweig / false
// else 
// {
    
//     console.log("John ist jünger."); 
// }

/**** Fallunterscheidung / CASE|SWITCH 1 ****/
const firstName = "Jane";
let job;
job = "driver"; //...fährt TAXI!
job = "diver";  //...taucht im Rhein!
job = "artist"; //...malt ein Bild!
job = "pilot"; //...macht etwas anderes!
job= "teacher"; //...unterrichtet!
job= "instructor"; //...unterrichtet!

switch (job) 
{
    case "driver": //1. Fall
        console.log(firstName + " fährt Taxi.");
        break;

    case "diver": //2. Fall
        console.log(firstName + " taucht im Rhein.");
        break;

    case "artist": //3. Fall
        console.log(firstName + " malt ein Bild.");
        break;

    case "teacher": //4. Fall
    case "instructor": //4a. Fall
        console.log(firstName + " unterrichtet!");
        break;

    default: // für alle nicht bezeichneten Fälle...WICHTIG!!!
        console.log(firstName + " macht etwas anderes!");
        break;
}