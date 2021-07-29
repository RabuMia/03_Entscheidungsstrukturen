// Entscheidungsstrukturen | control structures

// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
// Ausgabe 
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);


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

if (isJohnOlder) 
{
    // Ja-zweig / true
    console.log("John ist älter.");   
} 
else 
{
    // Nein-zweig / false
    console.log("John ist jünger."); 
}

/**** Ternäre (ternary) Schreibweise ****/
//Kurzschreibweise, gut zu wissen
console.log ( (isJohnOlder) ? "John is older" : "Mark is older");