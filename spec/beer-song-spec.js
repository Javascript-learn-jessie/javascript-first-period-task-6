const beerSong = require('../src/beer-song');
const lyrics = require('../src/lyrics')
const fs = require('fs');

describe('beer song',function(){
    var expectText = lyrics();
    it(':print the beer song',function(){
        spyOn(console,'log');
        var result = beerSong();
      //  expect(console.log).toHaveBeenCalledWith(expectText);
      expect(result).toEqual(expectText);

    })
})