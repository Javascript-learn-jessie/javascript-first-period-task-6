function printBeerSong() {
    //console.log("str");
    var result='\n';
    for (let i = 99; i >= 1; i--) {
        if (i != 1) {
            result+=`    ${i} bottles of beer on the wall, ${i} bottles of beer.\n    Take one down and pass it around,${i - 1} bottles of beer on the wall.\n`;
        } else {
            result+='    1 bottle of beer on the wall, 1 bottle of beer.\n    Take one down and pass it around, no more bottles of beer on the wall.\n    No more bottles of beer on the wall, no more bottles of beer.\n    Go to the store and buy some more, 99 bottles of beer on the wall.';
        }
    }
    console.log(result);
    return result;
}

module.exports = printBeerSong;
/*
const fs = require('fs');
var expectText = fs.readFileSync('./lyrics.md','utf-8');
console.log(expectText);
console.log('            ******************************');
printBeerSong();
*/