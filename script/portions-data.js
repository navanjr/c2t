withNumbers = function(verses, chapter) {
  if (verses && verses.length) {
    var v = 0;
    return verses.map(function(r){v++; return {ref: chapter + ":" + v, verse: r};});
  }
  return [];
}


portionsData = {
  'yom-kippur': {
    week: 0,
    title: 'Yom Kippur',
    description: 'The Day of Atonement',
    references: [
      {lev: [[16,1,34]]},
      {num: [[29,7,11]]},
      {isa: [[57,14],[58,1,14]]},
    ],
  },
  'breisheet': {
    week: 1,
    title: 'B\'reisheet',
    description: 'In the beginning',
    references: [
      {gen: [1,2,3,4,5,[6,1,8]]},
      {isa: [[42,5],[43,1,10]]},
    ],
  },
  'noach': {
    week: 2,
    title: 'Noach',
    description: 'Noah',
    references: [
      {gen: [[6,9],7,8,9,10,11]},
      // {isa: [54,[55,1,5]]},
    ],
  },
  'lech-lecha': {
    week: 3,
    title: 'Lech Lecha',
    description: 'Go forth',
    references: [
      {gen: [11,12,13,14,15,16,17]},
      {isa: [[40,27],[41,1,16]]},
    ],
  },
  'vayera': {
    week: 4,
    title: 'Vayera',
    description: 'He appeared',
    references: [
      {gen: [18,19,20,21,22]},
      {ki2: [[4,1,37]]},
    ],
  },
  'chayei-sarah': {
    week: 5,
    title: 'Chayei Sarah',
    description: 'Sarah\'s Life',
    references: [
      {gen: [23,24,[25,1,18]]},
      {ki1: [[1,1,31]]},
    ],
  },
  'toldot': {
    week: 6,
    title: 'Toldot',
    description: 'Generations',
    references: [
      {gen: [[25,19],26,27,[28,1,9]]},
      {mal: [1,[2,1,7]]},
    ],
  },
  'vayetze': {
    week: 7,
    title: 'Vayetze',
    name: 'vayetze',
    description: 'He went out',
    references: [
      {gen: [[28,10],29,30,31,[32,1,3]]},
      {hos: [[12,12],13,[14,1,9]]},
    ],
  },
  'vayishlach': {
    week: 8,
    title: 'Vayishlach',
    name: 'vayishlach',
    description: 'He sent',
    references: [
      {gen: [[32,3],33,34,35,[36,1,43]]},
      {hos: [[11,7],[12,1,12]]},
    ],
  },
  'vayeshev': {
    week: 9,
    title: 'Vayeshev',
    name: 'vayeshev',
    description: 'He dwelt',
    references: [
      {gen: [37,38,39,40]},
      {amo: [[2,4],[3,1,8]]},
    ],
  },
  'miketz': {
    week: 10,
    title: 'Miketz',
    name: 'miketz',
    description: 'At the end',
    references: [
      {gen: [41,42,43,[44,1,17]]},
      {zec: [[2,10],3,[4,1,17]]}, // Hannukah reading?
    ],
  },
  'vayigash': {
    week: 11,
    title: 'Vayigash',
    name: 'vayigash',
    description: 'He approached',
    references: [
      {gen: [[44,18],45,46,[47,1,27]]},
      {eze: [[37,15,28]]},
    ],
  },
  'vayechi': {
    week: 12,
    title: 'Vayechi',
    name: 'vayechi',
    description: 'He lived',
    references: [
      {gen: [[47,28],48,49,50]},
      {ki1: [[2,1,12]]},
    ],
  },
  'shemot': {
    week: 13,
    title: 'Shemot',
    name: 'shemot',
    description: 'Names',
    references: [
      {exd: [1,2,3,4,5,[6,1,1]]},
      {isa: [[27,6],[28,1,13]]},
    ],
  },
  'vaera': {
    week: 14,
    title: 'Va\'era',
    name: 'vaera',
    description: 'I appeared',
    references: [
      {exd: [[6,2],7,8,9]},
      {eze: [[28,25],29]},
    ],
  },
  'bo': {
    week: 15,
    title: 'Bo',
    name: 'bo',
    description: 'Come',
    references: [
      {exd: [10,11,12,13]},
      {jer: [[46,13,28]]},
    ],
  },
  'beshalach': {
    week: 16,
    title: 'Beshalach',
    name: 'beshalach',
    description: 'When he sent',
    references: [
      {exd: [[13,17],14,15,16,[17,1,16]]},
      {jdg: [[4,4],5]},
    ],
  },
  'yitro': {
    week: 17,
    title: 'Yitro',
    name: 'yitro',
    description: 'Jethro',
    references: [
      {exd: [18,19,20]},
      {isa: [6,[7,1,6]]},
    ],
  },
  'mishpatim': {
    week: 18,
    title: 'Mishpatim',
    name: 'mishpatim',
    description: 'Judgments',
    references: [
      {exd: [21,22,23,24]},
      {jer: [[34,8,22]]},
    ],
  },
  'terumah': {
    week: 19,
    title: 'Terumah',
    name: 'terumah',
    description: 'Heave Offering',
    references: [
      {exd: [25,26,[27,1,19]]},
      {ki1: [5,[6,1,13]]},
    ],
  },
  'tetzave': {
    week: 20,
    title: 'Tetzave',
    name: 'tetzave',
    description: 'You shall command',
    references: [
      {exd: [[27,20],28,29,[30,1,10]]},
      {eze: [[43,10,27]]},
    ],
  },
  'ki-tisa': {
    week: 21,
    title: 'Ki Tisa',
    name: 'ki-tisa',
    description: 'When you take',
    references: [
      {exd: [[30,11],31,32,33,34]},
      {ki1: [[18,1,39]]},
    ],
  },
  'vayakhel': {
    week: 22,
    title: 'Vayak\'hel',
    name: 'vayakhel',
    description: 'He gathered',
    references: [
      {exd: [35,36,37,[38,1,20]]},
      {ki1: [[7,13,50]]}, // This haftarah is very seldom read: e.g. in 2011, 2014, 2033, 2035, 2038, 2052, 2062 — because this Sabbath is often combined with that of Pekudei and very often is also the Sabbath of Shekalim or of Hahodesh or of Parah, in which case another haftarah is substituted
    ],
  },
  'pekudei': {
    week: 22,
    title: 'Pekudei',
    name: 'pekudei',
    description: 'Account of',
    references: [
      {exd: [[38,21],39,40]},
      {ki1: [[7,51],[8,1,21]]},
    ],
  },
  'vayikra': {
    week: 23,
    title: 'Vayikra',
    name: 'vayikra',
    description: 'He Called',
    references: [
      {lev: [1,2,3,4,5,[6,1,7]]},
      {isa: [[43,21],[44,1,23]]},
    ],
  },
  'tzav': {
    week: 24,
    title: 'Tzav',
    name: 'tzav',
    description: 'Command',
    references: [
      {lev: [[6,8],7,8]},
      {jer: [[7,21],[8,1,3]]},
    ],
  },
  'shmini': {
    week: 26,
    title: 'Sh\'mini',
    name: 'shmini',
    description: 'Eighth',
    references: [
      {lev: [9,10,11]},
      {sa2: [6,[7,1,17]]},
    ],
  },
  'tazria': {
    week: 27,
    title: 'Tazria',
    name: 'tazria',
    description: 'She will conceieve',
    references: [
      {lev: [12,13]},
      {ki2: [[4,42],[5,1,19]]},
    ],
  },
  'metzora': {
    week: 27,
    title: 'Metzora',
    name: 'metzora',
    description: 'Leper',
    references: [
      {lev: [14,15]},
      {ki2: [[7,3,20]]},
    ],
  },
  'acharei-mot': {
    week: 28,
    title: 'Acharei Mot',
    name: 'acharei-mot',
    description: 'After Death',
    references: [
      {lev: [16,17,18]},
      {eze: [[22,1,19]]},
    ],
  },
  'kedoshim': {
    week: 28,
    title: 'Kedoshim',
    name: 'kedoshim',
    description: 'Holy',
    references: [
      {lev: [19,[20,1,27]]},
      {amo: [[9,7,15]]},
    ],
  },
  'emor': {
    week: 29,
    title: 'Emor',
    name: 'emor',
    description: 'Say',
    references: [
      {lev: [21,22,23,24]},
      {eze: [[44,15,31]]},
    ]
  },
  'behar': {
    week: 30,
    title: 'Behar',
    name: 'behar',
    description: 'On the mountian',
    references: [
      {lev: [25,[26,1,2]]},
      {jer: [[32,6,27]]},
    ],
  },
  'bechukotai': {
    week: 31,
    title: 'Bechukotai',
    name: 'bechukotai',
    description: 'In my statutes',
    references: [
      {lev: [26,27]},
      {jer: [[16,17],[17,1,29]]},
    ],
  },
  'bamidbar': {
    week: 32,
    title: 'Bamidbar',
    name: 'bamidbar',
    description: 'In the wilderness',
    references: [
      {num: [1,2,3,[4,1,20]]},
      {hos: [[1,10],[2,1,23]]},
    ],
  },
  'nasso': {
    week: 33,
    title: 'Nasso',
    name: 'nasso',
    description: 'Take up',
    references: [
      {num: [[4,21],5,6,7]},
      {jdg: [[13,2,25]]},
    ],
  },
  'behaalotcha': {
    week: 34,
    title: 'Beha\'alotcha',
    name: 'behaalotcha',
    description: 'When you set up',
    references: [
      {num: [8,9,10,11,12]},
      {zec: [2,3,[4,1,7]]},
    ],
  },
  'shelachlacha': {
    week: 35,
    title: 'Shelach L\'cha',
    name: 'shelachlacha',
    description: 'Send',
    references: [
      {num: [13,14,15]},
      {jos: [2]},
    ],
  },
  'korach': {
    week: 36,
    title: 'Korach',
    name: 'korach',
    description: 'Korah',
    references: [
      {num: [16,17,18]},
      {sa1: [[11,14],[12,1,22]]},
    ],
  },
  'chukat': {
    week: 37,
    title: 'Chukat',
    name: 'chukat',
    description: 'Statute',
    references: [
      {num: [19,20,21,[22,1,1]]},
      {jdg: [[11,1,33]]},
    ],
  },
  'balak': {
    week: 38,
    title: 'Balak',
    name: 'balak',
    description: 'Balak',
    references: [
      {num: [[22,2],23,24,[25,1,9]]},
      {mic: [[5,7],[6,1,8]]},
    ],
  },
  'pinchas': {
    week: 39,
    title: 'Pinchas',
    name: 'pinchas',
    description: 'Phineas',
    references: [
      {num: [[25,10],26,27,28,29]},
      {ki1: [[18,46],[19,1,21]]},
    ],
  },
  'mattot': {
    week: 40,
    title: 'Mattot',
    name: 'mattot',
    description: 'Tribes',
    references: [
      {num: [30,31,32]},
      {jer: [1,[2,1,3]]},
    ],
  },
  'massei': {
    week: 40,
    title: 'Massei',
    name: 'massei',
    description: 'Journeys',
    references: [
      {num: [33,34,35,36]},
      {jer: [[2,4,28]]},
      {jer: [[3,4,4]]},
    ],
  },
  'devarim': {
    week: 41,
    title: 'Devarim',
    name: 'devarim',
    description: 'Words',
    references: [
      {deu: [1,2,[3,1,22]]},
      {isa: [1]},
    ],
  },
  'vaecthanan': {
    week: 42,
    title: 'Va\'ecthanan',
    name: 'vaecthanan',
    description: 'I pleaded',
    references: [
      {deu: [[3,23],4,5,6,[7,1,11]]},
      {isa: [[40,1,26]]},
    ],
  },
  'ekev': {
    week: 43,
    title: 'Ekev',
    name: 'ekev',
    description: 'Consequence',
    references: [
      {deu: [[7,12],8,9,10,[11,1,25]]},
      {isa: [[49,14],50,[51,1,3]]},
    ],
  },
  'reeh': {
    week: 44,
    title: 'Re\'eh',
    name: 'reeh',
    description: 'See',
    references: [
      {deu: [[11,26],12,13,14,15,[16,1,17]]},
      {isa: [[54,11],[55,1,9]]},
    ],
  },
  'shoftim': {
    week: 45,
    title: 'Shoftim',
    name: 'shoftim',
    description: 'Judges',
    references: [
      {deu: [[16,18],17,18,19,20,[21,1,9]]},
      {isa: [[51,12],[52,1,12]]},
    ],
  },
  'kitetze': {
    week: 46,
    title: 'Ki Tetze',
    name: 'kitetze',
    description: 'When you go forth',
    references: [
      {deu: [[21,10],22,23,24,25]},
      {isa: [[52,13],53,[54,1,10]]}, // split into two chunks?
    ],
  },
  'kitavo': {
    week: 47,
    title: 'Ki Tavo',
    name: 'kitavo',
    description: 'When you come in',
    references: [
      {deu: [26,27,28,[29,1,9]]},
      {isa: [60]},
    ],
  },
  'nitzavim': {
    week: 48,
    title: 'Nitzavim',
    name: 'nitzavim',
    description: 'Standing',
    references: [
      {deu: [[29,10],[30,1,20]]},
      {isa: [61,62,[63,1,9]]},
    ],
  },
  'vayelekh': {
    week: 49,
    title: 'Vayelekh',
    name: 'vayelekh',
    description: 'He went',
    references: [
      {deu: [31]},
      {hos: [[14,1,9]]},
      {mic: [[7,18,20]]},
      {joe: [[2,15,27]]},
    ],
  },
  'haazinu': {
    week: 50,
    title: 'Ha\'azinu',
    name: 'haazinu',
    description: 'Listen',
    references: [
      {deu: [32]},
      {sa2: [22]},
    ],
  },
  'vezothabracha': {
    week: 51,
    title: 'Vezot Ha\'Bracha',
    name: 'vezothabracha',
    description: 'This is the blessing',
    references: [
      {deu: [33,34]},
      {jos: [1]},
    ],
  },
  'vayakhel/pekudei': {
    title: 'Vayakhel/Pekudei',
    name: 'vayakhel/pekudei',
    description: 'Double portion',
    references: [
      {deu: [33,34]},
      {jos: [1]},
    ],
  },
  'tazria/metzora': {
    title: 'Tazria/Metzora',
    name: 'tazria/metzora',
    description: 'Double portion',
    references: [
      {deu: [33,34]},
      {jos: [1]},
    ],
  },
  'acharei-mot/kedoshim': {
    title: 'Acharei Mot/Kedoshim',
    name: 'acharei-mot/kedoshim',
    description: 'Double portion',
    references: [
      {deu: [33,34]},
      {jos: [1]},
    ],
  },
  'behar/bechukotai': {
    title: 'Behar/Bechukotai',
    name: 'behar/bechukotai',
    description: 'Double portion',
    references: [
      {deu: [33,34]},
      {jos: [1]},
    ],
  },
  'mattot/massei': {
    title: 'Mattot/Massei',
    name: 'mattot/massei',
    description: 'Double portion',
    references: [
      {deu: [33,34]},
      {jos: [1]},
    ],
  },
  'nitzavim/vayelekh': {
    title: 'Nitzavim/Vayelekh',
    name: 'nitzavim/vayelekh',
    description: 'Double portion',
    references: [
      {deu: [33,34]},
      {jos: [1]},
    ],
  },
  'rosh-hashannah': {
    title: 'Rosh Hashannah',
    name: 'rosh-hashannah',
    description: 'Feast of Trumpets and Head of the Year',
    references: [
      {exd: [[12,21,51]]},
      {exd: [[13,17],14,[15,1,26]]},
      {jos: [[5,2],[6,1,1]]},
    ],
  },
  'sukkot': {
    title: 'Sukkot Day 1',
    name: 'sukkot',
    description: 'The first day of Sukkot',
    references: [
      {exd: [[12,21,51]]},
      {exd: [[13,17],14,[15,1,26]]},
      {jos: [[5,2],[6,1,1]]},
    ],
  },
  'sukkotshabbatcholhamoed3': {
    title: 'Sukkot Shabbat Chol Hamoed',
    name: 'sukkotshabbatcholhamoed',
    description: 'Shabbat of the chol hamoed during Sukkot',
    references: [
      {exo: [[33,12],[34,1,26]]},
      {num: [[29,17,22]]},
      {eze: [[38,18],[39,1,16]]},
    ],
  },
  'sukkotshabbatcholhamoed5': {
    title: 'Sukkot Shabbat Chol Hamoed',
    name: 'sukkotshabbatcholhamoed',
    description: 'Shabbat of the chol hamoed during Sukkot',
    references: [
      {exo: [[33,12],[34,1,26]]},
      {num: [[29,23,28]]},
      {eze: [[38,18],[39,1,16]]},
    ],
  },
  'sukkotshabbatcholhamoed6': {
    title: 'Sukkot Shabbat Chol Hamoed',
    name: 'sukkotshabbatcholhamoed',
    description: 'Shabbat of the chol hamoed during Sukkot',
    references: [
      {exo: [[33,12],[34,1,26]]},
      {num: [[29,26,31]]},
      {eze: [[38,18],[39,1,16]]},
    ],
  },
  'sukkot2': {
    title: 'Sh\'mini Atzeret',
    name: 'sukkot2',
    description: 'The eighth day, and conclusion of Sukkot',
    references: [
      {exd: [[12,21,51]]},
      {exd: [[13,17],14,[15,1,26]]},
      {jos: [[5,2],[6,1,1]]},
    ],
  },
  'pesach': {
    title: 'Pesach',
    name: 'pesach',
    description: 'Passover/Unlevened Bread',
    references: [
      {exd: [[12,21,51]]},
      {exd: [[13,17],14,[15,1,26]]},
      {jos: [[5,2],[6,1,1]]},
    ],
  },
  'chol-hamoed-pesach': {
    title: 'Chol HaMo\'ed Pesach',
    name: 'chol-hamoed-pesach',
    description: 'Passover/Unlevened Bread',
    references: [ //TODO: should have Exodus 33:12–34:26, Numbers 28:19–25, Ezekiel 37:1–14
      {exd: [[12,21,51]]},
      {exd: [[13,17],14,[15,1,26]]},
      {jos: [[5,2],[6,1,1]]},
    ],
  },
  'pesach': {
    title: 'Pesach Day 1',
    name: 'pesach',
    description: 'Passover/Unlevened Bread',
    references: [
      {exd: [[12,21,51]]},
      {exd: [[13,17],14,[15,1,26]]},
      {jos: [[5,2],[6,1,1]]},
    ],
  },
  'pesach2': {
    title: 'Pesach Day 7',
    name: 'pesach2',
    description: 'The final day of Passover',
    references: [
      {exd: [[12,21,51]]},
      {exd: [[13,17],14,[15,1,26]]},
      {jos: [[5,2],[6,1,1]]},
    ],
  },
  'shavuot': {
    title: 'Shavuot',
    name: 'shavuot',
    description: 'The Feast of Weeks',
    references: [
      {exd: [[12,21,51]]},
      {exd: [[13,17],14,[15,1,26]]},
      {jos: [[5,2],[6,1,1]]},
    ],
  }
};

