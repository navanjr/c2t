window.bible = {
  version: 'nate'
}

var testVariable = 'this is a test';

books = function() {
  return Object.keys(kjv);
}

tp = {
  breisheet: [
    {gen: [1,2,3,4,5,6]}
  ]
};

read = function(portionName) {
  var verses = [],
    somethingToRead = tp[portionName];
  if (somethingToRead) {
    for (var i = 0; i < somethingToRead.length; i++) {
      var reading = somethingToRead[i];
      var bookName = Object.keys(reading)[0];
      var book = kjv[bookName];
      var chapters = reading[bookName];
      if (book && chapters.length) {
        for (var i = 0; i < chapters.length; i++) {
          var chapter = chapters[i];
          if (book[chapter]) {
            if (verses.length) {
              verses.concat(book[chapter]);
            } else {
              verses.push(book[chapter]);
            }
          }
        }
      }
    }
  }
  return verses;
};

