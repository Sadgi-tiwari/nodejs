const fs = require('fs');

const text = fs.readFileSync('input.txt', 'utf8');
const count = text.split(' ').length;

fs.writeFileSync('output.txt', count.toString());
