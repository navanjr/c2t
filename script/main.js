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
    setLanguage: function(language) {
      var reading = document.getElementById('reading');
      switch(language) {
        case 0: //Both English and Hebrew
          reading.classList.remove('hideEnglish');
          reading.classList.remove('hideHebrew');
          document.cookie = "language=false; expires= " + nav.expiry(-1);
	  nav.language = 0;
          break;
        case 1: //English only
          reading.classList.remove('hideEnglish');
          reading.classList.add('hideHebrew');
          document.cookie = "language=1; expires= " + nav.expiry(1);
	  nav.language = 1;
          break;
        case 2: //Hebrew only
          reading.classList.add('hideEnglish');
          reading.classList.remove('hideHebrew');
          document.cookie = "language=2; expires= " + nav.expiry(1);
	  nav.language = 2;
          break;
      }
    },
    click: function(e) {
      this.button = e && e.srcElement && e.srcElement.id;
      var b1 = this.button === 'b1',
          b2 = ['b2', 'portionTitle', 'referenceTitle'].includes(this.button),
          b3 = this.button === 'b3',
          b4 = this.button === 'b4',
          b5 = this.button === 'b5',
          b6 = this.button === 'b6',
          b7 = this.button === 'b7',
          b8 = this.button === 'b8',
          b9 = this.button === 'b9',
          b10 = this.button === 'b10';
      var menuItem = e && e.srcElement && (e.srcElement.className === 'menuItem' || e.srcElement.className === 'bookName' || e.srcElement.className === 'settingsItem');
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
      } else if (b8){
        //English only
        nav.setLanguage(1);
        nav.hideMenu('settings');
      } else if (b9){
        //Both English and Hebrew
        nav.setLanguage(0);
        nav.hideMenu('settings');
      } else if (b10){
        //Hebrew only
        nav.setLanguage(2);
        nav.hideMenu('settings');
      }
    },
    expiry: function(offset) {
      var date = new Date();
      var d = date.getDate();
      date.setMonth(date.getMonth() + offset);
      if (date.getDate() != d) {
        date.setDate(0);
      }
      return date.toUTCString();
    },
    nightmode: function(e) {
      if(typeof e != 'undefined') nav.nightsetting = e;
      var body = document.getElementsByTagName("BODY")[0];
      var flipper = document.getElementById("night_flipper");
      if(nav.nightsetting) { //turn nightmode on
        document.cookie = "nightmode=true; expires= " + nav.expiry(1);
        flipper.style.cssFloat = "right";
        body.className = "dark";
      }
      else { //turn nightmode off
        document.cookie = "nightmode=false; expires= " + nav.expiry(1);
        flipper.style.cssFloat = "left";
        body.className = "";
      }
      nav.hideMenu('settings');
    },
    header: function() {
      var header = document.getElementsByTagName("HEADER")[0];
      var curTop = document.getElementById("reading").scrollTop;
      if(curTop <= 40) {
        header.classList.remove("headerHide");
        return;
      }
      if (nav.scrollPos > (curTop + 50)) {
        header.classList.remove("headerHide");
        nav.scrollPos = (curTop + 50);
      }
      else {
        header.classList.add("headerHide");
        nav.hideMenu('references');
        nav.hideMenu('portions');
        nav.hideMenu('settings');
      }
      if(curTop > nav.scrollPos) nav.scrollPos = curTop;
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
  c2t.portionName = 'breisheet';
  nav.haftarahList = 'defaultList';

  window.onload = function() {

    c2t.portionName = (findPortionNumber(new Date()))[0];

    // menus
    fillPortionMenu();

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
    //hide header on scroll
    nav.scrollPos = document.body.scrollTop;
    nav.fontChanging = false;
    reading.onscroll = function() {
      if(!nav.fontChanging) nav.header();
    }
    // load the settings list with the available apostolic reading lists
    fillSettingsMenu();
    //language settings
    if(document.cookie.includes("language=1")) {
      nav.setLanguage(1);
    }
    else if(document.cookie.includes("language=2")) {
      nav.setLanguage(2);
    }
    else {
      nav.setLanguage(0);
    }
    //nightmode settings
    nav.nightsetting = false;
    if (document.cookie.includes("nightmode=true")) {
      nav.nightsetting = true;
    }
    else if (document.cookie.includes("nightmode=false")){
      nav.nightsetting = false;
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      nav.nightsetting = true;
    }
    nav.nightmode(nav.nightsetting);
    document.getElementById('night').onclick = function() {
      nav.nightmode(!nav.nightsetting);
    }
    //text size
    if(document.cookie.includes("fontsize")) {
      nav.fontSize = Number(document.cookie.substring((document.cookie.indexOf('fontsize')+9), (document.cookie.indexOf('fontsize')+11)));
    }
    else {
      nav.fontSize = 16;
    }
    var root = document.getElementsByTagName('html')[0];
    root.style.fontSize = nav.fontSize + "px";
    var changeTimeout;
    document.getElementById('plus').onclick = function() {
      if(nav.fontSize < 24) {
        nav.fontChanging = true;
        clearTimeout (changeTimeout);
        nav.fontSize += 1;
        root.style.fontSize = nav.fontSize + "px";
        document.cookie = "fontsize=" + nav.fontSize + "; expires= " + nav.expiry(1);
      }
      changeTimeout = setTimeout(function(){nav.fontChanging = false;}, 500);
    }
    document.getElementById('minus').onclick = function() {
      if(nav.fontSize > 12) {
        nav.fontChanging = true;
        clearTimeout (changeTimeout);
        nav.fontSize -= 1;
        root.style.fontSize = nav.fontSize + "px";
        document.cookie = "fontsize=" + nav.fontSize + "; expires= " + nav.expiry(1);
      }
      changeTimeout = setTimeout(function(){nav.fontChanging = false;}, 500);
    }
    //reset settings
    document.getElementById('reset').onclick = function() {
      nav.setLanguage(0);
      nav.nightsetting = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      nav.nightmode(nav.nightsetting);
      document.cookie = "nightmode=" + nav.nightsetting + "; expires= " + nav.expiry(1);
      nav.fontSize = 16;
      root.style.fontSize = "16px";
      document.cookie = "fontsize=16; expires= " + nav.expiry(-1);
      nav.hideMenu('settings');
    }
    // load current portion
    nav.portionTimestamp = (new Date()).getTime();
    stuffReferenceMenu(nav.portionTimestamp);
    read({chunkIndex: 0});
  }

  var books = function() {
    return Object.keys(kjv);
  }

  var stuffReferenceMenu = function(portionTimestamp) {
    nav.portionTimestamp = Number(portionTimestamp);
    var mainWindow = document.getElementById('referencesMenuItems');
    var refCount = document.getElementById('referenceCount');
    mainWindow.innerHTML = "";
//TODO: change getPortion to instead expect the findPortionNumber array
    var portionName = findPortionNumber(new Date(nav.portionTimestamp))[0];
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
      portionTitle.innerHTML = portionsData[portionName].title;
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
          onclick: wholeBibleBook
        }));
      }
      sectionDiv.appendChild(card);
      reading.appendChild(sectionDiv);
    }
    reading.scrollTop = 0;
  }

  var wholeBibleBook = function() {
    var reading = document.getElementById('reading');
    reading.innerHTML = '';
    var book = this.id.split('_')[1];
    var card = newElement({class: 'card closer wholeBibleCard'});
    var chapters = Object.keys(kjv[book]);
    if (chapters.length == 1) {
      read.call(this);
      return;
    }
    reading.appendChild(newElement({contents: 'Book of ' + this.innerHTML}));
    for (var j = 0; j < chapters.length; j++) {
      card.appendChild(newElement({
        type: 'span',
        contents: 'Chapter ' + (j+1),
        class: 'wholeBibleBook',
        id: 'wholeBible_' + book + '_' + j,
        onclick: read
      }));
    }
    reading.appendChild(card);
    reading.scrollTop = 0;
  }

  var shareReading = function(portion) {
    //TODO: BUG - this function gets called twice
    changeTitle('referenceTitle', '"' + portionsData[nav.portion].description + '"');
    changeTitle('portionTitle', portionsData[nav.portion].title);
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
    var apoObject = Object.keys(haftarahData);
    var apoValues = Object.values(haftarahData);
    for (var q = 0; q < apoObject.length; q++) {
        var haftarahPortion = newElement({id: apoObject[q], class: 'settingsItem', contents: apoValues[q].displayName});
        haftarahPortion.onclick = nav.click;
        smenu.appendChild(haftarahPortion);
    }
  }

  // resets the references list to use the selected apostolic reading list
  var listSettings = function(listName){
    nav.haftarahList = listName;
    stuffReferenceMenu(nav.portionTimestamp);
    var staticListCount = Object.keys(portionsData[nav.portion].references).length;
    read({chunkIndex: staticListCount}); // We read the first reading from the apostolic list
  }

  var read = function(options){
    //this.id is null or `portionName_X` or `wholeBible_bookAbvr`
    options = options || {};
    var chunks = {};
    if (this && this.id.split('_')[0] === 'wholeBible') { // reading the entire book
      chunks = getPortion(this.id.split('_')[1], {wholeBible: true})[0];
      changeTitle('portionTitle', "Book of "+getPortion(this.id.split('_')[1], {wholeBible: true})[0].bookName);
      var chapterNumber = Number(this.id.split('_')[2]) || 0;
    } else {
      if (options.chunkIndex != undefined) {
        var id = options.chunkIndex;
      } else {
        var id = parseInt(this.id.split('_')[1]);
      }
      nav.navigate(id); // nav to the id within the Torah Portion
      chunks = getPortion(nav.portion)[id];
      changeTitle('portionTitle', portionsData[nav.portion].title);
    }
    var readingDiv = document.getElementById('reading');
    var referenceTitleDiv = document.getElementById('referenceTitle');
    readingDiv.innerHTML = '';
    referenceTitleDiv.innerHTML = chunks.reference;
    for (var i = 0; i < chunks.verses.length; i++) {
      var chunk = chunks.verses[i];
      if(chapterNumber && chapterNumber == i) {
        var chapterBlock = newElement({class: 'chapterBlock', id: chapterNumber})
      } else {
        var chapterBlock = newElement({class: 'chapterBlock'});
      }
      var cs = newElement({class: 'card engReading'});
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
      chapterBlock.appendChild(cs);
      if(chunk.heb){
        var cs = newElement({class: 'card hebReading'});
        var chapter = Object.keys(chunk)[0];
        var verseArray = chunk.heb;
        var verseSeed = 0;
        var chapterName = chapter;
        if (chapter.indexOf(',') > 0 && chapter.split(',').length > 1) {
          verseSeed = chapter.split(',')[1] - 1;
          chapterName = chapter.split(',')[0];
        }
        var cn = newElement({class: 'chapterName', contents: 'Chapter ' + chapterName});
        cs.appendChild(cn);
        cs.innerHTML += versesFormated(verseArray, {chapter: chapterName, verseSeed: verseSeed});
        chapterBlock.appendChild(cs);
      }
    readingDiv.appendChild(chapterBlock);
    }
    if (chapterNumber) {
      readingDiv.scrollTop = document.getElementById(chapterNumber).offsetTop;
    } else {
      readingDiv.scrollTop = 0;
    }
    taglexentry(); //adds onclick event for the new Hebrew words
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
      somethingToRead = portionsData[portionName].references;
      somethingToRead = somethingToRead.concat(haftarahData[nav.haftarahList][portionName].references);
    }
    if (somethingToRead) {
      for (var i = 0; i < somethingToRead.length; i++) {
        var reading = somethingToRead[i]; // returns object {gen: [...]}
        var bookName = Object.keys(reading)[0];
        var book = kjv[bookName];
    		var hebBook = wlc[bookName];
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
	            	if (hebBook) {chunkObj.heb = hebBook[chapter[0]].slice(chapter[1]-1, chapter[2]);}
                chunkObj.chapter = 'Chapter ' + chapter[0];
              } else if (Array.isArray(chapter) && chapter.length === 2) { // return from the given verse to the end of the chapter
                chunkObj[chapter] = book[chapter[0]].slice(chapter[1]-1);
	            	if (hebBook) {chunkObj.heb = hebBook[chapter[0]].slice(chapter[1]-1);}				
                chunkObj.chapter = 'Chapter ' + chapter[0];
              } else { // return the whole chapter
                chunkObj[chapter] = book[chapter];
            		if (hebBook) {chunkObj.heb = hebBook[chapter];}
                chunkObj.chapter = 'Chapter ' + chapter;
              }
              if (!hebBook){chunkObj.heb = false}
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


  var findPortionNumber = function(alephDate) {

    var alephDate = new Date(alephDate.setHours(0,0,0,0)); /* we want to work with a clean date timestamp so our math works out evenly later */
    
    var festivals = { /* store the dates of all the festivals, and also the reading list index for each one */
    // TODO: add all festival readings to reading list
      rosh: [1,1,"rosh-hashannah"],
      kippur: [1,10,"yom-kippur"],
      sukkot: [1,15,"sukkot"],
      sukkot2: [1,22,"sukkot2"],
      pesach: [8,15,"pesach"],
      pesach2: [8,21,"pesach2"],
      shavuot: [10,6,"shavuot"]
    }
    var hYear = hebYear(alephDate); // the Hebrew calendar year of alephDate
    var afterRosh = false; // a variable to tell us later in the code if the current date is between Rosh Hashannah and Sukkot

    // The Gregorian date of the last day of Sukkot, which is when the portion cycle gets reset
    var alephSukkot = HebToGreg(hYear, festivals.sukkot2[0], festivals.sukkot2[1]);

    if(alephDate.getTime() <= alephSukkot.getTime()){
      var afterRosh = true;
      // If we are between Rosh Hashannah and Sukkot we set alephSukkot to the sukkot of the previous Hebrew calendar year
      var alephSukkot = HebToGreg((hYear - 1), festivals.sukkot2[0], festivals.sukkot2[1]);
    }
    // Setting more festival dates to use later
    if(afterRosh){
      var pesachYear = (hYear - 1);
      var pesach = HebToGreg(pesachYear, festivals.pesach[0], festivals.pesach[1]);
      var pesach2 = HebToGreg(pesachYear, festivals.pesach2[0], festivals.pesach2[1]);
      var sukkot = HebToGreg((hYear), festivals.sukkot[0], festivals.sukkot[1]);
      var sukkot2 = HebToGreg((hYear), festivals.sukkot2[0], festivals.sukkot2[1]);
      var kippur = HebToGreg((hYear), festivals.kippur[0], festivals.kippur[1]);
      var rosh = HebToGreg((hYear), festivals.rosh[0], festivals.rosh[1]);
    }
    else{
      var pesachYear = hYear;
      var pesach = HebToGreg((hYear), festivals.pesach[0], festivals.pesach[1]);
      var pesach2 = HebToGreg((hYear), festivals.pesach2[0], festivals.pesach2[1]);
      var sukkot = HebToGreg((hYear + 1), festivals.sukkot[0], festivals.sukkot[1]);
      var sukkot2 = HebToGreg((hYear + 1), festivals.sukkot2[0], festivals.sukkot2[1]);
      var kippur = HebToGreg((hYear + 1), festivals.kippur[0], festivals.kippur[1]);
      var rosh = HebToGreg((hYear + 1), festivals.rosh[0], festivals.rosh[1]);
    }


    var startingShabbat = getNextShabbat(alephSukkot);
    var nextShabbat = getShabbat(alephDate);

    // Find the portion number based on the number of weeks elapsed since the first shabbat after last Sukkot
    var portionNumber = Math.floor((nextShabbat.getTime() - startingShabbat.getTime())/604800000 + 1);


    for(const f of Object.entries(festivals)){

      /* The following bit of messy code deals with finding the approprate 
         Hebrew year for festivals that affect the current Torah reading cycle.
         This is tricky, because if the date is past Yom Teruah we need to look 
         for the spring feasts from the previous year, but we if we're before 
         Yom Teruah we don't care about the fall feasts, but we do want to 
         display the readings for Yom Teruah if it's coming up in a few days, so it's still worth checking
         TODO: If someone can think of a cleaner way to do this, that would be great
      */

      var festDate = HebToGreg(hYear, f[1][0], f[1][1]);
      if(afterRosh){ /* if we're after Yom Teruah then the spring feasts were last year, otherwise afterRosh is false */
        if(f[0] == ('pesach' || f[0] == 'pesach2' || f[0] == 'shavuot')){
          festDate = HebToGreg((hYear - 1), f[1][0], f[1][1]);
        }
      }
      else{
        if(f[0] == 'rosh' || f[0] == 'kippur' || f[0] == 'sukkot' || f[0] == 'sukkot2'){
          festDate = HebToGreg((hYear + 1), f[1][0], f[1][1]);
        }
      }

      if(findFestival(alephDate, festDate, nextShabbat)){
        return([f[1][2], festDate]); // If today is a festival day, or if there is a festival between now and next Shabbat, then we return the festival readings
      }
      if(festDate.getDay() == 6 && nextShabbat.getTime() > festDate.getTime()){
        portionNumber -= 1; // If we have passed a festival that fell on a Shabbat, then the weekly portions get bumped back by one week
      }
    }

    if(pesach.getDay() !== (6 || 0) && pesach.getTime() < nextShabbat.getTime()){
              // TODO: is this ^ a valid way to check (getDay() !== 6 && getDay() !== 0)?
      /*
        If the first day of Pesach falls on a Saturday or Sunday then there is 
        no Shabbat Chol Hamoed, otherwise we check to see if the following week 
        is the Shabbat chol hamoed.  If not, we just check if we are past that, 
        in which case we need to deprecate portionNumber by 1.
      */
      if(pesach2.getTime() > nextShabbat.getTime()){ /* nextShabbat is the Shabbat Chol Hamoed Pesach */
        return(["chol-hamoed-pesach", nextShabbat]);
      }
      else{
        portionNumber -= 1;
      }
    }

    if(sukkot.getTime() < nextShabbat.getTime() && sukkot2.getTime() > nextShabbat.getTime()){
    /*
      Unless the first day of Sukkot falls on a Saturday, which we (essentially) 
      check for above, there is always a Shabbat Chol Hamoed Sukkot, 
      so we just need to see if we are between the two Chagim and read 
      the chol hamoed readings if we are.
      Otherwise, the Shabbat chol hamoed Sukkot always falls on either 
      the 3rd, 5th, or 6th day of the festival (because of the Rosh Hashannah 
      postponement rules), and the maftir reading is different for each case.
      For more information about Sukkot Yom Tov readings,
      see https://en.wikipedia.org/wiki/Yom_Tov_Torah_readings#Sukkot
      For a technical discussion about the Rosh Hashannah postponement rules,
      see https://individual.utoronto.ca/kalendis/hebrew/postpone.htm
    */
      var dayOfSukkot = Math.ceil(((nextShabbat.getTime() - sukkot.getTime())/86400000) + 1);
      switch(dayOfSukkot){
        case 3:
          return(["sukkotshabbatcholhamoed3", nextShabbat]);
          break;
        case 5:
          return(["sukkotshabbatcholhamoed5", nextShabbat]);
          break;
        case 6:
          return(["sukkotshabbatcholhamoed6", nextShabbat]);
          break;
      }
    }

    // At this point if the function has not returned we should be reading a regular portion from the cycle (not a festival or Shabbat Chol Hamoed)
    /*
       Next we need to determine if there have been any double portions in the cycle so far, or if the current portion should be a double portion
       Possible double portions are 22, 27, 29, 32, 42, and 51
       for the rules about doubled portions, see https://individual.utoronto.ca/kalendis/hebrew/parshah.htm#loop
    */

    var doublePortion = 0;
    if(portionNumber == 22){
      if(((pesach.getTime() - 86400000) - nextShabbat.getTime()) / 604800000 < 4){
        doublePortion = 55;
      }
    }
    else if(portionNumber > 22){
      if(((pesach.getTime() - 86400000) - alephSukkot.getTime()) / 604800000 < 26){
        portionNumber += 1;
      }
    }
    if(!IsLeapYear(pesachYear)){
      if(portionNumber == 27){
        doublePortion = 56;
      }
      else if(portionNumber > 27){
        portionNumber += 1;
      }
      if(portionNumber == 29){
        doublePortion = 57;
      }
      else if(portionNumber > 29){
        portionNumber += 1;
      }
      if(pesach.getDay() !== 6){
        if(portionNumber == 32){
          doublePortion = 58;
        }
        else if(portionNumber > 32){
          portionNumber += 1;
        }
      }
    }
    if(portionNumber == 42 && (HebToGreg(pesachYear, 12, 9).getTime() - nextShabbat.getTime()) / 604800000 < 2){
      doublePortion = 59;
    }
    else if(portionNumber > 42 && ((HebToGreg(pesachYear, 12, 9).getTime() - (nextShabbat.getTime() - ((portionNumber - 42) * 604800000))) / 604800000 < 2)){ /* confused yet? :P */
      portionNumber += 1;
    }
    if(rosh.getDay() == 6 || kippur.getDay() == 6){
      if(portionNumber == 51){
        doublePortion = 60;
      }
      else if(portionNumber > 51){
        portionNumber += 1;
      }
    }

    // If we set portionNumber to the double portion earlier, then we run into problems with our other double portion checks because portionNumber is greater than all of them even if the original portion number wasn't
    if(doublePortion > 0){
      portionNumber = doublePortion;
    }

    //TODO: implement the following comment
    /*
       Now we should have the correct Torah reading.
       Next we need to figure out if there are any maftir readings 
       or special haftarah readings.
    */

    var maftirNumber = portionNumber;
    var haftarahNumber = portionNumber;
    var apostolicNumber = portionNumber;

    /*var readingNames = [
      "yomkippur"
      "breisheet",
      "noach",
      "lech-lecha",
      "vayera",
      "chayei-sarah",
      "toldot",
      "vayetze",
      "vayishlach",
      "vayeshev",
      "miketz",
      "vayigash",
      "vayechi",
      "shemot",
      "vaera",
      "bo",
      "beshalach",
      "yitro",
      "mishpatim",
      "terumah",
      "tetzave",
      "ki-tisa",
      "vayakhel",
      "pekudei",
      "vayikra",
      "tzav",
      "shmini",
      "tazria",
      "metzora",
      "acharei-mot",
      "kedoshim",
      "emor",
      "behar",
      "bechukotai",
      "bamidbar",
      "nasso",
      "behaalotcha",
      "shelachlacha",
      "korach",
      "chukat",
      "balak",
      "pinchas",
      "mattot",
      "massei",
      "devarim",
      "vaetchanan",
      "ekev",
      "reeh",
      "shoftim",
      "kitetze",
      "kitavo",
      "nitzavim",
      "vayelekh",
      "haazinu",
      "vezothabracha",
      //DOUBLE PORTIONS:
      "vayakhel/pekudei", // 55
      "tazria/metzora", // 56
      "acharei-mot/kedoshim", // 57
      "behar/bechukotai", // 58
      "mattot/massei", // 59
      "nitzavim/vayelekh", // 60
      ];*/
    var readingNames = Object.keys(portionsData);

    /*
      We want the function to return an array with the following information:
        1. The name of the Torah reading
        2. The name of any maftir readings //TODO
        3. The name of the haftarah reading(s) //TODO
        4. The name of the Apostolic reading(s) //TODO
        5. The date on which the portion will be read
      For now I just have it returning the name of the Torah reading (1) and the date (5),
      but we will want to change that once we figure out what we are doing
      with the portions list, and how we are splitting that up.
     */

    return([readingNames[portionNumber], nextShabbat]);
  }


  var fillPortionMenu = function(){
  /* Fill the portionMenu with the readings list */

    var alephDate = new Date(new Date().setHours(0,0,0,0));
    var hYear = hebYear(alephDate);
    var alephSukkot = HebToGreg(hYear, 1, 22);
    var nextSukkot = HebToGreg((hYear + 1), 1, 22);

    if(alephDate.getTime() <= alephSukkot.getTime()){
      var alephSukkot = HebToGreg((hYear - 1), 1, 22);
      var nextSukkot = HebToGreg(hYear, 1, 22).getTime();
    }

    var startingShabbat = getNextShabbat(alephSukkot).getTime();
    var nextShabbat = getShabbat(alephDate);
    var readThis;
    var newFindings;
    var menu = document.getElementById('portionsMenu');

    for(var q = startingShabbat; q < nextSukkot; q += 86400000){
      newFindings = findPortionNumber(new Date(q));
      if(newFindings[0] !== readThis){
        readThis = newFindings[0];
        var readThisTitle = portionsData[readThis].title;
        var menuItem = newElement({contents: readThisTitle, class: 'menuItem', id: newFindings[1].getTime()});
        menuItem.onclick = nav.click;
        menu.appendChild(menuItem);
      }
    }
  }
  
  var defTimer;
  var taglexentry = function() {
    var spans = document.getElementsByTagName('span');
    for (var s = 0; s < spans.length; s++) {
      if(spans[s].getAttribute("st")){
        spans[s].onclick = function(e){
          clearTimeout(defTimer);
          lookup.click(e);
        }
      }
    }
  }

  var lookup = {
    click: function(e) {
      var strongs = e.target.getAttribute("st");
      var def = document.getElementById("def");
      if(strongs.length <= 0){
        def.innerHTML = "No entry for this word";
        return("");
      }
      if(!(strongs in lexicon)){
        def.innerHTML = "No entry for this word";
        return("");
      }
      var txt = "";
      txt += "<span class='heb'>";
      txt += lexicon[strongs][0];
      txt += "</span> | ";
      txt += lexicon[strongs][1];
      txt += ": ";
      txt += lexicon[strongs][2];
      txt += "<br>Strongs number: ";
      txt += lexicon[strongs][3];
      def.innerHTML = txt;
      defTimer = setTimeout(function(){def.innerHTML = "";}, 5000);
    }
  }

})();
