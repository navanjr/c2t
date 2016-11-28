window.bible = {
  version: 'nate'
}

window.onload = function() {
  // menu
  var portionNames = Object.keys(tp);
  var menu = document.getElementById('portionsMenu');
  for (var i = 0; i < portionNames.length; i++) {
    var menuItem = newElement({contents: properCase(portionNames[i]), class: 'menuItem', id: portionNames[i]});
    menuItem.onclick = nav.click;
    menu.appendChild(menuItem);
  }
  // buttons
  var buttons = document.getElementsByTagName('i');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e){
      var id = e.srcElement.id;
      nav.click(e);
    };
  }
  // references
  var references = document.getElementById('referencesMenu');
  references.onclick = function(e) {
    nav.click(e);
  } 
  // reading
  var reading = document.getElementById('reading');
  reading.onclick = function(e) {
    nav.click({hide: true});
  }
  //nav
  nav.portions = {element: document.getElementById('portionsMenu')};
  nav.references = {element: document.getElementById('referencesMenu')};
  // load current portion
  stuffReferenceMenu('noach');
  read({chunkIndex: 0});
}

books = function() {
  return Object.keys(kjv);
}

nav = {
  next: function(x) {
    x = x || 1;
    var nextId = this.referenceIndex + x;
    if (nextId > -1 && nextId < this.referenceCount) {
      read({chunkIndex: nextId});
    }
  },
  hideMenu: function(menu) {
    if (this[menu].element.classList.contains('expand')) {
      this[menu].element.classList.toggle('expand');
    }
  },
  showMenu: function(menu) {
    if (!this[menu].element.classList.contains('expand')) {
      this[menu].element.classList.toggle('expand');
    }
  },
  toggleMenu: function(menu) {
    this[menu].element.classList.toggle('expand');
  },
  click: function(e) {
    this.button = e && e.srcElement && e.srcElement.id;
    var b1 = this.button === 'b1',
        b2 = this.button === 'b2',
        b3 = this.button === 'b3',
        b4 = this.button === 'b4';
    var menuItem = e && e.srcElement && (e.srcElement.className === 'menuItem' || e.srcElement.className === 'bookName');
    var portionsMenu = e && e.srcElement && e.srcElement.parentElement && e.srcElement.parentElement.id === 'portionsMenu';
    var referencesMenu = e && e.srcElement && e.srcElement.parentElement && e.srcElement.parentElement.id === 'referencesMenu';
    var menuItemId = menuItem && e.srcElement.id;
    if (e.hide) {
      if (portionsExpanded) {
        this.portions.element.classList.toggle('expand');
      }
      if (referencesExpanded) {
        references.classList.toggle('expand');
      }
    } else if (b1) {
      //we toggle portionMenu and Hide referencesMenu
      nav.toggleMenu('portions');
      nav.hideMenu('references');
    } else if(b2) {
      //we toggle referencesMenu and Hide portionMenu
      nav.toggleMenu('references');
      nav.hideMenu('portions');
    } else if (menuItem && portionsMenu) {
      //hide the portion menu and fill the reference menu and show it and set the reading to the first reference in the torah
      nav.toggleMenu('portions');
      stuffReferenceMenu(menuItemId);
      // nav.showMenu('references');
      read({chunkIndex: 0});
    } else if (menuItem && referencesMenu) {
      nav.hideMenu('references');
    } else if (b3 || b4){
      nav.next(b3 ? -1 : 0);
    }
  }
};

stuffReferenceMenu = function(portionName) {
  var mainWindow = document.getElementById('referencesMenu');
  mainWindow.innerHTML = "";
  var chunks = getPortion(portionName);
  nav.portion = portionName;
  nav.referenceCount = chunks.length;
  if (chunks) {
    for (var i = 0; i < chunks.length; i++) {
      var chunk = chunks[i];

      var bookRefSpan = newElement({id: 'readingName_' + i, class: 'bookName', contents: getReference(chunk)});
      
      bookRefSpan.onclick = read;

      mainWindow.appendChild(bookRefSpan);
    }
    var portionTitle = document.getElementById('portionTitle');
    portionTitle.innerHTML = properCase(portionName);
  }
}

read = function(options){
  options = options || {};
  if (options.chunkIndex != undefined) {
    var id = options.chunkIndex;
  } else {
    var id = parseInt(this.id.split('_')[1]);
  }
  nav.referenceIndex = id;
  var chunks = getPortion(nav.portion)[id];
  var readingDiv = document.getElementById('reading');
  var referenceTitleDiv = document.getElementById('referenceTitle');
  readingDiv.innerHTML = '';
  var bookName = Object.keys(chunks)[0];
  referenceTitleDiv.innerHTML = getReference(chunks);
  for (var i = 0; i < chunks[bookName].length; i++) {
    var chunk = chunks[bookName][i];
    var cs = newElement({class: 'chapter'});
    var chapter = Object.keys(chunk)[0];
    var verseArray = chunk[chapter];
    var verseSeed = 0;
    var chapterName = chapter;
    if (chapter.indexOf(',') > 0 && chapter.split(',').length > 1) {
      verseSeed = chapter.split(',')[1] - 1;
      chapterName = chapter.split(',')[0];
    }
    var cn = newElement({class: 'chapterName', contents: 'Chapter ' + chapterName});
    cs.appendChild(cn);
    for (var k = 0; k < verseArray.length; k++) {
      var verse = verseArray[k];
      var span = newVerseNumberElement([chapterName, k + verseSeed + 1].join(':'), {renderHTML: true});
      cs.innerHTML += span + verse;
    }
    readingDiv.appendChild(cs);
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
  if (first != last) {
    return getProperBookName(bookName) + ' ' + first + ' - ' + last;
  } else {
    return getProperBookName(bookName) + ' ' + first;
  }
};

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

properCase = function(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}