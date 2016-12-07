window.c2t = {
  version: 'v0.0.1',
  today: new Date()
}
c2t.shabbat = {
  date: new Date(),
  offset: 6 - c2t.today.getDay()
};
var shabbat = c2t.shabbat;
shabbat.date.setDate(shabbat.date.getDate() + shabbat.offset);
shabbat.year = shabbat.date.getUTCFullYear();
shabbat.month = shabbat.date.getUTCMonth() + 1;
shabbat.day = shabbat.date.getDate();
c2t.portionName = calendar[shabbat.year]
  && calendar[shabbat.year][shabbat.month]
  && calendar[shabbat.year][shabbat.month][shabbat.day]
  || 'breisheet';

window.onload = function() {
  // menus
  var portionNames = Object.keys(portionsData);
  var menu = document.getElementById('portionsMenu');
  for (var i = 0; i < portionNames.length; i++) {
    var menuItem = newElement({contents: properCase(portionNames[i]), class: 'menuItem', id: portionNames[i]});
    menuItem.onclick = nav.click;
    menu.appendChild(menuItem);
  }
  document.getElementById('portionTitle').onclick = nav.click;
  document.getElementById('referenceTitle').onclick = nav.click;

  // buttons
  var buttons = document.getElementsByTagName('i');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e){
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
  stuffReferenceMenu(c2t.portionName);
  read({chunkIndex: 0});
}

books = function() {
  return Object.keys(kjv);
}

