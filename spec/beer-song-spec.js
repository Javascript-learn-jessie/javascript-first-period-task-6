const beerSong = require('../src/beer-song');
const fs = require('fs');

describe('beer song',function(){
    var expectText = fs.readFileSync('./lyrics.md','utf-8');
    it(':print the beer song',function(){
        spyOn(console,'log');
        var result = beerSong();
      //  expect(console.log).toHaveBeenCalledWith(expectText);
      expect(result).toEqual(expectText);

    })
})