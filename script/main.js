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
          b6 = this.button === 'b6';
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
      } else if (b5){ // wholeBible Feature
        console.log('the wholeBible Feature');
        wholeBible();
        nav.hideMenu('references');
        nav.hideMenu('portions');
      } else if (b6){ // Share Feature
        shareReading(nav.portion);
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
  // TODO: fix the following Hack!
  if (Array.isArray(c2t.portionName)) {
    c2t.portionName = c2t.portionName[0];
  }
  window.onload = function() {
    // menus
    var portionNames = Object.keys(portionsData); // with the new system, we would need to add a function here that returns as an array the entire list of portion names for the cycle
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
      somethingToRead = portionsData[portionName].references;
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


  var findPortionNumber = function(alephDate) {

    var alephDate = new Date(alephDate.setHours(0,0,0,0)); /* we want to work with a clean date timestamp so our math works out evenly later */
    
    var festivals = { /* store the dates of all the festivals. TODO: also add the reading list index to this array, and call it later in our loop as f[1][2] */
      rosh: [1,1],
      kippur: [1,10],
      sukkot: [1,15],
      sukkot2: [1,22],
      pesach: [8,15],
      pesach2: [8,21],
      shavuot: [10,6]
    }
    var hYear = hebYear(alephDate); /* the Hebrew calendar year of alephDate */
    var afterRosh = false; /* a variable to tell us later in the code if the current date is between Rosh Hashannah and Sukkot */
    var alephSukkot = HebToGreg(hYear, festivals.sukkot2[0], festivals.sukkot2[1]);  /* The Gregorian date of the last day of Sukkot, which is when the portion cycle gets reset */
    if(alephDate.getTime() <= alephSukkot.getTime()){
      var afterRosh = true;
      var alephSukkot = HebToGreg((hYear - 1), festivals.sukkot2[0], festivals.sukkot2[1]); /* if we are between Rosh Hashannah and Sukkot we set alephSukkot to the sukkot of the previous Hebrew calendar year */
    }
    var startingShabbat = getShabbat(alephSukkot);
    var nextShabbat = getShabbat(alephDate);

    var portionNumber = Math.floor((nextShabbat.getTime() - startingShabbat.getTime())/604800000 + 1); /* find the portion number based on the number of weeks elapsed since the first shabbat after last Sukkot */


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
        return("TODO: add festival readings for " + f[0] + " here"); /* if today is a festival day, or if there is a festival between now and next Shabbat, then we return the festival readings instead */
      }
      if(festDate.getDay() == 6 && nextShabbat.getTime() > festDate.getTime()){
        portionNumber -= 1; /* if we have passed a festival that fell on a Shabbat, then the weekly portions get bumped back by one week */
      }
    }

    if(afterRosh){
      var pesachYear = (hYear - 1);
      var pesach = HebToGreg(pesachYear, festivals.pesach[0], festivals.pesach[1]);
      var pesach2 = HebToGreg(pesachYear, festivals.pesach2[0], festivals.pesach2[1]);
      var sukkot = HebToGreg((hYear), festivals.sukkot[0], festivals.sukkot[1]);
      var sukkot2 = HebToGreg((hYear), festivals.sukkot2[0], festivals.sukkot2[1]);
    }
    else{
      var pesachYear = hYear;
      var pesach = HebToGreg((hYear), festivals.pesach[0], festivals.pesach[1]);
      var pesach2 = HebToGreg((hYear), festivals.pesach2[0], festivals.pesach2[1]);
      var sukkot = HebToGreg((hYear + 1), festivals.sukkot[0], festivals.sukkot[1]);
      var sukkot2 = HebToGreg((hYear + 1), festivals.sukkot2[0], festivals.sukkot2[1]);
    }
    if(pesach.getDay() !== (6 || 0) && pesach.getTime() < nextShabbat.getTime()){
      if(pesach2.getTime() > nextShabbat.getTime()){ /* nextShabbat is the Shabbat Chol Hamoed Pesach */
        return("TODO: ADD PESACH SHABBAT CHOL HAMOED READINGS: Exodus 33:12–34:26, Numbers 28:19–25, Ezekiel 37:1–14");
      }
      else{
        portionNumber -= 1; /* if the first day of Pesach falls on a Saturday or Sunday then there is no Shabbat Chol Hamoed, otherwise if we are past that we need to deprecate portionNumber by 1 */
      }
    }

    if(sukkot.getTime() < nextShabbat.getTime() && sukkot2.getTime() > nextShabbat.getTime()){ /* there is always a Shabbat Chol Hamoed Sukkot, so we just need to see if we're between the two Chagim */
      var dayOfSukkot = Math.ceil((nextShabbat.getTime() - sukkot.getTime())/86400000);
      switch(dayOfSukkot){
        case 3:
          return("TODO: ADD SUKKOT DAY 3 SHABBAT CHOL HAMOED READINGS: Exodus 33:12–34:26, Numbers 29:17–22, Ezekiel 38:18–39:16");
          break;
        case 5:
          return("TODO: ADD SUKKOT DAY 5 SHABBAT CHOL HAMOED READINGS: Exodus 33:12–34:26, Numbers 29:23–28, Ezekiel 38:18–39:16");
          break;
        case 6:
          return("TODO: ADD SUKKOT DAY 6 SHABBAT CHOL HAMOED READINGS: Exodus 33:12–34:26, Numbers 29: 26–31, Ezekiel 38:18–39:16");
          break;
      }
    }

    /* At this point if the function has not returned we should be reading a regular portion from the cycle (not a festival or Shabbat Chol Hamoed) */
    /* next we need to determine if there have been any double portions in the cycle so far, or if the current portion should be a double portion
       Possible double portions are 22, 27, 29, 32, 42, and 51
       for the rules about doubled portions, see https://individual.utoronto.ca/kalendis/hebrew/parshah.htm#loop
    */
    if(portionNumber == 22){
      if(((pesach.getTime() - 86400000) - nextShabbat.getTime()) / 604800000 < 4){
        // TODO: return double portion
      }
    }
    else if(portionNumber > 22){
      if(((pesach.getTime() - 86400000) - alephSukkot.getTime()) / 604800000 < 26){
        portionNumber += 1;
      }
    }
    if(!IsLeapYear(pesachYear)){
      if(portionNumber == 27){
        // TODO: return double portion
      }
      else if(portionNumber > 27){
        portionNumber += 1;
      }
      if(portionNumber == 29){
        // TODO: return double portion
      }
      else if(portionNumber > 29){
        portionNumber += 1;
      }
      if(pesach.getDay() !== 6){
        if(portionNumber == 32){
          // TODO: return double portion
        }
        else if(portionNumber > 32){
          portionNumber += 1;
        }
      }
    }
    if(portionNumber == 42 && (HebToGreg(pesachYear, 12, 9).getTime() - nextShabbat.getTime()) / 604800000 < 2){
      // TODO: return double portion
    }
    else if(portionNumber > 42 && ((HebToGreg(pesachYear, 12, 9).getTime() - (nextShabbat.getTime() - ((portionNumber - 42) * 604800000))) / 604800000 < 2)){ /* confused yet? :P */
      portionNumber += 1;
    }

    return(portionNumber);
  }

/*functions:
IsLeapYear(nYearH)
HebToGreg(nYearH, nMonthH, nDateH)
hebYear(nYearH)
SameDate(d1, d2)
findFestival(alephDate, festDate, nextShabbat);
*/

console.log(findPortionNumber(new Date()));


})();
