let fs = require("fs");
let utils = require("./stringUtils");  

let text = "hello world";

let output = "";
output += "Capitalized: " + utils.capitalize(text) + "\n";
output += "Reversed: " + utils.reverse(text) + "\n";
output += "Vowel Count: " + utils.countVowels(text);

fs.writeFileSync("output.txt", output);

