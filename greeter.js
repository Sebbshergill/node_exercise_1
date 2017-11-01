var greetings = [
      "hello"
    , "ciao"
    , "welcome"
    , "howdy"
    , "greetings"
    , "salut"
    , "hallo"
    , "hola"
    , "Gday"
    , "Hey"
];
var greeting = Math.floor(Math.random() * greetings.length);

greeting = greetings[greeting];

console.log(greeting);