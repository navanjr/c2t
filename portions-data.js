withNumbers = function(verses, chapter) {
  if (verses && verses.length) {
    var v = 0;
    return verses.map(function(r){v++; return {ref: chapter + ":" + v, verse: r};});
  }
  return [];
}

tp = {
  breisheet: [
    {gen: [1,2,3,4,5,[6,1,8]]},
  ],
  noach: [
    {gen: [[6,9],7,8,9,10,11]},
  ]
};

[
  {book: 'gen', verses: [
    {1: [
      'asdfasf',
      'sadfasdf',
    ]}
  ]}
]

portionsData = {
  'breisheet': {
    week: 1,
    title: 'B\'reisheet',
    description: 'In the beginning',
    source: {},
    scripture: {
      torah: [{
          reference: 'Genesis 1:1 - 6:8', verses: function() {
            return word("gen",1)
              .concat(word("gen",2))
              .concat(word("gen",3))
              .concat(word("gen",4))
              .concat(word("gen",5))
              .concat(word("gen",6).slice(0, 8)) || [];
          },
        },
      ],
      prophets: [
        {reference: 'Isaiah 14:12-22', verses: function() {
          return word("isa",14).slice(11,22);
        }},
        {reference: 'Isaiah 42:5 - 43:10', verses: function() {
          return word("isa",42)
            .concat(word("isa",43).slice(0, 10)) || [];
          },
        },
      ],
      britchadasha: [
        {reference: 'Matthew 1 - 2', verses: function() {
          return word("mat",1)
          .concat(word("mat",2));
        }},
        {reference: 'John 1:1-18', verses: function() {
          return word("jhn",1).slice(0,18);
        }},
        {reference: 'Romans 1:18-23', verses: function() {
          return word("rom",1).slice(17,23);
        }},
        {reference: 'Romans 5:12-21', verses: function() {
          return word("rom",5).slice(11,21);
        }},
        {reference: 'Romans 8:21-23', verses: function() {
          return word("rom",8).slice(20,23);
        }},
        {reference: '1 Corinthians 6:15-20', verses: function() {
          return word("cr1",6).slice(14,20);
        }},
        {reference: 'Ephesians 5:21-32', verses: function() {
          return word("eph",5).slice(20,32);
        }},
        {reference: 'Colossians 1:14-17', verses: function() {
          return word("col",1).slice(13,17);
        }},
        {reference: 'Hebrews 1:1-3', verses: function() {
          return word("heb",1).slice(0,3);
        }},
        {reference: 'Hebrews 11:1-7', verses: function() {
          return word("heb",11).slice(0,7);
        }},
        {reference: '1 Peter 3:18-22', verses: function() {
          return word("pe1",3).slice(17,22);
        }},
        {reference: '2 Peter 3:1-14', verses: function() {
          return word("pe2",3).slice(0,14);
        }},
        {reference: 'Jude', verses: function() {
          return word("jud",1);
        }},
        {reference: 'Revelation 20:1-3', verses: function() {
          return word("rev",20).slice(0,3);
        }
      }]
    },
    readingTime:'2 hours',
    name: 'breisheet',
  },
  'noach': {
    week: 2,
    title: 'Noach',
    description: 'Noah',
    source: {},
    scripture: {
      torah: [{
          reference: 'Genesis 6:9 - 11:32',
          verses: function() {
            return word("gen",6).slice(8)
              .concat(word("gen",7))
              .concat(word("gen",8))
              .concat(word("gen",9))
              .concat(word("gen",10))
              .concat(word("gen",11)) || [];
          },
        },
      ],
      prophets: [
        {reference: 'Isaiah 66:1-24', verses: function() {
          return word("isa",66);
        }},
        {reference: 'Micah 5:1-9', verses: function() {
          return word("mic",5).slice(0,9) || [];
        }
      }],
      britchadasha: [
        {reference: 'Matthew 24:36-51', verses: function() {
          return word("mat",24).slice(35,51);
        }},
        {reference: 'Luke 17:26-37', verses: function() {
          return word("luk",17).slice(25,37);
        }},
        {reference: 'Acts 2:1-16', verses: function() {
          return word("act",2).slice(0,16);
        }},
        {reference: '2 Peter 1:3 - 3:32', verses: function() {
          return word("pe2",1).slice(2,21)
          .concat(word("pe2",2))
            .concat(word("mat",4)) || [];
        }
      }]
    },
    name: 'noach',
  },
  'lech-lecha': {
    week: 3,
    title: 'Lech Lecha',
    description: 'Go forth',
    source: {},
    scripture: {
      torah: [{
        reference: 'Genesis 12 - 17',
        verses: function() {
          return word("gen",12)
            .concat(word("gen",13))
            .concat(word("gen",14))
            .concat(word("gen",15))
            .concat(word("gen",16))
            .concat(word("gen",17)) || [];
          },
        },
      ],
      prophets: [{
        reference: 'Isaiah 40:27 - 41:16',
        verses: function() {
          return word("isa",40).slice(26)
            .concat(word("isa",41).slice(0, 16))|| [];
        }
      }],
      britchadasha: [
        {reference: 'Acts 7:1-8', verses: function() {
          return word("act",7).slice(0,8);
        }},
        {reference: 'Romans 3:1-29', verses: function() {
          return word("rom",3).slice(0,29);
        }},
        {reference: 'Galatians 3:1-29', verses: function() {
          return word("gal",3).slice(0,29);
        }},
        {reference: 'Colossians 2:8-23', verses: function() {
          return word("col",2).slice(7,23);
        }},
        {reference: 'Hebrews 7:1-19', verses: function() {
          return word("heb",7).slice(0,19);
        }},
        {reference: 'Hebrews 11:1-12', verses: function() {
          return word("heb",11).slice(0,12) || [];
        }
      }]
    },
    name: 'lech-lecha',
  },
  'vayera': {
    week: 4,
    title: 'Vayera',
    name: 'vayera',
    description: 'He appeared',
    scripture: {
      torah: [
        {reference: 'Genesis 18:1 - 22:24', verses: function() {
          return word("gen",18)
            .concat(word("gen",19))
            .concat(word("gen",20))
            .concat(word("gen",21))
            .concat(word("gen",22));
        }},
      ],
      prophets: [
        {reference: '2 Kings 4:1-37', verses: function() {return word("ki2",4).slice(0,37);}},
      ],
      britchadasha: [
        {reference: 'Romans 9:6-9', verses: function() {
          return word("rom",9).slice(5,9);
          }},
        {reference: 'Galatians 4:1 - 5:6', verses: function() {
          return word("gal",4)
          .concat(word("gal",5).slice(0,6));
          }},
        {reference: 'Hebrews 11:17-19', verses: function() {
          return word("heb",11).slice(16,19);
        }},
        {reference: 'James 2:14-24', verses: function() {
          return word("jam",2).slice(13,24);
        }},
      ],
    },
  },
  'chayei-sarah': {
    week: 5,
    title: 'Chayei Sarah',
    name: 'chayei-sarah',
    description: 'Sarah\'s Life',
    scripture: {
      torah: [
        {reference: 'Genesis 23:1 - 25:18', verses: function() {
          return word("gen",23)
          .concat(word("gen",24))
          .concat(word("gen",25).slice(0,18));
        }},
      ],
      prophets: [
        {reference: '1 Kings 1:1-31', verses: function() {
          return word("ki1",1).slice(0,31);
        }},
      ],
      britchadasha: [
        {reference: 'Matthew 27:3-10', verses: function() {
          return word("mat",27).slice(2,10);
        }},
        {reference: 'Luke 9:57-62', verses: function() {
          return word("luk",9).slice(56,62);
        }},
        {reference: 'John 4:1-42', verses: function() {
          return word("jhn",4).slice(0,42);
        }},
        {reference: '1 Corinthians 15:50-58', verses: function() {
          return word("cr1",15).slice(49,58);
        }},

      ],
    },
  },
  'toldot': {
    week: 6,
    title: 'Toldot',
    name: 'toldot',
    description: 'Generations',
    scripture: {
      torah: [
        {reference: 'Genesis 25:19 - 28:9', verses: function() {
          return word("gen",25).slice(18,34)
          .concat(word("gen",26))
          .concat(word("gen",27))
          .concat(word("gen",28).slice(0,9));
        }},
      ],
      prophets: [
        {reference: 'Malachi 1:1 - 2:7', verses: function() {
          return word("mal",1)
          .concat(word("mal",2).slice(0,7));
        }},
      ],
      britchadasha: [
        {reference: 'Romans 9:1 - 10:21', verses: function() {
          return word("rom",9)
          .concat(word("rom",10));
        }},
        {reference: 'Hebrews 11:20', verses: function() {
          return word("heb",11).slice(19,20);
        }},
        {reference: 'Hebrews 12:14-17', verses: function() {
          return word("heb",12).slice(13,17);
        }},
      ],
    },
  },
  'vayetze': {
    week: 7,
    title: 'Vayetze',
    name: 'vayetze',
    description: 'He went out',
    scripture: {
      torah: [
        {reference: 'Genesis 28:10 - 32:3', verses: function() {
          return word("gen",28).slice(9,22)
          .concat(word("gen",29))
          .concat(word("gen",30))
          .concat(word("gen",31))
          .concat(word("gen",32).slice(0,3));
        }},
      ],
      prophets: [
        {reference: 'Hosea 12:12 - 14:9', verses: function() {
          return word("hos",12).slice(11,14)
          .concat(word("hos",13))
          .concat(word("hos",14).slice(0,9));
        }},
      ],
      britchadasha: [
        {reference: 'John 1:19-51', verses: function() {
          return word("jhn",1).slice(18,51);
        }},
      ],
    },
  },
  'vayishlach': {
    week: 8,
    title: 'Vayishlach',
    name: 'vayishlach',
    description: 'He sent',
    scripture: {
      torah: [
        {reference: 'Genesis 32:3 - 36:43', verses: function() {
          return word("gen",32).slice(2,32)
          .concat(word("gen",33))
          .concat(word("gen",34))
          .concat(word("gen",35))
          .concat(word("gen",36).slice(0,43));
        }},
      ],
      prophets: [
        {reference: 'Hosea 11:7 - 12:11', verses: function() {
          return word("hos",11).slice(6,12)
          .concat(word("hos",12).slice(0,11));
        }},
        {reference: 'Obadiah 1:1-21', verses: function() {
          return word("oba",1);
        }},
      ],
      britchadasha: [
        {reference: '1 Corinthians 5:1-13', verses: function() {
          return word("cr1",5).slice(0,13);
        }},
        {reference: 'Hebrews 11:1-40', verses: function(){
          return word("heb",11);
        }},
        {reference: 'Revelation 7:1-12', verses: function() {
          return word("rev",7).slice(0,12);
        }},
      ],
    },
  },
  'vayeshev': {
    week: 9,
    title: 'Vayeshev',
    name: 'vayeshev',
    description: 'He dwelt',
    scripture: {
      torah: [
        {reference: 'Genesis 37:1 - 40:23', verses: function() {
          return word("gen",37)
          .concat(word("gen",38))
          .concat(word("gen",39))
          .concat(word("gen",40));
        }},
      ],
      prophets: [
        {reference: 'Amos 2:4 - 3:8', verses: function() {
          return word("amo",2).slice(3,16)
          .concat(word("amo",3).slice(0,8));
        }},
      ],
      britchadasha: [
        {reference: 'Acts 7:9-16', verses: function() {
          return word("act",7).slice(8,16);
        }},
        {reference: 'Revelation 12:1-17', verses: function(){
          return word("rev",12);
        }},
      ],
    },
  },
  'miketz': {
    week: 10,
    title: 'Miketz',
    name: 'miketz',
    description: 'At the end',
    scripture: {
      torah: [
        {reference: 'Genesis 41:1 - 44:17', verses: function() {
          return word("gen",41)
          .concat(word("gen",42))
          .concat(word("gen",43))
          .concat(word("gen",44).slice(0,17));
        }},
      ],
      prophets: [
        {reference: 'Zechariah 2:10 - 4:7', verses: function() {
          return word("zec",2).slice(9,13)
          .concat(word("zec",3))
          .concat(word("zec",4).slice(0,7));
        }},
      ],
      britchadasha: [
        {reference: 'John 6:1-71', verses: function() {return word("jhn",6);}},
        {reference: 'John 10:22-39', verses: function() {return word("jhn",10).slice(21,39);}},
        {reference: 'Luke 4:16-31', verses: function() {return word("luk",4).slice(15,31);}},
      ],
    },
  },
  'vayigash': {
    week: 11,
    title: 'Vayigash',
    name: 'vayigash',
    description: 'He approached',
    scripture: {
      torah: [
        {reference: 'Genesis 44:18 - 47:27', verses: function() {
          return word("gen",44).slice(17,34)
          .concat(word("gen",45))
          .concat(word("gen",46))
          .concat(word("gen",47).slice(0,27));
        }},
      ],
      prophets: [
        {reference: 'Ezekiel 37:15-28', verses: function() {
          return word("eze",37).slice(14,28);
        }},
      ],
      britchadasha: [
        {reference: 'Luke 6:9-16', verses: function() {return word("luk",6).slice(8,16);}},
        {reference: 'Luke 15:11-32', verses: function() {return word("luk",15).slice(10,32);}},
        {reference: 'Acts 7:13-15', verses: function() {return word("act",7).slice(12,15);}},
        {reference: '2 Corinthians 5:1-21', verses: function() {return word("act",5).slice(0,21);}},
        {reference: 'Ephesians 2:1-10', verses: function() {return word("act",2).slice(0,10);}},
        {reference: 'Colossians 1:1-29', verses: function() {return word("act",1).slice(0,29);}},
      ],
    },
  },
  'vayechi': {
    week: 12,
    title: 'Vayechi',
    name: 'vayechi',
    description: 'He lived',
    scripture: {
      torah: [
        {reference: 'Genesis 47:28 - 50:26', verses: function() {
         return word("gen",47).slice(27,31)
         .concat(word("gen",48))
         .concat(word("gen",49))
         .concat(word("gen",50));
        }},
      ],
      prophets: [
        {reference: '1 Kings 2:1-12', verses: function() {return word("ki1",2).slice(0,12)}},
      ],
      britchadasha: [
        {reference: 'Luke 4:31 - 5:11', verses: function() {return word("luk",4).slice(30,44)
        .concat(word("luk",5).slice(0,11));
        }},
        {reference: 'Acts 7:15-16', verses: function() {return word("act",7).slice(14,16);}},
        {reference: 'Hebrews 11:21-22', verses: function() {return word("heb",11).slice(20,22);}},
        {reference: '1 Peter 1:1-9', verses: function() {return word("pe1",1).slice(0,9);}},
        {reference: '1 Peter 2:11-17', verses: function() {return word("pe1",2).slice(10,17);}},
        {reference: 'Revelation 7:1-17' , verses: function() {return word("rev",7);}},
        {reference: 'Revelation 14:1-7', verses: function() {return word("rev",14).slice(0,7);}},
      ],
    },
  },
  'shemot': {
    week: 13,
    title: 'Shemot',
    name: 'shemot',
    description: 'Names',
    scripture: {
      torah: [
        {reference: 'Exodus 1:1 - 6:1', verses: function() {
          return word("exd",1)
          .concat(word("exd",2))
          .concat(word("exd",3))
          .concat(word("exd",4))
          .concat(word("exd",5))
          .concat(word("exd",6).slice(0,1));
          }},
      ],
      prophets: [
        {reference: 'Isaiah 27:6-28:13', verses: function() {
        return word("isa",27).slice(5,13)
        .concat(word("isa",28).slice(0,13));
        }},
        {reference: 'Isaiah 29:22-23', verses: function() {
          return word("isa",29).slice(21,23);
          }},
      ],
      britchadasha: [
        {reference: 'Matthew 22:23-46', verses: function() {
          return word("mat",22).slice(22,46);
          }},
        {reference: 'Luke 5:12-39', verses: function() {
          return word("luk",5).slice(11,39);
          }},
        {reference: 'Acts 3:12-15', verses: function() {
          return word("act",3).slice(11,15);
          }},
        {reference: 'Acts 5:27-32', verses: function() {
          return word("act",5).slice(26,32);
          }},
        {reference: 'Acts 7:17-36', verses: function() {
          return word("act",7).slice(16,36);
          }},
        {reference: 'Acts 22:1-22', verses: function() {
          return word("act",22).slice(0,22);
          }},
        {reference: 'Acts 24:11-16', verses: function() {
          return word("act",24).slice(10,16);
          }},
        {reference: 'Hebrews 11:23-26', verses: function() {
          return word("heb",11).slice(22,26);
          }},
      ],
    },
  },
  'vaera': {
    week: 14,
    title: 'Va\'era',
    name: 'vaera',
    description: 'I appeared',
    scripture: {
      torah: [
        {reference: 'Exodus 6:2 - 9:35', verses: function() {
          return word("exd",6).slice(1,30)
          .concat(word("exd",7))
          .concat(word("exd",8))
          .concat(word("exd",9));
          }},
      ],
      prophets: [
        {reference: 'Ezekiel 28:25 - 29:21', verses: function() {
          return word("eze",28).slice(24,26)
          .concat(word("eze",29));
          }},

      ],
      britchadasha: [
        {reference: 'Romans 9:14-26', verses: function() {return word("rom",9).slice(13,26);}},
        {reference: '2 Corinthians 6:14 - 7:1', verses: function() {return word("cr2",6).slice(13,18)
          .concat(word("cr2",7).slice(0,1));
          }},
        {reference: 'Revelation 6:1-17', verses: function() {return word("rev",6);}},
        {reference: 'Revelation 8:1-13', verses: function() {return word("rev",8);}},
        {reference: 'Revelation 16:1-21', verses: function() {return word("rev",16);}},

      ],
    },
  },
  'bo': {
    week: 15,
    title: 'Bo',
    name: 'bo',
    description: 'Come',
    scripture: {
      torah: [
        {reference: 'Exodus 10:1 - 13:16', verses: function() {return word("exd",10)
          .concat(word("exd",11))
          .concat(word("exd",12))
          .concat(word("exd",13));
        }},
      ],
      prophets: [
        {reference: 'Jeremiah 46:13-28', verses: function() {return word("jer",46).slice(12,28);}},
        {reference: 'Ezekiel 20', verses: function() {return word("eze",20);}},
        {reference: 'Joel', verses: function() {return word("joe",1)
          .concat(word("joe",2))
          .concat(word("joe",3));
          }},
      ],
      britchadasha: [
        {reference: 'Matthew 26:17-27:66', verses: function() {return word("mat",26).slice(16,75)
          .concat(word("mat",27));
          }},
        {reference: 'Luke 2:22-24', verses: function() {return word("luk",2).slice(21,24);}},
        {reference: 'John 19:31-37', verses: function() {return word("jhn",19).slice(30,37);}},
        {reference: 'Acts 13:16-23', verses: function() {return word("act",13).slice(15,23);}},
        {reference: 'Revelation 8:6 - 9:12', verses: function() {return word("rev",8).slice(5,13)
          .concat(word("rev",9).slice(0,12));
          }},
        {reference: 'Revelation 16:1-21', verses: function() {return word("rev",16);}},

      ],
    },
  },
  'beshalach': {
    week: 16,
    title: 'Beshalach',
    name: 'beshalach',
    description: 'When he sent',
    scripture: {
      torah: [
        {reference: 'Exodus 13:17 - 17:16', verses: function() {return word("exd",13).slice(16,21)
          .concat(word("exd",14))
          .concat(word("exd",15))
          .concat(word("exd",16))
          .concat(word("exd",17).slice(0,16));
          }},
      ],
      prophets: [
        {reference: 'Judges 4:4 - 5:31', verses: function() {return word("jdg",4).slice(3,24)
          .concat(word("jdg",5));}},

      ],
      britchadasha: [
        {reference: 'John 6:25-35', verses: function() {return word("jhn",6).slice(24,35);}},
        {reference: 'John 19:31-37', verses: function() {return word("jhn",19).slice(30,37);}},
        {reference: 'Romans 6:1-23', verses: function() {return word("rom",6).slice(0,23);}},
        {reference: '1 Corinthians 10:1-13', verses: function() {return word("cr1",10).slice(0,13);}},
        {reference: '2 Corinthians 8:1-15', verses: function() {return word("cr2",8).slice(0,15);}},
        {reference: 'Revelation 15:1-4', verses: function() {return word("rev",15).slice(0,4);}},
      ],
    },
  },
  'yitro': {
    week: 17,
    title: 'Yitro',
    name: 'yitro',
    description: 'Jethro',
    scripture: {
      torah: [
        {reference: 'Exodus 18:1 - 20:26', verses: function() {return word("exd",18).slice(0,27)
          .concat(word("exd",19))
          .concat(word("exd",20));}},
      ],
      prophets: [
        {reference: 'Isaiah 6:1 - 7:6', verses: function() {return word("isa",6)
          .concat(word("isa",7).slice(0,6));}},
        {reference: 'Isaiah 9:2-7', verses: function() {return word("isa",9).slice(1,7);}},

      ],
      britchadasha: [
        {reference: 'Matthew 5:1-48', verses: function() {return word("mat",5).slice(0,48);}},
        {reference: 'Matthew 15:1-11', verses: function() {return word("mat",15).slice(0,11);}},
        {reference: 'Matthew 19:16-30', verses: function() {return word("mat",19).slice(15,30);}},
        {reference: 'Acts 6:1-7', verses: function() {return word("act",6).slice(0,7);}},
        {reference: 'Romans 2:10-29', verses: function() {return word("rom",2).slice(9,29);}},
        {reference: 'Romans 7:1 - 8:15', verses: function() {return word("rom",7).slice(0,25)
          .concat(word("rom",8).slice(0,15));}},
        {reference: 'Romans 13:8-10', verses: function() {return word("rom",13).slice(7,10);}},
        {reference: 'Ephesians 6:1-3', verses: function() {return word("eph",6).slice(0,3);}},
        {reference: '1 Timothy 3:1-14', verses: function() {return word("ti1",3).slice(0,14);}},
        {reference: '2 Timothy 2:2', verses: function() {return word("ti2",2).slice(1,2);}},
        {reference: 'Titus 1:5-9', verses: function() {return word("tts",1).slice(4,9);}},
        {reference: 'Hebrews 8:10', verses: function() {return word("heb",8).slice(9,10);}},
        {reference: 'Hebrews 12:18-29', verses: function() {return word("heb",12).slice(17,29);}},
        {reference: 'James 2:8-13', verses: function() {return word("jam",1).slice(7,13);}},
        {reference: '1 Peter 2:9-10', verses: function() {return word("pe1",2).slice(8,10);}},
        {reference: '1 John 2 - 5', verses: function() {return word("jo1",2)
          .concat(word("jo1",3))
          .concat(word("jo1",4))
          .concat(word("jo1",5));}},
        {reference: 'Revelation 12:10-17', verses: function() {return word("rev",12).slice(9,17);}},

      ],
    },
  },
  'mishpatin': {
    week: 18,
    title: 'Mishpatin',
    name: 'mishpatin',
    description: 'Judgments',
    scripture: {
      torah: [
        {reference: 'Exodus 21:1 - 24:18', verses: function() {
          return word("exd",21)
            .concat(word("exd",22))
            .concat(word("exd",23))
            .concat(word("exd",24));
        }},
      ],
      prophets: [
        {reference: '2 Kings 12:1-16', verses: function() {return word("ki2",12).slice(0,16);}},
        {reference: 'Isaiah 6:1-5', verses: function() {return word("isa",6).slice(0,5);}},
        {reference: 'Jeremiah 33:20-26', verses: function() {return word("jer",33).slice(19);}},
        {reference: 'Jeremiah 34:8-22', verses: function() {return word("jer",34).slice(7);}},
        {reference: 'Ezekiel 1:26-28', verses: function() {return word("eze",1).slice(25);}},
        {reference: 'Ezekiel 8:1-2', verses: function() {return word("eze",8).slice(0,2);}},
        {reference: 'Daniel 7:9-10', verses: function() {return word("dan",7).slice(8,10);}},
        {reference: 'Daniel 10:5-6', verses: function() {return word("dan",10).slice(4,6);}},
        {reference: 'Amos 2:9', verses: function() {return word("amo",2).slice(8,9);}},
        {reference: 'Zechariah 11:10-14', verses: function() {return word("zec",11).slice(9,14);}},
      ],
      britchadasha: [
        {reference: 'Matthew 5:38-42', verses: function() {return word("mat",5).slice(37,42);}},
        {reference: 'Matthew 12:1-21', verses: function() {return word("mat",12).slice(0,21);}},
        {reference: 'Matthew 17:1-11', verses: function() {return word("mat",17).slice(0,11);}},
        {reference: 'Matthew 26:14-16', verses: function() {return word("mat",26).slice(13,16);}},
        {reference: 'Mark 7:6-9', verses: function() {return word("mar",7).slice(5,9);}},
        {reference: 'Luke 9:51-56', verses: function() {return word("luk",9).slice(50,56);}},
        {reference: 'Luke 10:30-37', verses: function() {return word("luk",10).slice(29,37);}},
        {reference: 'Acts 23:1-11', verses: function() {return word("act",23).slice(0,11);}},
        {reference: 'Hebrews 9:15-22', verses: function() {return word("heb",9).slice(14,22);}},
        {reference: 'Hebrews 10:28-39', verses: function() {return word("heb",10).slice(27,39);}},
        {reference: 'James 1:27', verses: function() {return word("jam",1).slice(26,27);}},
        {reference: 'Revelation 1:13-15', verses: function() {return word("rev",1).slice(12,15);}},
        {reference: 'Revelation 21:1-14', verses: function() {return word("rev",21).slice(0,14);}},
      ],
    },
  },
  'terumah': {
    week: 19,
    title: 'Terumah',
    name: 'terumah',
    description: 'Heave Offering',
    scripture: {
      torah: [
        {reference: 'Exodus 25:1 - 27:19', verses: function() {
          return word("exd",25)
            .concat(word("exd",26))
            .concat(word("exd",27).slice(0,19));
        }},
      ],
      prophets: [
        {reference: '1 Kings 5:1 - 6:13', verses: function() {
          return word("ki1",5)
            .concat(word("exd",6).slice(0,13));
        }},
      ],
      britchadasha: [
        {reference: 'Matthew 5:33-37', verses: function() {return word("mat",5).slice(32,37)}},
        {reference: 'Hebrews 8:1-6', verses: function() {return word("heb",8).slice(0,6)}},
        {reference: 'Hebrews 9:23-24', verses: function() {return word("heb",9).slice(22,24)}},
        {reference: 'Hebrews 10:1', verses: function() {return word("heb",10).slice(0,1)}},
      ],
    },
  },
  'tetzave': {
    week: 20,
    title: 'Tetzave',
    name: 'tetzave',
    description: 'You shall command',
    scripture: {
      torah: [
        {reference: 'Exodus 27:20 - 30:10', verses: function() {
          return word("exd",27).slice(19)
            .concat(word("exd",28))
            .concat(word("exd",29))
            .concat(word("exd",30).slice(0,10));
        }},
      ],
      prophets: [
        {reference: '1 Samuel 15', verses: function() {return word("sa1",15)}},
        {reference: 'Isaiah 9:6-7', verses: function() {return word("isa",9).slice(5,7)}},
        {reference: 'Isaiah 60:19-22', verses: function() {return word("isa",60).slice(18,22)}},
        {reference: 'Ezekiel 28:11-19', verses: function() {return word("eze",28).slice(10,19)}},
        {reference: 'Ezekiel 43:10-27', verses: function() {return word("eze",43).slice(9,27)}},
        {reference: 'Ezekiel 44:9-18', verses: function() {return word("eze",44).slice(8,18)}},
      ],
      britchadasha: [
        {reference: 'Romans 12 - 13', verses: function() {return word("rom",12).concat(word("rom",13))}},
        {reference: 'Philippians 4:4-20', verses: function() {return word("phl",4).slice(3,20)}},
        {reference: 'Revelation 21:16-27', verses: function() {return word("rev",21).slice(15,27)}},
      ],
    },
  },
  'ki-tiza': {
    week: 21,
    title: 'Ki Tiza',
    name: 'ki-tiza',
    description: 'When you take',
    scripture: {
      torah: [
        {reference: 'Exodus 30:11 - 34:35', verses: function() {
          return word("exd",30).slice(10)
            .concat(word("exd",31))
            .concat(word("exd",32))
            .concat(word("exd",33))
            .concat(word("exd",34).slice(0,35));
        }},
      ],
      prophets: [
        {reference: '1 Kings 18:1-39', verses: function() {return word("ki1",18).slice(0,39)}},
      ],
      britchadasha: [
        {reference: 'Luke 11:14-20', verses: function() {return word("luk",11).slice(13,20)}},
        {reference: 'Acts 7:35 - 8:1', verses: function() {return word("act",7).slice(34).concat(word("act",8).slice(0,1))}},
        {reference: '1 Corinthians 10:1-13', verses: function() {return word("cr1",10).slice(0,13)}},
        {reference: '2 Corinthians 3:1-18', verses: function() {return word("cr2",3).slice(0,18)}},
        {reference: 'Hebrews 9:1-14', verses: function() {return word("heb",9).slice(0,14)}},
        {reference: 'Revelation 11', verses: function() {return word("rev",11)}},
      ],
    },
  },
  'vayakhel': {
    week: 22,
    title: 'Vayak\'hel',
    name: 'vayakhel',
    description: 'He gathered',
    scripture: {
      torah: [
        {reference: 'Exodus 35:1 - 38:20', verses: function() {
          return word("exd",35)
            .concat(word("exd",36))
            .concat(word("exd",37))
            .concat(word("exd",38).slice(0,20));
        }},
      ],
      prophets: [
        {reference: '1 Kings 7:13-50', verses: function() {return word("ki1",7).slice(12,50)}},
      ],
      britchadasha: [
        {reference: '2 Corinthians 9:1-15', verses: function() {return word("cr2",9).slice(0,15)}},
        {reference: 'Hebrews 9:1-14', verses: function() {return word("heb",9).slice(0,14)}},
        {reference: 'Revelation 11:1-13', verses: function() {return word("rev",11).slice(0,13)}},
      ],
    },
  },
  'pekudei': {
    week: 22,
    title: 'Pekudei',
    name: 'pekudei',
    description: 'Account of',
    scripture: {
      torah: [
        {reference: 'Exodus 38:21 - 40:38', verses: function() {
          return word("exd",38).slice(20)
            .concat(word("exd",39))
            .concat(word("exd",40).slice(0,38));
        }},
      ],
      prophets: [
        {reference: '1 Kings 7:51 - 8:21', verses: function() {return word("ki1",7).slice(50).concat(word("ki1",8).slice(0,21))}},
      ],
      britchadasha: [
        {reference: 'Revelation 15:5-8', verses: function() {return word("rev",15).slice(4,8)}},
      ],
    },
  },
  'vayikra': {
    week: 23,
    title: 'Vayikra',
    name: 'vayikra',
    description: 'He Called',
    scripture: {
      torah: [
        {reference: 'Leviticus 1:1 - 6:7', verses: function() {
          return word("lev",1)
            .concat(word("lev",2))
            .concat(word("lev",3))
            .concat(word("lev",4))
            .concat(word("lev",5))
            .concat(word("lev",6).slice(0,7));
        }},
      ],
      prophets: [
        {reference: 'Isaiah 43:21 - 44:23', verses: function() {return word("isa",43).slice(20).concat(word("isa",44).slice(0,23))}},
        {reference: 'Isaiah 66:1-24', verses: function() {return word("isa",66);}},
      ],
      britchadasha: [
        {reference: 'Romans 8:1-13', verses: function() {return word("rom",8).slice(0,13)}},
        {reference: 'Hebrews 10:1-39', verses: function() {return word("heb",10).slice(0,39)}},
        {reference: 'Hebrews 13:10-16', verses: function() {return word("heb",13).slice(9,16)}},
      ],
    },
  },
  'tzav': {
    week: 24,
    title: 'Tzav',
    name: 'tzav',
    description: 'Command',
    scripture: {
      torah: [
        {reference: 'Leviticus 6:8 - 8:36', verses: function() {
          return word("lev",6).slice(8,30)
            .concat(word("lev",7))
            .concat(word("lev",8).slice(0,36));
        }},
      ],
      prophets: [
        {reference: 'Jeremiah 7:21 - 8:3', verses: function() {return word("jer",7).slice(20).concat(word("jer",8).slice(0,3));}},
        {reference: 'Jeremiah 9:23-24', verses: function() {return word("jer",9).slice(22,24);}},
      ],
      britchadasha: [
        {reference: 'Mark 12:28-34', verses: function() {return word("mar",12).slice(27,34);}},
        {reference: 'Romans 8:1-13', verses: function() {return word("rom",8).slice(0,13);}},
        {reference: 'Romans 12:1-2', verses: function() {return word("rom",12).slice(0,2);}},
        {reference: '1 Corinthians 3:9-23', verses: function() {return word("cr1",3).slice(8,23);}},
        {reference: '1 Corinthians 10:14-23', verses: function() {return word("cr1",10).slice(13,23);}},
        {reference: '1 Timothy 2:1-10', verses: function() {return word("ti1",1).slice(0,10);}},
        {reference: 'Hebrews 7:23 - 8:6', verses: function() {return word("heb",7).slice(22,28)
        .concat(word("heb",8).slice(0,6));}},
        {reference: 'Hebrews 13:10-16', verses: function() {return word("heb",13).slice(9,16);}},
        {reference: 'Revelation 6:9-11', verses: function() {return word("rev",6).slice(8,11);}},
        {reference: 'Revelation 8:1 - 9:21', verses: function() {return word("rev",8)
        .concat(word("rev",9));}},
        {reference: 'Revelation 14:6-7', verses: function() {return word("rev",14).slice(5,7)}},
        {reference: 'Revelation 16:15', verses: function() {return word("rev",16).slice(14,15)}},
        {reference: 'Revelation 19:6-8', verses: function() {return word("rev",19).slice(5,8)}},
      ],
    },
  },
  'chol-hamoed-pesach': {
    week: 25,
    title: 'Chol HaMo\'ed Pesach',
    name: 'chol-hamoed-pesach',
    description: 'Passover/Unlevened Bread',
    scripture: {
      torah: [
        {reference: 'Exodus 12:21-51', verses: function() {return word("exd",12).slice(20,51);}},
        {reference: 'Exodus 13:17 - 15:26', verses: function() {
          return word("exd",13)
            .concat(word("exd",14))
            .concat(word("exd",15).slice(0,26));}},
      ],
      prophets: [
        {reference: 'Joshua 5:2 - 6:1', verses: function() {return word("jos",5).slice(1)
          .concat(word("jos",6).slice(0,1));}},
        {reference: '2 Samuel 22:1-51', verses: function() {return word("sa2",22).slice(0,51);}},
      ],
      britchadasha: [
        {reference: '', verses: function() {}},
      ],
    },
  },
  'shmini': {
    week: 26,
    title: 'Sh\'mini',
    name: 'shmini',
    description: 'Eighth',
    scripture: {
      torah: [
        {reference: 'Leviticus 9:1 - 11:47', verses: function() {
          return word("lev",9)
            .concat(word("lev",10))
            .concat(word("lev",11));
        }},
      ],
      prophets: [
        {reference: '2 Samuel 6:1 - 7:17', verses: function() {return word("sa2",6).concat(word("sa2",7).slice(0,17))}},
        {reference: 'Isaiah 65:1-8', verses: function() {return word("isa",65).slice(0,8)}},
        {reference: 'Isaiah 66:15-18', verses: function() {return word("isa",66).slice(14,18)}}, 
        {reference: 'Jeremiah 7:21-8:3', verses: function() {return word("jer",7).slice(20).concat(word("jer",8).slice(0,3))}},
        {reference: 'Jeremiah 9:22-24', verses: function() {return word("jer",9).slice(21,24)}},
      ],
      britchadasha: [
        {reference: 'Mark 7:1-23', verses: function() {return word("mar",7).slice(0,23)}},
        {reference: 'Acts 5:1-11', verses: function() {return word("act",5).slice(0,11)}},
        {reference: 'Acts 10:1-35', verses: function() {return word("act",10).slice(0,35)}},
        {reference: '2 Corinthians 6:14 - 7:1', verses: function() {return word("cr2",6).slice(13).concat(word("cr2",7).slice(0,1))}},
        {reference: 'Galatians 2:11-16', verses: function() {return word("gal",2).slice(10,16)}},
        {reference: '1 Peter 1:14-16', verses: function() {return word("pe1",1).slice(13,16)}},
      ],
    },
  },
  'tazria': {
    week: 27,
    title: 'Tazria',
    name: 'tazria',
    description: 'She will conceieve',
    scripture: {
      torah: [
        {reference: 'Leviticus 12:1 - 13:59', verses: function() {
          return word("lev",12)
            .concat(word("lev",13));
        }},
      ],
      prophets: [
        {reference: '2 Kings 4:42 - 5:19', verses: function() {return word("ki2",4).slice(41).concat(word("ki2",5).slice(0,19))}},
      ],
      britchadasha: [
        {reference: 'Matthew 8:1-4', verses: function() {return word("mat",8).slice(0,4)}},
        {reference: 'Matthew 11:2-6', verses: function() {return word("mat",11).slice(1,6)}},
        {reference: 'Mark 1:40-45', verses: function() {return word("mar",1).slice(39,45)}},
        {reference: 'Mark 5:1-43', verses: function() {return word("mar",5).slice(0,43)}},
        {reference: 'Luke 2:22-24', verses: function() {return word("luk",2).slice(21,24)}},
        {reference: 'Luke 5:12-16', verses: function() {return word("luk",5).slice(11,16)}},
        {reference: 'Luke 7:18:23', verses: function() {return word("luk",7).slice(17,23)}},
        {reference: 'Romans 6', verses: function() {return word("rom",6)}},
      ],
    },
  },
  'metzora': {
    week: 27,
    title: 'Metzora',
    name: 'metzora',
    description: 'Leper',
    scripture: {
      torah: [
        {reference: 'Leviticus 14:1 - 15:33', verses: function() {
          return word("lev",14)
            .concat(word("lev",15));
        }},
      ],
      prophets: [
        {reference: '2 Kings 7:3-20', verses: function() {return word("ki2",7).slice(2,20)}},
      ],
      britchadasha: [
        {reference: 'Matthew 9:20-26', verses: function() {return word("mat",9).slice(19,26)}},
        {reference: 'Mark 5:24-34', verses: function() {return word("mar",5).slice(23,34)}},
        {reference: 'Luke 8:42-48', verses: function() {return word("luk",8).slice(41,48)}},
        {reference: 'Hebrews 13:4', verses: function() {return word("heb",13).slice(3,4)}},
      ],
    },
  },
  'acharei-mot': {
    week: 28,
    title: 'Acharei Mot',
    name: 'acharei-mot',
    description: 'After Death',
    scripture: {
      torah: [
        {reference: 'Leviticus 16:1 - 18:30', verses: function() {
          return word("lev",16)
            .concat(word("lev",17))
            .concat(word("lev",18));
        }},
      ],
      prophets: [
        {reference: 'Ezekiel 22:1-19', verses: function() {return word("eze",22).slice(0,19);}},
      ],
      britchadasha: [
        {reference: 'John 7:1 - 10:21', verses: function() {return word("jhn",7).concat(word("jhn",8)).concat(word("jhn",9)).concat(word("jhn",10)).slice(0,21);}},
        {reference: 'Romans 3:19-28', verses: function() {return word("rom",3).slice(18,28);}},
        {reference: 'Romans 9:30 - 10:13', verses: function() {return word("rom",9).slice(29).concat(word("rom",10)).slice(0,13);}},
        {reference: '1 Corinthians 5:1-13', verses: function() {return word("cr1",5).slice(0,13);}},
        {reference: '2 Corinthians 2:1-17', verses: function() {return word("cr2",2).slice(0,17);}},
        {reference: 'Galatians 3:10-14', verses: function() {return word("gal",3).slice(9,14);}},
        {reference: 'Hebrews 7:23 - 10:25', verses: function() {return word("heb",7).slice(22).concat(word("heb",8)).concat(word("heb",9)).concat(word("heb",10)).slice(0,25);}},
      ],
    },
  },
  'kedoshim': {
    week: 28,
    title: 'Kedoshim',
    name: 'kedoshim',
    description: 'Holy',
    scripture: {
      torah: [
        {reference: 'Leviticus 19:1 - 20:27', verses: function() {
          return word("lev",19)
            .concat(word("lev",20).slice(0,27));}},
      ],
      prophets: [
        {reference: 'Isaiah 66:1-24', verses: function() {return word("isa",66).slice(0,24);}},
        {reference: 'Ezekiel 20:1-20', verses: function() {return word("eze",20).slice(0,20);}},
        {reference: 'Ezekiel 22:1-16', verses: function() {return word("eze",22).slice(0,16);}},
        {reference: 'Amos 9:7-15', verses: function() {return word("amo",9).slice(6,15);}},
      ],
      britchadasha: [
        {reference: 'Matthew 5:33-37', verses: function() {return word("mat",5).slice(32,37);}},
        {reference: 'Matthew 5:43-48', verses: function() {return word("mat",5).slice(42,48);}},
        {reference: 'Romans 1:18-32', verses: function() {return word("rom",1).slice(17,32);}},
        {reference: 'Romans 13:8-10', verses: function() {return word("rom",13).slice(7,10);}},
        {reference: 'Galatians 5:13-26', verses: function() {return word("gal",5).slice(12,26);}},
      ],
    },
  },
  'emor': {
    week: 29,
    title: 'Emor',
    name: 'emor',
    description: 'Say',
    scripture: {
      torah: [
        {reference: 'Leviticus 21:1 - 24:23', verses: function() {
          return word("lev",21)
            .concat(word("lev",22))
            .concat(word("lev",23))
            .concat(word("lev",24));
        }},
      ],
      prophets: [
        {reference: 'Ezekiel 44:15-31', verses: function() {return word("eze",44).slice(14,31);}},
        {reference: 'Zechariah 14:16-21', verses: function() {return word("zec",14).slice(15,21);}},
      ],
      britchadasha: [
        {reference: 'Matthew 25:1-13', verses: function() {return word("mat",25).slice(0,13);}},
        {reference: 'Mark 2:20 - 3:5', verses: function() {return word("mar",2).slice(19).concat(word("mar",3).slice(0,5));}},
        {reference: 'Luke 12:1-59', verses: function() {return word("luk",12).slice(0,59);}},
        {reference: 'Acts 20:6-16', verses: function() {return word("act",20).slice(5,16);}},
        {reference: 'Romans 11:11-36', verses: function() {return word("rom",11).slice(10,36);}},
        {reference: '1 Corinthians 5:1-8', verses: function() {return word("cr1",5).slice(0,8);}},
        {reference: 'Galatians 3:23-29', verses: function() {return word("gal",3).slice(22,29);}},
        {reference: 'Ephesians 2:1-22', verses: function() {return word("eph",2).slice(0,22);}},
        {reference: 'Ephesians 5:25-27', verses: function() {return word("eph",5).slice(24,27);}},
        {reference: '1 Thessalonians 5:1-11', verses: function() {return word("th1",5).slice(0,11);}},
        {reference: '1 Peter 2:1-10', verses: function() {return word("pe1",2).slice(0,10);}},
        {reference: '2 Peter 3:13-18', verses: function() {return word("pe2",3).slice(12,18);}},
        {reference: 'Revelation 21:1-27', verses: function() {return word("rev",21).slice(0,27);}},
      ],
    },
  },
  'behar': {
    week: 30,
    title: 'Behar',
    name: 'behar',
    description: 'On the mountian',
    scripture: {
      torah: [
        {reference: 'Leviticus 25­:1 - 26:2', verses: function() {return word("lev",25).concat(word("lev",26).slice(0,2)) ;}},
      ],
      prophets: [
        {reference: 'Jeremiah 32:6-­27', verses: function() {return word("jer",32).slice(5,27);}},
      ],
      britchadasha: [
        {reference: 'Luke 4:16­-21', verses: function() {return word("luk",4).slice(15,21);}},
        {reference: '1 Corinthians 7:21­-24', verses: function() {return word("cr1",7).slice(20,24);}},
        {reference: 'Galatians 6:7­-10', verses: function() {return word("gal",6).slice(6,10);}},
        {reference: 'James 5:1-6', verses: function() {return word("jam",5).slice(4,6);}},
      ],
    },
  },
  'bechukotai': {
    week: 31,
    title: 'Bechukotai',
    name: 'bechukotai',
    description: 'In my statutes',
    scripture: {
      torah: [
        {reference: 'Leviticus 26 - 27', verses: function() {return word("lev",26)
        .concat(word("lev",27));}},
      ],
      prophets: [
        {reference: 'Jeremiah 16:17 - 17:29', verses: function() {return word("jer",16).slice(16)
        .concat(word("jer",17).slice(0,29));}},
        {reference: 'Jeremiah 23:1-40', verses: function() {return word("jer",23).slice(0,40);}},
        {reference: 'Jeremiah 30:1 - 31:40', verses: function() {return word("jer",30)
        .concat(word("jer",31).slice(0,40));}},
        {reference: 'Ezekiel 37', verses: function() {return word("eze",37);}},
        {reference: 'Hosea 2', verses: function() {return word("hos",2);}},
        {reference: 'Zechariah 11:12-17', verses: function() {return word("zec",11).slice(11,17);}},

      ],
      britchadasha: [
        {reference: 'Matthew 5:1-48', verses: function() {return word("mat",5).slice(0,48);}},
        {reference: 'Matthew 7:1-29', verses: function() {return word("mat",7).slice(0,29);}},
        {reference: 'Matthew 21:33-46', verses: function() {return word("mat",21).slice(32,46);}},
        {reference: 'Matthew 23:1 - 24:2', verses: function() {return word("mat",23)
        .concat(word("mat",24).slice(0,2));}},
        {reference: 'Matthew 27:1-10', verses: function() {return word("mat",27).slice(0,10);}},
        {reference: 'Luke 15', verses: function() {return word("luk",15);}},
        {reference: 'John 8:1-11', verses: function() {return word("jhn",8).slice(0,11);}},
        {reference: 'John 14:15-21', verses: function() {return word("jhn",14).slice(14,21);}},
        {reference: 'John 15:10-12', verses: function() {return word("jhn",15).slice(9,12);}},
        {reference: '2 Corinthians 6:14-18', verses: function() {return word("cr2",6).slice(13,18);}},
      ],
    },
  },
  'bamidbar': {
    week: 32,
    title: 'Bamidbar',
    name: 'bamidbar',
    description: 'In the wilderness',
    scripture: {
      torah: [
        {reference: 'Numbers 1 - 4', verses: function() {
          return word("num",1)
            .concat(word("num",2))
            .concat(word("num",3))
            .concat(word("num",4)) || [];
        }},
      ],
      prophets: [
        {reference: 'Hosea 1:10 - 2:23', verses: function() {return word("hos",1).slice(9).concat(word("hos",2).slice(0,23))}},
        //Ezekiel 34:22-27
        //Ezekiel 37:24-28
        //exodus 22:16
    //Deuteronomy 20:7
    //Deuteronomy 23
    //Deuteronomy 28:30
    //2 Samuel, 3:14
      ],
      britchadasha: [
        {reference: 'Luke 16:1 - 17:10', verses: function() {return word("luk",16).concat(word("luk",17).slice(0,10))}},
        {reference: '1 Corinthians 12:12-31', verses: function() {return word("cr1",12).slice(11,31)}},
      ],
    },
  },
  'nasso': {
    week: 33,
    title: 'Nasso',
    name: 'nasso',
    description: 'Take up',
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
    scripture: {
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