bookInfo = {
  sections: {
    Torah: {
      gen: 'Genesis',
      exd: 'Exodus',
      lev: 'Leviticus',
      num: 'Numbers',
      deu: 'Deuteronomy'
    },
    Prophets: {
      jos: 'Joshua',
      jdg: 'Judges',
      sa1: '1 Samuel',
      sa2: '2 Samuel',
      ki1: '1 Kings',
      ki2: '2 Kings',
      isa: 'Isaiah',
      jer: 'Jeremiah',
      eze: 'Ezekiel',
      hos: 'Hosea',
      joe: 'Joel',
      amo: 'Amos',
      oba: 'Obadiah',
      jon: 'Jonah',
      mic: 'Micah',
      nah: 'Nahum',
      hab: 'Habakkuk',
      zep: 'Zephaniah',
      hag: 'Haggai',
      zec: 'Zechariah',
      mal: 'Malachi'
    },
    Writings: {
      rth: 'Ruth',
      ch1: '1 Chronicles',
      ch2: '2 Chronicles',
      ezr: 'Ezra',
      neh: 'Nehemiah',
      est: 'Esther',
      job: 'Job',
      psa: 'Psalms',
      pro: 'Proverbs',
      ecc: 'Ecclesiastes',
      sgs: 'Song of Solomon',
      lam: 'Lamentations',
      dan: 'Daniel'
    },
    Gospels: {
      mat: 'Matthew',
      mar: 'Mark',
      luk: 'Luke',
      jhn: 'John',
      act: 'Acts'
    },
    Letters: {
      rom: 'Romans',
      cr1: '1 Corinthians',
      cr2: '2 Corinthians',
      gal: 'Galatians',
      eph: 'Ephesians',
      phl: 'Philippians',
      col: 'Colossians',
      th1: '1 Thessalonians',
      th2: '2 Thessalonians',
      ti1: '1 Timothy',
      ti2: '2 Timothy',
      tts: 'Titus',
      phm: 'Philemon',
      heb: 'Hebrews',
      jam: 'James',
      pe1: '1 Peter',
      pe2: '2 Peter',
      jo1: '1 John',
      jo2: '2 John',
      jo3: '3 John',
      jud: 'Jude',
      rev: 'Revelation'
    }
  },
  getAllBooks: function () {
    var combine = function (retObj, obj) {
      for (var i = 0; i < Object.keys(obj).length; i++) {
        var key = Object.keys(obj)[i];
        retObj[key] = obj[key];
      }
      return retObj;
    }
    retObj = {};
    var sections = Object.keys(this.sections);
    for (var i = 0; i < sections.length; i++) {
      retObj = combine(retObj, this.sections[sections[i]]);
    }
    return retObj;
  },
  book: function (book) {
    bookObj = {};
    var sections = Object.keys(this.sections);
    for (var i = 0; i < sections.length; i++) {
      var sectionName = sections[i];
      var section = this.sections[sectionName];
      if (section[book]) {
        bookObj.bookName = section[book];
        bookObj.section = sectionName;
      }
    }
    bookObj.bookData = {};
    if (kjv[book]) {
      bookObj.bookData[book] = Object.keys(kjv[book]);
    }
    return bookObj;
  }
};