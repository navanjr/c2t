(function() {
  'use strict';

  var properCase = function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  var l = function(log, log2) {
    if (log2) {
      console.log(log, log2);
    } else {
      console.log(log);
    }
  }

  var newElement = function(options) {
    options = options || {};
    var newElement = document.createElement(options.type || 'div');
    if (options.class) {
      newElement.className = options.class;
    }
    if (options.id) {
      newElement.id = options.id;
    }
    if (options.onclick) {
      newElement.onclick = options.onclick;
    }
    newElement.innerHTML = options.contents || '';
    return newElement;
  }

  var nav = {
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
          b5 = this.button === 'b5',
          b6 = this.button === 'b6',
          b7 = this.button === 'b7';
      var menuItem = e && e.srcElement && (e.srcElement.className === 'menuItem' || e.srcElement.className === 'bookName');
      var portionsMenu = e && e.srcElement && e.srcElement.parentElement && e.srcElement.parentElement.id === 'portionsMenu';
      var referencesMenu = e && e.srcElement && e.srcElement.parentElement && e.srcElement.parentElement.id === 'referencesMenuItems';
      var settingsMenu = e && e.srcElement && e.srcElement.parentElement && e.srcElement.parentElement.id === 'settingsMenuItems';
      var menuItemId = menuItem && e.srcElement.id;
      if (e.hide) {
        nav.hideMenu('portions');
        nav.hideMenu('references');
        nav.hideMenu('settings');
      } else if (b1) {
        //we toggle portionMenu and Hide referencesMenu and settingsMenu
        nav.toggleMenu('portions');
        nav.hideMenu('references');
        nav.hideMenu('settings');
      } else if(b2) {
        //we toggle referencesMenu and Hide portionMenu and settingsMenu
        nav.toggleMenu('references');
        nav.hideMenu('portions');
        nav.hideMenu('settings');
      } else if (menuItem && portionsMenu) { // portions menu
        //hide the portion menu and fill the reference menu and show it and set the reading to the first reference in the torah
        nav.toggleMenu('portions');
        stuffReferenceMenu(menuItemId);
        read({chunkIndex: 0});
      } else if (menuItem && referencesMenu) { // references menu
        nav.hideMenu('references');
      } else if (menuItem && settingsMenu) { // settings menu
        // stuffReferenceMenu(menuItemId);
        nav.hideMenu('settings');
        listSettings(menuItemId);
      } else if (b3 || b4){ // navigate left or right through references
        nav.hideMenu('references');
        nav.hideMenu('portions');
        nav.hideMenu('settings');
        nav.next(b3 ? -1 : 0);
      } else if (b5){ // wholeBible Feature
        console.log('the wholeBible Feature');
        wholeBible();
        nav.hideMenu('references');
        nav.hideMenu('portions');
        nav.hideMenu('settings');
      } else if (b6){ // Share Feature
        shareReading(nav.portion);
        nav.hideMenu('references');
        nav.hideMenu('portions');
        nav.hideMenu('settings');
      } else if (b7){
        //we toggle settingsMenu and Hide portionMenu and references Menu
        nav.toggleMenu('settings');
        nav.hideMenu('references');
        nav.hideMenu('portions');
      }
    }
  };

  window.c2t = {
    version: 'v0.0.1',
    today: new Date()
  }
  var tday = new Date();
  tday = tday.valueOf(tday);
  tday = new Date(tday - 18000000);
  c2t.shabbat = {
    date: tday,
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
  nav.apostolicList = 'default-list';
  // TODO: fix the following Hack!
  if (Array.isArray(c2t.portionName)) {
    c2t.portionName = c2t.portionName[0];
  }
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
    nav.settings = {element: document.getElementById('settingsMenu')};
    // load the settings list with the available apostolic reading lists
    fillSettingsMenu();
    // load current portion
    stuffReferenceMenu(c2t.portionName);
    read({chunkIndex: 0});
  }

  var books = function() {
    return Object.keys(kjv);
  }

  var stuffReferenceMenu = function(portionName) {
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

  var changeTitle = function(id, content) {
    document.getElementById(id).innerHTML = content;
  };

  var wholeBible = () => {
    var reading = document.getElementById('reading');
    reading.innerHTML = '';
    var sections = Object.keys(bookInfo.sections);
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionDiv = newElement({
        contents: section,
        class: 'section'
      });
      var card = newElement({class: 'card closer wholeBibleCard'});

      var books = Object.keys(bookInfo.sections[section]);
      for (var j = 0; j < books.length; j++) {
        var book = bookInfo.book(books[j]) || {};
        card.appendChild(newElement({
          type: 'span',
          contents: book.bookName,
          class: 'wholeBibleBook',
          id: 'wholeBible_' + books[j],
          onclick: read
        }));
      }
      sectionDiv.appendChild(card);
      reading.appendChild(sectionDiv);
    }
  }

  var shareReading = function(portion) {
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
      // adds the scripture
      let card = newElement({class: 'card closer', contents: chunk.reference});
      // card.onclick = (e) => {console.log(e);};
      card.id = 'readingName_' + i;
      card.onclick = read;
      card.appendChild(newElement({
        type: 'div',
        class: 'shareVerse',
        contents: versesFormated(chunk.verses, {
          wholeChunk: true,
          verseCount: 1,
          supressReference: true
        })
      }));
      sectionDiv.appendChild(card);
    }
    if (sectionDiv) {
      reading.appendChild(sectionDiv);
    }
  };

  // populate the setings menu with the available apostolic reading lists
  var fillSettingsMenu = function(){
    var smenu = document.getElementById('settingsMenuItems');
    var apoObject = Object.keys(apostolicData);
    var apoValues = Object.values(apostolicData);
    for (var q = 0; q < apoObject.length; q++) {
        var apostolicPortion = newElement({id: apoObject[q], class: 'bookName', contents: apoValues[q].displayName});
        apostolicPortion.onclick = nav.click;
        smenu.appendChild(apostolicPortion);
    }
  }

  // resets the references list to use the newly selected apostolic reading list
  var listSettings = function(listName){
    nav.apostolicList = listName;
    stuffReferenceMenu(nav.portion);
    var staticListCount = Object.keys(portionsData[nav.portion].references).length;
    read({chunkIndex: staticListCount}); // We read the first reading from the apostolic list
  }

  var read = function(options){
    //this.id is null or `portionName_X` or `wholeBible_bookAbvr`
    options = options || {};
    var chunks = {};
    if (this && this.id.split('_')[0] === 'wholeBible') { // reading the entire book
      chunks = getPortion(this.id.split('_')[1], {wholeBible: true})[0];
    } else {
      if (options.chunkIndex != undefined) {
        var id = options.chunkIndex;
      } else {
        var id = parseInt(this.id.split('_')[1]);
      }
      nav.navigate(id); // nav to the id within the Torah Portion
      chunks = getPortion(nav.portion)[id];
    }
    var readingDiv = document.getElementById('reading');
    var referenceTitleDiv = document.getElementById('referenceTitle');
    readingDiv.innerHTML = '';
    referenceTitleDiv.innerHTML = chunks.reference;
    for (var i = 0; i < chunks.verses.length; i++) {
      var chunk = chunks.verses[i];
      var cs = newElement({class: 'card'});
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
      cs.innerHTML += versesFormated(verseArray, {chapter: chapterName, verseSeed: verseSeed});
      readingDiv.appendChild(cs);
    }
    readingDiv.scrollTop = 0;
    document.querySelector('.loader').setAttribute('hidden', true);
  }

  var versesFormated = function(array, options) {
    if (options.wholeChunk) {
      var chapterAndFirstVerse = Object.keys(array[0])[0];
      array = array[0][chapterAndFirstVerse];
      if (options.verseCount) {
        array = array.slice(0, options.verseCount);
      }
      options.chapter = chapterAndFirstVerse.split(',')[0];
      options.verseSeed = chapterAndFirstVerse.split(',')[1] - 1;
    }
    let retVar = '';
    for (var k = 0; k < array.length; k++) {
      var verse = array[k];
      var span = '';
      if (!options.supressReference) {
        span = newVerseNumberElement([options.chapter, k + (options.verseSeed || 0) + 1].join(':'), {renderHTML: true});
      }
      retVar += span + verse;
    }
    return retVar;
  };

  var newVerseNumberElement = function(contents, options) {
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

  var getReference = function(bookName, verseArray) {
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

  var getProperBookName = function(book) {
    return bookInfo.getAllBooks()[book] || book + 'Proper';
  };

  var getPortion = function(portionName, options) {
    options = options || {};
    var ret = [],
      somethingToRead = [];
    if (options.wholeBible) {
      somethingToRead = [bookInfo.book(portionName).bookData];
    } else {
      somethingToRead = portionsData[portionName].references.concat(apostolicData[nav.apostolicList][portionName].references);
    }
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


})();
