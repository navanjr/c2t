window.bible = {
  version: 'nate'
}

window.onload = function() {
  var portionNames = Object.keys(tp);
  var menu = document.getElementById('portionsMenu');
  for (var i = 0; i < portionNames.length; i++) {
    var menuItem = newElement({contents: portionNames[i], class: 'menuItem', id: portionNames[i]});
    menuItem.onclick = function(e){
      l(e);
      read(e.srcElement.id);
    }
    menu.appendChild(menuItem);
  }
  var buttons = document.getElementsByTagName('i');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e){
      var id = e.srcElement.id;
      if (id === 'b1') {
        read('breisheet');
      } else if (id === 'b2') {
        read('noach');
      }
    };
  }
}
var testVariable = 'this is a test';

books = function() {
  return Object.keys(kjv);
}

read = function(portionName) {
  var mainTitle = document.getElementById('title');
  var mainWindow = document.getElementById('portionText');
  mainTitle.innerHTML = "biblejs";
  mainWindow.innerHTML = "";
  var chunks = getPortion(portionName);
  if (chunks) {
    for (var i = 0; i < chunks.length; i++) {
      var chunk = chunks[i];
      var bookName = Object.keys(chunk)[0];

      var bookDiv = newElement();

      var bookRefSpan = newElement({class: 'bookName', contents: getReference(chunk)});

      for (var j = 0; j < chunk[bookName].length; j++) {
        var cs = newElement({class: 'chapter'});
        var chapter = Object.keys(chunk[bookName][j])[0];
        var verseArray = chunk[bookName][j][chapter];
        var verseSeed = 0;
        var chapterName = chapter;
        if (chapter.indexOf(',') > 0 && chapter.split(',').length === 2) {
          verseSeed = chapter.split(',')[1] - 1;
          chapterName = chapter.split(',')[0];
        } else if (chapter.indexOf(',') > 0 && chapter.split(',').length === 3) {
          chapterName = chapter.split(',')[0];
        }
        var cn = newElement({class: 'chapterName', contents: 'Chapter ' + chapterName});
        cs.appendChild(cn);
        for (var k = 0; k < verseArray.length; k++) {
          var verse = verseArray[k];
          var span = newVerseNumberElement(k + verseSeed + 1, {renderHTML: true});
          cs.innerHTML += span + verse;
        }
        bookDiv.appendChild(cs);
      }

      mainWindow.appendChild(bookRefSpan);
      mainWindow.appendChild(bookDiv);
    }
    mainTitle.innerHTML = portionName;
  }
}

newElement = function(options) {
  options = options || {};
  var newElement = document.createElement(options.type || 'div');
  if (options.class) {
    newElement.className = options.class;
  }
  if (options.id) {
    newElement.id = options.id;
  }
  newElement.innerHTML = options.contents || '';
  return newElement;
}

newVerseNumberElement = function(contents, options) {
  options = options || {};
  var newElement = document.createElement('span');
  newElement.className = options.class || 'verseNumber';
  newElement.innerHTML = contents;
  if (options.renderHTML) {
    var tmp = document.createElement("div");
    tmp.appendChild(newElement);
    return tmp.innerHTML;
  }
  return newElement;
}

bookNames = {
  gen: 'Genesis',
  exd: 'Exodus',
  num: 'Numbers',
  lev: 'Leviticus',
  deu: 'Deuteronomy',
};

getReference = function(chunk) {
  var prettyReference = function(ref) {
    //'1'
    //'6,1,8'
    //'6,9'
    var refSplit = ref.split(',');
    if (refSplit.length === 3) {
      return refSplit[0] + ':' + refSplit[1] + '-' + refSplit[2];
    } else if (refSplit.length === 2) {
      return refSplit[0] + ':' + refSplit[1];
    } else {
      return ref;
    }
  };
  var bookName = Object.keys(chunk)[0];
  var chapters = chunk[bookName];
  var first = prettyReference(Object.keys(chapters[0])[0]);
  var last = prettyReference(Object.keys(chapters[chapters.length - 1])[0]);
  return getProperBookName(bookName) + ' ' + first + ' - ' + last;
}

getProperBookName = function(book) {
  return bookNames[book] || book + 'Proper';
}

getPortion = function(portionName) {
  var ret = [],
    somethingToRead = tp[portionName];
  if (somethingToRead) {
    for (var i = 0; i < somethingToRead.length; i++) {
      var reading = somethingToRead[i];
      var bookName = Object.keys(reading)[0];
      var book = kjv[bookName];
      var chapters = reading[bookName];
      if (book && chapters.length) {
        var chunk = {};
        chunk[bookName] = [];
        for (var ii = 0; ii < chapters.length; ii++) {
          var chapter = chapters[ii];
          if (chapter) {
            var chunkObj = {};
            if (Array.isArray(chapter) && chapter.length === 3) { // not the whole chapter
              chunkObj[chapter] = book[chapter[0]].slice(chapter[1]-1, chapter[2]);
            } else if (Array.isArray(chapter) && chapter.length === 2) { // return from the given verse to the end of the chapter
              chunkObj[chapter] = book[chapter[0]].slice(chapter[1]-1);
            } else { // return the whole chapter
              chunkObj[chapter] = book[chapter];
            }
            chunk[bookName].push(chunkObj);
          }
        }
        ret.push(chunk);
      }
    }
  }
  return ret;
};

l = function(log, log2) {
  if (log2) {
    console.log(log, log2);
  } else {
    console.log(log);
  }
}