nav = {
  reset: function() {
    this.disableMenu('b3');
  },
  navigate: function(index) {
    this.referenceIndex = index;
    this.first = this.referenceIndex === 0;
    this.last = this.referenceIndex === this.referenceCount - 1;
    this.refreshMenus();
  },
  refreshMenus: function() {
    if (this.last) {
      this.disableMenu('b4');
    } else {
      this.enableMenu('b4');
    }
    if (this.first) {
      this.disableMenu('b3');
    } else {
      this.enableMenu('b3');
    }
  },
  next: function(x) {
    x = x || 1;
    var nextId = this.referenceIndex + x;
    if (nextId > -1 && nextId < this.referenceCount) {
      read({chunkIndex: nextId});
    }
  },
  disableMenu: function(menu) {
    var menuClassList = document.getElementById(menu).classList;
    if (!menuClassList.contains('disabled')) {
      menuClassList.toggle('disabled');
    }
  },
  enableMenu: function(menu) {
    var menuClassList = document.getElementById(menu).classList;
    if (menuClassList.contains('disabled')) {
      menuClassList.toggle('disabled');
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
        b2 = ['b2', 'portionTitle', 'referenceTitle'].includes(this.button),
        b3 = this.button === 'b3',
        b4 = this.button === 'b4',
        b5 = this.button === 'b5';
    var menuItem = e && e.srcElement && (e.srcElement.className === 'menuItem' || e.srcElement.className === 'bookName');
    var portionsMenu = e && e.srcElement && e.srcElement.parentElement && e.srcElement.parentElement.id === 'portionsMenu';
    var referencesMenu = e && e.srcElement && e.srcElement.parentElement && e.srcElement.parentElement.id === 'referencesMenuItems';
    var menuItemId = menuItem && e.srcElement.id;
    if (e.hide) {
      nav.hideMenu('portions');
      nav.hideMenu('references');
    } else if (b1) {
      //we toggle portionMenu and Hide referencesMenu
      nav.toggleMenu('portions');
      nav.hideMenu('references');
    } else if(b2) {
      //we toggle referencesMenu and Hide portionMenu
      nav.toggleMenu('references');
      nav.hideMenu('portions');
    } else if (menuItem && portionsMenu) { // portions menu
      //hide the portion menu and fill the reference menu and show it and set the reading to the first reference in the torah
      nav.toggleMenu('portions');
      stuffReferenceMenu(menuItemId);
      read({chunkIndex: 0});
    } else if (menuItem && referencesMenu) { // references menu
      nav.hideMenu('references');
    } else if (b3 || b4){ // navigate left or right through references
      nav.hideMenu('references');
      nav.hideMenu('portions');
      nav.next(b3 ? -1 : 0);
    } else if (b5){ // Share Feature
      shareReading(nav.portion);
      nav.hideMenu('references');
      nav.hideMenu('portions');
    }
  }
};

stuffReferenceMenu = function(portionName) {
  var mainWindow = document.getElementById('referencesMenuItems');
  var refCount = document.getElementById('referenceCount');
  mainWindow.innerHTML = "";
  var chunks = getPortion(portionName);
  nav.portion = portionName;
  nav.referenceCount = chunks.length;
  if (chunks) {
    for (var i = 0; i < chunks.length; i++) {
      var chunk = chunks[i];

      var bookRefSpan = newElement({id: 'readingName_' + i, class: 'bookName', contents: chunk.reference});

      bookRefSpan.onclick = read;

      mainWindow.appendChild(bookRefSpan);
    }
    var portionTitle = document.getElementById('portionTitle');
    portionTitle.innerHTML = properCase(portionName);
    refCount.innerHTML = nav.referenceCount;
    nav.reset();
  }
}

changeTitle = function(id, content) {
  document.getElementById(id).innerHTML = content;
};

shareReading = function(portion) {
  //TODO: BUG - this function gets called twice
  changeTitle('referenceTitle', '"' + portionsData[nav.portion].description + '"');
  var reading = document.getElementById('reading');
  var chunks = getPortion(nav.portion);
  reading.innerHTML = '';
  var section = '';
  var sectionDiv;
  for (var i = 0; i < chunks.length; i++) {
    var chunk = chunks[i];
    if (section != chunk.section) {
      if (sectionDiv) {
        reading.appendChild(sectionDiv);
      }
      section = chunk.section;
      sectionDiv = newElement({class: 'section', contents: section});
    }
    sectionDiv.appendChild(newElement({
      class: 'shareChapter',
      contents: chunk.reference,
    }));
  }
  if (sectionDiv) {
    reading.appendChild(sectionDiv);
  }
};

read = function(options){
  options = options || {};
  if (options.chunkIndex != undefined) {
    var id = options.chunkIndex;
  } else {
    var id = parseInt(this.id.split('_')[1]);
  }
  nav.navigate(id);
  var chunks = getPortion(nav.portion)[id];
  var readingDiv = document.getElementById('reading');
  var referenceTitleDiv = document.getElementById('referenceTitle');
  readingDiv.innerHTML = '';
  referenceTitleDiv.innerHTML = chunks.reference;
  for (var i = 0; i < chunks.verses.length; i++) {
    var chunk = chunks.verses[i];
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

getReference = function(bookName, verseArray) {
  var prettyReference = function(ref, options) {
    options = options || {};
    //'1'
    //'6,1,8'
    //'6,9'
    var refSplit = ref.split(',');
    if (refSplit.length === 3) {
      if (refSplit[1] != refSplit[2]) {
        if (options.spansChapters) {
          return refSplit[0] + ':' + refSplit[2];
        }
        return refSplit[0] + ':' + refSplit[1] + '-' + refSplit[2];
      }
      return refSplit[0] + ':' + refSplit[1];
    } else if (refSplit.length === 2) {
      return refSplit[0] + ':' + refSplit[1];
    }
    return ref;
  };
  var first = prettyReference(Object.keys(verseArray[0])[0]);
  var last = prettyReference(Object.keys(verseArray[verseArray.length - 1])[0], {spansChapters: true});
  if (verseArray.length > 1) {
    return bookName + ' ' + first + ' - ' + last;
  } else {
    return bookName + ' ' + first;
  }
};

getProperBookName = function(book) {
  return bookInfo.getAllBooks()[book] || book + 'Proper';
};

getPortion = function(portionName) {
  var ret = [],
    somethingToRead = portionsData[portionName].references;
  if (somethingToRead) {
    for (var i = 0; i < somethingToRead.length; i++) {
      var reading = somethingToRead[i]; // returns object {gen: [...]}
      var bookName = Object.keys(reading)[0];
      var book = kjv[bookName];
      var chapters = reading[bookName];
      if (book && chapters.length) {
        var chunk = {};
        chunk[bookName] = [];
        var bookData = bookInfo.book(bookName) || {};
        for (var key in bookData) {
          chunk[key] = bookData[key];
        }
        // chunk.bookName = getProperBookName(bookName);
        // chunk.section = getSection(bookName);
        for (var ii = 0; ii < chapters.length; ii++) {
          var chapter = chapters[ii];
          if (chapter) {
            var chunkObj = {};
            if (Array.isArray(chapter) && chapter.length === 3) { // not the whole chapter
              chunkObj[chapter] = book[chapter[0]].slice(chapter[1]-1, chapter[2]);
              chunkObj.chapter = 'Chapter ' + chapter[0];
            } else if (Array.isArray(chapter) && chapter.length === 2) { // return from the given verse to the end of the chapter
              chunkObj[chapter] = book[chapter[0]].slice(chapter[1]-1);
              chunkObj.chapter = 'Chapter ' + chapter[0];
            } else { // return the whole chapter
              chunkObj[chapter] = book[chapter];
              chunkObj.chapter = 'Chapter ' + chapter;
            }
            chunk[bookName].push(chunkObj);
          }
        }
        chunk.reference = getReference(chunk.bookName, chunk[bookName]);
        chunk.verses = chunk[bookName];
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
