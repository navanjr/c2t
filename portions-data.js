withNumbers = function(verses, chapter) {
  if (verses && verses.length) {
    var v = 0;
    return verses.map(function(r){v++; return {ref: chapter + ":" + v, verse: r};});
  }
  return [];
}

portionsData = {
  'breisheet': {
    week: 1,
    title: 'B\'reisheet',
    description: 'In the beginning',
    references: [
      {gen: [1,2,3,4,5,[6,1,8]]},
      {isa: [[14,12,22]]},
      {isa: [[42,5],[43,1,10]]},
      {mat: [1,2]},
      {jhn: [[1,1,18]]},
      {rom: [[1,18,23]]},
      {rom: [[5,12,21]]},
      {rom: [[8,21,23]]},
      {cr1: [[6,15,20]]},
      {eph: [[5,21,32]]},
      {col: [[1,14,17]]},
      {heb: [[1,1,3]]},
      {heb: [[11,1,7]]},
      {pe1: [[3,18,22]]},
      {pe2: [[3,1,14]]},
      {jud: [1]},
      {rev: [[20,1,3]]},
    ],
  },
  'noach': {
    week: 2,
    title: 'Noach',
    description: 'Noah',
    references: [
      {gen: [[6,9],7,8,9,10,11]},
      {isa: [66]},
      {mic: [[5,1,9]]},
      {mat: [[24,36,51]]},
      {luk: [[17,26,37]]},
      {act: [[2,1,16]]},
      {pe2: [1,2,[3,1,32]]},
    ],
  },
  'lech-lecha': {
    week: 3,
    title: 'Lech Lecha',
    description: 'Go forth',
    references: [
      {gen: [11,12,13,14,15,16,17]},
      {isa: [[40,27],[41,1,16]]},
      {act: [[7,1,8]]},
      {rom: [[3,1,29]]},
      {gal: [[3,1,29]]},
      {col: [[2,8,23]]},
      {heb: [[7,1,19]]},
      {heb: [[11,1,12]]},
    ],
  },
  'vayera': {
    week: 4,
    title: 'Vayera',
    description: 'He appeared',
    references: [
      {gen: [18,19,20,21,22]},
      {ki2: [[4,1,37]]},
      {rom: [[9,6,9]]},
      {gal: [4,[5,1,9]]},
      {heb: [[11,17,19]]},
      {jam: [[2,14,24]]},
    ],
  },
  'chayei-sarah': {
    week: 5,
    title: 'Chayei Sarah',
    description: 'Sarah\'s Life',
    references: [
      {gen: [23,24,[25,1,18]]},
      {ki1: [[1,1,31]]},
      {mat: [[27,3,10]]},
      {luk: [[9,57,62]]},
      {jhn: [[4,1,42]]},
      {cr1: [[15,50,58]]},
    ],
  },
  'toldot': {
    week: 6,
    title: 'Toldot',
    description: 'Generations',
    references: [
      {gen: [[25,19],26,27,[28,1,9]]},
      {mal: [1,[2,1,7]]},
      {rom: [9,[10,1,21]]},
      {heb: [[11,20,20]]},
      {heb: [[12,14,17]]},
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
      {jhn: [[1,19,51]]},
    ],
  },
  'vayishlach': {
    week: 8,
    title: 'Vayishlach',
    name: 'vayishlach',
    description: 'He sent',
    references: [
      {gen: [[32,3],33,34,35,[36,1,43]]},
      {hos: [[11,7],[12,1,11]]},
      {oba: [1]},
      {cr1: [[5,1,13]]},
      {heb: [11]},
      {rev: [[7,1,12]]},
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
      {act: [[7,9,16]]},
      {rev: [[12,1,17]]},
    ],
  },
  'miketz': {
    week: 10,
    title: 'Miketz',
    name: 'miketz',
    description: 'At the end',
    references: [
      {gen: [41,42,43,[44,1,17]]},
      {zec: [[2,10],3,[4,1,17]]},
      {jhn: [6]},
      {jhn: [[10,22,39]]},
      {luk: [[4,16,31]]},
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
      {luk: [[6,9,16]]},
      {luk: [[15,11,32]]},
      {act: [[7,13,15]]},
      {cr2: [[5,1,21]]},
      {eph: [[2,1,10]]},
      {col: [[1,1,29]]},
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
      {luk: [[4,31],[5,1,11]]},
      {act: [[7,15,16]]},
      {heb: [[11,21,22]]},
      {pe1: [[1,1,9]]},
      {pe1: [[2,11,17]]},
      {rev: [[7,1,17]]},
      {rev: [[14,1,7]]},
    ],
  },
  'shemot': {
    week: 13,
    title: 'Shemot',
    name: 'shemot',
    description: 'Names',
    references: [
      {exd: [1,2,3,4,5[6,1,1]]},
      {isa: [[27,6],[28,1,13]]},
      {isa: [[29,22,23]]},
      {mat: [[22,23,46]]},
      {luk: [5,12,29]},
      {act: [[3,12,15]]},
      {act: [[5,27,32]]},
      {act: [[7,17,36]]},
      {act: [[22,1,22]]},
      {act: [[24,11,16]]},
      {heb: [[11,23,26]]},
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
      {rom: [[9,14,26]]},
      {cr2: [[6,14],[7,1,1]]},
      {rev: [[6,1,17]]},
      {rev: [[8,1,13]]},
      {rev: [[16,1,21]]},
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
      {eze: [20]},
      {joe: [1,2,3]},
      {mat: [[26,17],27]},
      {luk: [[2,22,24]]},
      {jhn: [[19,31,37]]},
      {act: [[13,16,23]]},
      {rev: [[8,6],[9,1,12]]},
      {rev: [16]},
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
      {jhn: [[6,25,35]]},
      {jhn: [[19,31,37]]},
      {rom: [[6,1,23]]},
      {cr1: [[10,1,13]]},
      {cr2: [[8,1,15]]},
      {rev: [[15,1,4]]},
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
      {isa: [[9,2,7]]},
      {mat: [[5,1,48]]},
      {mat: [[15,1,11]]},
      {mat: [[19,16,30]]},
      {act: [[6,1,7]]},
      {rom: [[2,10,29]]},
      {rom: [[7,1],[8,1,15]]},
      {rom: [[13,8,10]]},
      {eph: [[6,1,3]]},
      {ti1: [[3,1,14]]},
      {ti2: [[2,2,2]]},
      {tts: [[1,5,9]]},
      {heb: [[8,10,10]]},
      {heb: [[12,18,29]]},
      {jam: [[2,8,13]]},
      {pe1: [[2,9,10]]},
      {jo1: [2,3,4,5]},
      {rev: [[12,10,17]]},
    ],
  },
  'mishpatin': {
    week: 18,
    title: 'Mishpatin',
    name: 'mishpatin',
    description: 'Judgments',
    references: [
      {exd: [21,22,23,24]},
      {ki2: [12,1,16]},
      {jer: [[33,20,26]]},
      {jer: [[34,8,22]]},
      {exe: [[1,26,28]]},
      {exe: [[8,1,2]]},
      {dan: [[7,9,10]]},
      {dan: [[10,5,6]]},
      {amo: [[2,9,9]]},
      {zec: [[11,10,14]]},
      {mat: [[5,38,42]]},
      {mat: [[12,1,21]]},
      {mat: [[17,1,11]]},
      {mat: [[26,14,16]]},
      {mar: [[7,6,9]]},
      {luk: [[9,51,56]]},
      {luk: [[10,30,37]]},
      {act: [[23,1,11]]},
      {heb: [[9,15,22]]},
      {heb: [[10,28,39]]},
      {jam: [[1,27,27]]},
      {rev: [[1,13,15]]},
      {rev: [[1,13,15]]},
      {rev: [[21,1,14]]},
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
      {mat: [[5,33,37]]},
      {heb: [[8,1,6]]},
      {heb: [[9,23,24]]},
      {heb: [[10,1,1]]},
    ],
  },
  'tetzave': {
    week: 20,
    title: 'Tetzave',
    name: 'tetzave',
    description: 'You shall command',
    references: [
      {exd: [[27,20],28,29,[30,1,10]]},
      {sa1: [15]},
      {isa: [[9,6,7]]},
      {isa: [[60,19,22]]},
      {eze: [[28,11,19]]},
      {eze: [[43,10,27]]},
      {eze: [[44,9,18]]},
      {rom: [12,13]},
      {phl: [[4,4,20]]},
      {rev: [[21,16,27]]},
    ],
  },
  'ki-tiza': {
    week: 21,
    title: 'Ki Tiza',
    name: 'ki-tiza',
    description: 'When you take',
    references: [
      {exd: [[30,11],31,32,33,34]},
      {ki1: [[18,1,39]]},
      {luk: [[11,14,20]]},
      {act: [[7,35],[8,1,1]]},
      {cr1: [[10,1,13]]},
      {cr2: [[3,1,18]]},
      {heb: [[9,1,14]]},
      {rev: [11]},
    ],
  },
  'vayakhel': {
    week: 22,
    title: 'Vayak\'hel',
    name: 'vayakhel',
    description: 'He gathered',
    references: [
      {exd: [35,36,37,[38,1,20]]},
      {ki1: [[7,13,50]]},
      {cr2: [[9,1,15]]},
      {heb: [[9,1,14]]},
      {rev: [[11,1,13]]},
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
      {rev: [[15,5,8]]},
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
      {isa: [[66,1,24]]},
      {rom: [[8,1,13]]},
      {heb: [[10,1,39]]},
      {heb: [[13,10,16]]},
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
      {mar: [[12,28,34]]},
      {rom: [[8,1,13]]},
      {rom: [[12,1,2]]},
      {cr1: [[3,9,23]]},
      {cr1: [[10,14,23]]},
      {ti1: [[2,1,10]]},
      {heb: [[7,23],[8,1,6]]},
      {heb: [[13,10,16]]},
      {rev: [[6,9,11]]},
      {rev: [8,9]},
      {rev: [[14,6,7]]},
      {rev: [[16,15,15]]},
      {rev: [[19,6,8]]},
    ],
  },
  'chol-hamoed-pesach': {
    week: 25,
    title: 'Chol HaMo\'ed Pesach',
    name: 'chol-hamoed-pesach',
    description: 'Passover/Unlevened Bread',
    references: [
      {exd: [[12,21,51]]},
      {exd: [[13,17],14,[15,1,26]]},
      {jos: [[5,2],[6,1,1]]},
      {sa2: [22]},
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
      {isa: [[65,1,8]]},
      {isa: [[66,15,18]]},
      {jer: [[7,21],[8,1,3]]},
      {jer: [[9,22,24]]},
      {mar: [[7,1,23]]},
      {act: [[5,1,11]]},
      {act: [[10,1,35]]},
      {cr2: [[6,14],[7,1,1]]},
      {gal: [[2,11,16]]},
      {pe1: [[1,14,16]]},
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
      {mat: [[8,1,4]]},
      {mat: [[11,2,6]]},
      {mar: [[1,40,45]]},
      {mar: [[5,1,43]]},
      {luk: [[2,22,24]]},
      {luk: [[5,12,16]]},
      {luk: [[7,18,23]]},
      {rom: [6]},
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
      {mat: [[9,20,26]]},
      {mar: [[5,24,34]]},
      {luk: [[8,42,48]]},
      {heb: [[13,4,4]]},
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
      {jhn: [7,8,9,[10,1,21]]},
      {rom: [[3,19,28]]},
      {rom: [[9,30],[10,1,13]]},
      {cr1: [[5,1,13]]},
      {cr2: [[2,1,17]]},
      {gal: [[3,10,14]]},
      {heb: [[7,23],8,9,[10,1,25]]},
    ],
  },
  'kedoshim': {
    week: 28,
    title: 'Kedoshim',
    name: 'kedoshim',
    description: 'Holy',
    references: [
      {lev: [19,[20,1,27]]},
      {isa: [[66,1,24]]},
      {eze: [[20,1,20]]},
      {eze: [[22,1,16]]},
      {amo: [[9,7,15]]},
      {mat: [[5,33,37]]},
      {mat: [[5,43,48]]},
      {rom: [[1,18,32]]},
      {rom: [[13,8,10]]},
      {gal: [[5,13,26]]},
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
      {zec: [[14,16,21]]},
      {mat: [[25,1,13]]},
      {mar: [[2,20],[3,1,5]]},
      {luk: [[12,1,59]]},
      {act: [[20,6,16]]},
      {rom: [[11,11,36]]},
      {cr1: [[5,1,8]]},
      {gal: [[3,23,29]]},
      {eph: [[2,1,22]]},
      {eph: [[5,25,27]]},
      {th1: [[5,1,11]]},
      {pe1: [[2,1,10]]},
      {pe2: [[3,13,18]]},
      {rev: [[21,1,27]]},
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
      {luk: [[4,16,21]]},
      {cr1: [[7,21,24]]},
      {gal: [[6,7,10]]},
      {jam: [[5,1,6]]},
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
      {jer: [[23,1,40]]},
      {jer: [30,[31,1,40]]},
      {eze: [37]},
      {hos: [2]},
      {zec: [[11,12,17]]},
      {mat: [[5,1,48]]},
      {mat: [[7,1,29]]},
      {mat: [[21,33,46]]},
      {mat: [23,[24,1,2]]},
      {mat: [[27,1,10]]},
      {luk: [15]},
      {jhn: [[8,1,11]]},
      {jhn: [[14,15,21]]},
      {jhn: [[15,10,12]]},
      {cr2: [[6,14,18]]},
    ],
  },
  'bamidbar': {
    week: 32,
    title: 'Bamidbar',
    name: 'bamidbar',
    description: 'In the wilderness',
    references: [
      {num: [1,2,3,4]},
      {hos: [[1,10],[2,1,23]]},
      {luk: [16,[17,1,10]]},
      {cr1: [[12,12,31]]},
    ],
  },
  'nasso': {
    week: 33,
    title: 'Nasso',
    name: 'nasso',
    description: 'Take up',
    references: {
      torah: [
        {reference: 'Numbers 4:21 - 7:89', verses: function() {return word("num",4).slice(20)
        .concat(word("num",5))
        .concat(word("num",6))
        .concat(word("num",7));}},
      ],
      prophets: [
        {reference: 'Judges 13:2-25', verses: function() {return word("jdg",13).slice(1,25);}},
      ],
      britchadasha: [
        {reference: 'Matthew 26:14-45', verses: function() {return word("mat",26).slice(13,45);}},
        {reference: 'Matthew 27:34', verses: function() {return word("mat",27).slice(33,34);}},
        {reference: 'John 7:37 - 8:11', verses: function() {return word("jhn",7).slice(36).concat(word("jhn",8).slice(0,11));}},
        {reference: 'Acts 21:17-32', verses: function() {return word("act",21).slice(16,32);}},
      ],
    },
  },
  'behaalotcha': {
    week: 34,
    title: 'Beha\'alotcha',
    name: 'behaalotcha',
    description: 'When you set up',
    references: {
      torah: [
        {reference: 'Numbers 8 - 12', verses: function() {return word("num",8)
        .concat(word("num",9))
        .concat(word("num",10))
        .concat(word("num",11))
        .concat(word("num",12));}},
      ],
      prophets: [
        {reference: 'Zechariah 2:1 - 4:7', verses: function() {return word("zec",2)
        .concat(word("zec",3))
        .concat(word("zec",4).slice(0,7));}},
      ],
      britchadasha: [
        {reference: 'Luke 17:11 - 18:14', verses: function() {return word("luk",17).slice(10)
        .concat(word("luk",18).slice(0,14));}},
        {reference: 'Luke 23:44-56', verses: function() {return word("luk",23).slice(43,56);}},
        {reference: 'Acts 2', verses: function() {return word("act",2);}},
        {reference: 'Acts 10', verses: function() {return word("act",10);}},
        {reference: '2 Corinthians 10:5-13', verses: function() {return word("cr2",10).slice(4,13);}},
        {reference: 'Hebrews 3:1-6', verses: function() {return word("heb",3).slice(0,6);}},
        {reference: 'Revelation 11:1-3', verses: function() {return word("rev",11).slice(0,3);}},
      ],
    },
  },
  'shelachlacha': {
    week: 35,
    title: 'Shelach L\'cha',
    name: 'shelachlacha',
    description: 'Send',
    references: {
      torah: [
        {reference: 'Numbers 13:1 - 15:41', verses: function() {return word("num",13)
        .concat(word("num",14))
        .concat(word("num",15).slice(0,41));}},
      ],
      prophets: [
        {reference: 'Joshua 2', verses: function() {return word("jos",2);}},
        {reference: 'Psalm 95', verses: function() {return word("psa",95);}},
        {reference: 'Jeremiah 12:14-17', verses: function() {return word("jer",12).slice(13,17);}},
        {reference: 'Ezekiel 20', verses: function() {return word("jos",20);}},
      ],
      britchadasha: [
        {reference: 'Mark 10:1-45', verses: function() {return word("mar",10).slice(0,45);}},
        {reference: 'Hebrews 3:7-19', verses: function() {return word("heb",3).slice(6,19);}},
      ],
    },
  },
  'korach': {
    week: 36,
    title: 'Korach',
    name: 'korach',
    description: 'Korah',
    references: {
      torah: [
        {reference: 'Numbers 16 - 18', verses: function() {
          return word("num",16)
          .concat(word("num",17))
          .concat(word("num",18));
        }},
      ],
      prophets: [
        {reference: '1 Samuel 11:14 - 12:22', verses: function() {return word("sa1",11).slice(13)
        .concat(word("sa1",12).slice(0,22));}},
      ],
      britchadasha: [
        {reference: 'Luke 18:35 - 19:28', verses: function() {return word("luk",18).slice(34).concat(word("luk",19).slice(0,28));}},
        {reference: 'Romans 13:1-7', verses: function() {return word("rom",13).slice(0,7);}},
        {reference: '2 Timothy 2:8-21', verses: function() {return word("ti2",2).slice(7,21);}},
        {reference: 'Jude', verses: function() {return word("jud",1);}},
      ],
    },
  },
  'chukat': {
    week: 37,
    title: 'Chukat',
    name: 'chukat',
    description: 'Statute',
    references: {
      torah: [
        {reference: 'Numbers 19:1 - 22:1', verses: function() {
          return word("num",19)
          .concat(word("num",20))
          .concat(word("num",21))
          .concat(word("num",22).slice(0,1));
        }},
      ],
      prophets: [
        {reference: 'Judges 11:1-33', verses: function() {return word("jdg",11).slice(0,33);}},
        {reference: 'Isaiah 66:1-24', verses: function() {return word("isa",66);}},
      ],
      britchadasha: [
        {reference: 'Matthew 21:1-17', verses: function() {return word("mat",21).slice(0,17);}},
        {reference: 'John 3:1-21', verses: function() {return word("jhn",3).slice(0,21);}},
        {reference: 'John 4:3-30', verses: function() {return word("jhn",4).slice(2,30);}},
        {reference: 'John 12:27-50', verses: function() {return word("jhn",12).slice(26,50);}},
      ],
    },
  },
  'balak': {
    week: 38,
    title: 'Balak',
    name: 'balak',
    description: 'Balak',
    references: {
      torah: [
        {reference: 'Numbers 22:2 - 25:9', verses: function() {return word("num",22).slice(1)
          .concat(word("num",23))
          .concat(word("num",24))
          .concat(word("num",25).slice(0,9));}},
      ],
      prophets: [
        {reference: 'Joshua 13:22', verses: function() {return word("jos",13).slice(21,22);}},
        {reference: 'Micah 5:7 - 6:8', verses: function() {return word("mic",5).slice(6)
            .concat(word("mic",6).slice(0,8));}},            
      ],
      britchadasha: [
        {reference: 'Mark 11:1-26', verses: function() {return word("mar",11).slice(0,26);}},
        {reference: 'Romans 11:25-32', verses: function() {return word("rom",11).slice(24,32);}},
        {reference: '1 Corinthians 1:20-31', verses: function() {return word("cr1",1).slice(19,31);}},
        {reference: 'Hebrews 1:1-2', verses: function() {return word("heb",1).slice(0,2);}},
        {reference: '2 Peter 2:1-22', verses: function() {return word("pe2",2).slice(0,22);}},
        {reference: 'Jude 1:11', verses: function() {return word("jud",1).slice(10,11);}},
        {reference: 'Revelation 2:12-17', verses: function() {return word("rev",2).slice(11,17);}},
      ],
    },
  },
  'pinchas': {
    week: 39,
    title: 'Pinchas',
    name: 'pinchas',
    description: 'Phineas',
    references: {
      torah: [
        {reference: 'Numbers 25:10 - 30:1', verses: function() {return word("num",25).slice(9)
          .concat(word("num",26))
          .concat(word("num",27))
          .concat(word("num",28))
          .concat(word("num",29))
          .concat(word("num",30).slice(0,1));}},
      ],
      prophets: [
        {reference: '1 Kings 18:46 - 19:21', verses: function() {return word("ki1",18).slice(45)
            .concat(word("ki1",19).slice(0,21));}},
      ],
      britchadasha: [
        {reference: 'Matthew 26:1-30', verses: function() {return word("mat",26).slice(0,30);}},
        {reference: 'John 2:13-25', verses: function() {return word("jhn",2).slice(12,25);}},
        {reference: 'John 7:1-39', verses: function() {return word("jhn",7).slice(0,39);}},
        {reference: 'John 11:55 - 12:1', verses: function() {return word("jhn",11).slice(54)
            .concat(word("jhn",12).slice(0,1));}},
        {reference: 'John 13:1', verses: function() {return word("jhn",13).slice(0,1);}},
        {reference: 'John 18:28', verses: function() {return word("jhn",18).slice(27,28);}},
        {reference: 'John 18:39', verses: function() {return word("jhn",18).slice(38,39);}},
        {reference: 'John 19:14', verses: function() {return word("jhn",19).slice(13,14);}},
        {reference: 'Acts 2:1-21', verses: function() {return word("act",2).slice(0,21);}},
        {reference: 'Acts 12:3-4', verses: function() {return word("act",12).slice(2,4);}},
        {reference: 'Acts 20:6-16', verses: function() {return word("act",20).slice(5,16);}},
        {reference: 'Acts 27:9-11', verses: function() {return word("act",27).slice(8,11);}},
        {reference: '1 Corinthians 5:6-8', verses: function() {return word("cr1",5).slice(5,8);}},
        {reference: '1 Corinthians 16:8', verses: function() {return word("cr1",16).slice(7,8);}},
        {reference: 'Hebrews 11:28', verses: function() {return word("heb",11).slice(27,28);}},
      ],
    },
  },
  'mattot': {
    week: 40,
    title: 'Mattot',
    name: 'mattot',
    description: 'Tribes',
    references: {
      torah: [
        {reference: 'Numbers 30 - 32', verses: function() {return word("num",30)
            .concat(word("num",31))
            .concat(word("num",32));}},
      ],
      prophets: [
        {reference: 'Judges 11:29-40', verses: function() {return word("jdg",11).slice(28,40);}},
        {reference: '2 Chronicles 24:20-22', verses: function() {return word("ch2",24).slice(19,22);}},
        {reference: 'Jeremiah 1:1 - 2:3', verses: function() {return word("jer",1)
            .concat(word("jer",2).slice(0,3));}},
      ],
      britchadasha: [
        {reference: 'Matthew 5:33-37', verses: function() {return word("mat",5).slice(32,37);}},
        {reference: 'Matthew 23:1-39', verses: function() {return word("mat",23).slice(0,39);}},
      ],
    },
  },
  'massei': {
    week: 40,
    title: 'Massei',
    name: 'massei',
    description: 'Journeys',
    references: {
      torah: [
        {reference: 'Numbers 33 - 36', verses: function() {return word("num",33)
          .concat(word("num",34))
          .concat(word("num",35))
          .concat(word("num",36));}},
      ],
      prophets: [
        {reference: 'Jeremiah 2:4-28', verses: function() {return word("jer",2).slice(3,28);}},
        {reference: 'Jeremiah 3:4', verses: function() {return word("jer",3).slice(3,4);}},
        {reference: 'Jeremiah 4:1-2', verses: function() {return word("jer",4).slice(0,2);}},
      ],
      britchadasha: [
        {reference: 'Matthew 24:1 - 25:46', verses: function() {return word("mat",24).concat(word("mat",25).slice(0,46));}},
        {reference: 'Philippians 3:7-21', verses: function() {return word("phl",3).slice(6,21);}},
        {reference: 'James 4:1-12', verses: function() {return word("jam",4).slice(0,12);}},
      ],
    },
  },
  'devarim': {
    week: 41,
    title: 'Devarim',
    name: 'devarim',
    description: 'Words',
    references: {
      torah: [
        {reference: 'Deuteronomy 1:1 - 3:22', verses: function() {
          return word("deu",1)
            .concat(word("deu",2))
            .concat(word("deu",3).slice(0,22));
        }},
      ],
      prophets: [
        {reference: 'Isaiah 1:1-31', verses: function() {return word("isa",1).slice(0,31)}},
      ],
      britchadasha: [
        {reference: 'Mark 14:1-16', verses: function() {return word("mar",14).slice(0,16);}},
        {reference: 'John 15:1-11', verses: function() {return word("jhn",15).slice(0,11);}},
        {reference: 'Acts 6:8 - 7:60 ', verses: function() {return word("act",6).slice(7).concat(word("act",7).slice(0,60));}},
        {reference: 'Acts 9:1-21', verses: function() {return word("act",9).slice(0,21);}},
        {reference: '1 Timothy 3:1-7', verses: function() {return word("ti1",3).slice(0,7);}},
        {reference: 'Hebrews 3:1 - 4:11', verses: function() {return word("heb",3).concat(word("heb",4).slice(0,11));}},
      ],
    },
  },
  'vaecthanan': {
    week: 42,
    title: 'Va\'ecthanan',
    name: 'vaecthanan',
    description: 'I pleaded',
    references: {
      torah: [
        {reference: 'Deuteronomy 3:23 - 7:11', verses: function() {return word("deu",3).slice(22)
            .concat(word("deu",4))
            .concat(word("deu",5))
            .concat(word("deu",6))
            .concat(word("deu",7).slice(0,11));}},
      ],
      prophets: [
        {reference: 'Isaiah 40:1-26', verses: function() {return word("isa",40).slice(0,26);}},
        {reference: 'Isaiah 62:6-7', verses: function() {return word("isa",62).slice(5,7);}},
      ],
      britchadasha: [
        {reference: 'Matthew 4:1-11', verses: function() {return word("mat",4).slice(0,11);}},
        {reference: 'Matthew 22:33-40', verses: function() {return word("mat",22).slice(32,40);}},
        {reference: 'Matthew 23:31-39', verses: function() {return word("mat",23).slice(30,39);}},
        {reference: 'Mark 12:1-44', verses: function() {return word("mar",12).slice(0,44);}},
        {reference: 'Luke 10:25-37', verses: function() {return word("luk",10).slice(24,37);}},
        {reference: 'Luke 22:13-38', verses: function() {return word("luk",22).slice(12,38);}},
        {reference: 'Acts 13:13-43', verses: function() {return word("act",13).slice(12,43);}},
        {reference: 'Romans 3:27-31', verses: function() {return word("rom",3).slice(26,31);}},
        {reference: '1 Timothy 2:1-6', verses: function() {return word("ti1",2).slice(0,6);}},
        {reference: 'James 2:14-26', verses: function() {return word("jam",2).slice(13,26);}},
      ],
    },
  },
  'ekev': {
    week: 43,
    title: 'Ekev',
    name: 'ekev',
    description: 'Consequence',
    references: {
      torah: [
        {reference: 'Deuteronomy 7:12 - 11:25', verses: function() {return word("deu",7).slice(11)
            .concat(word("deu",8))
            .concat(word("deu",9))
            .concat(word("deu",10))
            .concat(word("deu",11).slice(0,25));}},
      ],
      prophets: [
        {reference: 'Isaiah 49:14 - 51:3', verses: function() {return word("isa",49).slice(13)
          .concat(word("isa",50))
          .concat(word("isa",51).slice(0,3));}},
      ],
      britchadasha: [
        {reference: 'Luke 4:1-13', verses: function() {return word("luk",4).slice(0,13);}},
        {reference: 'John 13:31 - 15:27', verses: function() {return word("jhn",13).slice(30)
          .concat(word("isa",14))
          .concat(word("isa",15).slice(0,27));}},
        {reference: 'Romans 8:31-39', verses: function() {return word("rom",8).slice(30,39);}},
        {reference: 'Hebrews 12:1-29', verses: function() {return word("heb",12).slice(0,29);}},
        {reference: 'James 5:7-11', verses: function() {return word("jam",5).slice(6,11);}},
      ],
    },
  },
  'reeh': {
    week: 44,
    title: 'Re\'eh',
    name: 'reeh',
    description: 'See',
    references: {
      torah: [
        {reference: 'Deuteronomy 11:26 - 16:17', verses: function() {
          return word("deu",11).slice(25)
            .concat(word("deu",12))
            .concat(word("deu",13))
            .concat(word("deu",14))
            .concat(word("deu",15))
            .concat(word("deu",16).slice(0,17));
        }},
      ],
      prophets: [
        {reference: 'Isaiah 54:11 - 55:9', verses: function() {
          return word("isa",54).slice(10)
            .concat(word("isa",55).slice(0,9));
        }},
      ],
      britchadasha: [
        {reference: 'John 7:37-52', verses: function() {return word("jhn",7).slice(36,52);}},
        {reference: 'john 16:1 - 17:26', verses: function() {return word("jhn",16).concat(word("jhn",17).slice(0,26));}},
        {reference: '1 Corinthians 5:9-13', verses: function() {return word("cr1",5).slice(8,13);}},
        {reference: '1 Corinthians 8:1-13', verses: function() {return word("cr1",8).slice(0,13);}},
        {reference: '1 John 4:1-6', verses: function() {return word("jo1",4).slice(0,6);}},
      ],
    },
  },
  'shoftim': {
    week: 45,
    title: 'Shoftim',
    name: 'shoftim',
    description: 'Judges',
    references: {
      torah: [
        {reference: 'Deuteronomy 16:18 - 21:9', verses: function() {
          return word("deu",16).slice(17)
            .concat(word("deu",17))
            .concat(word("deu",18))
            .concat(word("deu",19))
            .concat(word("deu",20))
            .concat(word("deu",21).slice(0,9));
        }},
      ],
      prophets: [
        {reference: 'Isaiah 51:12 - 52:12', verses: function() {
          return word("isa",51).slice(11)
            .concat(word("isa",52).slice(0,12));
        }},
      ],
      britchadasha: [
        {reference: 'Matthew 5:38-42', verses: function() {return word("mat",5).slice(37,42);}},
        {reference: 'Matthew 26:47 - 27:10', verses: function() {return word("mat",26).slice(46).concat(word("mat",27).slice(0,10));}},
        {reference: 'John 1:19-27', verses: function() {return word("jhn",1).slice(18,27);}},
        {reference: 'Acts 3:13-26', verses: function() {return word("act",3).slice(12,26);}},
        {reference: 'Acts 7:35-53', verses: function() {return word("act",7).slice(34,53);}},
        {reference: '1 Corinthians 5:9-13', verses: function() {return word("cr1",5).slice(8,13);}},
        {reference: '1 Timothy 5:17-22', verses: function() {return word("ti1",5).slice(16,22);}},
        {reference: 'Hebrews 10:28-31', verses: function() {return word("heb",10).slice(27,31);}},
      ],
    },
  },
  'kitetze': {
    week: 46,
    title: 'Ki Tetze',
    name: 'kitetze',
    description: 'When you go forth',
    references: {
      torah: [
        {reference: 'Deuteronomy 21:10 - 25:19', verses: function() {
          return word("deu",22)
            .concat(word("deu",23))
            .concat(word("deu",24))
            .concat(word("deu",25).slice(0,19));
        }},
      ],
      prophets: [
        {reference: 'Isaiah 52:13 - 54:10', verses: function() {
          return word("isa",52)
            .concat(word("isa",53))
            .concat(word("isa",54).slice(0,10));
        }},
      ],
      britchadasha: [
        {reference: 'Matthew 5:27-32', verses: function() {return word("mat",5).slice(26,32);}},
        {reference: 'Matthew 19:1-12', verses: function() {return word("mat",19).slice(0,12);}},
        {reference: 'Matthew 22:23-32', verses: function() {return word("mat",22).slice(22,32);}},
        {reference: 'Mark 10:2-12', verses: function() {return word("mar",10).slice(1,12);}},
        {reference: 'Mark 12:18-27', verses: function() {return word("mar",12).slice(17,27);}},
        {reference: 'Luke 23:1-25', verses: function() {return word("luk",23).slice(0,25);}},
      ],
    },
  },
  'kitavo': {
    week: 47,
    title: 'Ki Tavo',
    name: 'kitavo',
    description: 'When you come in',
    references: {
      torah: [
        {reference: 'Deuteronomy 26:1 - 29:9', verses: function() {
          return word("deu",26).concat(word("deu",29).slice(0,9));}},
      ],
      prophets: [
        {reference: 'Isaiah 60:1-22', verses: function() {return word("isa",60);}},
      ],
      britchadasha: [
        {reference: 'Matthew 13:1-23', verses: function() {return word("mat",13).slice(0,23);}},
        {reference: 'Matthew 25:1-46', verses: function() {return word("mat",25);}},
        {reference: 'Luke 21:1-4', verses: function() {return word("luk",21).slice(0,4);}},
        {reference: 'Luke 23:26-56', verses: function() {return word("luk",23).slice(25,56);}},
        {reference: 'Acts 28:17-31', verses: function() {return word("act",28).slice(16,31);}},
        {reference: 'Romans 11:1-15', verses: function() {return word("rom",11).slice(0,15);}},
        {reference: 'Ephesians 1:3-6', verses: function() {return word("eph",1).slice(2,6);}},
        {reference: 'James 1:1 - 2:26', verses: function() {return word("jam",1).concat(word("jam",2));}},
      ],
    },
  },
  'nitzavim': {
    week: 48,
    title: 'Nitzavim',
    name: 'nitzavim',
    description: 'Standing',
    references: {
      torah: [
        {reference: 'Deuteronomy 29:9 -­ 30:20', verses: function() {return word("deu",29).slice(8).concat(word("deu",30));}},
      ],
      prophets: [
        {reference: 'Isaiah 61:1 ­- 63:9', verses: function() {return word("isa",61).concat(word("isa",62)).concat(word("isa",63).slice(0,9));}},
      ],
      britchadasha: [
        {reference: 'Matthew 5:17-­19', verses: function() {return word("mat",5).slice(16,19);}},
        {reference: 'Luke 24:1­-12', verses: function() {return word("luk",24).slice(0,12);}},
        {reference: 'Romans 9:30 ­- 10:13', verses: function() {return word("rom",9).slice(29).concat(word("rom",10).slice(0,13));}},
        {reference: '1 Timothy 6:1­-21', verses: function() {return word("ti1",6);}},
        {reference: 'Hebrews 12:14-­15', verses: function() {return word("heb",12).slice(13,15);}},
        {reference: '1 John 5:1-­21', verses: function() {return word("jo1",5);}},
      ],
    },
  },
  'vayelekh': {
    week: 49,
    title: 'Vayelekh',
    name: 'vayelekh',
    description: 'He went',
    references: {
      torah: [
        {reference: 'Deuteronomy 31:1-­30', verses: function() {return word("deu",31);}},
      ],
      prophets: [
        {reference: 'Hosea 14:1­-9', verses: function() {return word("hos",14).slice(0,9);}},
        {reference: 'Joel 2:15­-27', verses: function() {return word("joe",2).slice(14,27);}},
        {reference: 'Micah 7:18­-20', verses: function() {return word("mic",7).slice(17,20);}},
      ],
      britchadasha: [
        {reference: 'Luke 24:13­-43', verses: function() {return word("luk",24).slice(12,43);}},
        {reference: 'Romans 1:1­-18', verses: function() {return word("rom",1).slice(0,18);}},
        {reference: 'Romans 10:14­-21', verses: function() {return word("rom",10).slice(13,21);}},
        {reference: 'Romans 12:14­-21', verses: function() {return word("rom",12).slice(13,21);}},
        {reference: 'Philippians 1:1 -­ 2:30', verses: function() {return word("phl",1).concat(word("phl",2));}},
        {reference: 'Hebrews 12:14­-29', verses: function() {return word("heb",12).slice(13,29);}},
        {reference: 'Hebrews 13:5­-8', verses: function() {return word("heb",13).slice(4,8);}},
        {reference: '1 Peter 1:1 -­ 2:25', verses: function() {return word("pe1",1).concat(word("pe1",2));}},
      ],
    },
  },
  'haazinu': {
    week: 50,
    title: 'Ha\'azinu',
    name: 'haazinu',
    description: 'Listen',
    references: {
      torah: [
        {reference: 'Deuteronomy 32:1-­52', verses: function() {return word("deu",32);}},
      ],
      prophets: [
        {reference: '2 Samuel 22:1-­51', verses: function() {return word("2sa",22);}},
      ],
      britchadasha: [
        {reference: 'John 20:26 ­- 21:25', verses: function() {return word("jhn",20).slice(25).concat(word("jhn",21));}},
      ],
    },
  },
  'vezothabracha': {
    week: 51,
    title: 'Vezot Ha\'Bracha',
    name: 'vezothabracha',
    description: 'This it the blessing',
    references: {
      torah: [
        {reference: 'Deuteronomy 33:1 -­ 34:12',  verses: function() {return word("deu",33).concat(word("deu",34));}},
      ],
      prophets: [
        {reference: 'Joshua 1:1-­18', verses: function() {return word("jos",1);}},
      ],
      britchadasha: [
        {reference: 'Matthew 17:1-­9', verses: function() {return word("mat",17).slice(0,9);}},
        {reference: 'Mark 9:2­-10', verses: function() {return word("mar",9).slice(1,10);}},
        {reference: 'Luke 9:28­-36', verses: function() {return word("luk",9).slice(27,36);}},
        {reference: 'Luke 22:44-­53', verses: function() {return word("luk",22).slice(43,53);}},
        {reference: 'Luke 24:1-­53', verses: function() {return word("luk",24);}},
        {reference: '2 Peter 3:1-18', verses: function() {return word("pe2",3);}},
        {reference: 'Jude 1:3­-4', verses: function() {return word("jud",1).slice(2,4);}},
        {reference: 'Jude 1:­8-10', verses: function() {return word("jud",1).slice(7,10);}},
        {reference: 'Revelation 22:1-­5', verses: function() {return word("rev",22).slice(0,5);}},
      ],
    },
  },
};

bookNames = {
  gen: 'Genesis',
  exd: 'Exodus',
  lev: 'Leviticus',
  num: 'Numbers',
  deu: 'Deuteronomy',
  jos: 'Joshua',
  jdg: 'Judges',
  rth: 'Ruth',
  sa1: '1 Samuel',
  sa2: '2 Samuel',
  ki1: '1 Kings',
  ki2: '2 Kings',
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
  isa: 'Isaiah',
  jer: 'Jeremiah',
  lam: 'Lamentations',
  eze: 'Ezekiel',
  dan: 'Daniel',
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
  mal: 'Malachi',
  mat: 'Matthew',
  mar: 'Mark',
  luk: 'Luke',
  jhn: 'John',
  act: 'Acts',
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
  tit: 'Titus',
  phm: 'Philemon',
  heb: 'Hebrews',
  jam: 'James',
  pe1: '1 Peter',
  pe2: '2 Peter',
  jo1: '1 John',
  jo2: '2 John',
  jo3: '3 John',
  jud: 'Jude',
  rev: 'Revelation',
};