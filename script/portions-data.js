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
      {hos: [[14,1,9]]},
      {joe: [[2,12,32]]},
      {act: [[2,17,21]]},
      {act: [[27,1,9]]},
      {rom: [[3,21,26]]},
      {rom: [[5,6,11]]},
      {rom: [[11,17,21]]},
      {jo1: [[1,1,9]]},
      {heb: [[10,1,18]]},
    ],
  },
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
      {jhn: [17]},
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
      {exd: [1,2,3,4,5,[6,1,1]]},
      {isa: [[27,6],[28,1,13]]},
      {isa: [[29,22,23]]},
      {mat: [[22,23,46]]},
      {luk: [[5,12,39]]},
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
      {act: [[8,9,25]]},
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
  'mishpatim': {
    week: 18,
    title: 'Mishpatin',
    name: 'mishpatin',
    description: 'Judgments',
    references: [
      {exd: [21,22,23,24]},
      {ki2: [[12,1,16]]},
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
      {ti2: [[2,14,26]]},
      {heb: [[8,1,6]]},
      {heb: [[9,23,24]]},
      {heb: [[10,1,1]]},
      {rev: [[21,1,4]]},
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
      {isa: [[59,16,17]]},
      {isa: [[60,19,22]]},
      {eze: [[28,11,19]]},
      {eze: [[43,10,27]]},
      {eze: [[44,9,18]]},
      {rom: [12,13]},
      {eph: [[6,10,17]]},
      {phl: [[4,4,20]]},
      {rev: [[21,16,27]]},
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
      {mat: [[5,13,20]]},
      {mat: [[13,33,35]]},
      {mat: [[16,5,12]]},
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
    references: [ //TODO: should have Exodus 33:12–34:26, Numbers 28:19–25, Ezekiel 37:1–14
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
      {col: [[2,2,10]]},
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
      {num: [1,2,3,[4,1,20]]},
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
    references: [
      {num: [[4,21],5,6,7]},
      {jdg: [[13,2,25]]},
      {mat: [[26,14,45]]},
      {mat: [[27,34,34]]},
      {jhn: [[7,37],[8,1,11]]},
      {act: [[21,17,32]]},
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
      {luk: [[17,11],[18,1,14]]},
      {luk: [[23,44,56]]},
      {act: [2]},
      {act: [10]},
      {cr2: [[10,5,13]]},
      {heb: [[3,1,6]]},
      {rev: [[11,1,3]]},
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
      {psa: [95]},
      {jer: [[12,14,17]]},
      {eze:[20]},
      {mar: [[10,1,45]]},
      {heb: [[3,7,19]]},
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
      {jer: [[51,36,64]]},
      {luk: [[18,35],[[19,1,28]]]},
      {rom: [[13,1,7]]},
      {cr2: [[6,14,18]]},
      {ti2: [[2,8,21]]},
      {jud: [1]},
      {rev: [18]}
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
      {isa: [66]},
      {mat: [[21,1,17]]},
      {jhn: [[3,1,21]]},
      {jhn: [[4,3,30]]},
      {jhn: [[12,27]]},
    ],
  },
  'balak': {
    week: 38,
    title: 'Balak',
    name: 'balak',
    description: 'Balak',
    references: [
      {num: [[22,2],23,24,[25,1,9]]},
      {jos: [[13,22,22]]},
      {mic: [[5,7],[6,1,8]]},
      {mar: [[11,1,26]]},
      {rom: [[11,25,32]]},
      {cr1: [[1,20,31]]},
      {heb: [[1,1,2]]},
      {pe2: [2]},
      {jud: [[1,11,11]]},
      {rev: [[2,12,17]]},
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
      {mat: [[26,1,30]]},
      {jhn: [[2,13,25]]},
      {jhn: [[7,1,39]]},
      {jhn: [[11,55],[12,1,1]]},
      {jhn: [[13,1,1]]},
      {jhn: [[18,28,28]]},
      {jhn: [[18,39,39]]},
      {jhn: [[19,14,14]]},
      {act: [[2,1,21]]},
      {act: [[12,3,4]]},
      {act: [[20,6,16]]},
      {act: [[27,9,11]]},
      {cr1: [[5,6,8]]},
      {cr1: [[16,8,8]]},
      {heb: [[11,28,28]]},
    ],
  },
  'mattot': {
    week: 40,
    title: 'Mattot',
    name: 'mattot',
    description: 'Tribes',
    references: [
      {num: [30,31,32]},
      {jdg: [[11,29,40]]},
      {ch2: [[24,20,22]]},
      {jer: [1,[2,1,3]]},
      {mat: [[5,33,37]]},
      {mat: [23]},
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
      {jer: [[4,1,2]]},
      {mat: [24,25]},
      {phl: [[3,7,21]]},
      {jam: [[4,1,12]]},
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
      {mar: [[14,1,16]]},
      {jhn: [[15,1,11]]},
      {act: [[6,8],7]},
      {act: [[9,1,21]]},
      {ti1: [[3,1,7]]},
      {heb: [3,[4,1,11]]},
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
      {isa: [[62,6,7]]},
      {mat: [[4,1,11]]},
      {mat: [[22,33,40]]},
      {mat: [[23,31,39]]},
      {mar: [12]},
      {luk: [[10,25,37]]},
      {luk: [[22,13,38]]},
      {act: [[13,13,42]]},
      {rom: [[3,27,31]]},
      {ti1: [[2,1,6]]},
      {jam: [[2,14,26]]},
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
      {luk: [[4,1,13]]},
      {jhn: [[13,31],14,15]},
      {rom: [[8,31,39]]},
      {heb: [12]},
      {jam: [[5,7,11]]},
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
      {jhn: [[7,37,52]]},
      {jhn: [16,17]},
      {cr1: [[5,9,13]]},
      {cr1: [8]},
      {jo1: [[4,1,6]]},
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
      {mat: [[5,38,42]]},
      {mat: [[26,47],[27,1,10]]},
      {jhn: [[1,19,27]]},
      {act: [[3,13,26]]},
      {act: [[7,35,53]]},
      {cr1: [[5,9,13]]},
      {ti1: [[5,17,22]]},
      {heb: [[10,28,31]]},
    ],
  },
  'kitetze': {
    week: 46,
    title: 'Ki Tetze',
    name: 'kitetze',
    description: 'When you go forth',
    references: [
      {deu: [[21,10],22,23,24,25]},
      {isa: [[52,13],53,[54,1,10]]},
      {mat: [[5,27,31]]},
      {mat: [[19,1,12]]},
      {mat: [[22,23,32]]},
      {mar: [[10,2,12]]},
      {mar: [[12,18,27]]},
      {luk: [[23,1,25]]},
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
      {mat: [[13,1,23]]},
      {mat: [25]},
      {luk: [[21,1,4]]},
      {luk: [[23,26,56]]},
      {act: [[28,17,31]]},
      {rom: [[11,1,15]]},
      {eph: [[1,3,6]]},
      {jam: [1,2]},
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
      {mat: [[5,14,20]]},
      {luk: [[24,1,12]]},
      {rom: [[9,30],[10,1,13]]},
      {ti1: [6]},
      {heb: [[12,14,15]]},
      {jo1: [5]},
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
      {joe: [[2,15,27]]},
      {mic: [[7,18,20]]},
      {luk: [[24,13,43]]},
      {rom: [[1,1,18]]},
      {rom: [[10,14,21]]},
      {rom: [[12,14,21]]},
      {phl: [1,2]},
      {heb: [[12,14,29]]},
      {heb: [[13,5,8]]},
      {pe1: [1,2]},
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
      {jhn: [[20,26],[21,1,25]]},
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
      {mat: [[17,1,9]]},
      {mar: [[9,2,10]]},
      {luk: [[9,28,36]]},
      {luk: [[22,44,53]]},
      {luk: [24]},
      {pe2: [3]},
      {jud: [[1,1,3]]},
      {jud: [[1,8,10]]},
      {rev: [[22,1,5]]},
    ],
  },
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