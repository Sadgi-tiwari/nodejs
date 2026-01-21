function capitalize(str) {
    return str.toUpperCase();
}
function reverse(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let ch of str) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    return count;
}

module.exports = {
    capitalize: capitalize,
    reverse: reverse,
    countVowels: countVowels
};
