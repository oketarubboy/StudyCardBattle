"use strict";

const CARDS = [
  {
    "id": "card_001",
    "cardNo": "1",
    "no": "1",
    "encyclopediaNo": "1",
    "name": "はなのみち",
    "rarity": 1,
    "up": 2,
    "right": 1,
    "down": 3,
    "left": 7,
    "power": 13,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 1,
    "collections": []
  },
  {
    "id": "card_002",
    "cardNo": "2",
    "no": "2",
    "encyclopediaNo": "2",
    "name": "おおきなかぶ",
    "rarity": 1,
    "up": 5,
    "right": 4,
    "down": 1,
    "left": 4,
    "power": 14,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 2,
    "collections": [
      "世界の物語"
    ]
  },
  {
    "id": "card_003",
    "cardNo": "3",
    "no": "3",
    "encyclopediaNo": "3",
    "name": "おむすびころりん",
    "rarity": 1,
    "up": 3,
    "right": 4,
    "down": 3,
    "left": 3,
    "power": 13,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 3,
    "collections": [
      "日本の昔話"
    ]
  },
  {
    "id": "card_004",
    "cardNo": "4",
    "no": "4",
    "encyclopediaNo": "4",
    "name": "くじらぐも",
    "rarity": 1,
    "up": 2,
    "right": 2,
    "down": 4,
    "left": 6,
    "power": 14,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 4,
    "collections": []
  },
  {
    "id": "card_005",
    "cardNo": "5",
    "no": "5",
    "encyclopediaNo": "5",
    "name": "サラダでげんき",
    "rarity": 1,
    "up": 4,
    "right": 7,
    "down": 1,
    "left": 1,
    "power": 13,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 5,
    "collections": []
  },
  {
    "id": "card_006",
    "cardNo": "6",
    "no": "6",
    "encyclopediaNo": "6",
    "name": "たぬきの糸車",
    "rarity": 2,
    "up": 7,
    "right": 3,
    "down": 4,
    "left": 5,
    "power": 19,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 6,
    "collections": []
  },
  {
    "id": "card_007",
    "cardNo": "7",
    "no": "7",
    "encyclopediaNo": "7",
    "name": "ずうっと、ずっと、大すきだよ",
    "rarity": 2,
    "up": 5,
    "right": 4,
    "down": 6,
    "left": 5,
    "power": 20,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 7,
    "collections": []
  },
  {
    "id": "card_008",
    "cardNo": "8",
    "no": "8",
    "encyclopediaNo": "8",
    "name": "スイミー",
    "rarity": 2,
    "up": 3,
    "right": 6,
    "down": 5,
    "left": 4,
    "power": 18,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 8,
    "collections": [
      "動物たちの物語"
    ]
  },
  {
    "id": "card_009",
    "cardNo": "9",
    "no": "9",
    "encyclopediaNo": "9",
    "name": "お手紙",
    "rarity": 2,
    "up": 4,
    "right": 3,
    "down": 6,
    "left": 6,
    "power": 19,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 9,
    "collections": []
  },
  {
    "id": "card_010",
    "cardNo": "10",
    "no": "10",
    "encyclopediaNo": "10",
    "name": "スーホの白い馬",
    "rarity": 2,
    "up": 7,
    "right": 2,
    "down": 7,
    "left": 2,
    "power": 18,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 10,
    "collections": [
      "世界の物語"
    ]
  },
  {
    "id": "card_011",
    "cardNo": "11",
    "no": "11",
    "encyclopediaNo": "11",
    "name": "ふきのとう",
    "rarity": 2,
    "up": 3,
    "right": 7,
    "down": 1,
    "left": 7,
    "power": 18,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 11,
    "collections": []
  },
  {
    "id": "card_012",
    "cardNo": "12",
    "no": "12",
    "encyclopediaNo": "12",
    "name": "名前を見てちょうだい",
    "rarity": 2,
    "up": 5,
    "right": 7,
    "down": 4,
    "left": 4,
    "power": 20,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 12,
    "collections": [
      "あまんきみこ"
    ]
  },
  {
    "id": "card_013",
    "cardNo": "13",
    "no": "13",
    "encyclopediaNo": "13",
    "name": "ニャーゴ",
    "rarity": 2,
    "up": 4,
    "right": 4,
    "down": 5,
    "left": 5,
    "power": 18,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 13,
    "collections": []
  },
  {
    "id": "card_014",
    "cardNo": "14",
    "no": "14",
    "encyclopediaNo": "14",
    "name": "かさこじぞう",
    "rarity": 2,
    "up": 7,
    "right": 4,
    "down": 6,
    "left": 2,
    "power": 19,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 14,
    "collections": [
      "日本の昔話"
    ]
  },
  {
    "id": "card_015",
    "cardNo": "15",
    "no": "15",
    "encyclopediaNo": "15",
    "name": "きつねのおきゃくさま",
    "rarity": 2,
    "up": 3,
    "right": 5,
    "down": 5,
    "left": 5,
    "power": 18,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 15,
    "collections": [
      "あまんきみこ"
    ]
  },
  {
    "id": "card_016",
    "cardNo": "16",
    "no": "16",
    "encyclopediaNo": "16",
    "name": "ちいちゃんのかげおくり",
    "rarity": 3,
    "up": 1,
    "right": 5,
    "down": 8,
    "left": 7,
    "power": 21,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 16,
    "collections": [
      "あまんきみこ",
      "戦争と平和"
    ]
  },
  {
    "id": "card_017",
    "cardNo": "17",
    "no": "17",
    "encyclopediaNo": "17",
    "name": "モチモチの木",
    "rarity": 3,
    "up": 4,
    "right": 6,
    "down": 4,
    "left": 7,
    "power": 21,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 17,
    "collections": [
      "斎藤隆介"
    ]
  },
  {
    "id": "card_018",
    "cardNo": "18",
    "no": "18",
    "encyclopediaNo": "18",
    "name": "三年とうげ",
    "rarity": 3,
    "up": 7,
    "right": 5,
    "down": 8,
    "left": 3,
    "power": 23,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 18,
    "collections": [
      "世界の物語"
    ]
  },
  {
    "id": "card_019",
    "cardNo": "19",
    "no": "19",
    "encyclopediaNo": "19",
    "name": "きつつきの商売",
    "rarity": 3,
    "up": 8,
    "right": 3,
    "down": 2,
    "left": 7,
    "power": 20,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 19,
    "collections": []
  },
  {
    "id": "card_020",
    "cardNo": "20",
    "no": "20",
    "encyclopediaNo": "20",
    "name": "まいごのかぎ",
    "rarity": 3,
    "up": 7,
    "right": 8,
    "down": 4,
    "left": 4,
    "power": 23,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 20,
    "collections": []
  },
  {
    "id": "card_021",
    "cardNo": "21",
    "no": "21",
    "encyclopediaNo": "21",
    "name": "サーカスのライオン",
    "rarity": 3,
    "up": 8,
    "right": 1,
    "down": 4,
    "left": 7,
    "power": 20,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 21,
    "collections": []
  },
  {
    "id": "card_022",
    "cardNo": "22",
    "no": "22",
    "encyclopediaNo": "22",
    "name": "わすれられないおくりもの",
    "rarity": 3,
    "up": 4,
    "right": 7,
    "down": 8,
    "left": 4,
    "power": 23,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 22,
    "collections": []
  },
  {
    "id": "card_023",
    "cardNo": "23",
    "no": "23",
    "encyclopediaNo": "23",
    "name": "ごんぎつね",
    "rarity": 3,
    "up": 6,
    "right": 6,
    "down": 4,
    "left": 8,
    "power": 24,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 23,
    "collections": [
      "動物たちの物語"
    ]
  },
  {
    "id": "card_024",
    "cardNo": "24",
    "no": "24",
    "encyclopediaNo": "24",
    "name": "白いぼうし",
    "rarity": 3,
    "up": 2,
    "right": 3,
    "down": 8,
    "left": 7,
    "power": 20,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 24,
    "collections": [
      "あまんきみこ"
    ]
  },
  {
    "id": "card_025",
    "cardNo": "25",
    "no": "25",
    "encyclopediaNo": "25",
    "name": "一つの花",
    "rarity": 3,
    "up": 3,
    "right": 7,
    "down": 8,
    "left": 2,
    "power": 20,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 25,
    "collections": [
      "今西祐行",
      "戦争と平和"
    ]
  },
  {
    "id": "card_026",
    "cardNo": "26",
    "no": "26",
    "encyclopediaNo": "26",
    "name": "初雪のふる日",
    "rarity": 3,
    "up": 2,
    "right": 7,
    "down": 6,
    "left": 7,
    "power": 22,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 26,
    "collections": [
      "安房直子"
    ]
  },
  {
    "id": "card_027",
    "cardNo": "27",
    "no": "27",
    "encyclopediaNo": "27",
    "name": "プラタナスの木",
    "rarity": 3,
    "up": 3,
    "right": 6,
    "down": 6,
    "left": 6,
    "power": 21,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 27,
    "collections": []
  },
  {
    "id": "card_028",
    "cardNo": "28",
    "no": "28",
    "encyclopediaNo": "28",
    "name": "世界一美しいぼくの村",
    "rarity": 3,
    "up": 7,
    "right": 7,
    "down": 3,
    "left": 7,
    "power": 24,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 28,
    "collections": []
  },
  {
    "id": "card_029",
    "cardNo": "29",
    "no": "29",
    "encyclopediaNo": "29",
    "name": "花さき山",
    "rarity": 3,
    "up": 7,
    "right": 6,
    "down": 7,
    "left": 1,
    "power": 21,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 29,
    "collections": [
      "斎藤隆介"
    ]
  },
  {
    "id": "card_030",
    "cardNo": "30",
    "no": "30",
    "encyclopediaNo": "30",
    "name": "アップとルーズで伝える",
    "rarity": 3,
    "up": 6,
    "right": 7,
    "down": 7,
    "left": 4,
    "power": 24,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 30,
    "collections": []
  },
  {
    "id": "card_031",
    "cardNo": "31",
    "no": "31",
    "encyclopediaNo": "31",
    "name": "大造じいさんとガン",
    "rarity": 3,
    "up": 1,
    "right": 8,
    "down": 3,
    "left": 8,
    "power": 20,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 31,
    "collections": [
      "動物たちの物語"
    ]
  },
  {
    "id": "card_032",
    "cardNo": "32",
    "no": "32",
    "encyclopediaNo": "32",
    "name": "注文の多い料理店",
    "rarity": 3,
    "up": 8,
    "right": 6,
    "down": 7,
    "left": 1,
    "power": 22,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 32,
    "collections": [
      "宮沢賢治"
    ]
  },
  {
    "id": "card_033",
    "cardNo": "33",
    "no": "33",
    "encyclopediaNo": "33",
    "name": "なまえつけてよ",
    "rarity": 3,
    "up": 5,
    "right": 8,
    "down": 5,
    "left": 5,
    "power": 23,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 33,
    "collections": []
  },
  {
    "id": "card_034",
    "cardNo": "34",
    "no": "34",
    "encyclopediaNo": "34",
    "name": "たずねびと",
    "rarity": 3,
    "up": 2,
    "right": 8,
    "down": 3,
    "left": 8,
    "power": 21,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 34,
    "collections": [
      "戦争と平和"
    ]
  },
  {
    "id": "card_035",
    "cardNo": "35",
    "no": "35",
    "encyclopediaNo": "35",
    "name": "わらぐつの中の神様",
    "rarity": 3,
    "up": 6,
    "right": 8,
    "down": 7,
    "left": 1,
    "power": 22,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 35,
    "collections": []
  },
  {
    "id": "card_036",
    "cardNo": "36",
    "no": "36",
    "encyclopediaNo": "36",
    "name": "固有種が教えてくれること",
    "rarity": 4,
    "up": 7,
    "right": 1,
    "down": 9,
    "left": 8,
    "power": 25,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 36,
    "collections": []
  },
  {
    "id": "card_037",
    "cardNo": "37",
    "no": "37",
    "encyclopediaNo": "37",
    "name": "カレーライス",
    "rarity": 4,
    "up": 5,
    "right": 7,
    "down": 8,
    "left": 6,
    "power": 26,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 37,
    "collections": []
  },
  {
    "id": "card_038",
    "cardNo": "38",
    "no": "38",
    "encyclopediaNo": "38",
    "name": "やまなし",
    "rarity": 4,
    "up": 5,
    "right": 9,
    "down": 5,
    "left": 8,
    "power": 27,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 38,
    "collections": [
      "宮沢賢治"
    ]
  },
  {
    "id": "card_039",
    "cardNo": "39",
    "no": "39",
    "encyclopediaNo": "39",
    "name": "海の命",
    "rarity": 4,
    "up": 8,
    "right": 6,
    "down": 8,
    "left": 6,
    "power": 28,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 39,
    "collections": [
      "動物たちの物語"
    ]
  },
  {
    "id": "card_040",
    "cardNo": "40",
    "no": "40",
    "encyclopediaNo": "40",
    "name": "帰り道",
    "rarity": 4,
    "up": 6,
    "right": 7,
    "down": 7,
    "left": 8,
    "power": 28,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 40,
    "collections": []
  },
  {
    "id": "card_041",
    "cardNo": "41",
    "no": "41",
    "encyclopediaNo": "41",
    "name": "風切るつばさ",
    "rarity": 4,
    "up": 5,
    "right": 9,
    "down": 1,
    "left": 9,
    "power": 24,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 41,
    "collections": []
  },
  {
    "id": "card_042",
    "cardNo": "42",
    "no": "42",
    "encyclopediaNo": "42",
    "name": "ヒロシマのうた",
    "rarity": 4,
    "up": 9,
    "right": 7,
    "down": 7,
    "left": 2,
    "power": 25,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 42,
    "collections": [
      "今西祐行",
      "戦争と平和"
    ]
  },
  {
    "id": "card_043",
    "cardNo": "43",
    "no": "43",
    "encyclopediaNo": "43",
    "name": "柿山伏",
    "rarity": 4,
    "up": 9,
    "right": 8,
    "down": 3,
    "left": 5,
    "power": 25,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 43,
    "collections": []
  },
  {
    "id": "card_044",
    "cardNo": "44",
    "no": "44",
    "encyclopediaNo": "44",
    "name": "鳥獣戯画を読む",
    "rarity": 4,
    "up": 6,
    "right": 8,
    "down": 8,
    "left": 6,
    "power": 28,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 44,
    "collections": []
  },
  {
    "id": "card_045",
    "cardNo": "45",
    "no": "45",
    "encyclopediaNo": "45",
    "name": "きつねの窓",
    "rarity": 4,
    "up": 6,
    "right": 8,
    "down": 6,
    "left": 8,
    "power": 28,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 45,
    "collections": [
      "安房直子"
    ]
  },
  {
    "id": "card_046",
    "cardNo": "46",
    "no": "46",
    "encyclopediaNo": "46",
    "name": "こころ",
    "rarity": 5,
    "up": 4,
    "right": 8,
    "down": 10,
    "left": 6,
    "power": 28,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 46,
    "collections": [
      "日本文学への入口"
    ]
  },
  {
    "id": "card_047",
    "cardNo": "47",
    "no": "47",
    "encyclopediaNo": "47",
    "name": "走れメロス",
    "rarity": 5,
    "up": 5,
    "right": 9,
    "down": 6,
    "left": 9,
    "power": 29,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 47,
    "collections": [
      "日本文学への入口"
    ]
  },
  {
    "id": "card_048",
    "cardNo": "48",
    "no": "48",
    "encyclopediaNo": "48",
    "name": "羅生門",
    "rarity": 5,
    "up": 5,
    "right": 5,
    "down": 10,
    "left": 9,
    "power": 29,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 48,
    "collections": [
      "日本文学への入口"
    ]
  },
  {
    "id": "card_049",
    "cardNo": "49",
    "no": "49",
    "encyclopediaNo": "49",
    "name": "山月記",
    "rarity": 5,
    "up": 1,
    "right": 10,
    "down": 10,
    "left": 6,
    "power": 27,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 49,
    "collections": [
      "日本文学への入口"
    ]
  },
  {
    "id": "card_050",
    "cardNo": "50",
    "no": "50",
    "encyclopediaNo": "50",
    "name": "銀河鉄道の夜",
    "rarity": 5,
    "up": 9,
    "right": 4,
    "down": 10,
    "left": 5,
    "power": 28,
    "type": "こくご",
    "subject": "こくご",
    "subjectNo": 50,
    "collections": [
      "宮沢賢治",
      "日本文学への入口"
    ]
  },
  {
    "id": "card_051",
    "cardNo": "51",
    "no": "51",
    "encyclopediaNo": "51",
    "name": "たし算",
    "rarity": 1,
    "up": 3,
    "right": 5,
    "down": 3,
    "left": 3,
    "power": 14,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 1,
    "collections": [
      "四則演算"
    ]
  },
  {
    "id": "card_052",
    "cardNo": "52",
    "no": "52",
    "encyclopediaNo": "52",
    "name": "ひき算",
    "rarity": 1,
    "up": 5,
    "right": 1,
    "down": 6,
    "left": 1,
    "power": 13,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 2,
    "collections": [
      "四則演算"
    ]
  },
  {
    "id": "card_053",
    "cardNo": "53",
    "no": "53",
    "encyclopediaNo": "53",
    "name": "10のまとまり",
    "rarity": 1,
    "up": 1,
    "right": 5,
    "down": 1,
    "left": 6,
    "power": 13,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 3,
    "collections": []
  },
  {
    "id": "card_054",
    "cardNo": "54",
    "no": "54",
    "encyclopediaNo": "54",
    "name": "とけい",
    "rarity": 1,
    "up": 3,
    "right": 2,
    "down": 1,
    "left": 6,
    "power": 12,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 4,
    "collections": []
  },
  {
    "id": "card_055",
    "cardNo": "55",
    "no": "55",
    "encyclopediaNo": "55",
    "name": "かたちあそび",
    "rarity": 1,
    "up": 2,
    "right": 2,
    "down": 7,
    "left": 2,
    "power": 13,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 5,
    "collections": []
  },
  {
    "id": "card_056",
    "cardNo": "56",
    "no": "56",
    "encyclopediaNo": "56",
    "name": "かけ算",
    "rarity": 2,
    "up": 5,
    "right": 7,
    "down": 4,
    "left": 3,
    "power": 19,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 6,
    "collections": [
      "四則演算"
    ]
  },
  {
    "id": "card_057",
    "cardNo": "57",
    "no": "57",
    "encyclopediaNo": "57",
    "name": "九九",
    "rarity": 2,
    "up": 7,
    "right": 6,
    "down": 2,
    "left": 4,
    "power": 19,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 7,
    "collections": []
  },
  {
    "id": "card_058",
    "cardNo": "58",
    "no": "58",
    "encyclopediaNo": "58",
    "name": "たし算のひっ算",
    "rarity": 2,
    "up": 2,
    "right": 4,
    "down": 6,
    "left": 6,
    "power": 18,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 8,
    "collections": [
      "ひっ算マスター"
    ]
  },
  {
    "id": "card_059",
    "cardNo": "59",
    "no": "59",
    "encyclopediaNo": "59",
    "name": "ひき算のひっ算",
    "rarity": 2,
    "up": 6,
    "right": 6,
    "down": 2,
    "left": 6,
    "power": 20,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 9,
    "collections": [
      "ひっ算マスター"
    ]
  },
  {
    "id": "card_060",
    "cardNo": "60",
    "no": "60",
    "encyclopediaNo": "60",
    "name": "1000までの数",
    "rarity": 2,
    "up": 1,
    "right": 3,
    "down": 7,
    "left": 7,
    "power": 18,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 10,
    "collections": [
      "大きさをくらべよう"
    ]
  },
  {
    "id": "card_061",
    "cardNo": "61",
    "no": "61",
    "encyclopediaNo": "61",
    "name": "長さ",
    "rarity": 2,
    "up": 3,
    "right": 7,
    "down": 3,
    "left": 5,
    "power": 18,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 11,
    "collections": [
      "はかる名人"
    ]
  },
  {
    "id": "card_062",
    "cardNo": "62",
    "no": "62",
    "encyclopediaNo": "62",
    "name": "水のかさ",
    "rarity": 2,
    "up": 7,
    "right": 6,
    "down": 3,
    "left": 3,
    "power": 19,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 12,
    "collections": [
      "はかる名人"
    ]
  },
  {
    "id": "card_063",
    "cardNo": "63",
    "no": "63",
    "encyclopediaNo": "63",
    "name": "三角形",
    "rarity": 2,
    "up": 6,
    "right": 6,
    "down": 3,
    "left": 4,
    "power": 19,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 13,
    "collections": [
      "図形マスター"
    ]
  },
  {
    "id": "card_064",
    "cardNo": "64",
    "no": "64",
    "encyclopediaNo": "64",
    "name": "四角形",
    "rarity": 2,
    "up": 1,
    "right": 7,
    "down": 3,
    "left": 7,
    "power": 18,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 14,
    "collections": [
      "図形マスター"
    ]
  },
  {
    "id": "card_065",
    "cardNo": "65",
    "no": "65",
    "encyclopediaNo": "65",
    "name": "表とグラフ",
    "rarity": 2,
    "up": 7,
    "right": 3,
    "down": 7,
    "left": 1,
    "power": 18,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 15,
    "collections": [
      "グラフ博士"
    ]
  },
  {
    "id": "card_066",
    "cardNo": "66",
    "no": "66",
    "encyclopediaNo": "66",
    "name": "わり算",
    "rarity": 3,
    "up": 8,
    "right": 3,
    "down": 2,
    "left": 8,
    "power": 21,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 16,
    "collections": [
      "四則演算"
    ]
  },
  {
    "id": "card_067",
    "cardNo": "67",
    "no": "67",
    "encyclopediaNo": "67",
    "name": "あまりのあるわり算",
    "rarity": 3,
    "up": 6,
    "right": 6,
    "down": 3,
    "left": 6,
    "power": 21,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 17,
    "collections": []
  },
  {
    "id": "card_068",
    "cardNo": "68",
    "no": "68",
    "encyclopediaNo": "68",
    "name": "かけ算のひっ算",
    "rarity": 3,
    "up": 5,
    "right": 8,
    "down": 2,
    "left": 7,
    "power": 22,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 18,
    "collections": [
      "ひっ算マスター"
    ]
  },
  {
    "id": "card_069",
    "cardNo": "69",
    "no": "69",
    "encyclopediaNo": "69",
    "name": "わり算のひっ算",
    "rarity": 3,
    "up": 5,
    "right": 5,
    "down": 5,
    "left": 8,
    "power": 23,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 19,
    "collections": [
      "ひっ算マスター"
    ]
  },
  {
    "id": "card_070",
    "cardNo": "70",
    "no": "70",
    "encyclopediaNo": "70",
    "name": "小数",
    "rarity": 3,
    "up": 1,
    "right": 8,
    "down": 7,
    "left": 6,
    "power": 22,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 20,
    "collections": [
      "大きさをくらべよう"
    ]
  },
  {
    "id": "card_071",
    "cardNo": "71",
    "no": "71",
    "encyclopediaNo": "71",
    "name": "分数",
    "rarity": 3,
    "up": 6,
    "right": 4,
    "down": 7,
    "left": 5,
    "power": 22,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 21,
    "collections": [
      "分数マスター",
      "大きさをくらべよう"
    ]
  },
  {
    "id": "card_072",
    "cardNo": "72",
    "no": "72",
    "encyclopediaNo": "72",
    "name": "大きな数",
    "rarity": 3,
    "up": 5,
    "right": 5,
    "down": 7,
    "left": 5,
    "power": 22,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 22,
    "collections": [
      "大きさをくらべよう"
    ]
  },
  {
    "id": "card_073",
    "cardNo": "73",
    "no": "73",
    "encyclopediaNo": "73",
    "name": "重さ",
    "rarity": 3,
    "up": 7,
    "right": 8,
    "down": 1,
    "left": 4,
    "power": 20,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 23,
    "collections": [
      "はかる名人"
    ]
  },
  {
    "id": "card_074",
    "cardNo": "74",
    "no": "74",
    "encyclopediaNo": "74",
    "name": "円と球",
    "rarity": 3,
    "up": 6,
    "right": 1,
    "down": 7,
    "left": 8,
    "power": 22,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 24,
    "collections": [
      "円のひみつ"
    ]
  },
  {
    "id": "card_075",
    "cardNo": "75",
    "no": "75",
    "encyclopediaNo": "75",
    "name": "二等辺三角形",
    "rarity": 3,
    "up": 8,
    "right": 5,
    "down": 5,
    "left": 6,
    "power": 24,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 25,
    "collections": [
      "図形マスター"
    ]
  },
  {
    "id": "card_076",
    "cardNo": "76",
    "no": "76",
    "encyclopediaNo": "76",
    "name": "正三角形",
    "rarity": 3,
    "up": 8,
    "right": 2,
    "down": 7,
    "left": 4,
    "power": 21,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 26,
    "collections": [
      "図形マスター"
    ]
  },
  {
    "id": "card_077",
    "cardNo": "77",
    "no": "77",
    "encyclopediaNo": "77",
    "name": "角度",
    "rarity": 3,
    "up": 6,
    "right": 2,
    "down": 6,
    "left": 7,
    "power": 21,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 27,
    "collections": [
      "図形マスター"
    ]
  },
  {
    "id": "card_078",
    "cardNo": "78",
    "no": "78",
    "encyclopediaNo": "78",
    "name": "垂直と平行",
    "rarity": 3,
    "up": 4,
    "right": 7,
    "down": 4,
    "left": 8,
    "power": 23,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 28,
    "collections": []
  },
  {
    "id": "card_079",
    "cardNo": "79",
    "no": "79",
    "encyclopediaNo": "79",
    "name": "面積",
    "rarity": 3,
    "up": 8,
    "right": 6,
    "down": 4,
    "left": 6,
    "power": 24,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 29,
    "collections": []
  },
  {
    "id": "card_080",
    "cardNo": "80",
    "no": "80",
    "encyclopediaNo": "80",
    "name": "折れ線グラフ",
    "rarity": 3,
    "up": 7,
    "right": 1,
    "down": 7,
    "left": 7,
    "power": 22,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 30,
    "collections": [
      "グラフ博士"
    ]
  },
  {
    "id": "card_081",
    "cardNo": "81",
    "no": "81",
    "encyclopediaNo": "81",
    "name": "概数",
    "rarity": 3,
    "up": 2,
    "right": 2,
    "down": 8,
    "left": 8,
    "power": 20,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 31,
    "collections": [
      "大きさをくらべよう"
    ]
  },
  {
    "id": "card_082",
    "cardNo": "82",
    "no": "82",
    "encyclopediaNo": "82",
    "name": "単位換算",
    "rarity": 3,
    "up": 7,
    "right": 6,
    "down": 6,
    "left": 2,
    "power": 21,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 32,
    "collections": [
      "はかる名人"
    ]
  },
  {
    "id": "card_083",
    "cardNo": "83",
    "no": "83",
    "encyclopediaNo": "83",
    "name": "□を使った式",
    "rarity": 3,
    "up": 5,
    "right": 4,
    "down": 8,
    "left": 6,
    "power": 23,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 33,
    "collections": []
  },
  {
    "id": "card_084",
    "cardNo": "84",
    "no": "84",
    "encyclopediaNo": "84",
    "name": "そろばん",
    "rarity": 3,
    "up": 5,
    "right": 4,
    "down": 6,
    "left": 8,
    "power": 23,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 34,
    "collections": []
  },
  {
    "id": "card_085",
    "cardNo": "85",
    "no": "85",
    "encyclopediaNo": "85",
    "name": "直方体と立方体",
    "rarity": 3,
    "up": 4,
    "right": 7,
    "down": 8,
    "left": 2,
    "power": 21,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 35,
    "collections": []
  },
  {
    "id": "card_086",
    "cardNo": "86",
    "no": "86",
    "encyclopediaNo": "86",
    "name": "平均",
    "rarity": 4,
    "up": 3,
    "right": 9,
    "down": 3,
    "left": 9,
    "power": 24,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 36,
    "collections": [
      "グラフ博士"
    ]
  },
  {
    "id": "card_087",
    "cardNo": "87",
    "no": "87",
    "encyclopediaNo": "87",
    "name": "単位量あたり",
    "rarity": 4,
    "up": 1,
    "right": 9,
    "down": 9,
    "left": 5,
    "power": 24,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 37,
    "collections": []
  },
  {
    "id": "card_088",
    "cardNo": "88",
    "no": "88",
    "encyclopediaNo": "88",
    "name": "割合",
    "rarity": 4,
    "up": 2,
    "right": 7,
    "down": 7,
    "left": 8,
    "power": 24,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 38,
    "collections": []
  },
  {
    "id": "card_089",
    "cardNo": "89",
    "no": "89",
    "encyclopediaNo": "89",
    "name": "比",
    "rarity": 4,
    "up": 8,
    "right": 1,
    "down": 8,
    "left": 8,
    "power": 25,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 39,
    "collections": [
      "分数マスター"
    ]
  },
  {
    "id": "card_090",
    "cardNo": "90",
    "no": "90",
    "encyclopediaNo": "90",
    "name": "速さ",
    "rarity": 4,
    "up": 7,
    "right": 6,
    "down": 8,
    "left": 7,
    "power": 28,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 40,
    "collections": []
  },
  {
    "id": "card_091",
    "cardNo": "91",
    "no": "91",
    "encyclopediaNo": "91",
    "name": "約数と倍数",
    "rarity": 4,
    "up": 9,
    "right": 4,
    "down": 8,
    "left": 4,
    "power": 25,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 41,
    "collections": [
      "数のふしぎ"
    ]
  },
  {
    "id": "card_092",
    "cardNo": "92",
    "no": "92",
    "encyclopediaNo": "92",
    "name": "通分と約分",
    "rarity": 4,
    "up": 4,
    "right": 9,
    "down": 4,
    "left": 8,
    "power": 25,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 42,
    "collections": [
      "分数マスター"
    ]
  },
  {
    "id": "card_093",
    "cardNo": "93",
    "no": "93",
    "encyclopediaNo": "93",
    "name": "体積",
    "rarity": 4,
    "up": 7,
    "right": 8,
    "down": 6,
    "left": 7,
    "power": 28,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 43,
    "collections": []
  },
  {
    "id": "card_094",
    "cardNo": "94",
    "no": "94",
    "encyclopediaNo": "94",
    "name": "円の面積",
    "rarity": 4,
    "up": 8,
    "right": 6,
    "down": 8,
    "left": 6,
    "power": 28,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 44,
    "collections": [
      "円のひみつ"
    ]
  },
  {
    "id": "card_095",
    "cardNo": "95",
    "no": "95",
    "encyclopediaNo": "95",
    "name": "比例と反比例",
    "rarity": 4,
    "up": 4,
    "right": 9,
    "down": 9,
    "left": 3,
    "power": 25,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 45,
    "collections": []
  },
  {
    "id": "card_096",
    "cardNo": "96",
    "no": "96",
    "encyclopediaNo": "96",
    "name": "円周率 π",
    "rarity": 5,
    "up": 10,
    "right": 5,
    "down": 10,
    "left": 2,
    "power": 27,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 46,
    "collections": [
      "円のひみつ",
      "数学への入口"
    ]
  },
  {
    "id": "card_097",
    "cardNo": "97",
    "no": "97",
    "encyclopediaNo": "97",
    "name": "素数",
    "rarity": 5,
    "up": 1,
    "right": 9,
    "down": 9,
    "left": 9,
    "power": 28,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 47,
    "collections": [
      "数のふしぎ",
      "数学への入口"
    ]
  },
  {
    "id": "card_098",
    "cardNo": "98",
    "no": "98",
    "encyclopediaNo": "98",
    "name": "ピタゴラスの定理",
    "rarity": 5,
    "up": 5,
    "right": 10,
    "down": 3,
    "left": 10,
    "power": 28,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 48,
    "collections": [
      "数学への入口"
    ]
  },
  {
    "id": "card_099",
    "cardNo": "99",
    "no": "99",
    "encyclopediaNo": "99",
    "name": "フィボナッチ数列",
    "rarity": 5,
    "up": 10,
    "right": 7,
    "down": 1,
    "left": 9,
    "power": 27,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 49,
    "collections": [
      "数のふしぎ",
      "数学への入口"
    ]
  },
  {
    "id": "card_100",
    "cardNo": "100",
    "no": "100",
    "encyclopediaNo": "100",
    "name": "黄金比",
    "rarity": 5,
    "up": 6,
    "right": 8,
    "down": 8,
    "left": 8,
    "power": 30,
    "type": "さんすう",
    "subject": "さんすう",
    "subjectNo": 50,
    "collections": [
      "数学への入口"
    ]
  },
  {
    "id": "card_101",
    "cardNo": "101",
    "no": "101",
    "encyclopediaNo": "101",
    "name": "タンポポ",
    "rarity": 1,
    "up": 6,
    "right": 3,
    "down": 1,
    "left": 3,
    "power": 13,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 1,
    "collections": [
      "植物博士"
    ]
  },
  {
    "id": "card_102",
    "cardNo": "102",
    "no": "102",
    "encyclopediaNo": "102",
    "name": "アサガオ",
    "rarity": 1,
    "up": 3,
    "right": 3,
    "down": 3,
    "left": 4,
    "power": 13,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 2,
    "collections": [
      "植物博士"
    ]
  },
  {
    "id": "card_103",
    "cardNo": "103",
    "no": "103",
    "encyclopediaNo": "103",
    "name": "ダンゴムシ",
    "rarity": 1,
    "up": 1,
    "right": 2,
    "down": 6,
    "left": 4,
    "power": 13,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 3,
    "collections": []
  },
  {
    "id": "card_104",
    "cardNo": "104",
    "no": "104",
    "encyclopediaNo": "104",
    "name": "メダカ",
    "rarity": 1,
    "up": 4,
    "right": 5,
    "down": 3,
    "left": 3,
    "power": 15,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 4,
    "collections": [
      "水辺の生き物"
    ]
  },
  {
    "id": "card_105",
    "cardNo": "105",
    "no": "105",
    "encyclopediaNo": "105",
    "name": "水星",
    "rarity": 1,
    "up": 1,
    "right": 4,
    "down": 7,
    "left": 1,
    "power": 13,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 5,
    "collections": [
      "太陽系コンプリート"
    ]
  },
  {
    "id": "card_106",
    "cardNo": "106",
    "no": "106",
    "encyclopediaNo": "106",
    "name": "ヒマワリ",
    "rarity": 2,
    "up": 4,
    "right": 3,
    "down": 7,
    "left": 3,
    "power": 17,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 6,
    "collections": [
      "植物博士"
    ]
  },
  {
    "id": "card_107",
    "cardNo": "107",
    "no": "107",
    "encyclopediaNo": "107",
    "name": "ホウセンカ",
    "rarity": 2,
    "up": 2,
    "right": 6,
    "down": 6,
    "left": 4,
    "power": 18,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 7,
    "collections": [
      "植物博士"
    ]
  },
  {
    "id": "card_108",
    "cardNo": "108",
    "no": "108",
    "encyclopediaNo": "108",
    "name": "モンシロチョウ",
    "rarity": 2,
    "up": 6,
    "right": 4,
    "down": 4,
    "left": 4,
    "power": 18,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 8,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_109",
    "cardNo": "109",
    "no": "109",
    "encyclopediaNo": "109",
    "name": "ナナホシテントウ",
    "rarity": 2,
    "up": 3,
    "right": 5,
    "down": 4,
    "left": 7,
    "power": 19,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 9,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_110",
    "cardNo": "110",
    "no": "110",
    "encyclopediaNo": "110",
    "name": "ミツバチ",
    "rarity": 2,
    "up": 6,
    "right": 5,
    "down": 3,
    "left": 4,
    "power": 18,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 10,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_111",
    "cardNo": "111",
    "no": "111",
    "encyclopediaNo": "111",
    "name": "カタツムリ",
    "rarity": 2,
    "up": 7,
    "right": 7,
    "down": 3,
    "left": 2,
    "power": 19,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 11,
    "collections": []
  },
  {
    "id": "card_112",
    "cardNo": "112",
    "no": "112",
    "encyclopediaNo": "112",
    "name": "ニホンアマガエル",
    "rarity": 2,
    "up": 6,
    "right": 4,
    "down": 5,
    "left": 4,
    "power": 19,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 12,
    "collections": [
      "水辺の生き物"
    ]
  },
  {
    "id": "card_113",
    "cardNo": "113",
    "no": "113",
    "encyclopediaNo": "113",
    "name": "アメリカザリガニ",
    "rarity": 2,
    "up": 4,
    "right": 4,
    "down": 7,
    "left": 4,
    "power": 19,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 13,
    "collections": [
      "水辺の生き物"
    ]
  },
  {
    "id": "card_114",
    "cardNo": "114",
    "no": "114",
    "encyclopediaNo": "114",
    "name": "火星",
    "rarity": 2,
    "up": 6,
    "right": 4,
    "down": 7,
    "left": 1,
    "power": 18,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 14,
    "collections": [
      "太陽系コンプリート"
    ]
  },
  {
    "id": "card_115",
    "cardNo": "115",
    "no": "115",
    "encyclopediaNo": "115",
    "name": "月",
    "rarity": 2,
    "up": 6,
    "right": 7,
    "down": 2,
    "left": 3,
    "power": 18,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 15,
    "collections": [
      "地球と月"
    ]
  },
  {
    "id": "card_116",
    "cardNo": "116",
    "no": "116",
    "encyclopediaNo": "116",
    "name": "サクラ",
    "rarity": 3,
    "up": 6,
    "right": 7,
    "down": 8,
    "left": 1,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 16,
    "collections": [
      "植物博士"
    ]
  },
  {
    "id": "card_117",
    "cardNo": "117",
    "no": "117",
    "encyclopediaNo": "117",
    "name": "ヘチマ",
    "rarity": 3,
    "up": 4,
    "right": 4,
    "down": 7,
    "left": 8,
    "power": 23,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 17,
    "collections": [
      "植物博士"
    ]
  },
  {
    "id": "card_118",
    "cardNo": "118",
    "no": "118",
    "encyclopediaNo": "118",
    "name": "イネ",
    "rarity": 3,
    "up": 6,
    "right": 1,
    "down": 8,
    "left": 7,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 18,
    "collections": [
      "植物博士"
    ]
  },
  {
    "id": "card_119",
    "cardNo": "119",
    "no": "119",
    "encyclopediaNo": "119",
    "name": "ジャガイモ",
    "rarity": 3,
    "up": 8,
    "right": 3,
    "down": 7,
    "left": 3,
    "power": 21,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 19,
    "collections": [
      "植物博士"
    ]
  },
  {
    "id": "card_120",
    "cardNo": "120",
    "no": "120",
    "encyclopediaNo": "120",
    "name": "アゲハチョウ",
    "rarity": 3,
    "up": 1,
    "right": 6,
    "down": 8,
    "left": 7,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 20,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_121",
    "cardNo": "121",
    "no": "121",
    "encyclopediaNo": "121",
    "name": "オオカマキリ",
    "rarity": 3,
    "up": 8,
    "right": 4,
    "down": 8,
    "left": 2,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 21,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_122",
    "cardNo": "122",
    "no": "122",
    "encyclopediaNo": "122",
    "name": "ショウリョウバッタ",
    "rarity": 3,
    "up": 8,
    "right": 7,
    "down": 2,
    "left": 4,
    "power": 21,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 22,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_123",
    "cardNo": "123",
    "no": "123",
    "encyclopediaNo": "123",
    "name": "アキアカネ",
    "rarity": 3,
    "up": 7,
    "right": 8,
    "down": 4,
    "left": 3,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 23,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_124",
    "cardNo": "124",
    "no": "124",
    "encyclopediaNo": "124",
    "name": "カイコ",
    "rarity": 3,
    "up": 4,
    "right": 7,
    "down": 3,
    "left": 7,
    "power": 21,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 24,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_125",
    "cardNo": "125",
    "no": "125",
    "encyclopediaNo": "125",
    "name": "ニホンヤモリ",
    "rarity": 3,
    "up": 5,
    "right": 8,
    "down": 6,
    "left": 3,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 25,
    "collections": []
  },
  {
    "id": "card_126",
    "cardNo": "126",
    "no": "126",
    "encyclopediaNo": "126",
    "name": "フナ",
    "rarity": 3,
    "up": 7,
    "right": 8,
    "down": 4,
    "left": 2,
    "power": 21,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 26,
    "collections": [
      "水辺の生き物"
    ]
  },
  {
    "id": "card_127",
    "cardNo": "127",
    "no": "127",
    "encyclopediaNo": "127",
    "name": "アンモナイト",
    "rarity": 3,
    "up": 7,
    "right": 6,
    "down": 1,
    "left": 8,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 27,
    "collections": []
  },
  {
    "id": "card_128",
    "cardNo": "128",
    "no": "128",
    "encyclopediaNo": "128",
    "name": "金星",
    "rarity": 3,
    "up": 5,
    "right": 7,
    "down": 7,
    "left": 2,
    "power": 21,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 28,
    "collections": [
      "太陽系コンプリート"
    ]
  },
  {
    "id": "card_129",
    "cardNo": "129",
    "no": "129",
    "encyclopediaNo": "129",
    "name": "地球",
    "rarity": 3,
    "up": 8,
    "right": 2,
    "down": 3,
    "left": 8,
    "power": 21,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 29,
    "collections": [
      "地球と月",
      "太陽系コンプリート"
    ]
  },
  {
    "id": "card_130",
    "cardNo": "130",
    "no": "130",
    "encyclopediaNo": "130",
    "name": "天王星",
    "rarity": 3,
    "up": 8,
    "right": 4,
    "down": 4,
    "left": 7,
    "power": 23,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 30,
    "collections": [
      "巨大惑星",
      "太陽系コンプリート"
    ]
  },
  {
    "id": "card_131",
    "cardNo": "131",
    "no": "131",
    "encyclopediaNo": "131",
    "name": "海王星",
    "rarity": 3,
    "up": 1,
    "right": 7,
    "down": 7,
    "left": 7,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 31,
    "collections": [
      "巨大惑星",
      "太陽系コンプリート"
    ]
  },
  {
    "id": "card_132",
    "cardNo": "132",
    "no": "132",
    "encyclopediaNo": "132",
    "name": "北極星",
    "rarity": 3,
    "up": 7,
    "right": 6,
    "down": 8,
    "left": 1,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 32,
    "collections": [
      "星の世界"
    ]
  },
  {
    "id": "card_133",
    "cardNo": "133",
    "no": "133",
    "encyclopediaNo": "133",
    "name": "ベガ",
    "rarity": 3,
    "up": 6,
    "right": 2,
    "down": 6,
    "left": 8,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 33,
    "collections": [
      "星の世界"
    ]
  },
  {
    "id": "card_134",
    "cardNo": "134",
    "no": "134",
    "encyclopediaNo": "134",
    "name": "オリオン座",
    "rarity": 3,
    "up": 7,
    "right": 5,
    "down": 2,
    "left": 8,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 34,
    "collections": []
  },
  {
    "id": "card_135",
    "cardNo": "135",
    "no": "135",
    "encyclopediaNo": "135",
    "name": "花こう岩",
    "rarity": 3,
    "up": 6,
    "right": 8,
    "down": 4,
    "left": 4,
    "power": 22,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 35,
    "collections": []
  },
  {
    "id": "card_136",
    "cardNo": "136",
    "no": "136",
    "encyclopediaNo": "136",
    "name": "カブトムシ",
    "rarity": 4,
    "up": 8,
    "right": 8,
    "down": 5,
    "left": 5,
    "power": 26,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 36,
    "collections": [
      "カブトムシ一族",
      "昆虫博士"
    ]
  },
  {
    "id": "card_137",
    "cardNo": "137",
    "no": "137",
    "encyclopediaNo": "137",
    "name": "オオクワガタ",
    "rarity": 4,
    "up": 8,
    "right": 3,
    "down": 8,
    "left": 8,
    "power": 27,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 37,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_138",
    "cardNo": "138",
    "no": "138",
    "encyclopediaNo": "138",
    "name": "スズメバチ",
    "rarity": 4,
    "up": 8,
    "right": 9,
    "down": 1,
    "left": 7,
    "power": 25,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 38,
    "collections": [
      "昆虫博士"
    ]
  },
  {
    "id": "card_139",
    "cardNo": "139",
    "no": "139",
    "encyclopediaNo": "139",
    "name": "ワシ",
    "rarity": 4,
    "up": 7,
    "right": 9,
    "down": 6,
    "left": 6,
    "power": 28,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 39,
    "collections": []
  },
  {
    "id": "card_140",
    "cardNo": "140",
    "no": "140",
    "encyclopediaNo": "140",
    "name": "サメ",
    "rarity": 4,
    "up": 6,
    "right": 8,
    "down": 7,
    "left": 7,
    "power": 28,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 40,
    "collections": []
  },
  {
    "id": "card_141",
    "cardNo": "141",
    "no": "141",
    "encyclopediaNo": "141",
    "name": "木星",
    "rarity": 4,
    "up": 2,
    "right": 8,
    "down": 8,
    "left": 7,
    "power": 25,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 41,
    "collections": [
      "巨大惑星",
      "太陽系コンプリート"
    ]
  },
  {
    "id": "card_142",
    "cardNo": "142",
    "no": "142",
    "encyclopediaNo": "142",
    "name": "土星",
    "rarity": 4,
    "up": 9,
    "right": 6,
    "down": 5,
    "left": 6,
    "power": 26,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 42,
    "collections": [
      "巨大惑星",
      "太陽系コンプリート"
    ]
  },
  {
    "id": "card_143",
    "cardNo": "143",
    "no": "143",
    "encyclopediaNo": "143",
    "name": "太陽",
    "rarity": 4,
    "up": 9,
    "right": 7,
    "down": 8,
    "left": 1,
    "power": 25,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 43,
    "collections": [
      "地球と月",
      "星の世界"
    ]
  },
  {
    "id": "card_144",
    "cardNo": "144",
    "no": "144",
    "encyclopediaNo": "144",
    "name": "ベテルギウス",
    "rarity": 4,
    "up": 8,
    "right": 6,
    "down": 7,
    "left": 7,
    "power": 28,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 44,
    "collections": [
      "星の世界"
    ]
  },
  {
    "id": "card_145",
    "cardNo": "145",
    "no": "145",
    "encyclopediaNo": "145",
    "name": "トリケラトプス",
    "rarity": 4,
    "up": 5,
    "right": 1,
    "down": 9,
    "left": 9,
    "power": 24,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 45,
    "collections": [
      "恐竜王国"
    ]
  },
  {
    "id": "card_146",
    "cardNo": "146",
    "no": "146",
    "encyclopediaNo": "146",
    "name": "DNA",
    "rarity": 5,
    "up": 10,
    "right": 7,
    "down": 8,
    "left": 5,
    "power": 30,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 46,
    "collections": []
  },
  {
    "id": "card_147",
    "cardNo": "147",
    "no": "147",
    "encyclopediaNo": "147",
    "name": "ブラックホール",
    "rarity": 5,
    "up": 10,
    "right": 5,
    "down": 8,
    "left": 6,
    "power": 29,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 47,
    "collections": [
      "宇宙の大事件"
    ]
  },
  {
    "id": "card_148",
    "cardNo": "148",
    "no": "148",
    "encyclopediaNo": "148",
    "name": "ヘラクレスオオカブト",
    "rarity": 5,
    "up": 7,
    "right": 7,
    "down": 10,
    "left": 6,
    "power": 30,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 48,
    "collections": [
      "カブトムシ一族",
      "昆虫博士"
    ]
  },
  {
    "id": "card_149",
    "cardNo": "149",
    "no": "149",
    "encyclopediaNo": "149",
    "name": "超新星爆発",
    "rarity": 5,
    "up": 1,
    "right": 7,
    "down": 10,
    "left": 9,
    "power": 27,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 49,
    "collections": [
      "宇宙の大事件"
    ]
  },
  {
    "id": "card_150",
    "cardNo": "150",
    "no": "150",
    "encyclopediaNo": "150",
    "name": "ティラノサウルス",
    "rarity": 5,
    "up": 7,
    "right": 9,
    "down": 1,
    "left": 10,
    "power": 27,
    "type": "りか",
    "subject": "りか",
    "subjectNo": 50,
    "collections": [
      "恐竜王国"
    ]
  },
  {
    "id": "card_151",
    "cardNo": "151",
    "no": "151",
    "encyclopediaNo": "151",
    "name": "三内丸山遺跡",
    "rarity": 1,
    "up": 2,
    "right": 7,
    "down": 2,
    "left": 2,
    "power": 13,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 1,
    "collections": []
  },
  {
    "id": "card_152",
    "cardNo": "152",
    "no": "152",
    "encyclopediaNo": "152",
    "name": "法隆寺",
    "rarity": 1,
    "up": 4,
    "right": 2,
    "down": 5,
    "left": 3,
    "power": 14,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 2,
    "collections": [
      "古都の名所"
    ]
  },
  {
    "id": "card_153",
    "cardNo": "153",
    "no": "153",
    "encyclopediaNo": "153",
    "name": "鎌倉の大仏",
    "rarity": 1,
    "up": 2,
    "right": 4,
    "down": 3,
    "left": 5,
    "power": 14,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 3,
    "collections": [
      "鎌倉時代"
    ]
  },
  {
    "id": "card_154",
    "cardNo": "154",
    "no": "154",
    "encyclopediaNo": "154",
    "name": "桜田門外の変",
    "rarity": 1,
    "up": 5,
    "right": 2,
    "down": 5,
    "left": 1,
    "power": 13,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 4,
    "collections": []
  },
  {
    "id": "card_155",
    "cardNo": "155",
    "no": "155",
    "encyclopediaNo": "155",
    "name": "野口英世",
    "rarity": 1,
    "up": 2,
    "right": 4,
    "down": 5,
    "left": 4,
    "power": 15,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 5,
    "collections": []
  },
  {
    "id": "card_156",
    "cardNo": "156",
    "no": "156",
    "encyclopediaNo": "156",
    "name": "卑弥呼",
    "rarity": 2,
    "up": 6,
    "right": 4,
    "down": 2,
    "left": 6,
    "power": 18,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 6,
    "collections": [
      "日本史オールスター"
    ]
  },
  {
    "id": "card_157",
    "cardNo": "157",
    "no": "157",
    "encyclopediaNo": "157",
    "name": "紫式部",
    "rarity": 2,
    "up": 7,
    "right": 4,
    "down": 4,
    "left": 4,
    "power": 19,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 7,
    "collections": []
  },
  {
    "id": "card_158",
    "cardNo": "158",
    "no": "158",
    "encyclopediaNo": "158",
    "name": "平清盛",
    "rarity": 2,
    "up": 5,
    "right": 3,
    "down": 7,
    "left": 5,
    "power": 20,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 8,
    "collections": []
  },
  {
    "id": "card_159",
    "cardNo": "159",
    "no": "159",
    "encyclopediaNo": "159",
    "name": "北条政子",
    "rarity": 2,
    "up": 4,
    "right": 7,
    "down": 4,
    "left": 4,
    "power": 19,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 9,
    "collections": [
      "鎌倉時代"
    ]
  },
  {
    "id": "card_160",
    "cardNo": "160",
    "no": "160",
    "encyclopediaNo": "160",
    "name": "福沢諭吉",
    "rarity": 2,
    "up": 5,
    "right": 5,
    "down": 7,
    "left": 1,
    "power": 18,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 10,
    "collections": []
  },
  {
    "id": "card_161",
    "cardNo": "161",
    "no": "161",
    "encyclopediaNo": "161",
    "name": "東大寺",
    "rarity": 2,
    "up": 4,
    "right": 1,
    "down": 4,
    "left": 7,
    "power": 16,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 11,
    "collections": [
      "古都の名所"
    ]
  },
  {
    "id": "card_162",
    "cardNo": "162",
    "no": "162",
    "encyclopediaNo": "162",
    "name": "金閣",
    "rarity": 2,
    "up": 2,
    "right": 6,
    "down": 4,
    "left": 7,
    "power": 19,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 12,
    "collections": [
      "室町時代",
      "古都の名所"
    ]
  },
  {
    "id": "card_163",
    "cardNo": "163",
    "no": "163",
    "encyclopediaNo": "163",
    "name": "厳島神社",
    "rarity": 2,
    "up": 4,
    "right": 6,
    "down": 4,
    "left": 5,
    "power": 19,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 13,
    "collections": []
  },
  {
    "id": "card_164",
    "cardNo": "164",
    "no": "164",
    "encyclopediaNo": "164",
    "name": "壇ノ浦の戦い",
    "rarity": 2,
    "up": 2,
    "right": 3,
    "down": 6,
    "left": 7,
    "power": 18,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 14,
    "collections": []
  },
  {
    "id": "card_165",
    "cardNo": "165",
    "no": "165",
    "encyclopediaNo": "165",
    "name": "黒船来航",
    "rarity": 2,
    "up": 2,
    "right": 7,
    "down": 5,
    "left": 6,
    "power": 20,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 15,
    "collections": [
      "幕末"
    ]
  },
  {
    "id": "card_166",
    "cardNo": "166",
    "no": "166",
    "encyclopediaNo": "166",
    "name": "聖武天皇",
    "rarity": 3,
    "up": 7,
    "right": 6,
    "down": 1,
    "left": 7,
    "power": 21,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 16,
    "collections": []
  },
  {
    "id": "card_167",
    "cardNo": "167",
    "no": "167",
    "encyclopediaNo": "167",
    "name": "鑑真",
    "rarity": 3,
    "up": 7,
    "right": 1,
    "down": 7,
    "left": 5,
    "power": 20,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 17,
    "collections": []
  },
  {
    "id": "card_168",
    "cardNo": "168",
    "no": "168",
    "encyclopediaNo": "168",
    "name": "源頼朝",
    "rarity": 3,
    "up": 8,
    "right": 5,
    "down": 5,
    "left": 5,
    "power": 23,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 18,
    "collections": [
      "鎌倉時代",
      "日本史オールスター"
    ]
  },
  {
    "id": "card_169",
    "cardNo": "169",
    "no": "169",
    "encyclopediaNo": "169",
    "name": "足利尊氏",
    "rarity": 3,
    "up": 6,
    "right": 5,
    "down": 8,
    "left": 3,
    "power": 22,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 19,
    "collections": [
      "室町時代"
    ]
  },
  {
    "id": "card_170",
    "cardNo": "170",
    "no": "170",
    "encyclopediaNo": "170",
    "name": "足利義満",
    "rarity": 3,
    "up": 5,
    "right": 1,
    "down": 7,
    "left": 8,
    "power": 21,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 20,
    "collections": [
      "室町時代",
      "日本史オールスター"
    ]
  },
  {
    "id": "card_171",
    "cardNo": "171",
    "no": "171",
    "encyclopediaNo": "171",
    "name": "フランシスコ・ザビエル",
    "rarity": 3,
    "up": 4,
    "right": 8,
    "down": 4,
    "left": 7,
    "power": 23,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 21,
    "collections": []
  },
  {
    "id": "card_172",
    "cardNo": "172",
    "no": "172",
    "encyclopediaNo": "172",
    "name": "武田信玄",
    "rarity": 3,
    "up": 3,
    "right": 7,
    "down": 5,
    "left": 7,
    "power": 22,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 22,
    "collections": [
      "川中島のライバル"
    ]
  },
  {
    "id": "card_173",
    "cardNo": "173",
    "no": "173",
    "encyclopediaNo": "173",
    "name": "上杉謙信",
    "rarity": 3,
    "up": 8,
    "right": 1,
    "down": 6,
    "left": 7,
    "power": 22,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 23,
    "collections": [
      "川中島のライバル"
    ]
  },
  {
    "id": "card_174",
    "cardNo": "174",
    "no": "174",
    "encyclopediaNo": "174",
    "name": "坂本龍馬",
    "rarity": 3,
    "up": 8,
    "right": 7,
    "down": 1,
    "left": 6,
    "power": 22,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 24,
    "collections": [
      "幕末",
      "日本史オールスター"
    ]
  },
  {
    "id": "card_175",
    "cardNo": "175",
    "no": "175",
    "encyclopediaNo": "175",
    "name": "西郷隆盛",
    "rarity": 3,
    "up": 6,
    "right": 6,
    "down": 5,
    "left": 7,
    "power": 24,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 25,
    "collections": [
      "幕末",
      "日本史オールスター"
    ]
  },
  {
    "id": "card_176",
    "cardNo": "176",
    "no": "176",
    "encyclopediaNo": "176",
    "name": "姫路城",
    "rarity": 3,
    "up": 5,
    "right": 6,
    "down": 3,
    "left": 8,
    "power": 22,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 26,
    "collections": [
      "日本の城"
    ]
  },
  {
    "id": "card_177",
    "cardNo": "177",
    "no": "177",
    "encyclopediaNo": "177",
    "name": "清水寺",
    "rarity": 3,
    "up": 4,
    "right": 6,
    "down": 6,
    "left": 8,
    "power": 24,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 27,
    "collections": [
      "古都の名所"
    ]
  },
  {
    "id": "card_178",
    "cardNo": "178",
    "no": "178",
    "encyclopediaNo": "178",
    "name": "日光東照宮",
    "rarity": 3,
    "up": 2,
    "right": 6,
    "down": 6,
    "left": 7,
    "power": 21,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 28,
    "collections": []
  },
  {
    "id": "card_179",
    "cardNo": "179",
    "no": "179",
    "encyclopediaNo": "179",
    "name": "出雲大社",
    "rarity": 3,
    "up": 7,
    "right": 5,
    "down": 8,
    "left": 2,
    "power": 22,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 29,
    "collections": []
  },
  {
    "id": "card_180",
    "cardNo": "180",
    "no": "180",
    "encyclopediaNo": "180",
    "name": "首里城",
    "rarity": 3,
    "up": 2,
    "right": 8,
    "down": 4,
    "left": 7,
    "power": 21,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 30,
    "collections": []
  },
  {
    "id": "card_181",
    "cardNo": "181",
    "no": "181",
    "encyclopediaNo": "181",
    "name": "元寇",
    "rarity": 3,
    "up": 5,
    "right": 6,
    "down": 6,
    "left": 6,
    "power": 23,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 31,
    "collections": []
  },
  {
    "id": "card_182",
    "cardNo": "182",
    "no": "182",
    "encyclopediaNo": "182",
    "name": "川中島の戦い",
    "rarity": 3,
    "up": 8,
    "right": 1,
    "down": 7,
    "left": 6,
    "power": 22,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 32,
    "collections": [
      "川中島のライバル"
    ]
  },
  {
    "id": "card_183",
    "cardNo": "183",
    "no": "183",
    "encyclopediaNo": "183",
    "name": "長篠の戦い",
    "rarity": 3,
    "up": 1,
    "right": 8,
    "down": 4,
    "left": 8,
    "power": 21,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 33,
    "collections": [
      "信長の戦い"
    ]
  },
  {
    "id": "card_184",
    "cardNo": "184",
    "no": "184",
    "encyclopediaNo": "184",
    "name": "応仁の乱",
    "rarity": 3,
    "up": 6,
    "right": 2,
    "down": 8,
    "left": 6,
    "power": 22,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 34,
    "collections": [
      "室町時代"
    ]
  },
  {
    "id": "card_185",
    "cardNo": "185",
    "no": "185",
    "encyclopediaNo": "185",
    "name": "大政奉還",
    "rarity": 3,
    "up": 8,
    "right": 8,
    "down": 3,
    "left": 1,
    "power": 20,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 35,
    "collections": [
      "幕末",
      "明治への道"
    ]
  },
  {
    "id": "card_186",
    "cardNo": "186",
    "no": "186",
    "encyclopediaNo": "186",
    "name": "聖徳太子",
    "rarity": 4,
    "up": 9,
    "right": 2,
    "down": 5,
    "left": 9,
    "power": 25,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 36,
    "collections": [
      "日本史オールスター"
    ]
  },
  {
    "id": "card_187",
    "cardNo": "187",
    "no": "187",
    "encyclopediaNo": "187",
    "name": "伊藤博文",
    "rarity": 4,
    "up": 9,
    "right": 2,
    "down": 5,
    "left": 8,
    "power": 24,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 37,
    "collections": [
      "明治への道",
      "日本史オールスター"
    ]
  },
  {
    "id": "card_188",
    "cardNo": "188",
    "no": "188",
    "encyclopediaNo": "188",
    "name": "徳川慶喜",
    "rarity": 4,
    "up": 1,
    "right": 5,
    "down": 9,
    "left": 9,
    "power": 24,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 38,
    "collections": [
      "幕末"
    ]
  },
  {
    "id": "card_189",
    "cardNo": "189",
    "no": "189",
    "encyclopediaNo": "189",
    "name": "伊達政宗",
    "rarity": 4,
    "up": 7,
    "right": 7,
    "down": 8,
    "left": 5,
    "power": 27,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 39,
    "collections": []
  },
  {
    "id": "card_190",
    "cardNo": "190",
    "no": "190",
    "encyclopediaNo": "190",
    "name": "大阪城",
    "rarity": 4,
    "up": 7,
    "right": 7,
    "down": 9,
    "left": 4,
    "power": 27,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 40,
    "collections": [
      "日本の城"
    ]
  },
  {
    "id": "card_191",
    "cardNo": "191",
    "no": "191",
    "encyclopediaNo": "191",
    "name": "江戸城",
    "rarity": 4,
    "up": 7,
    "right": 7,
    "down": 7,
    "left": 7,
    "power": 28,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 41,
    "collections": [
      "日本の城"
    ]
  },
  {
    "id": "card_192",
    "cardNo": "192",
    "no": "192",
    "encyclopediaNo": "192",
    "name": "関ヶ原の戦い",
    "rarity": 4,
    "up": 7,
    "right": 9,
    "down": 7,
    "left": 1,
    "power": 24,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 42,
    "collections": []
  },
  {
    "id": "card_193",
    "cardNo": "193",
    "no": "193",
    "encyclopediaNo": "193",
    "name": "大化の改新",
    "rarity": 4,
    "up": 7,
    "right": 6,
    "down": 6,
    "left": 9,
    "power": 28,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 43,
    "collections": []
  },
  {
    "id": "card_194",
    "cardNo": "194",
    "no": "194",
    "encyclopediaNo": "194",
    "name": "廃藩置県",
    "rarity": 4,
    "up": 9,
    "right": 3,
    "down": 7,
    "left": 7,
    "power": 26,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 44,
    "collections": [
      "明治への道"
    ]
  },
  {
    "id": "card_195",
    "cardNo": "195",
    "no": "195",
    "encyclopediaNo": "195",
    "name": "明治維新",
    "rarity": 4,
    "up": 7,
    "right": 8,
    "down": 9,
    "left": 1,
    "power": 25,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 45,
    "collections": [
      "明治への道"
    ]
  },
  {
    "id": "card_196",
    "cardNo": "196",
    "no": "196",
    "encyclopediaNo": "196",
    "name": "織田信長",
    "rarity": 5,
    "up": 9,
    "right": 9,
    "down": 2,
    "left": 9,
    "power": 29,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 46,
    "collections": [
      "戦国三英傑",
      "信長の戦い",
      "日本史オールスター"
    ]
  },
  {
    "id": "card_197",
    "cardNo": "197",
    "no": "197",
    "encyclopediaNo": "197",
    "name": "豊臣秀吉",
    "rarity": 5,
    "up": 2,
    "right": 10,
    "down": 10,
    "left": 5,
    "power": 27,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 47,
    "collections": [
      "戦国三英傑",
      "日本史オールスター"
    ]
  },
  {
    "id": "card_198",
    "cardNo": "198",
    "no": "198",
    "encyclopediaNo": "198",
    "name": "徳川家康",
    "rarity": 5,
    "up": 6,
    "right": 6,
    "down": 9,
    "left": 9,
    "power": 30,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 48,
    "collections": [
      "戦国三英傑",
      "日本史オールスター"
    ]
  },
  {
    "id": "card_199",
    "cardNo": "199",
    "no": "199",
    "encyclopediaNo": "199",
    "name": "本能寺の変",
    "rarity": 5,
    "up": 7,
    "right": 1,
    "down": 10,
    "left": 9,
    "power": 27,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 49,
    "collections": [
      "信長の戦い"
    ]
  },
  {
    "id": "card_200",
    "cardNo": "200",
    "no": "200",
    "encyclopediaNo": "200",
    "name": "原爆ドーム",
    "rarity": 5,
    "up": 9,
    "right": 9,
    "down": 9,
    "left": 1,
    "power": 28,
    "type": "しゃかい",
    "subject": "しゃかい",
    "subjectNo": 50,
    "collections": []
  },
  {
    "id": "card_201",
    "cardNo": "201",
    "no": "201",
    "encyclopediaNo": "201",
    "name": "Cat",
    "rarity": 1,
    "up": 4,
    "right": 3,
    "down": 3,
    "left": 3,
    "power": 13,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 1,
    "collections": [
      "Animal Friends"
    ]
  },
  {
    "id": "card_202",
    "cardNo": "202",
    "no": "202",
    "encyclopediaNo": "202",
    "name": "Apple",
    "rarity": 1,
    "up": 1,
    "right": 1,
    "down": 7,
    "left": 4,
    "power": 13,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 2,
    "collections": [
      "Food Time"
    ]
  },
  {
    "id": "card_203",
    "cardNo": "203",
    "no": "203",
    "encyclopediaNo": "203",
    "name": "Flower",
    "rarity": 1,
    "up": 7,
    "right": 2,
    "down": 2,
    "left": 2,
    "power": 13,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 3,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_204",
    "cardNo": "204",
    "no": "204",
    "encyclopediaNo": "204",
    "name": "Pencil",
    "rarity": 1,
    "up": 4,
    "right": 4,
    "down": 3,
    "left": 4,
    "power": 15,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 4,
    "collections": []
  },
  {
    "id": "card_205",
    "cardNo": "205",
    "no": "205",
    "encyclopediaNo": "205",
    "name": "Smile",
    "rarity": 1,
    "up": 5,
    "right": 5,
    "down": 2,
    "left": 2,
    "power": 14,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 5,
    "collections": []
  },
  {
    "id": "card_206",
    "cardNo": "206",
    "no": "206",
    "encyclopediaNo": "206",
    "name": "Dog",
    "rarity": 2,
    "up": 1,
    "right": 7,
    "down": 1,
    "left": 7,
    "power": 16,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 6,
    "collections": [
      "Animal Friends"
    ]
  },
  {
    "id": "card_207",
    "cardNo": "207",
    "no": "207",
    "encyclopediaNo": "207",
    "name": "Rabbit",
    "rarity": 2,
    "up": 5,
    "right": 4,
    "down": 4,
    "left": 7,
    "power": 20,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 7,
    "collections": [
      "Animal Friends"
    ]
  },
  {
    "id": "card_208",
    "cardNo": "208",
    "no": "208",
    "encyclopediaNo": "208",
    "name": "Fish",
    "rarity": 2,
    "up": 4,
    "right": 7,
    "down": 2,
    "left": 5,
    "power": 18,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 8,
    "collections": [
      "Animal Friends",
      "Ocean Animals"
    ]
  },
  {
    "id": "card_209",
    "cardNo": "209",
    "no": "209",
    "encyclopediaNo": "209",
    "name": "Bird",
    "rarity": 2,
    "up": 2,
    "right": 7,
    "down": 2,
    "left": 7,
    "power": 18,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 9,
    "collections": [
      "Animal Friends",
      "Flying Animals"
    ]
  },
  {
    "id": "card_210",
    "cardNo": "210",
    "no": "210",
    "encyclopediaNo": "210",
    "name": "Banana",
    "rarity": 2,
    "up": 7,
    "right": 7,
    "down": 2,
    "left": 2,
    "power": 18,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 10,
    "collections": [
      "Food Time"
    ]
  },
  {
    "id": "card_211",
    "cardNo": "211",
    "no": "211",
    "encyclopediaNo": "211",
    "name": "Cake",
    "rarity": 2,
    "up": 4,
    "right": 5,
    "down": 3,
    "left": 7,
    "power": 19,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 11,
    "collections": [
      "Food Time"
    ]
  },
  {
    "id": "card_212",
    "cardNo": "212",
    "no": "212",
    "encyclopediaNo": "212",
    "name": "Tree",
    "rarity": 2,
    "up": 5,
    "right": 6,
    "down": 2,
    "left": 6,
    "power": 19,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 12,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_213",
    "cardNo": "213",
    "no": "213",
    "encyclopediaNo": "213",
    "name": "Rain",
    "rarity": 2,
    "up": 7,
    "right": 5,
    "down": 5,
    "left": 1,
    "power": 18,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 13,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_214",
    "cardNo": "214",
    "no": "214",
    "encyclopediaNo": "214",
    "name": "Book",
    "rarity": 2,
    "up": 5,
    "right": 5,
    "down": 6,
    "left": 3,
    "power": 19,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 14,
    "collections": []
  },
  {
    "id": "card_215",
    "cardNo": "215",
    "no": "215",
    "encyclopediaNo": "215",
    "name": "Happy",
    "rarity": 2,
    "up": 7,
    "right": 1,
    "down": 1,
    "left": 7,
    "power": 16,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 15,
    "collections": [
      "Power Words"
    ]
  },
  {
    "id": "card_216",
    "cardNo": "216",
    "no": "216",
    "encyclopediaNo": "216",
    "name": "Horse",
    "rarity": 3,
    "up": 6,
    "right": 4,
    "down": 7,
    "left": 4,
    "power": 21,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 16,
    "collections": []
  },
  {
    "id": "card_217",
    "cardNo": "217",
    "no": "217",
    "encyclopediaNo": "217",
    "name": "Dolphin",
    "rarity": 3,
    "up": 7,
    "right": 6,
    "down": 6,
    "left": 6,
    "power": 25,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 17,
    "collections": [
      "Ocean Animals"
    ]
  },
  {
    "id": "card_218",
    "cardNo": "218",
    "no": "218",
    "encyclopediaNo": "218",
    "name": "Monkey",
    "rarity": 3,
    "up": 4,
    "right": 8,
    "down": 6,
    "left": 6,
    "power": 24,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 18,
    "collections": [
      "Wild Animals"
    ]
  },
  {
    "id": "card_219",
    "cardNo": "219",
    "no": "219",
    "encyclopediaNo": "219",
    "name": "Penguin",
    "rarity": 3,
    "up": 8,
    "right": 3,
    "down": 4,
    "left": 7,
    "power": 22,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 19,
    "collections": []
  },
  {
    "id": "card_220",
    "cardNo": "220",
    "no": "220",
    "encyclopediaNo": "220",
    "name": "Owl",
    "rarity": 3,
    "up": 3,
    "right": 8,
    "down": 4,
    "left": 8,
    "power": 23,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 20,
    "collections": [
      "Flying Animals"
    ]
  },
  {
    "id": "card_221",
    "cardNo": "221",
    "no": "221",
    "encyclopediaNo": "221",
    "name": "Fox",
    "rarity": 3,
    "up": 1,
    "right": 6,
    "down": 7,
    "left": 7,
    "power": 21,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 21,
    "collections": []
  },
  {
    "id": "card_222",
    "cardNo": "222",
    "no": "222",
    "encyclopediaNo": "222",
    "name": "Hamburger",
    "rarity": 3,
    "up": 3,
    "right": 8,
    "down": 7,
    "left": 3,
    "power": 21,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 22,
    "collections": [
      "Food Time"
    ]
  },
  {
    "id": "card_223",
    "cardNo": "223",
    "no": "223",
    "encyclopediaNo": "223",
    "name": "Strawberry",
    "rarity": 3,
    "up": 4,
    "right": 7,
    "down": 6,
    "left": 5,
    "power": 22,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 23,
    "collections": []
  },
  {
    "id": "card_224",
    "cardNo": "224",
    "no": "224",
    "encyclopediaNo": "224",
    "name": "Chocolate",
    "rarity": 3,
    "up": 7,
    "right": 1,
    "down": 8,
    "left": 6,
    "power": 22,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 24,
    "collections": [
      "Food Time"
    ]
  },
  {
    "id": "card_225",
    "cardNo": "225",
    "no": "225",
    "encyclopediaNo": "225",
    "name": "Mountain",
    "rarity": 3,
    "up": 6,
    "right": 7,
    "down": 4,
    "left": 4,
    "power": 21,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 25,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_226",
    "cardNo": "226",
    "no": "226",
    "encyclopediaNo": "226",
    "name": "River",
    "rarity": 3,
    "up": 8,
    "right": 7,
    "down": 4,
    "left": 4,
    "power": 23,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 26,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_227",
    "cardNo": "227",
    "no": "227",
    "encyclopediaNo": "227",
    "name": "Ocean",
    "rarity": 3,
    "up": 5,
    "right": 7,
    "down": 1,
    "left": 7,
    "power": 20,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 27,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_228",
    "cardNo": "228",
    "no": "228",
    "encyclopediaNo": "228",
    "name": "Rainbow",
    "rarity": 3,
    "up": 5,
    "right": 7,
    "down": 5,
    "left": 6,
    "power": 23,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 28,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_229",
    "cardNo": "229",
    "no": "229",
    "encyclopediaNo": "229",
    "name": "Train",
    "rarity": 3,
    "up": 8,
    "right": 4,
    "down": 5,
    "left": 4,
    "power": 21,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 29,
    "collections": [
      "Vehicles"
    ]
  },
  {
    "id": "card_230",
    "cardNo": "230",
    "no": "230",
    "encyclopediaNo": "230",
    "name": "Airplane",
    "rarity": 3,
    "up": 7,
    "right": 4,
    "down": 4,
    "left": 8,
    "power": 23,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 30,
    "collections": [
      "Vehicles"
    ]
  },
  {
    "id": "card_231",
    "cardNo": "231",
    "no": "231",
    "encyclopediaNo": "231",
    "name": "Ship",
    "rarity": 3,
    "up": 6,
    "right": 8,
    "down": 2,
    "left": 6,
    "power": 22,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 31,
    "collections": [
      "Vehicles"
    ]
  },
  {
    "id": "card_232",
    "cardNo": "232",
    "no": "232",
    "encyclopediaNo": "232",
    "name": "Run",
    "rarity": 3,
    "up": 7,
    "right": 7,
    "down": 4,
    "left": 4,
    "power": 22,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 32,
    "collections": [
      "Let's Move!"
    ]
  },
  {
    "id": "card_233",
    "cardNo": "233",
    "no": "233",
    "encyclopediaNo": "233",
    "name": "Jump",
    "rarity": 3,
    "up": 8,
    "right": 4,
    "down": 1,
    "left": 8,
    "power": 21,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 33,
    "collections": [
      "Let's Move!"
    ]
  },
  {
    "id": "card_234",
    "cardNo": "234",
    "no": "234",
    "encyclopediaNo": "234",
    "name": "Swim",
    "rarity": 3,
    "up": 4,
    "right": 2,
    "down": 8,
    "left": 8,
    "power": 22,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 34,
    "collections": [
      "Let's Move!"
    ]
  },
  {
    "id": "card_235",
    "cardNo": "235",
    "no": "235",
    "encyclopediaNo": "235",
    "name": "Brave",
    "rarity": 3,
    "up": 7,
    "right": 7,
    "down": 7,
    "left": 1,
    "power": 22,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 35,
    "collections": [
      "Power Words"
    ]
  },
  {
    "id": "card_236",
    "cardNo": "236",
    "no": "236",
    "encyclopediaNo": "236",
    "name": "Lion",
    "rarity": 4,
    "up": 9,
    "right": 3,
    "down": 6,
    "left": 8,
    "power": 26,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 36,
    "collections": [
      "Wild Animals"
    ]
  },
  {
    "id": "card_237",
    "cardNo": "237",
    "no": "237",
    "encyclopediaNo": "237",
    "name": "Tiger",
    "rarity": 4,
    "up": 1,
    "right": 9,
    "down": 8,
    "left": 7,
    "power": 25,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 37,
    "collections": [
      "Wild Animals"
    ]
  },
  {
    "id": "card_238",
    "cardNo": "238",
    "no": "238",
    "encyclopediaNo": "238",
    "name": "Eagle",
    "rarity": 4,
    "up": 8,
    "right": 8,
    "down": 1,
    "left": 8,
    "power": 25,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 38,
    "collections": [
      "Flying Animals"
    ]
  },
  {
    "id": "card_239",
    "cardNo": "239",
    "no": "239",
    "encyclopediaNo": "239",
    "name": "Shark",
    "rarity": 4,
    "up": 6,
    "right": 9,
    "down": 6,
    "left": 7,
    "power": 28,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 39,
    "collections": [
      "Ocean Animals"
    ]
  },
  {
    "id": "card_240",
    "cardNo": "240",
    "no": "240",
    "encyclopediaNo": "240",
    "name": "Elephant",
    "rarity": 4,
    "up": 9,
    "right": 5,
    "down": 7,
    "left": 6,
    "power": 27,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 40,
    "collections": [
      "Wild Animals"
    ]
  },
  {
    "id": "card_241",
    "cardNo": "241",
    "no": "241",
    "encyclopediaNo": "241",
    "name": "Volcano",
    "rarity": 4,
    "up": 1,
    "right": 9,
    "down": 7,
    "left": 8,
    "power": 25,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 41,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_242",
    "cardNo": "242",
    "no": "242",
    "encyclopediaNo": "242",
    "name": "Lightning",
    "rarity": 4,
    "up": 4,
    "right": 4,
    "down": 8,
    "left": 9,
    "power": 25,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 42,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_243",
    "cardNo": "243",
    "no": "243",
    "encyclopediaNo": "243",
    "name": "Hurricane",
    "rarity": 4,
    "up": 7,
    "right": 9,
    "down": 8,
    "left": 1,
    "power": 25,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 43,
    "collections": [
      "Nature"
    ]
  },
  {
    "id": "card_244",
    "cardNo": "244",
    "no": "244",
    "encyclopediaNo": "244",
    "name": "Rocket",
    "rarity": 4,
    "up": 9,
    "right": 3,
    "down": 3,
    "left": 9,
    "power": 24,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 44,
    "collections": [
      "Vehicles"
    ]
  },
  {
    "id": "card_245",
    "cardNo": "245",
    "no": "245",
    "encyclopediaNo": "245",
    "name": "Adventure",
    "rarity": 4,
    "up": 2,
    "right": 9,
    "down": 5,
    "left": 9,
    "power": 25,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 45,
    "collections": [
      "Power Words",
      "Legendary Words"
    ]
  },
  {
    "id": "card_246",
    "cardNo": "246",
    "no": "246",
    "encyclopediaNo": "246",
    "name": "Dragon",
    "rarity": 5,
    "up": 10,
    "right": 10,
    "down": 2,
    "left": 5,
    "power": 27,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 46,
    "collections": [
      "Legendary Words"
    ]
  },
  {
    "id": "card_247",
    "cardNo": "247",
    "no": "247",
    "encyclopediaNo": "247",
    "name": "Universe",
    "rarity": 5,
    "up": 10,
    "right": 7,
    "down": 8,
    "left": 4,
    "power": 29,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 47,
    "collections": [
      "Legendary Words"
    ]
  },
  {
    "id": "card_248",
    "cardNo": "248",
    "no": "248",
    "encyclopediaNo": "248",
    "name": "Miracle",
    "rarity": 5,
    "up": 9,
    "right": 10,
    "down": 1,
    "left": 7,
    "power": 27,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 48,
    "collections": [
      "Power Words",
      "Legendary Words"
    ]
  },
  {
    "id": "card_249",
    "cardNo": "249",
    "no": "249",
    "encyclopediaNo": "249",
    "name": "Infinity",
    "rarity": 5,
    "up": 4,
    "right": 9,
    "down": 7,
    "left": 9,
    "power": 29,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 49,
    "collections": [
      "Legendary Words"
    ]
  },
  {
    "id": "card_250",
    "cardNo": "250",
    "no": "250",
    "encyclopediaNo": "250",
    "name": "Champion",
    "rarity": 5,
    "up": 3,
    "right": 8,
    "down": 10,
    "left": 7,
    "power": 28,
    "type": "えいご",
    "subject": "えいご",
    "subjectNo": 50,
    "collections": [
      "Power Words",
      "Legendary Words"
    ]
  }
];

const NPCS = [
  {
    "id": "npc_001",
    "name": "こくご好き",
    "subject": "こくご",
    "rareChanceRate": 8,
    "difficulty": "よわい",
    "entryFee": 0,
    "winMoney": 1000,
    "rareChanceLabel": "こくごの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "4"
        },
        {
          "cardNo": "1"
        },
        {
          "cardNo": "2"
        },
        {
          "cardNo": "5"
        },
        {
          "cardNo": "8"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "4"
      },
      {
        "cardNo": "1"
      },
      {
        "cardNo": "2"
      },
      {
        "cardNo": "5"
      },
      {
        "cardNo": "8"
      }
    ],
    "handPattern": [],
    "rareChanceType": "こくご",
    "firstWinRewardCardRef": {
      "cardNo": "4"
    }
  },
  {
    "id": "npc_002",
    "name": "さんすう好き",
    "subject": "さんすう",
    "rareChanceRate": 8,
    "difficulty": "よわい",
    "entryFee": 0,
    "winMoney": 1000,
    "rareChanceLabel": "さんすうの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "51"
        },
        {
          "cardNo": "52"
        },
        {
          "cardNo": "54"
        },
        {
          "cardNo": "55"
        },
        {
          "cardNo": "57"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "51"
      },
      {
        "cardNo": "52"
      },
      {
        "cardNo": "54"
      },
      {
        "cardNo": "55"
      },
      {
        "cardNo": "57"
      }
    ],
    "handPattern": [],
    "rareChanceType": "さんすう",
    "firstWinRewardCardRef": {
      "cardNo": "51"
    }
  },
  {
    "id": "npc_003",
    "name": "りか好き",
    "subject": "りか",
    "rareChanceRate": 8,
    "difficulty": "よわい",
    "entryFee": 0,
    "winMoney": 1000,
    "rareChanceLabel": "りかの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "102"
        },
        {
          "cardNo": "101"
        },
        {
          "cardNo": "104"
        },
        {
          "cardNo": "105"
        },
        {
          "cardNo": "108"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "102"
      },
      {
        "cardNo": "101"
      },
      {
        "cardNo": "104"
      },
      {
        "cardNo": "105"
      },
      {
        "cardNo": "108"
      }
    ],
    "handPattern": [],
    "rareChanceType": "りか",
    "firstWinRewardCardRef": {
      "cardNo": "102"
    }
  },
  {
    "id": "npc_004",
    "name": "しゃかい好き",
    "subject": "しゃかい",
    "rareChanceRate": 8,
    "difficulty": "よわい",
    "entryFee": 0,
    "winMoney": 1000,
    "rareChanceLabel": "しゃかいの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "152"
        },
        {
          "cardNo": "151"
        },
        {
          "cardNo": "153"
        },
        {
          "cardNo": "155"
        },
        {
          "cardNo": "156"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "152"
      },
      {
        "cardNo": "151"
      },
      {
        "cardNo": "153"
      },
      {
        "cardNo": "155"
      },
      {
        "cardNo": "156"
      }
    ],
    "handPattern": [],
    "rareChanceType": "しゃかい",
    "firstWinRewardCardRef": {
      "cardNo": "152"
    }
  },
  {
    "id": "npc_005",
    "name": "えいご好き",
    "subject": "えいご",
    "rareChanceRate": 8,
    "difficulty": "よわい",
    "entryFee": 0,
    "winMoney": 1000,
    "rareChanceLabel": "えいごの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "201"
        },
        {
          "cardNo": "202"
        },
        {
          "cardNo": "204"
        },
        {
          "cardNo": "205"
        },
        {
          "cardNo": "206"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "201"
      },
      {
        "cardNo": "202"
      },
      {
        "cardNo": "204"
      },
      {
        "cardNo": "205"
      },
      {
        "cardNo": "206"
      }
    ],
    "handPattern": [],
    "rareChanceType": "えいご",
    "firstWinRewardCardRef": {
      "cardNo": "201"
    }
  },
  {
    "id": "npc_006",
    "name": "こくご名人",
    "subject": "こくご",
    "rareChanceRate": 15,
    "difficulty": "ふつう",
    "entryFee": 1000,
    "winMoney": 4000,
    "rareChanceLabel": "こくごの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "4"
        },
        {
          "cardNo": "8"
        },
        {
          "cardNo": "9"
        },
        {
          "cardNo": "12"
        },
        {
          "cardNo": "23"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "4"
      },
      {
        "cardNo": "8"
      },
      {
        "cardNo": "9"
      },
      {
        "cardNo": "12"
      },
      {
        "cardNo": "23"
      }
    ],
    "handPattern": [],
    "rareChanceType": "こくご",
    "firstWinRewardCardRef": {
      "cardNo": "8"
    }
  },
  {
    "id": "npc_007",
    "name": "さんすう名人",
    "subject": "さんすう",
    "rareChanceRate": 15,
    "difficulty": "ふつう",
    "entryFee": 1000,
    "winMoney": 4000,
    "rareChanceLabel": "さんすうの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "51"
        },
        {
          "cardNo": "56"
        },
        {
          "cardNo": "57"
        },
        {
          "cardNo": "63"
        },
        {
          "cardNo": "71"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "51"
      },
      {
        "cardNo": "56"
      },
      {
        "cardNo": "57"
      },
      {
        "cardNo": "63"
      },
      {
        "cardNo": "71"
      }
    ],
    "handPattern": [],
    "rareChanceType": "さんすう",
    "firstWinRewardCardRef": {
      "cardNo": "57"
    }
  },
  {
    "id": "npc_008",
    "name": "りか名人",
    "subject": "りか",
    "rareChanceRate": 15,
    "difficulty": "ふつう",
    "entryFee": 1000,
    "winMoney": 4000,
    "rareChanceLabel": "りかの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "102"
        },
        {
          "cardNo": "106"
        },
        {
          "cardNo": "108"
        },
        {
          "cardNo": "115"
        },
        {
          "cardNo": "129"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "102"
      },
      {
        "cardNo": "106"
      },
      {
        "cardNo": "108"
      },
      {
        "cardNo": "115"
      },
      {
        "cardNo": "129"
      }
    ],
    "handPattern": [],
    "rareChanceType": "りか",
    "firstWinRewardCardRef": {
      "cardNo": "108"
    }
  },
  {
    "id": "npc_009",
    "name": "しゃかい名人",
    "subject": "しゃかい",
    "rareChanceRate": 15,
    "difficulty": "ふつう",
    "entryFee": 1000,
    "winMoney": 4000,
    "rareChanceLabel": "しゃかいの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "152"
        },
        {
          "cardNo": "156"
        },
        {
          "cardNo": "159"
        },
        {
          "cardNo": "162"
        },
        {
          "cardNo": "174"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "152"
      },
      {
        "cardNo": "156"
      },
      {
        "cardNo": "159"
      },
      {
        "cardNo": "162"
      },
      {
        "cardNo": "174"
      }
    ],
    "handPattern": [],
    "rareChanceType": "しゃかい",
    "firstWinRewardCardRef": {
      "cardNo": "156"
    }
  },
  {
    "id": "npc_010",
    "name": "えいご名人",
    "subject": "えいご",
    "rareChanceRate": 15,
    "difficulty": "ふつう",
    "entryFee": 1000,
    "winMoney": 4000,
    "rareChanceLabel": "えいごの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "201"
        },
        {
          "cardNo": "206"
        },
        {
          "cardNo": "207"
        },
        {
          "cardNo": "209"
        },
        {
          "cardNo": "217"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "201"
      },
      {
        "cardNo": "206"
      },
      {
        "cardNo": "207"
      },
      {
        "cardNo": "209"
      },
      {
        "cardNo": "217"
      }
    ],
    "handPattern": [],
    "rareChanceType": "えいご",
    "firstWinRewardCardRef": {
      "cardNo": "206"
    }
  },
  {
    "id": "npc_011",
    "name": "こくご博士",
    "subject": "こくご",
    "rareChanceRate": 20,
    "difficulty": "つよい",
    "entryFee": 3000,
    "winMoney": 12000,
    "rareChanceLabel": "こくごの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "23"
        },
        {
          "cardNo": "25"
        },
        {
          "cardNo": "31"
        },
        {
          "cardNo": "32"
        },
        {
          "cardNo": "38"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "23"
      },
      {
        "cardNo": "25"
      },
      {
        "cardNo": "31"
      },
      {
        "cardNo": "32"
      },
      {
        "cardNo": "38"
      }
    ],
    "handPattern": [],
    "rareChanceType": "こくご",
    "firstWinRewardCardRef": {
      "cardNo": "23"
    }
  },
  {
    "id": "npc_012",
    "name": "さんすう博士",
    "subject": "さんすう",
    "rareChanceRate": 20,
    "difficulty": "つよい",
    "entryFee": 3000,
    "winMoney": 12000,
    "rareChanceLabel": "さんすうの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "66"
        },
        {
          "cardNo": "71"
        },
        {
          "cardNo": "79"
        },
        {
          "cardNo": "85"
        },
        {
          "cardNo": "88"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "66"
      },
      {
        "cardNo": "71"
      },
      {
        "cardNo": "79"
      },
      {
        "cardNo": "85"
      },
      {
        "cardNo": "88"
      }
    ],
    "handPattern": [],
    "rareChanceType": "さんすう",
    "firstWinRewardCardRef": {
      "cardNo": "71"
    }
  },
  {
    "id": "npc_013",
    "name": "りか博士",
    "subject": "りか",
    "rareChanceRate": 20,
    "difficulty": "つよい",
    "entryFee": 3000,
    "winMoney": 12000,
    "rareChanceLabel": "りかの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "121"
        },
        {
          "cardNo": "126"
        },
        {
          "cardNo": "129"
        },
        {
          "cardNo": "132"
        },
        {
          "cardNo": "136"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "121"
      },
      {
        "cardNo": "126"
      },
      {
        "cardNo": "129"
      },
      {
        "cardNo": "132"
      },
      {
        "cardNo": "136"
      }
    ],
    "handPattern": [],
    "rareChanceType": "りか",
    "firstWinRewardCardRef": {
      "cardNo": "129"
    }
  },
  {
    "id": "npc_014",
    "name": "しゃかい博士",
    "subject": "しゃかい",
    "rareChanceRate": 20,
    "difficulty": "つよい",
    "entryFee": 3000,
    "winMoney": 12000,
    "rareChanceLabel": "しゃかいの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "168"
        },
        {
          "cardNo": "172"
        },
        {
          "cardNo": "174"
        },
        {
          "cardNo": "185"
        },
        {
          "cardNo": "195"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "168"
      },
      {
        "cardNo": "172"
      },
      {
        "cardNo": "174"
      },
      {
        "cardNo": "185"
      },
      {
        "cardNo": "195"
      }
    ],
    "handPattern": [],
    "rareChanceType": "しゃかい",
    "firstWinRewardCardRef": {
      "cardNo": "174"
    }
  },
  {
    "id": "npc_015",
    "name": "えいご博士",
    "subject": "えいご",
    "rareChanceRate": 20,
    "difficulty": "つよい",
    "entryFee": 3000,
    "winMoney": 12000,
    "rareChanceLabel": "えいごの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "217"
        },
        {
          "cardNo": "228"
        },
        {
          "cardNo": "229"
        },
        {
          "cardNo": "235"
        },
        {
          "cardNo": "236"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "217"
      },
      {
        "cardNo": "228"
      },
      {
        "cardNo": "229"
      },
      {
        "cardNo": "235"
      },
      {
        "cardNo": "236"
      }
    ],
    "handPattern": [],
    "rareChanceType": "えいご",
    "firstWinRewardCardRef": {
      "cardNo": "217"
    }
  },
  {
    "id": "npc_016",
    "name": "学びマスター",
    "subject": "混合",
    "rareChanceRate": 25,
    "difficulty": "学びマスター",
    "entryFee": 10000,
    "winMoney": 40000,
    "rareChanceLabel": "★5確定候補",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo"
    ],
    "ruleGroup2": [
      "type_ascend",
      "type_descend",
      "mirror",
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "46"
        },
        {
          "cardNo": "94"
        },
        {
          "cardNo": "145"
        },
        {
          "cardNo": "185"
        },
        {
          "cardNo": "233"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "46"
      },
      {
        "cardNo": "94"
      },
      {
        "cardNo": "145"
      },
      {
        "cardNo": "185"
      },
      {
        "cardNo": "233"
      }
    ],
    "handPattern": [],
    "firstWinRewardChoiceRefs": [
      {
        "cardNo": "38"
      },
      {
        "cardNo": "88"
      },
      {
        "cardNo": "136"
      },
      {
        "cardNo": "195"
      },
      {
        "cardNo": "236"
      }
    ]
  },
  {
    "id": "npc_017",
    "name": "<大人>こくご好き",
    "subject": "こくご",
    "rareChanceRate": 16,
    "difficulty": "大人モード",
    "entryFee": 0,
    "winMoney": 2000,
    "rareChanceLabel": "こくごの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "4"
        },
        {
          "cardNo": "1"
        },
        {
          "cardNo": "2"
        },
        {
          "cardNo": "5"
        },
        {
          "cardNo": "8"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "4"
      },
      {
        "cardNo": "1"
      },
      {
        "cardNo": "2"
      },
      {
        "cardNo": "5"
      },
      {
        "cardNo": "8"
      }
    ],
    "handPattern": [],
    "rareChanceType": "こくご",
    "baseDifficulty": "よわい",
    "baseNpcId": "npc_001",
    "baseNpcNumber": 1,
    "isShura": true
  },
  {
    "id": "npc_018",
    "name": "<大人>さんすう好き",
    "subject": "さんすう",
    "rareChanceRate": 16,
    "difficulty": "大人モード",
    "entryFee": 0,
    "winMoney": 2000,
    "rareChanceLabel": "さんすうの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "51"
        },
        {
          "cardNo": "52"
        },
        {
          "cardNo": "54"
        },
        {
          "cardNo": "55"
        },
        {
          "cardNo": "57"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "51"
      },
      {
        "cardNo": "52"
      },
      {
        "cardNo": "54"
      },
      {
        "cardNo": "55"
      },
      {
        "cardNo": "57"
      }
    ],
    "handPattern": [],
    "rareChanceType": "さんすう",
    "baseDifficulty": "よわい",
    "baseNpcId": "npc_002",
    "baseNpcNumber": 2,
    "isShura": true
  },
  {
    "id": "npc_019",
    "name": "<大人>りか好き",
    "subject": "りか",
    "rareChanceRate": 16,
    "difficulty": "大人モード",
    "entryFee": 0,
    "winMoney": 2000,
    "rareChanceLabel": "りかの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "102"
        },
        {
          "cardNo": "101"
        },
        {
          "cardNo": "104"
        },
        {
          "cardNo": "105"
        },
        {
          "cardNo": "108"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "102"
      },
      {
        "cardNo": "101"
      },
      {
        "cardNo": "104"
      },
      {
        "cardNo": "105"
      },
      {
        "cardNo": "108"
      }
    ],
    "handPattern": [],
    "rareChanceType": "りか",
    "baseDifficulty": "よわい",
    "baseNpcId": "npc_003",
    "baseNpcNumber": 3,
    "isShura": true
  },
  {
    "id": "npc_020",
    "name": "<大人>しゃかい好き",
    "subject": "しゃかい",
    "rareChanceRate": 16,
    "difficulty": "大人モード",
    "entryFee": 0,
    "winMoney": 2000,
    "rareChanceLabel": "しゃかいの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "152"
        },
        {
          "cardNo": "151"
        },
        {
          "cardNo": "153"
        },
        {
          "cardNo": "155"
        },
        {
          "cardNo": "156"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "152"
      },
      {
        "cardNo": "151"
      },
      {
        "cardNo": "153"
      },
      {
        "cardNo": "155"
      },
      {
        "cardNo": "156"
      }
    ],
    "handPattern": [],
    "rareChanceType": "しゃかい",
    "baseDifficulty": "よわい",
    "baseNpcId": "npc_004",
    "baseNpcNumber": 4,
    "isShura": true
  },
  {
    "id": "npc_021",
    "name": "<大人>えいご好き",
    "subject": "えいご",
    "rareChanceRate": 16,
    "difficulty": "大人モード",
    "entryFee": 0,
    "winMoney": 2000,
    "rareChanceLabel": "えいごの★3",
    "ruleGroup1": [],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "201"
        },
        {
          "cardNo": "202"
        },
        {
          "cardNo": "204"
        },
        {
          "cardNo": "205"
        },
        {
          "cardNo": "206"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "201"
      },
      {
        "cardNo": "202"
      },
      {
        "cardNo": "204"
      },
      {
        "cardNo": "205"
      },
      {
        "cardNo": "206"
      }
    ],
    "handPattern": [],
    "rareChanceType": "えいご",
    "baseDifficulty": "よわい",
    "baseNpcId": "npc_005",
    "baseNpcNumber": 5,
    "isShura": true
  },
  {
    "id": "npc_022",
    "name": "<大人>こくご名人",
    "subject": "こくご",
    "rareChanceRate": 30,
    "difficulty": "大人モード",
    "entryFee": 2000,
    "winMoney": 8000,
    "rareChanceLabel": "こくごの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "4"
        },
        {
          "cardNo": "8"
        },
        {
          "cardNo": "9"
        },
        {
          "cardNo": "12"
        },
        {
          "cardNo": "23"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "4"
      },
      {
        "cardNo": "8"
      },
      {
        "cardNo": "9"
      },
      {
        "cardNo": "12"
      },
      {
        "cardNo": "23"
      }
    ],
    "handPattern": [],
    "rareChanceType": "こくご",
    "baseDifficulty": "ふつう",
    "baseNpcId": "npc_006",
    "baseNpcNumber": 6,
    "isShura": true
  },
  {
    "id": "npc_023",
    "name": "<大人>さんすう名人",
    "subject": "さんすう",
    "rareChanceRate": 30,
    "difficulty": "大人モード",
    "entryFee": 2000,
    "winMoney": 8000,
    "rareChanceLabel": "さんすうの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "51"
        },
        {
          "cardNo": "56"
        },
        {
          "cardNo": "57"
        },
        {
          "cardNo": "63"
        },
        {
          "cardNo": "71"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "51"
      },
      {
        "cardNo": "56"
      },
      {
        "cardNo": "57"
      },
      {
        "cardNo": "63"
      },
      {
        "cardNo": "71"
      }
    ],
    "handPattern": [],
    "rareChanceType": "さんすう",
    "baseDifficulty": "ふつう",
    "baseNpcId": "npc_007",
    "baseNpcNumber": 7,
    "isShura": true
  },
  {
    "id": "npc_024",
    "name": "<大人>りか名人",
    "subject": "りか",
    "rareChanceRate": 30,
    "difficulty": "大人モード",
    "entryFee": 2000,
    "winMoney": 8000,
    "rareChanceLabel": "りかの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "102"
        },
        {
          "cardNo": "106"
        },
        {
          "cardNo": "108"
        },
        {
          "cardNo": "115"
        },
        {
          "cardNo": "129"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "102"
      },
      {
        "cardNo": "106"
      },
      {
        "cardNo": "108"
      },
      {
        "cardNo": "115"
      },
      {
        "cardNo": "129"
      }
    ],
    "handPattern": [],
    "rareChanceType": "りか",
    "baseDifficulty": "ふつう",
    "baseNpcId": "npc_008",
    "baseNpcNumber": 8,
    "isShura": true
  },
  {
    "id": "npc_025",
    "name": "<大人>しゃかい名人",
    "subject": "しゃかい",
    "rareChanceRate": 30,
    "difficulty": "大人モード",
    "entryFee": 2000,
    "winMoney": 8000,
    "rareChanceLabel": "しゃかいの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "152"
        },
        {
          "cardNo": "156"
        },
        {
          "cardNo": "159"
        },
        {
          "cardNo": "162"
        },
        {
          "cardNo": "174"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "152"
      },
      {
        "cardNo": "156"
      },
      {
        "cardNo": "159"
      },
      {
        "cardNo": "162"
      },
      {
        "cardNo": "174"
      }
    ],
    "handPattern": [],
    "rareChanceType": "しゃかい",
    "baseDifficulty": "ふつう",
    "baseNpcId": "npc_009",
    "baseNpcNumber": 9,
    "isShura": true
  },
  {
    "id": "npc_026",
    "name": "<大人>えいご名人",
    "subject": "えいご",
    "rareChanceRate": 30,
    "difficulty": "大人モード",
    "entryFee": 2000,
    "winMoney": 8000,
    "rareChanceLabel": "えいごの★3～★4",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [],
    "rareChanceRarities": [
      3,
      4
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "201"
        },
        {
          "cardNo": "206"
        },
        {
          "cardNo": "207"
        },
        {
          "cardNo": "209"
        },
        {
          "cardNo": "217"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "201"
      },
      {
        "cardNo": "206"
      },
      {
        "cardNo": "207"
      },
      {
        "cardNo": "209"
      },
      {
        "cardNo": "217"
      }
    ],
    "handPattern": [],
    "rareChanceType": "えいご",
    "baseDifficulty": "ふつう",
    "baseNpcId": "npc_010",
    "baseNpcNumber": 10,
    "isShura": true
  },
  {
    "id": "npc_027",
    "name": "<大人>こくご博士",
    "subject": "こくご",
    "rareChanceRate": 40,
    "difficulty": "大人モード",
    "entryFee": 6000,
    "winMoney": 24000,
    "rareChanceLabel": "こくごの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "23"
        },
        {
          "cardNo": "25"
        },
        {
          "cardNo": "31"
        },
        {
          "cardNo": "32"
        },
        {
          "cardNo": "38"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "23"
      },
      {
        "cardNo": "25"
      },
      {
        "cardNo": "31"
      },
      {
        "cardNo": "32"
      },
      {
        "cardNo": "38"
      }
    ],
    "handPattern": [],
    "rareChanceType": "こくご",
    "baseDifficulty": "つよい",
    "baseNpcId": "npc_011",
    "baseNpcNumber": 11,
    "isShura": true
  },
  {
    "id": "npc_028",
    "name": "<大人>さんすう博士",
    "subject": "さんすう",
    "rareChanceRate": 40,
    "difficulty": "大人モード",
    "entryFee": 6000,
    "winMoney": 24000,
    "rareChanceLabel": "さんすうの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "66"
        },
        {
          "cardNo": "71"
        },
        {
          "cardNo": "79"
        },
        {
          "cardNo": "85"
        },
        {
          "cardNo": "88"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "66"
      },
      {
        "cardNo": "71"
      },
      {
        "cardNo": "79"
      },
      {
        "cardNo": "85"
      },
      {
        "cardNo": "88"
      }
    ],
    "handPattern": [],
    "rareChanceType": "さんすう",
    "baseDifficulty": "つよい",
    "baseNpcId": "npc_012",
    "baseNpcNumber": 12,
    "isShura": true
  },
  {
    "id": "npc_029",
    "name": "<大人>りか博士",
    "subject": "りか",
    "rareChanceRate": 40,
    "difficulty": "大人モード",
    "entryFee": 6000,
    "winMoney": 24000,
    "rareChanceLabel": "りかの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "121"
        },
        {
          "cardNo": "126"
        },
        {
          "cardNo": "129"
        },
        {
          "cardNo": "132"
        },
        {
          "cardNo": "136"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "121"
      },
      {
        "cardNo": "126"
      },
      {
        "cardNo": "129"
      },
      {
        "cardNo": "132"
      },
      {
        "cardNo": "136"
      }
    ],
    "handPattern": [],
    "rareChanceType": "りか",
    "baseDifficulty": "つよい",
    "baseNpcId": "npc_013",
    "baseNpcNumber": 13,
    "isShura": true
  },
  {
    "id": "npc_030",
    "name": "<大人>しゃかい博士",
    "subject": "しゃかい",
    "rareChanceRate": 40,
    "difficulty": "大人モード",
    "entryFee": 6000,
    "winMoney": 24000,
    "rareChanceLabel": "しゃかいの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "168"
        },
        {
          "cardNo": "172"
        },
        {
          "cardNo": "174"
        },
        {
          "cardNo": "185"
        },
        {
          "cardNo": "195"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "168"
      },
      {
        "cardNo": "172"
      },
      {
        "cardNo": "174"
      },
      {
        "cardNo": "185"
      },
      {
        "cardNo": "195"
      }
    ],
    "handPattern": [],
    "rareChanceType": "しゃかい",
    "baseDifficulty": "つよい",
    "baseNpcId": "npc_014",
    "baseNpcNumber": 14,
    "isShura": true
  },
  {
    "id": "npc_031",
    "name": "<大人>えいご博士",
    "subject": "えいご",
    "rareChanceRate": 40,
    "difficulty": "大人モード",
    "entryFee": 6000,
    "winMoney": 24000,
    "rareChanceLabel": "えいごの★4～★5",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo",
      "type_ascend",
      "type_descend",
      "mirror"
    ],
    "ruleGroup2": [
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      4,
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "217"
        },
        {
          "cardNo": "228"
        },
        {
          "cardNo": "229"
        },
        {
          "cardNo": "235"
        },
        {
          "cardNo": "236"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "217"
      },
      {
        "cardNo": "228"
      },
      {
        "cardNo": "229"
      },
      {
        "cardNo": "235"
      },
      {
        "cardNo": "236"
      }
    ],
    "handPattern": [],
    "rareChanceType": "えいご",
    "baseDifficulty": "つよい",
    "baseNpcId": "npc_015",
    "baseNpcNumber": 15,
    "isShura": true
  },
  {
    "id": "npc_032",
    "name": "<大人>学びマスター",
    "subject": "混合",
    "rareChanceRate": 50,
    "difficulty": "大人モード",
    "entryFee": 20000,
    "winMoney": 80000,
    "rareChanceLabel": "★5確定候補",
    "ruleGroup1": [
      "all_open",
      "swap",
      "plus",
      "same",
      "combo"
    ],
    "ruleGroup2": [
      "type_ascend",
      "type_descend",
      "mirror",
      "wild_card",
      "reverse",
      "ace_killer"
    ],
    "rareChanceRarities": [
      5
    ],
    "cardPoolSpec": {
      "fixedCardRefs": [
        {
          "cardNo": "46"
        },
        {
          "cardNo": "94"
        },
        {
          "cardNo": "145"
        },
        {
          "cardNo": "185"
        },
        {
          "cardNo": "233"
        }
      ]
    },
    "requiredCardRefs": [
      {
        "cardNo": "46"
      },
      {
        "cardNo": "94"
      },
      {
        "cardNo": "145"
      },
      {
        "cardNo": "185"
      },
      {
        "cardNo": "233"
      }
    ],
    "handPattern": [],
    "baseDifficulty": "学びマスター",
    "baseNpcId": "npc_016",
    "baseNpcNumber": 16,
    "isShura": true
  }
];

const COLLECTIONS = [
  {
    "name": "あまんきみこ",
    "subject": "こくご",
    "cardIds": [
      "card_012",
      "card_015",
      "card_016",
      "card_024"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "あまんきみこは、やさしさや不思議な出来事を描いた児童文学で知られているよ。"
  },
  {
    "name": "世界の物語",
    "subject": "こくご",
    "cardIds": [
      "card_002",
      "card_010",
      "card_018"
    ],
    "maxRarity": 3,
    "size": "small",
    "mpReward": 5000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "世界には、その土地の文化や考え方が伝わるさまざまな物語があるよ。"
  },
  {
    "name": "今西祐行",
    "subject": "こくご",
    "cardIds": [
      "card_025",
      "card_042"
    ],
    "maxRarity": 4,
    "size": "small",
    "mpReward": 50000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "戦争を題材にした物語から、平和の大切さについて考えてみよう。"
  },
  {
    "name": "動物たちの物語",
    "subject": "こくご",
    "cardIds": [
      "card_008",
      "card_023",
      "card_031",
      "card_039"
    ],
    "maxRarity": 4,
    "size": "medium",
    "mpReward": 50000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "動物が登場する物語には、命や友情、人との関わりがたくさん描かれているよ。"
  },
  {
    "name": "安房直子",
    "subject": "こくご",
    "cardIds": [
      "card_026",
      "card_045"
    ],
    "maxRarity": 4,
    "size": "small",
    "mpReward": 50000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "安房直子の作品には、日常と不思議な世界がつながる物語が多いよ。"
  },
  {
    "name": "宮沢賢治",
    "subject": "こくご",
    "cardIds": [
      "card_032",
      "card_038",
      "card_050"
    ],
    "maxRarity": 5,
    "size": "small",
    "mpReward": 500000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "宮沢賢治は、自然や生命を題材にした幻想的な作品を多く残した作家だよ。"
  },
  {
    "name": "戦争と平和",
    "subject": "こくご",
    "cardIds": [
      "card_016",
      "card_025",
      "card_034",
      "card_042"
    ],
    "maxRarity": 4,
    "size": "medium",
    "mpReward": 50000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "物語を通して、戦争が人々の生活に与えた影響と平和の大切さを学ぼう。"
  },
  {
    "name": "斎藤隆介",
    "subject": "こくご",
    "cardIds": [
      "card_017",
      "card_029"
    ],
    "maxRarity": 3,
    "size": "small",
    "mpReward": 5000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "斎藤隆介は、人の勇気ややさしさを力強く描いた作品を残したよ。"
  },
  {
    "name": "日本の昔話",
    "subject": "こくご",
    "cardIds": [
      "card_003",
      "card_014"
    ],
    "maxRarity": 2,
    "size": "small",
    "mpReward": 5000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "昔話は、昔から人々の間で語りつがれてきた物語だよ。"
  },
  {
    "name": "日本文学への入口",
    "subject": "こくご",
    "cardIds": [
      "card_046",
      "card_047",
      "card_048",
      "card_049",
      "card_050"
    ],
    "maxRarity": 5,
    "size": "medium",
    "mpReward": 500000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "中学・高校でも出会う有名作品。作品名と作者を今から覚えておこう！"
  },
  {
    "name": "はかる名人",
    "subject": "さんすう",
    "cardIds": [
      "card_061",
      "card_062",
      "card_073",
      "card_082"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "cm、m、L、gなど、何を測るかによって使う単位が変わるよ。"
  },
  {
    "name": "ひっ算マスター",
    "subject": "さんすう",
    "cardIds": [
      "card_058",
      "card_059",
      "card_068",
      "card_069"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "ひっ算を使えば、大きな数の計算も順番に解くことができるよ。"
  },
  {
    "name": "グラフ博士",
    "subject": "さんすう",
    "cardIds": [
      "card_065",
      "card_080",
      "card_086"
    ],
    "maxRarity": 4,
    "size": "small",
    "mpReward": 50000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "データを表やグラフにすると、違いや変化が見つけやすくなるよ。"
  },
  {
    "name": "円のひみつ",
    "subject": "さんすう",
    "cardIds": [
      "card_074",
      "card_094",
      "card_096"
    ],
    "maxRarity": 5,
    "size": "small",
    "mpReward": 500000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "円周率πは、円の周りの長さと直径の関係から生まれる特別な数だよ。"
  },
  {
    "name": "分数マスター",
    "subject": "さんすう",
    "cardIds": [
      "card_071",
      "card_089",
      "card_092"
    ],
    "maxRarity": 4,
    "size": "small",
    "mpReward": 50000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "分数や比は、全体に対する大きさを表すときに活躍するよ。"
  },
  {
    "name": "四則演算",
    "subject": "さんすう",
    "cardIds": [
      "card_051",
      "card_052",
      "card_056",
      "card_066"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "足す・引く・掛ける・割るの4つは、算数の計算の基本だよ。"
  },
  {
    "name": "図形マスター",
    "subject": "さんすう",
    "cardIds": [
      "card_063",
      "card_064",
      "card_075",
      "card_076",
      "card_077"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "辺の長さや角度に注目すると、図形の特徴が見えてくるよ。"
  },
  {
    "name": "大きさをくらべよう",
    "subject": "さんすう",
    "cardIds": [
      "card_060",
      "card_070",
      "card_071",
      "card_072",
      "card_081"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "数にはいろいろな表し方があり、大きさに合わせて使い分けるんだ。"
  },
  {
    "name": "数のふしぎ",
    "subject": "さんすう",
    "cardIds": [
      "card_091",
      "card_097",
      "card_099"
    ],
    "maxRarity": 5,
    "size": "small",
    "mpReward": 500000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "数をよく観察すると、規則や不思議な並び方が見つかるよ。"
  },
  {
    "name": "数学への入口",
    "subject": "さんすう",
    "cardIds": [
      "card_096",
      "card_097",
      "card_098",
      "card_099",
      "card_100"
    ],
    "maxRarity": 5,
    "size": "medium",
    "mpReward": 500000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "算数の先には、数や図形の不思議をもっと深く研究する数学の世界が広がっているよ。"
  },
  {
    "name": "カブトムシ一族",
    "subject": "りか",
    "cardIds": [
      "card_136",
      "card_148"
    ],
    "maxRarity": 5,
    "size": "small",
    "mpReward": 500000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "カブトムシの仲間には、大きな角を持つ力強い種類がいるよ。"
  },
  {
    "name": "地球と月",
    "subject": "りか",
    "cardIds": [
      "card_115",
      "card_129",
      "card_143"
    ],
    "maxRarity": 4,
    "size": "small",
    "mpReward": 50000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "地球は太陽の周りを回り、月は地球の周りを回っているよ。"
  },
  {
    "name": "太陽系コンプリート",
    "subject": "りか",
    "cardIds": [
      "card_105",
      "card_114",
      "card_128",
      "card_129",
      "card_130",
      "card_131",
      "card_141",
      "card_142"
    ],
    "maxRarity": 4,
    "size": "large",
    "mpReward": 50000,
    "fragmentReward": 50,
    "powerReward": 30,
    "description": "太陽から順に8つの惑星が並んでいるよ。順番も一緒に覚えてみよう！"
  },
  {
    "name": "宇宙の大事件",
    "subject": "りか",
    "cardIds": [
      "card_147",
      "card_149"
    ],
    "maxRarity": 5,
    "size": "small",
    "mpReward": 500000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "宇宙では、巨大な星の最期や強力な重力によって想像を超える現象が起こるよ。"
  },
  {
    "name": "巨大惑星",
    "subject": "りか",
    "cardIds": [
      "card_130",
      "card_131",
      "card_141",
      "card_142"
    ],
    "maxRarity": 4,
    "size": "medium",
    "mpReward": 50000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "太陽系の外側には、地球よりはるかに大きな惑星が並んでいるよ。"
  },
  {
    "name": "恐竜王国",
    "subject": "りか",
    "cardIds": [
      "card_145",
      "card_150"
    ],
    "maxRarity": 5,
    "size": "small",
    "mpReward": 500000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "トリケラトプスは植物食、ティラノサウルスは大型の肉食恐竜として知られているよ。"
  },
  {
    "name": "昆虫博士",
    "subject": "りか",
    "cardIds": [
      "card_108",
      "card_109",
      "card_110",
      "card_120",
      "card_121",
      "card_122",
      "card_123",
      "card_124",
      "card_136",
      "card_137",
      "card_138",
      "card_148"
    ],
    "maxRarity": 5,
    "size": "large",
    "mpReward": 500000,
    "fragmentReward": 50,
    "powerReward": 30,
    "description": "昆虫の体は、頭・胸・腹の3つに分かれ、脚は6本あるのが基本だよ。"
  },
  {
    "name": "星の世界",
    "subject": "りか",
    "cardIds": [
      "card_132",
      "card_133",
      "card_143",
      "card_144"
    ],
    "maxRarity": 4,
    "size": "medium",
    "mpReward": 50000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "太陽も、夜空に見える星たちと同じ「恒星」の仲間なんだよ。"
  },
  {
    "name": "植物博士",
    "subject": "りか",
    "cardIds": [
      "card_101",
      "card_102",
      "card_106",
      "card_107",
      "card_116",
      "card_117",
      "card_118",
      "card_119"
    ],
    "maxRarity": 3,
    "size": "large",
    "mpReward": 5000,
    "fragmentReward": 50,
    "powerReward": 30,
    "description": "植物は種類によって、花・葉・実・育ち方などにさまざまな特徴があるよ。"
  },
  {
    "name": "水辺の生き物",
    "subject": "りか",
    "cardIds": [
      "card_104",
      "card_112",
      "card_113",
      "card_126"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "池や川には、水の中や水辺の環境に適応した生き物が暮らしているよ。"
  },
  {
    "name": "信長の戦い",
    "subject": "しゃかい",
    "cardIds": [
      "card_183",
      "card_196",
      "card_199"
    ],
    "maxRarity": 5,
    "size": "small",
    "mpReward": 500000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "織田信長は戦国時代を大きく動かしたけれど、本能寺の変で生涯を終えたよ。"
  },
  {
    "name": "古都の名所",
    "subject": "しゃかい",
    "cardIds": [
      "card_152",
      "card_161",
      "card_162",
      "card_177"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "奈良や京都には、日本の歴史と文化を伝える建物が数多く残っているよ。"
  },
  {
    "name": "室町時代",
    "subject": "しゃかい",
    "cardIds": [
      "card_162",
      "card_169",
      "card_170",
      "card_184"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "足利氏が政治を行った室町時代には、金閣などの文化も発展したよ。"
  },
  {
    "name": "川中島のライバル",
    "subject": "しゃかい",
    "cardIds": [
      "card_172",
      "card_173",
      "card_182"
    ],
    "maxRarity": 3,
    "size": "small",
    "mpReward": 5000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "武田信玄と上杉謙信は、川中島で何度も戦った有名なライバルだよ。"
  },
  {
    "name": "幕末",
    "subject": "しゃかい",
    "cardIds": [
      "card_165",
      "card_174",
      "card_175",
      "card_185",
      "card_188"
    ],
    "maxRarity": 4,
    "size": "medium",
    "mpReward": 50000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "江戸時代の終わりには、日本の政治や社会が大きく変化したよ。"
  },
  {
    "name": "戦国三英傑",
    "subject": "しゃかい",
    "cardIds": [
      "card_196",
      "card_197",
      "card_198"
    ],
    "maxRarity": 5,
    "size": "small",
    "mpReward": 500000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "信長・秀吉・家康の3人は、戦国時代から天下統一へ進むうえで重要な人物だよ。"
  },
  {
    "name": "日本の城",
    "subject": "しゃかい",
    "cardIds": [
      "card_176",
      "card_190",
      "card_191"
    ],
    "maxRarity": 4,
    "size": "small",
    "mpReward": 50000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "城は戦いの拠点だけでなく、政治や町づくりの中心にもなったよ。"
  },
  {
    "name": "日本史オールスター",
    "subject": "しゃかい",
    "cardIds": [
      "card_156",
      "card_168",
      "card_170",
      "card_174",
      "card_175",
      "card_186",
      "card_187",
      "card_196",
      "card_197",
      "card_198"
    ],
    "maxRarity": 5,
    "size": "large",
    "mpReward": 500000,
    "fragmentReward": 50,
    "powerReward": 30,
    "description": "日本史の重要人物を時代順に並べると、日本の歴史の大きな流れが見えてくるよ。"
  },
  {
    "name": "明治への道",
    "subject": "しゃかい",
    "cardIds": [
      "card_185",
      "card_187",
      "card_194",
      "card_195"
    ],
    "maxRarity": 4,
    "size": "medium",
    "mpReward": 50000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "江戸幕府が終わり、日本は近代国家を目指して大きく変わっていったよ。"
  },
  {
    "name": "鎌倉時代",
    "subject": "しゃかい",
    "cardIds": [
      "card_153",
      "card_159",
      "card_168"
    ],
    "maxRarity": 3,
    "size": "small",
    "mpReward": 5000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "鎌倉時代には、武士を中心とした政治が本格的に始まったよ。"
  },
  {
    "name": "Animal Friends",
    "subject": "えいご",
    "cardIds": [
      "card_201",
      "card_206",
      "card_207",
      "card_208",
      "card_209"
    ],
    "maxRarity": 2,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "身近な動物の名前を英語で言えるようになろう！"
  },
  {
    "name": "Flying Animals",
    "subject": "えいご",
    "cardIds": [
      "card_209",
      "card_220",
      "card_238"
    ],
    "maxRarity": 4,
    "size": "small",
    "mpReward": 50000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "fly は「飛ぶ」という意味。空を飛ぶ動物を集めたよ。"
  },
  {
    "name": "Food Time",
    "subject": "えいご",
    "cardIds": [
      "card_202",
      "card_210",
      "card_211",
      "card_222",
      "card_224"
    ],
    "maxRarity": 3,
    "size": "medium",
    "mpReward": 5000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "食べ物の英単語は、日常会話でもよく登場するよ。"
  },
  {
    "name": "Legendary Words",
    "subject": "えいご",
    "cardIds": [
      "card_245",
      "card_246",
      "card_247",
      "card_248",
      "card_249",
      "card_250"
    ],
    "maxRarity": 5,
    "size": "large",
    "mpReward": 500000,
    "fragmentReward": 50,
    "powerReward": 30,
    "description": "特別感のある英単語を集めた、えいご属性の最高峰コレクションだよ！"
  },
  {
    "name": "Let's Move!",
    "subject": "えいご",
    "cardIds": [
      "card_232",
      "card_233",
      "card_234"
    ],
    "maxRarity": 3,
    "size": "small",
    "mpReward": 5000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "run、jump、swim は、体の動きを表す動詞だよ。"
  },
  {
    "name": "Nature",
    "subject": "えいご",
    "cardIds": [
      "card_203",
      "card_212",
      "card_213",
      "card_225",
      "card_226",
      "card_227",
      "card_228",
      "card_241",
      "card_242",
      "card_243"
    ],
    "maxRarity": 4,
    "size": "large",
    "mpReward": 50000,
    "fragmentReward": 50,
    "powerReward": 30,
    "description": "nature は「自然」。身の回りから大自然まで英語で表してみよう！"
  },
  {
    "name": "Ocean Animals",
    "subject": "えいご",
    "cardIds": [
      "card_208",
      "card_217",
      "card_239"
    ],
    "maxRarity": 4,
    "size": "small",
    "mpReward": 50000,
    "fragmentReward": 3,
    "powerReward": 10,
    "description": "海に暮らす生き物の英単語を覚えよう！"
  },
  {
    "name": "Power Words",
    "subject": "えいご",
    "cardIds": [
      "card_215",
      "card_235",
      "card_245",
      "card_248",
      "card_250"
    ],
    "maxRarity": 5,
    "size": "medium",
    "mpReward": 500000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "気持ちや挑戦、成功を表す英単語を覚えよう！"
  },
  {
    "name": "Vehicles",
    "subject": "えいご",
    "cardIds": [
      "card_229",
      "card_230",
      "card_231",
      "card_244"
    ],
    "maxRarity": 4,
    "size": "medium",
    "mpReward": 50000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "vehicle は、人や物を運ぶ乗り物を表す言葉だよ。"
  },
  {
    "name": "Wild Animals",
    "subject": "えいご",
    "cardIds": [
      "card_218",
      "card_236",
      "card_237",
      "card_240"
    ],
    "maxRarity": 4,
    "size": "medium",
    "mpReward": 50000,
    "fragmentReward": 10,
    "powerReward": 20,
    "description": "wild animal は「野生動物」という意味だよ。"
  }
];

const VERSION = "0.2.2";
const SAVE_KEY = "manabi_card_battle_save_v1";
const FIREBASE_ROOT = "manabi_card_battle_v1";

const cardById = new Map(CARDS.map((card) => [card.id, card]));

function normalizeCardLookupName(value) {
  return String(value ?? "").normalize("NFKC").trim();
}

function resolveCardRef(ref, contextLabel = "カード参照") {
  if (!ref) return null;
  if (typeof ref === "string") {
    return cardById.get(ref) ?? null;
  }

  const targetName = normalizeCardLookupName(ref.name);
  const candidates = CARDS.filter((card) => {
    if (targetName && normalizeCardLookupName(card.name) !== targetName) return false;
    if (ref.type && String(card.type ?? "") !== String(ref.type)) return false;
    if (ref.rarity && Number(card.rarity) !== Number(ref.rarity)) return false;
    if (ref.cardNo && String(card.cardNo) !== String(ref.cardNo)) return false;
    return true;
  });

  if (candidates.length === 1) return candidates[0];
  if (candidates.length > 1) {
    console.warn(`${contextLabel}: 複数カードが一致しました。先頭を使用します。`, ref, candidates.map((card) => card.id));
    return candidates[0];
  }
  console.warn(`${contextLabel}: カードが見つかりません。`, ref);
  return null;
}

function resolveCardPoolSpec(spec, contextLabel = "カードプール") {
  if (!spec) return [];
  const rarities = Array.isArray(spec.rarities) ? spec.rarities.map(Number) : null;
  const ids = new Set();
  const cards = [];
  const addCard = (card) => {
    if (!card || ids.has(card.id)) return;
    ids.add(card.id);
    cards.push(card);
  };

  if (rarities || spec.type || spec.untypedOnly) {
    for (const card of CARDS) {
      if (rarities && !rarities.includes(Number(card.rarity))) continue;
      if (spec.type && String(card.type ?? "") !== String(spec.type)) continue;
      if (spec.untypedOnly && card.type) continue;
      addCard(card);
    }
  }

  for (const ref of spec.fixedCardRefs ?? []) {
    addCard(resolveCardRef(ref, `${contextLabel}の固定カード`));
  }

  return cards;
}

function hydrateNpcCardReferences(npc) {
  const label = `${npc.name ?? npc.id}`;
  const poolCards = resolveCardPoolSpec(npc.cardPoolSpec, `${label}の所持カード`);
  if (poolCards.length) npc.cardPool = poolCards.map((card) => card.id);

  if (npc.littlePoolSpecs) {
    npc.littlePools = {};
    for (const [key, spec] of Object.entries(npc.littlePoolSpecs)) {
      npc.littlePools[key] = resolveCardPoolSpec(spec, `${label}のリトル${key}カード`).map((card) => card.id);
    }
  }

  if (Array.isArray(npc.requiredCardRefs)) {
    npc.requiredCards = npc.requiredCardRefs
      .map((ref) => resolveCardRef(ref, `${label}の必須カード`))
      .filter(Boolean)
      .map((card) => card.id);
  }

  if (npc.firstWinRewardCardRef) {
    npc.firstWinRewardCardId = resolveCardRef(npc.firstWinRewardCardRef, `${label}の初回勝利報酬`)?.id ?? null;
  }
  if (Array.isArray(npc.firstWinRewardChoiceRefs)) {
    npc.firstWinRewardChoiceIds = npc.firstWinRewardChoiceRefs.map((ref) => resolveCardRef(ref, `${label}の初回勝利報酬候補`)).filter(Boolean).map((card) => card.id);
  }

  if (Array.isArray(npc.fixedCardRefs)) {
    npc.fixedCards = npc.fixedCardRefs
      .map((ref) => resolveCardRef(ref, `${label}の固定カード`))
      .filter(Boolean)
      .map((card) => card.id);
  }
}

for (const npc of NPCS) hydrateNpcCardReferences(npc);
const npcById = new Map(NPCS.map((npc) => [npc.id, npc]));

const state = {
  save: null,
  selectedDeckIndex: 0,
  selectedHandIndex: null,
  deckSort: { field: "rarity", order: "desc" },
  ownedCardView: "vertical",
  battleCardPopup: true,
  selectedRuleIds: [],
  npcListMode: "normal",
  npcListUi: {
    difficulty: "all",
    winStatus: "all",
    attribute: "all",
    sortField: "number",
    sortOrder: "asc"
  },
  deckFilter: { rarity: "all", attribute: "all" },
  collectionFilter: { rarity: "all", attribute: "all", sortField: "number", sortOrder: "asc" },
  collectionRarityProgressOpen: false,
  enhancementView: "awakening",
  selectedAwakeningCardId: null,
  pendingKaijutsuUnlocks: [],
  shopStock: [],
  shopInitialized: false,
  pendingNpcItems: {
    npcId: null,
    lockDetectorUsed: false,
    miracleCharmUsed: false
  },
  online: {
    firebase: null,
    roomId: null,
    playerKey: null,
    unsubscribe: null,
    lastRoomStatus: null,
    finishedShown: false,
    ratingApplying: false,
    cachedProfile: null
  },
  battle: null,
  currentModalSpec: null,
  lastResultModalSpec: null,
  pixi: {
    app: null,
    boardLayer: null,
    effectLayer: null,
    cellSize: 132,
    gap: 12,
    originX: 22,
    originY: 22
  }
};

const $ = (id) => document.getElementById(id);

const screens = {
  title: $("screen-title"),
  battleSelect: $("screen-battle-select"),
  battleMenu: $("screen-battle-menu"),
  onlineBattle: $("screen-online-battle"),
  battle: $("screen-battle"),
  deck: $("screen-deck"),
  cardEnhance: $("screen-card-enhance"),
  shop: $("screen-shop"),
  collection: $("screen-collection"),
  rankings: $("screen-rankings"),
  rules: $("screen-rules"),
  settings: $("screen-settings")
};

const DECK_SORT_FIELDS = new Set(["name", "rarity", "right", "up", "left", "down", "power"]);

const RULES = [
  { id: "order", name: "オーダー", short: "デッキ左から順番に出すカードが固定されます。" },
  { id: "chaos", name: "カオス", short: "自分と相手の出すカードが毎ターンランダム指定されます。" },
  { id: "all_open", name: "オールオープン", short: "お互いの手札がすべて見える状態で開始します。" },
  { id: "swap", name: "スワップ", short: "開始前に手札1枚をランダム交換します。対戦後は戻ります。" },
  { id: "reverse", name: "リバース", short: "数字の強さが逆になります。Aが最弱、1が最強です。" },
  { id: "ace_killer", name: "エースキラー", short: "1だけがAに勝てます。1は2〜9には勝てません。" },
  { id: "type_ascend", name: "教科パワーアップ", short: "場に同じ属性カードが2枚以上ある時、その属性の場のカードだけが+補正されます。" },
  { id: "type_descend", name: "教科パワーダウン", short: "場に同じ属性カードが2枚以上ある時、その属性の場のカードだけが-補正されます。1未満にはなりません。" },
  { id: "mirror", name: "ミラー", short: "場に出した瞬間、カードの上下・左右の数字が入れ替わります。" },
  { id: "wild_card", name: "ワイルドカード", short: "対戦開始時に、各プレイヤーの手札からランダムで1枚だけ選ばれます。そのカードは「どれか1辺が+2」または「どれか1辺がAになり、別の1辺が1になる」のどちらかの変化を受けます。" },
  { id: "little_1", name: "リトル★", short: "★1までのカードだけで対戦します。★デッキを使用し、他の追加ルールも適用されます。" },
  { id: "little_2", name: "リトル★★", short: "★2までのカードだけで対戦します。★★デッキを使用し、他の追加ルールも適用されます。" },
  { id: "little_3", name: "リトル★★★", short: "★3までのカードだけで対戦します。★★★デッキを使用し、他の追加ルールも適用されます。" },
  { id: "plus", name: "プラス", short: "接する辺の合計値が2辺以上同じなら対象カードを奪います。" },
  { id: "same", name: "セイム", short: "接する2辺以上の数字が同じなら対象カードを奪います。" },
  { id: "combo", name: "コンボ", short: "奪ったカードからさらに通常比較で連鎖します。" }
];

const RULE_NAME_BY_ID = Object.fromEntries(RULES.map((rule) => [rule.id, rule.name]));
const CARD_TYPES = ["こくご", "さんすう", "りか", "しゃかい", "えいご"];
const CARD_SIDES = ["up", "right", "down", "left"];
const NORMAL_DECK_COUNT = 5;
const LITTLE_DECKS = [
  { index: 5, maxRarity: 1, label: "★デッキ", defaultName: "★デッキ" },
  { index: 6, maxRarity: 2, label: "★★デッキ", defaultName: "★★デッキ" },
  { index: 7, maxRarity: 3, label: "★★★デッキ", defaultName: "★★★デッキ" }
];
const TOTAL_DECK_COUNT = NORMAL_DECK_COUNT + LITTLE_DECKS.length;
const LITTLE_RULE_IDS = ["little_1", "little_2", "little_3"];
const SHOP_PRICES = { 1: 1000, 2: 5000, 3: 20000 };
const SHOP_ITEMS = [
  {
    id: "lock_detector",
    name: "ヒント虫めがね",
    price: 50000,
    maxOwned: 5,
    description: "追加ルール決定時に使用すると、対戦開始前からロックマスの場所が表示されます。"
  },
  {
    id: "miracle_charm",
    name: "ラッキーおまもり",
    price: 100000,
    maxOwned: 5,
    description: "追加ルール決定時に使用すると、その対戦だけレアチャンス率が2倍になります。"
  }
];
const SHOP_ITEM_BY_ID = new Map(SHOP_ITEMS.map((item) => [item.id, item]));
const AWAKENING_STAGE_SETTINGS = [
  { stage: 1, name: "スーパー", copies: 1 },
  { stage: 2, name: "ハイパー", copies: 2 },
  { stage: 3, name: "マスター", copies: 3 }
];
const AWAKENING_STAGE_BY_NUMBER = new Map(AWAKENING_STAGE_SETTINGS.map((item) => [item.stage, item]));
const LEARNING_GROWTH_COSTS = {
  1:{1:{mp:1000,fragments:5,power:5},2:{mp:3000,fragments:10,power:10},3:{mp:6000,fragments:20,power:15}},
  2:{1:{mp:2000,fragments:5,power:5},2:{mp:5000,fragments:15,power:10},3:{mp:13000,fragments:25,power:20}},
  3:{1:{mp:3000,fragments:10,power:5},2:{mp:10000,fragments:20,power:15},3:{mp:27000,fragments:40,power:25}},
  4:{1:{mp:5000,fragments:10,power:10},2:{mp:20000,fragments:30,power:20},3:{mp:55000,fragments:60,power:40}},
  5:{1:{mp:10000,fragments:20,power:10},2:{mp:40000,fragments:50,power:30},3:{mp:100000,fragments:100,power:60}}
};
function getLearningGrowthCost(card, stageSetting) {
  if (!card || !stageSetting) return {mp:0,fragments:0,power:0};
  return LEARNING_GROWTH_COSTS[Number(card.rarity)]?.[Number(stageSetting.stage)] ?? {mp:0,fragments:0,power:0};
}
function getAwakeningResidueCost(card, stageSetting) { return getLearningGrowthCost(card, stageSetting).fragments; }
const RESIDUE_VALUE_BY_RARITY = { 1: 1, 2: 1, 3: 3, 4: 10, 5: 30 };


const KAIJUTSU_SKILLS = [
  {
    id: "none",
    name: "なし",
    unlockRate: 0,
    description: "ひらめきスキルを使用しません。"
  },
  {
    id: "curse_boost",
    name: "パワーアップ",
    unlockRate: 20,
    description: "次に出すカードの選んだ1辺を、その対戦中だけ+1します。"
  },
  {
    id: "right_rebirth",
    name: "みぎ回転",
    unlockRate: 30,
    description: "次に出すカードを右へ90度回転させて配置します。"
  },
  {
    id: "left_rebirth",
    name: "ひだり回転",
    unlockRate: 30,
    description: "次に出すカードを左へ90度回転させて配置します。"
  },
  {
    id: "heaven_earth_rebirth",
    name: "さかさま回転",
    unlockRate: 40,
    description: "次に出すカードを180度回転させて配置します。上と下、右と左が入れ替わります。"
  },
  {
    id: "field_purge",
    name: "効果クリア",
    unlockRate: 50,
    description: "空いているマスの-2・-1・+1・+2のフィールド効果を1つ無効化します。ロックマスとカード配置済みマスには使えません。"
  },
  {
    id: "field_shift",
    name: "効果おひっこし",
    unlockRate: 55,
    description: "カードが置かれていないフィールド効果を1つ選び、フィールド効果のない別の空きマスへ移動します。ロックマスは対象外です。"
  },
  {
    id: "blood_contract",
    name: "得意と苦手",
    unlockRate: 60,
    description: "次に出すカードの選んだ1辺を+2し、別のランダムな1辺を-2します。"
  },
  {
    id: "soul_boost",
    name: "おうえんパワー",
    unlockRate: 65,
    description: "相手色になっている場のカードを1枚選び、好きな1辺を+1します。"
  },
  {
    id: "ominous_number",
    name: "大逆転",
    unlockRate: 70,
    description: "次に出すカードの最小の1辺をAにし、別の最大の1辺を1にします。同値の辺はランダムで選ばれます。"
  }
];
const KAIJUTSU_BY_ID = new Map(KAIJUTSU_SKILLS.map((skill) => [skill.id, skill]));
const NEXT_CARD_KAIJUTSU_IDS = new Set(["curse_boost", "right_rebirth", "left_rebirth", "heaven_earth_rebirth", "blood_contract", "ominous_number"]);
const CARD_APPLY_KAIJUTSU_IDS = new Set([...NEXT_CARD_KAIJUTSU_IDS, "soul_boost"]);

const SHOP_GRADE_SETTINGS = [
  { grade: 1, required: 0, refreshFee: 3000, rates: { 1: 70, 2: 25, 3: 5 } },
  { grade: 2, required: 50000, refreshFee: 3000, rates: { 1: 60, 2: 30, 3: 10 } },
  { grade: 3, required: 150000, refreshFee: 3000, rates: { 1: 50, 2: 35, 3: 15 } },
  { grade: 4, required: 400000, refreshFee: 3000, rates: { 1: 40, 2: 35, 3: 25 } },
  { grade: 5, required: 1000000, refreshFee: 3000, rates: { 1: 35, 2: 35, 3: 30 }, guaranteedStar3: true }
];

function normalizeDeckSort() {
  if (!DECK_SORT_FIELDS.has(state.deckSort.field)) state.deckSort.field = "rarity";
  if (!["asc", "desc"].includes(state.deckSort.order)) state.deckSort.order = "desc";
}

function normalizeOwnedCardView(view) {
  return view === "horizontal" ? "horizontal" : "vertical";
}

function getOwnedCardView() {
  return normalizeOwnedCardView(state.save?.settings?.ownedCardView ?? state.ownedCardView);
}

function setOwnedCardView(view) {
  state.ownedCardView = normalizeOwnedCardView(view);
  state.save.settings.ownedCardView = state.ownedCardView;
  save();
  updateOwnedCardViewButtons();
  renderOwnedCardList();
}

function updateOwnedCardViewButtons() {
  const view = getOwnedCardView();
  const vertical = $("ownedViewVertical");
  const horizontal = $("ownedViewHorizontal");
  if (!vertical || !horizontal) return;

  vertical.classList.toggle("active", view === "vertical");
  vertical.classList.toggle("ghost", view !== "vertical");
  horizontal.classList.toggle("active", view === "horizontal");
  horizontal.classList.toggle("ghost", view !== "horizontal");
}

function getLittleDeckByIndex(index) {
  return LITTLE_DECKS.find((deck) => deck.index === index) ?? null;
}

function isLittleDeckIndex(index) {
  return Boolean(getLittleDeckByIndex(index));
}

function getDeckDefaultName(index) {
  const little = getLittleDeckByIndex(index);
  return little ? little.defaultName : `デッキ${index + 1}`;
}

function getDeckDisplayName(index) {
  return String(state.save?.deckNames?.[index] || getDeckDefaultName(index));
}

function getDeckRarityLimitByIndex(index) {
  return getLittleDeckByIndex(index)?.maxRarity ?? null;
}

function isLittleRuleId(ruleId) {
  return LITTLE_RULE_IDS.includes(ruleId);
}

function getLittleRuleMaxRarity(ruleIds = []) {
  const rule = (ruleIds ?? []).find(isLittleRuleId);
  if (!rule) return null;
  return Number(rule.replace("little_", "")) || null;
}

function getLittleDeckIndexForRule(ruleIds = []) {
  const maxRarity = getLittleRuleMaxRarity(ruleIds);
  if (!maxRarity) return null;
  return LITTLE_DECKS.find((deck) => deck.maxRarity === maxRarity)?.index ?? null;
}

function getDeckIndexForRules(ruleIds = []) {
  return getLittleDeckIndexForRule(ruleIds) ?? state.save.activeDeckIndex;
}

function getDeckRuleNote(index) {
  const limit = getDeckRarityLimitByIndex(index);
  return limit ? `このデッキはリトル${rarityStars(limit)}専用です。${rarityStars(limit)}までのカードだけ登録できます。` : "通常対戦で使用するデッキです。";
}

function getDeckCardsByIndex(index) {
  return (state.save.decks[index] ?? []).map((id) => cardById.get(id)).filter(Boolean);
}

function compareOwnedCards(a, b) {
  normalizeDeckSort();
  const direction = state.deckSort.order === "asc" ? 1 : -1;
  const field = state.deckSort.field;
  let result = 0;

  if (field === "name") {
    result = String(a.name).localeCompare(String(b.name), "ja");
  } else {
    result = Number(a[field] ?? 0) - Number(b[field] ?? 0);
  }

  if (result !== 0) return result * direction;

  const fallbackPower = b.power - a.power;
  if (fallbackPower !== 0) return fallbackPower;
  return String(a.no).localeCompare(String(b.no), "ja", { numeric: true });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

let battleFitRaf = null;

function scheduleBattleAutoFit() {
  if (battleFitRaf !== null) cancelAnimationFrame(battleFitRaf);
  battleFitRaf = requestAnimationFrame(() => {
    battleFitRaf = null;
    fitBattleLayout();
  });
}

function rarityStars(rarity) {
  return "★".repeat(rarity);
}

function displayValue(value) {
  return value >= 10 ? "A" : String(value);
}

function formatMoney(amount) {
  return `${Number(amount ?? 0).toLocaleString("ja-JP")} MP`;
}

function getDiscoveredCount() {
  return CARDS.filter((card) => state.save.discoveredCards?.[card.id]).length;
}

function getCollectionRate() {
  return Math.floor((getDiscoveredCount() / Math.max(CARDS.length, 1)) * 10000) / 100;
}


function getCollectionRateForSave(saveData) {
  const discovered = CARDS.filter((card) => saveData?.discoveredCards?.[card.id]).length;
  return Math.floor((discovered / Math.max(CARDS.length, 1)) * 10000) / 100;
}

function unlockKaijutsuForSave(saveData) {
  if (!saveData || typeof saveData !== "object") return [];
  if (!saveData.unlockedKaijutsu || typeof saveData.unlockedKaijutsu !== "object") {
    saveData.unlockedKaijutsu = {};
  }
  const rate = getCollectionRateForSave(saveData);
  const newlyUnlocked = [];
  for (const skill of KAIJUTSU_SKILLS) {
    if (skill.id === "none") continue;
    if (rate >= Number(skill.unlockRate) && !saveData.unlockedKaijutsu[skill.id]) {
      saveData.unlockedKaijutsu[skill.id] = true;
      newlyUnlocked.push(skill.id);
    }
  }
  return newlyUnlocked;
}

function isKaijutsuUnlocked(skillId, saveData = state.save) {
  if (!skillId || skillId === "none") return true;
  return Boolean(saveData?.unlockedKaijutsu?.[skillId]);
}

function getDeckKaijutsuId(deckIndex) {
  const id = String(state.save?.deckKaijutsu?.[deckIndex] ?? "none");
  return KAIJUTSU_BY_ID.has(id) && isKaijutsuUnlocked(id) ? id : "none";
}

function getKaijutsuSkill(skillId) {
  return KAIJUTSU_BY_ID.get(skillId) ?? KAIJUTSU_BY_ID.get("none");
}

function safeUserNameKey(name) {
  const normalized = String(name ?? "").trim();
  return btoa(unescape(encodeURIComponent(normalized))).replace(/=+$/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function getOnlineUserName() {
  return String(state.save?.settings?.onlineUserName ?? "").trim();
}

function getOnlineUserNameKey() {
  const saved = String(state.save?.settings?.onlineUserNameKey ?? "").trim();
  return saved || (getOnlineUserName() ? safeUserNameKey(getOnlineUserName()) : "");
}

function getDefaultOnlineRating() {
  return 1500;
}

function getProfileRef(uid) {
  const fb = state.online.firebase;
  return fb.ref(fb.db, `${FIREBASE_ROOT}/profiles/${uid}`);
}

function getUsernameRef(nameKey) {
  const fb = state.online.firebase;
  return fb.ref(fb.db, `${FIREBASE_ROOT}/usernames/${nameKey}`);
}

function getLeaderboardRef(kind, uid = "") {
  const fb = state.online.firebase;
  return fb.ref(fb.db, uid ? `${FIREBASE_ROOT}/leaderboards/${kind}/${uid}` : `${FIREBASE_ROOT}/leaderboards/${kind}`);
}

function getCurrentRankingPayload(profile = null) {
  const name = getOnlineUserName();
  const username = profile?.username ?? name;
  const rating = Number(profile?.rating ?? getDefaultOnlineRating());
  const wins = Number(profile?.onlineWins ?? 0);
  const losses = Number(profile?.onlineLosses ?? 0);
  const draws = Number(profile?.onlineDraws ?? 0);
  const collectionCount = getDiscoveredCount();
  const collectionRate = getCollectionRate();
  const totalEarnedMoney = Number(state.save?.totalEarnedMoney ?? 0);
  const now = Date.now();
  return { username, rating, wins, losses, draws, collectionCount, collectionTotal: CARDS.length, collectionRate, totalEarnedMoney, updatedAt: now };
}

async function getOnlineProfile() {
  const fb = await ensureOnlineFirebase();
  const snap = await fb.get(getProfileRef(fb.uid));
  const currentName = getOnlineUserName();
  const profile = snap.exists() ? snap.val() : {};
  const merged = {
    uid: fb.uid,
    username: profile.username ?? currentName,
    usernameKey: profile.usernameKey ?? getOnlineUserNameKey(),
    rating: Number(profile.rating ?? getDefaultOnlineRating()),
    onlineWins: Number(profile.onlineWins ?? 0),
    onlineLosses: Number(profile.onlineLosses ?? 0),
    onlineDraws: Number(profile.onlineDraws ?? 0),
    createdAt: profile.createdAt ?? Date.now(),
    updatedAt: Date.now()
  };
  state.online.cachedProfile = merged;
  return merged;
}

async function syncPlayerRankings() {
  const name = getOnlineUserName();
  if (!name) return null;
  const fb = await ensureOnlineFirebase();
  const profile = await getOnlineProfile();
  const payload = getCurrentRankingPayload(profile);
  const profileUpdate = {
    uid: fb.uid,
    username: name,
    usernameKey: getOnlineUserNameKey(),
    rating: payload.rating,
    onlineWins: payload.wins,
    onlineLosses: payload.losses,
    onlineDraws: payload.draws,
    collectionCount: payload.collectionCount,
    collectionTotal: payload.collectionTotal,
    collectionRate: payload.collectionRate,
    totalEarnedMoney: payload.totalEarnedMoney,
    updatedAt: payload.updatedAt,
    createdAt: profile.createdAt ?? Date.now()
  };
  await fb.update(fb.ref(fb.db), {
    [`${FIREBASE_ROOT}/profiles/${fb.uid}`]: profileUpdate,
    [`${FIREBASE_ROOT}/leaderboards/onlineRating/${fb.uid}`]: {
      username: name,
      rating: payload.rating,
      wins: payload.wins,
      losses: payload.losses,
      draws: payload.draws,
      updatedAt: payload.updatedAt
    },
    [`${FIREBASE_ROOT}/leaderboards/collection/${fb.uid}`]: {
      username: name,
      rate: payload.collectionRate,
      count: payload.collectionCount,
      total: payload.collectionTotal,
      updatedAt: payload.updatedAt
    },
    [`${FIREBASE_ROOT}/leaderboards/totalEarnings/${fb.uid}`]: {
      username: name,
      totalEarnedMoney: payload.totalEarnedMoney,
      updatedAt: payload.updatedAt
    }
  });
  state.online.cachedProfile = profileUpdate;
  return profileUpdate;
}

function renderProfileSummary(profile = null) {
  const name = getOnlineUserName() || "未設定";
  const rating = Number(profile?.rating ?? state.online.cachedProfile?.rating ?? getDefaultOnlineRating());
  const settingName = $("settingUserName");
  if (settingName) settingName.value = getOnlineUserName();
  const rateLabels = [$("settingsRateLabel"), $("onlineRateLabel")].filter(Boolean);
  for (const label of rateLabels) label.textContent = `${rating}`;
  const usernameLabels = [$("settingsUserNameLabel"), $("onlineUserNameLabel")].filter(Boolean);
  for (const label of usernameLabels) label.textContent = name;
}

async function refreshProfileSummary() {
  try {
    if (!getOnlineUserName()) {
      renderProfileSummary(null);
      return;
    }
    const profile = await getOnlineProfile();
    renderProfileSummary(profile);
  } catch (error) {
    console.warn("profile refresh failed", error);
    renderProfileSummary(null);
  }
}

async function checkUserNameAvailability(showResult = true) {
  const input = $("settingUserName");
  const result = $("userNameCheckResult");
  const name = String(input?.value ?? "").trim();
  if (!name) {
    if (result) result.textContent = "ユーザー名を入力してください。";
    return false;
  }
  if (name.length > 16) {
    if (result) result.textContent = "ユーザー名は16文字以内にしてください。";
    return false;
  }
  try {
    const fb = await ensureOnlineFirebase();
    const key = safeUserNameKey(name);
    const snap = await fb.get(getUsernameRef(key));
    const value = snap.exists() ? snap.val() : null;
    const ok = !value || value.uid === fb.uid;
    if (showResult && result) result.textContent = ok ? "このユーザー名は使用できます。" : "このユーザー名は既に使用されています。";
    return ok;
  } catch (error) {
    if (result) result.textContent = `確認エラー：${error.message ?? error}`;
    return false;
  }
}

async function saveUserNameSetting() {
  const input = $("settingUserName");
  const result = $("userNameCheckResult");
  const name = String(input?.value ?? "").trim();
  if (!name) {
    if (result) result.textContent = "ユーザー名を入力してください。";
    return;
  }
  const ok = await checkUserNameAvailability(false);
  if (!ok) {
    if (result) result.textContent = "このユーザー名は使用できません。";
    return;
  }
  try {
    const fb = await ensureOnlineFirebase();
    const newKey = safeUserNameKey(name);
    const oldKey = getOnlineUserNameKey();
    const updates = {};
    if (oldKey && oldKey !== newKey) {
      const oldSnap = await fb.get(getUsernameRef(oldKey));
      if (oldSnap.exists() && oldSnap.val()?.uid === fb.uid) updates[`${FIREBASE_ROOT}/usernames/${oldKey}`] = null;
    }
    updates[`${FIREBASE_ROOT}/usernames/${newKey}`] = { uid: fb.uid, name, updatedAt: Date.now() };
    await fb.update(fb.ref(fb.db), updates);
    state.save.settings.onlineUserName = name;
    state.save.settings.onlineUserNameKey = newKey;
    save();
    const profile = await syncPlayerRankings();
    renderProfileSummary(profile);
    if (result) result.textContent = "ユーザー名を保存しました。";
  } catch (error) {
    if (result) result.textContent = `保存エラー：${error.message ?? error}`;
  }
}

function requireOnlineUserName() {
  if (getOnlineUserName()) return true;
  showModal("ユーザー名設定", "<p>オンライン対戦・ランキングを使うには、設定画面でランキング用ユーザー名を登録してください。</p>", [
    { label: "設定へ", onClick: () => { closeModal(); showScreen("settings"); } },
    { label: "閉じる", className: "ghost", onClick: closeModal }
  ]);
  return false;
}

function calculateElo(ratingA, ratingB, scoreA, k = 32) {
  const expectedA = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
  return Math.round(ratingA + k * (scoreA - expectedA));
}

async function applyOnlineRatingIfNeeded(room) {
  if (!room || room.status !== "finished" || room.ratingApplied || state.online.playerKey !== "p1" || state.online.ratingApplying) return;
  state.online.ratingApplying = true;
  try {
    const fb = await ensureOnlineFirebase();
    const p1Uid = room.players?.p1?.uid;
    const p2Uid = room.players?.p2?.uid;
    if (!p1Uid || !p2Uid) return;
    const [p1Snap, p2Snap] = await Promise.all([
      fb.get(getProfileRef(p1Uid)),
      fb.get(getProfileRef(p2Uid))
    ]);
    const p1Profile = p1Snap.exists() ? p1Snap.val() : {};
    const p2Profile = p2Snap.exists() ? p2Snap.val() : {};
    const p1Old = Number(p1Profile.rating ?? getDefaultOnlineRating());
    const p2Old = Number(p2Profile.rating ?? getDefaultOnlineRating());
    const winner = room.result?.winner ?? room.winner ?? "draw";
    const p1Score = winner === "draw" ? 0.5 : winner === "p1" ? 1 : 0;
    const p2Score = winner === "draw" ? 0.5 : winner === "p2" ? 1 : 0;
    const p1New = calculateElo(p1Old, p2Old, p1Score);
    const p2New = calculateElo(p2Old, p1Old, p2Score);
    const now = Date.now();
    const p1Name = p1Profile.username ?? room.players?.p1?.name ?? "プレイヤー1";
    const p2Name = p2Profile.username ?? room.players?.p2?.name ?? "プレイヤー2";
    const p1Wins = Number(p1Profile.onlineWins ?? 0) + (winner === "p1" ? 1 : 0);
    const p1Losses = Number(p1Profile.onlineLosses ?? 0) + (winner === "p2" ? 1 : 0);
    const p1Draws = Number(p1Profile.onlineDraws ?? 0) + (winner === "draw" ? 1 : 0);
    const p2Wins = Number(p2Profile.onlineWins ?? 0) + (winner === "p2" ? 1 : 0);
    const p2Losses = Number(p2Profile.onlineLosses ?? 0) + (winner === "p1" ? 1 : 0);
    const p2Draws = Number(p2Profile.onlineDraws ?? 0) + (winner === "draw" ? 1 : 0);
    await fb.update(fb.ref(fb.db), {
      [`${FIREBASE_ROOT}/profiles/${p1Uid}/rating`]: p1New,
      [`${FIREBASE_ROOT}/profiles/${p1Uid}/onlineWins`]: p1Wins,
      [`${FIREBASE_ROOT}/profiles/${p1Uid}/onlineLosses`]: p1Losses,
      [`${FIREBASE_ROOT}/profiles/${p1Uid}/onlineDraws`]: p1Draws,
      [`${FIREBASE_ROOT}/profiles/${p1Uid}/updatedAt`]: now,
      [`${FIREBASE_ROOT}/profiles/${p2Uid}/rating`]: p2New,
      [`${FIREBASE_ROOT}/profiles/${p2Uid}/onlineWins`]: p2Wins,
      [`${FIREBASE_ROOT}/profiles/${p2Uid}/onlineLosses`]: p2Losses,
      [`${FIREBASE_ROOT}/profiles/${p2Uid}/onlineDraws`]: p2Draws,
      [`${FIREBASE_ROOT}/profiles/${p2Uid}/updatedAt`]: now,
      [`${FIREBASE_ROOT}/leaderboards/onlineRating/${p1Uid}`]: { username: p1Name, rating: p1New, wins: p1Wins, losses: p1Losses, draws: p1Draws, updatedAt: now },
      [`${FIREBASE_ROOT}/leaderboards/onlineRating/${p2Uid}`]: { username: p2Name, rating: p2New, wins: p2Wins, losses: p2Losses, draws: p2Draws, updatedAt: now },
      [`${FIREBASE_ROOT}/rooms/${room.roomId}/ratingApplied`]: true,
      [`${FIREBASE_ROOT}/rooms/${room.roomId}/ratingChange`]: {
        p1: { old: p1Old, new: p1New, diff: p1New - p1Old },
        p2: { old: p2Old, new: p2New, diff: p2New - p2Old }
      }
    });
  } catch (error) {
    console.error("rating apply failed", error);
    try {
      const fb = await ensureOnlineFirebase();
      if (room?.roomId) await fb.update(onlineRoomRef(room.roomId), { ratingApplied: true, ratingError: String(error.message ?? error) });
    } catch (innerError) {
      console.error("rating error flag failed", innerError);
    }
  } finally {
    state.online.ratingApplying = false;
  }
}


function updateMoneyDisplays() {
  document.querySelectorAll("[data-money-display]").forEach((element) => {
    element.textContent = formatMoney(state.save?.money ?? 0);
  });
}

function getShopGradeSetting(total = state.save?.shopPurchaseTotal ?? 0) {
  const purchaseTotal = Number(total ?? 0);
  return [...SHOP_GRADE_SETTINGS]
    .reverse()
    .find((setting) => purchaseTotal >= setting.required) ?? SHOP_GRADE_SETTINGS[0];
}

function getNextShopGradeSetting() {
  const current = getShopGradeSetting();
  return SHOP_GRADE_SETTINGS.find((setting) => setting.grade > current.grade) ?? null;
}

function getShopRefreshFee() {
  return getShopGradeSetting().refreshFee;
}

function getShopStockPlan() { return getShopGradeSetting().rates; }

function getCardShopPrice(card) {
  return SHOP_PRICES[Number(card?.rarity)] ?? null;
}

function getCardSellPrice(card) { return Number(RESIDUE_VALUE_BY_RARITY[Number(card?.rarity)] ?? 0); }

function getOwnedItemCount(itemId) {
  return Math.max(0, Math.floor(Number(state.save?.items?.[itemId] ?? 0)));
}

function getRemainingItemCapacity(itemId) {
  const item = SHOP_ITEM_BY_ID.get(itemId);
  if (!item) return 0;
  return Math.max(0, item.maxOwned - getOwnedItemCount(itemId));
}

function ensurePendingNpcItems(npcId) {
  if (state.pendingNpcItems?.npcId === npcId) return state.pendingNpcItems;
  state.pendingNpcItems = {
    npcId,
    lockDetectorUsed: false,
    miracleCharmUsed: false
  };
  return state.pendingNpcItems;
}

function getPendingNpcItemStatus(itemId, npcId) {
  const pending = ensurePendingNpcItems(npcId);
  if (itemId === "lock_detector") return Boolean(pending.lockDetectorUsed);
  if (itemId === "miracle_charm") return Boolean(pending.miracleCharmUsed);
  return false;
}

function getBattlePrepItemFlag(itemId) {
  if (itemId === "lock_detector") return "lockDetectorUsed";
  if (itemId === "miracle_charm") return "miracleCharmUsed";
  return null;
}

function toggleBattlePrepItem(itemId, npcId) {
  const item = SHOP_ITEM_BY_ID.get(itemId);
  if (!item) return { ok: false, message: "アイテムが見つかりません。" };
  const pending = ensurePendingNpcItems(npcId);
  const flag = getBattlePrepItemFlag(itemId);
  if (!flag) return { ok: false, message: "このアイテムは使用できません。" };

  const nextEnabled = !Boolean(pending[flag]);
  if (nextEnabled && getOwnedItemCount(itemId) <= 0) {
    return { ok: false, message: `${item.name}を所持していません。` };
  }

  pending[flag] = nextEnabled;
  return {
    ok: true,
    enabled: nextEnabled,
    message: `${item.name}を${nextEnabled ? "ON" : "OFF"}にしました。`
  };
}

function consumeOwnedBattleItem(itemId) {
  const owned = getOwnedItemCount(itemId);
  if (owned <= 0) return false;
  state.save.items[itemId] = owned - 1;
  return true;
}

function finalizeBattlePrepItems(pendingItems, lockCells) {
  const hasLockCell = Object.keys(lockCells ?? {}).length > 0;
  const result = {
    lockDetectorRequested: Boolean(pendingItems?.lockDetectorUsed),
    miracleCharmRequested: Boolean(pendingItems?.miracleCharmUsed),
    lockDetectorConsumed: false,
    miracleCharmConsumed: false,
    lockDetectorReturned: false
  };

  if (result.lockDetectorRequested) {
    if (hasLockCell) {
      result.lockDetectorConsumed = consumeOwnedBattleItem("lock_detector");
    } else {
      // ロックマスが存在しない対戦では消費しない。
      result.lockDetectorReturned = true;
    }
  }

  if (result.miracleCharmRequested) {
    result.miracleCharmConsumed = consumeOwnedBattleItem("miracle_charm");
  }

  if (result.lockDetectorConsumed || result.miracleCharmConsumed) save();
  return result;
}

function getTotalInAllDecks(cardId) {
  return (state.save?.decks ?? []).reduce((sum, deck) => sum + countInDeck(deck, cardId), 0);
}

function getCardNumericId(card) {
  const raw = String(card.cardNo ?? card.id ?? card.no ?? "");
  return Number(raw.replace(/\D/g, "")) || 0;
}

function getCardType(card) { return card?.type ? String(card.type) : ""; }

function getCardTypeMeta(card) {
  const type = getCardType(card);
  switch (type) {
    case "こくご": return { key: "kokugo", label: "こくご", longLabel: "こくご", color: "#e74c3c" };
    case "さんすう": return { key: "sansuu", label: "さんすう", longLabel: "さんすう", color: "#3498db" };
    case "りか": return { key: "rika", label: "りか", longLabel: "りか", color: "#f1c40f" };
    case "しゃかい": return { key: "shakai", label: "しゃかい", longLabel: "しゃかい", color: "#2ecc71" };
    case "えいご": return { key: "eigo", label: "えいご", longLabel: "えいご", color: "#9b59b6" };
    default: return { key: "none", label: "", longLabel: "", color: "#a3adbd" };
  }
}

function applyCardTypeStyle(element, card) {
  if (!element || !card) return;
  const meta = getCardTypeMeta(card);
  element.dataset.type = meta.key;
  element.style.setProperty("--card-type-color", meta.color);
}

function isBattleCardPopupEnabled() {
  return Boolean(state.save?.settings?.battleCardPopup);
}

function hasRule(ruleId, battle = state.battle) {
  return Boolean(battle?.rules?.includes(ruleId));
}

function getCardRawValue(card, side) {
  return Number(card?.battleValues?.[side] ?? card?.[side] ?? 0);
}

function cloneCardForBattle(card, battleMod = null) {
  if (!card) return card;
  if (!battleMod || typeof battleMod !== "object") return card;

  // v0.1.44以降は { values, changes } 形式。旧オンライン部屋の数値だけの形式にも対応する。
  const sourceValues = battleMod.values && typeof battleMod.values === "object"
    ? battleMod.values
    : battleMod;
  const cleanValues = Object.fromEntries(
    CARD_SIDES.map((side) => [side, clamp(Number(sourceValues[side] ?? card[side] ?? 0), 1, 10)])
  );
  const sourceChanges = battleMod.changes && typeof battleMod.changes === "object"
    ? battleMod.changes
    : {};
  const wildChanges = Object.fromEntries(
    CARD_SIDES
      .filter((side) => ["plus2", "ace", "one"].includes(sourceChanges[side]))
      .map((side) => [side, sourceChanges[side]])
  );

  return {
    ...card,
    battleValues: cleanValues,
    wildChanges,
    shuraChanges: card?.shuraChanges ? { ...card.shuraChanges } : undefined
  };
}

function generateWildCardMods(cards) {
  if (!Array.isArray(cards) || cards.length === 0) return {};
  const index = Math.floor(Math.random() * cards.length);
  const card = cards[index];
  if (!card) return {};
  const values = Object.fromEntries(CARD_SIDES.map((side) => [side, getCardRawValue(card, side)]));
  const changes = {};

  if (Math.random() < 0.5) {
    const side = sample(CARD_SIDES, 1)[0];
    values[side] = clamp(values[side] + 2, 1, 10);
    // +2の結果Aになった場合も黄色表示にする。
    changes[side] = "plus2";
  } else {
    const sides = shuffle(CARD_SIDES);
    values[sides[0]] = 10;
    values[sides[1]] = 1;
    changes[sides[0]] = "ace";
    changes[sides[1]] = "one";
  }
  return { [index]: { values, changes } };
}

function applyWildCardModsToCards(cards, mods = {}) {
  return (cards ?? []).map((card, index) => cloneCardForBattle(card, mods?.[index] ?? mods?.[String(index)] ?? null));
}

function getWildChangeClass(card, side) {
  const change = card?.wildChanges?.[side];
  if (change === "plus2") return "wild-plus2";
  if (change === "ace") return "wild-ace";
  if (change === "one") return "wild-one";
  return "";
}


function getKaijutsuChangeClass(card, side) {
  return card?.kaijutsuChanges?.[side] ? "kaijutsu-value" : "";
}

function getWildValueColor(card, side) {
  const change = card?.wildChanges?.[side];
  if (change === "plus2") return 0xffdf4d;
  if (change === "ace") return 0x55aaff;
  if (change === "one") return 0xff5b5b;
  if (card?.kaijutsuChanges?.[side]) return 0xd9a7ff;
  if (isAwakeningEnhancedSide(card, side)) return 0xffd45c;
  return 0xffffff;
}

function isShuraNpc(npc) { return Boolean(npc?.isShura || npc?.difficulty === "大人モード"); }

function isShuraEnhancedSide(card, side) {
  return Boolean(card?.shuraChanges?.[side]);
}

function applyShuraEnhancement(card) {
  if (!card) return card;
  const values = Object.fromEntries(CARD_SIDES.map((side) => [side, getCardRawValue(card, side)]));
  const changed = {};
  const rarity = Number(card.rarity ?? 0);

  if (rarity === 1) {
    // ★1：ランダムな1辺を+1（上限A）
    for (const side of sample(CARD_SIDES, 1)) {
      const before = values[side];
      values[side] = clamp(before + 1, 1, 10);
      if (values[side] !== before) changed[side] = true;
    }
  } else if (rarity === 2) {
    // ★2：重複しないランダムな2辺をそれぞれ+1（上限A）
    for (const side of sample(CARD_SIDES, 2)) {
      const before = values[side];
      values[side] = clamp(before + 1, 1, 10);
      if (values[side] !== before) changed[side] = true;
    }
  } else if (rarity === 3) {
    // ★3：重複しないランダムな3辺をそれぞれ+1（上限A）
    for (const side of sample(CARD_SIDES, 3)) {
      const before = values[side];
      values[side] = clamp(before + 1, 1, 10);
      if (values[side] !== before) changed[side] = true;
    }
  } else if (rarity === 4) {
    const candidates = CARD_SIDES.filter((side) => values[side] < 9);
    if (candidates.length) {
      const side = sample(candidates, 1)[0];
      values[side] = 9;
      changed[side] = true;
    }
  } else if (rarity >= 5) {
    const candidates = CARD_SIDES.filter((side) => values[side] < 10);
    if (candidates.length) {
      const side = sample(candidates, 1)[0];
      values[side] = 10;
      changed[side] = true;
    }
  }

  return {
    ...card,
    battleValues: values,
    shuraChanges: changed,
    isShuraCard: true
  };
}

function applyShuraEnhancementsToNpcHand(cards, npc) {
  if (!isShuraNpc(npc)) return cards;
  return (cards ?? []).map((card) => applyShuraEnhancement(card));
}

function setupWildCardForHands(playerCards, npcCards, battle = state.battle) {
  if (!hasRule("wild_card", battle)) {
    return { playerCards, npcCards, playerMods: {}, npcMods: {} };
  }
  const playerMods = generateWildCardMods(playerCards);
  const npcMods = generateWildCardMods(npcCards);
  return {
    playerCards: applyWildCardModsToCards(playerCards, playerMods),
    npcCards: applyWildCardModsToCards(npcCards, npcMods),
    playerMods,
    npcMods
  };
}


function applyKaijutsuToCard(card, skillId, options = {}) {
  if (!card || !CARD_APPLY_KAIJUTSU_IDS.has(skillId)) return card;
  const values = Object.fromEntries(CARD_SIDES.map((side) => [side, getCardRawValue(card, side)]));
  const changes = {};
  let rotation = null;
  let summary = "";
  const sideLabels = { up: "上", right: "右", down: "下", left: "左" };

  if (skillId === "curse_boost") {
    const side = CARD_SIDES.includes(options.side) ? options.side : "up";
    const before = values[side];
    values[side] = clamp(before + 1, 1, 10);
    changes[side] = true;
    summary = `${sideLabels[side]}${displayValue(before)}→${displayValue(values[side])}`;
  } else if (skillId === "right_rebirth") {
    rotation = "right";
    summary = "右へ90度回転";
  } else if (skillId === "left_rebirth") {
    rotation = "left";
    summary = "左へ90度回転";
  } else if (skillId === "heaven_earth_rebirth") {
    rotation = "half";
    summary = "180度回転";
  } else if (skillId === "blood_contract") {
    const plusSide = CARD_SIDES.includes(options.side) ? options.side : "up";
    const minusSide = sample(CARD_SIDES.filter((side) => side !== plusSide), 1)[0];
    const plusBefore = values[plusSide];
    const minusBefore = values[minusSide];
    values[plusSide] = clamp(plusBefore + 2, 1, 10);
    values[minusSide] = clamp(minusBefore - 2, 1, 10);
    changes[plusSide] = true;
    changes[minusSide] = true;
    summary = `${sideLabels[plusSide]}${displayValue(plusBefore)}→${displayValue(values[plusSide])} / ${sideLabels[minusSide]}${displayValue(minusBefore)}→${displayValue(values[minusSide])}`;
  } else if (skillId === "soul_boost") {
    const side = CARD_SIDES.includes(options.side) ? options.side : "up";
    const before = values[side];
    values[side] = clamp(before + 1, 1, 10);
    changes[side] = true;
    summary = `${sideLabels[side]}${displayValue(before)}→${displayValue(values[side])}`;
  } else if (skillId === "ominous_number") {
    const minValue = Math.min(...CARD_SIDES.map((side) => values[side]));
    const minSide = sample(CARD_SIDES.filter((side) => values[side] === minValue), 1)[0];
    const remainingSides = CARD_SIDES.filter((side) => side !== minSide);
    const maxValue = Math.max(...remainingSides.map((side) => values[side]));
    const maxSide = sample(remainingSides.filter((side) => values[side] === maxValue), 1)[0];
    const minBefore = values[minSide];
    const maxBefore = values[maxSide];
    values[minSide] = 10;
    values[maxSide] = 1;
    changes[minSide] = true;
    changes[maxSide] = true;
    summary = `${sideLabels[minSide]}${displayValue(minBefore)}→A / ${sideLabels[maxSide]}${displayValue(maxBefore)}→1`;
  }

  return {
    ...card,
    battleValues: values,
    kaijutsuSkillId: skillId,
    kaijutsuChanges: changes,
    skillRotation: rotation,
    kaijutsuSummary: summary
  };
}

function getRotationSourceSide(side, rotation) {
  if (rotation === "right") {
    return { up: "left", right: "up", down: "right", left: "down" }[side] ?? side;
  }
  if (rotation === "left") {
    return { up: "right", right: "down", down: "left", left: "up" }[side] ?? side;
  }
  if (rotation === "half") {
    return { up: "down", right: "left", down: "up", left: "right" }[side] ?? side;
  }
  return side;
}

function getMirrorSide(side, battle = state.battle, boardIndex = null) {
  if (!Number.isInteger(boardIndex) || !hasRule("mirror", battle)) return side;
  if (side === "up") return "down";
  if (side === "down") return "up";
  if (side === "left") return "right";
  if (side === "right") return "left";
  return side;
}

function getFieldEffectAt(index, battle = state.battle) {
  if (!Number.isInteger(index)) return 0;
  const effects = battle?.fieldEffects ?? {};
  return Number(effects[index] ?? effects[String(index)] ?? 0) || 0;
}

function createFieldEffectsForBattle(npc) {
  if (!npc || !["つよい", "学びマスター", "大人モード"].includes(npc.difficulty)) return {};
  const indexes = shuffle(Array.from({ length: 9 }, (_, index) => index)).slice(0, 1 + Math.floor(Math.random() * 3));
  const values = [-2, -1, 1, 2];
  return Object.fromEntries(indexes.map((index) => [index, values[Math.floor(Math.random() * values.length)]]));
}

function createLockCellsForBattle(npc) {
  if (!npc || !["ふつう", "つよい", "学びマスター", "大人モード"].includes(npc.difficulty)) return {};
  const count = Math.random() < 0.5 ? 0 : 1;
  if (!count) return {};
  const index = Math.floor(Math.random() * 9);
  return { [index]: true };
}

function isLockCell(index, battle = state.battle) {
  if (!Number.isInteger(index)) return false;
  const cells = battle?.lockCells ?? {};
  return Boolean(cells[index] ?? cells[String(index)]);
}

function isCardLockedAt(board, index) {
  const cell = Array.isArray(board) ? board[index] : null;
  return Boolean(cell?.locked);
}

function getTypeRuleLevel(card, battle = state.battle, board = null, boardIndex = null) {
  const type = getCardType(card);
  if (!type || !battle || (!hasRule("type_ascend", battle) && !hasRule("type_descend", battle))) return 0;
  if (!Number.isInteger(boardIndex)) return 0;
  const targetBoard = Array.isArray(board) ? board : Array.isArray(battle.board) ? battle.board : [];
  const sameTypeCount = targetBoard.filter((cell) => cell?.card && getCardType(cell.card) === type).length;
  // 1枚目は変化なし。2枚目で±1、3枚目で±2のように、場の同属性枚数から補正値を決める。
  return Math.max(0, sameTypeCount - 1);
}

function getEffectiveCardValue(card, side, battle = state.battle, board = null, boardIndex = null) {
  const rotatedSide = getRotationSourceSide(side, card?.skillRotation);
  const baseSide = getMirrorSide(rotatedSide, battle, boardIndex);
  let value = getCardRawValue(card, baseSide);

  // フィールド効果は、実際に場に置かれているカードだけに適用する。
  if (Number.isInteger(boardIndex)) {
    value += getFieldEffectAt(boardIndex, battle);
  }

  const level = getTypeRuleLevel(card, battle, board, boardIndex);
  if (level > 0) {
    if (hasRule("type_ascend", battle)) value += level;
    if (hasRule("type_descend", battle)) value -= level;
  }
  return clamp(value, 1, 10);
}

function getCardValueSet(card, battle = state.battle, board = null, boardIndex = null) {
  return {
    up: getEffectiveCardValue(card, "up", battle, board, boardIndex),
    right: getEffectiveCardValue(card, "right", battle, board, boardIndex),
    down: getEffectiveCardValue(card, "down", battle, board, boardIndex),
    left: getEffectiveCardValue(card, "left", battle, board, boardIndex)
  };
}

function getAiCardPower(card, battle = state.battle, board = null, boardIndex = null) {
  const values = getCardValueSet(card, battle, board, boardIndex);
  const total = values.up + values.right + values.down + values.left;
  // リバースでは小さい数字ほど強いため、AI評価も反転させる。
  return hasRule("reverse", battle) ? 44 - total : total;
}

function sideBeats(attackerValue, defenderValue, battle = state.battle) {
  if (hasRule("reverse", battle)) {
    return attackerValue < defenderValue;
  }

  if (hasRule("ace_killer", battle)) {
    if (attackerValue === 1 && defenderValue === 10) return true;
    if (attackerValue === 10 && defenderValue === 1) return false;
  }

  return attackerValue > defenderValue;
}

function getCardImagePath(card) { return ""; }

function cardArtHtml(card) {
  const meta = getCardTypeMeta(card);
  const icon = {こくご:"📖", さんすう:"➗", りか:"🔬", しゃかい:"🗾", えいご:"ABC"}[getCardType(card)] ?? "★";
  return `<div class="card-art-wrap subject-placeholder" style="--card-type-color:${meta.color}"><div class="subject-art-icon">${icon}</div><div class="subject-art-name">${escapeHtml(card.name)}</div></div>`;
}

function getNpcNumber(npc) {
  return Number(String(npc.id).replace(/\D/g, "")) || 1;
}

function hasDefeatedNpc(npcNumber) {
  const id = `npc_${String(npcNumber).padStart(3, "0")}`;
  return Number(state.save?.npcWins?.[id] ?? 0) > 0;
}

function isNpcUnlocked(npc) {
  const n=getNpcNumber(npc);
  if(n<=16){ if(n<=5)return true; if(n<=10)return [1,2,3,4,5].every(hasDefeatedNpc); if(n<=15)return [6,7,8,9,10].every(hasDefeatedNpc); return [11,12,13,14,15].every(hasDefeatedNpc); }
  if(!hasDefeatedNpc(16))return false; const x=n-16; if(x<=5)return true; if(x<=10)return [17,18,19,20,21].every(hasDefeatedNpc); if(x<=15)return [22,23,24,25,26].every(hasDefeatedNpc); return [27,28,29,30,31].every(hasDefeatedNpc);
}

function getNpcUnlockMessage() {
  if(state.npcListMode==="shura"){if(!hasDefeatedNpc(16))return "学びマスターに勝利すると大人モードが解放されます。";if(![17,18,19,20,21].every(hasDefeatedNpc))return "大人モードの○○好き5人全員に勝利すると○○名人が解放されます。";if(![22,23,24,25,26].every(hasDefeatedNpc))return "大人モードの○○名人5人全員に勝利すると○○博士が解放されます。";if(![27,28,29,30,31].every(hasDefeatedNpc))return "大人モードの○○博士5人全員に勝利すると学びマスターが解放されます。";return "大人モードのすべての対戦相手が解放されています。";}
  if(![1,2,3,4,5].every(hasDefeatedNpc))return "○○好き5人全員に勝利すると○○名人が解放されます。";if(![6,7,8,9,10].every(hasDefeatedNpc))return "○○名人5人全員に勝利すると○○博士が解放されます。";if(![11,12,13,14,15].every(hasDefeatedNpc))return "○○博士5人全員に勝利すると学びマスターが解放されます。";return "通常モードのすべての対戦相手が解放されています。";
}

function getRareChanceRate(npc) {
  return Number.isFinite(npc?.rareChanceRate) ? npc.rareChanceRate : getNpcNumber(npc);
}

function getRareChanceMaxRarity(npc) {
  if (Array.isArray(npc?.rareChanceRarities) && npc.rareChanceRarities.length) {
    return Math.max(...npc.rareChanceRarities.map(Number));
  }
  if (Number.isFinite(npc?.rareChanceMaxRarity)) return npc.rareChanceMaxRarity;
  if (npc.difficulty === "よわい") return 3;
  if (npc.difficulty === "ふつう") return 4;
  return 5;
}

function getRareChanceLabel(npc) {
  if (npc?.rareChanceLabel) return npc.rareChanceLabel;
  return `上限${rarityStars(getRareChanceMaxRarity(npc))}`;
}

function getNpcEntryFee(npc) {
  return Number.isFinite(npc?.entryFee) ? Number(npc.entryFee) : 0;
}

function getNpcWinMoney(npc) {
  if (Number.isFinite(npc?.winMoney)) return Number(npc.winMoney);
  const fee = getNpcEntryFee(npc);
  return fee === 0 ? 100 : fee * 2;
}

function getRewardWeights(npc, battle = state.battle) {
  const d=npc?.baseDifficulty??npc?.difficulty; const choose=d==="よわい"?17:d==="ふつう"?15:20; const configuredRare=Math.min(100-choose,Math.max(0,getRareChanceRate(npc)));
  let base={random_one:Math.max(0,100-choose-configuredRare),choose_one:choose,rare_chance:configuredRare}; const multiplier=Math.max(1,Number(battle?.rareChanceMultiplier??1)); if(multiplier<=1)return base; const rare=Math.min(100-base.choose_one,base.rare_chance*multiplier); return {random_one:Math.max(0,100-base.choose_one-rare),choose_one:base.choose_one,rare_chance:rare};
}

function shuffle(array) {
  const copied = [...array];
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function sample(array, count) {
  return shuffle(array).slice(0, count);
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen?.classList.remove("active"));
  screens[name].classList.add("active");
  document.body.classList.toggle("is-battle-screen", name === "battle");
  document.documentElement.classList.toggle("is-battle-screen", name === "battle");
  $("backTitleBtn").style.visibility = name === "title" ? "hidden" : "visible";
  updateMoneyDisplays();
  if (name === "battle") scheduleBattleAutoFit();

  if (name === "onlineBattle") renderOnlineBattleScreen();
  if (name === "deck") renderDeckScreen();
  if (name === "cardEnhance") renderCardEnhanceScreen();
  if (name === "shop") enterShop();
  if (name === "collection") renderCollectionScreen();
  if (name === "rankings") renderRankingScreen();
  if (name === "settings") renderSettingsScreen();
  if (name === "battleMenu") renderNpcList();
}

function createInitialSave() {
  const starterNames = ["はなのみち", "ひき算", "タンポポ", "三内丸山遺跡", "Apple"];
  const starterCards = starterNames.map((name) => CARDS.find((card) => card.name === name)).filter(Boolean);
  const ownedCards = Object.fromEntries(starterCards.map((card) => [card.id, 1]));
  const firstDeck = starterCards.map((card) => card.id);
  return {
    version: VERSION, activeDeckIndex:0, selectedDeckIndex:0, ownedCards,
    discoveredCards:Object.fromEntries(starterCards.map((card)=>[card.id,true])),
    decks:[firstDeck,[],[],[],[],[...firstDeck],[...firstDeck],[...firstDeck]],
    deckNames:Array.from({length:TOTAL_DECK_COUNT},(_,index)=>getDeckDefaultName(index)), npcWins:{},
    money:1000, totalEarnedMoney:0, shopPurchaseTotal:0, hiramekiFragments:0, subjectPower:{こくご:0,さんすう:0,りか:0,しゃかい:0,えいご:0},
    awakenings:{}, unlockedKaijutsu:{}, deckKaijutsu:Array.from({length:TOTAL_DECK_COUNT},()=>"none"),
    claimedCollections:{}, claimedEncyclopediaMilestones:{},
    items:{lock_detector:0, miracle_charm:0},
    settings:{effects:true,ownedCardView:"vertical",battleCardPopup:true,onlineUserName:"",onlineUserNameKey:""}
  };
}

function createDefaultLittleDeck() {
  return ["1", "2", "3", "4", "5"]
    .map((no) => CARDS.find((card) => String(card.cardNo ?? card.no) === no)?.id)
    .filter(Boolean);
}


function normalizeSave(save) {
  const fresh = createInitialSave();
  const normalized = {
    ...fresh,
    ...save,
    settings: {
      ...fresh.settings,
      ...(save?.settings ?? {})
    }
  };

  const defaultLittleDeck = createDefaultLittleDeck();
  normalized.decks = Array.from({ length: TOTAL_DECK_COUNT }, (_, index) => {
    const deck = Array.isArray(save?.decks?.[index]) ? save.decks[index] : [];
    const normalizedDeck = deck.filter((cardId) => cardById.has(cardId)).slice(0, 5);
    if (isLittleDeckIndex(index) && normalizedDeck.length === 0) {
      return [...defaultLittleDeck];
    }
    return normalizedDeck;
  });

  normalized.ownedCards = normalized.ownedCards ?? {};
  normalized.discoveredCards = normalized.discoveredCards ?? {};
  normalized.npcWins = normalized.npcWins ?? {};
  normalized.deckNames = Array.from({ length: TOTAL_DECK_COUNT }, (_, index) => {
    const name = Array.isArray(save?.deckNames) ? String(save.deckNames[index] ?? "").trim() : "";
    return name || getDeckDefaultName(index);
  });
  normalized.shopPurchaseTotal = Number.isFinite(Number(normalized.shopPurchaseTotal)) ? Number(normalized.shopPurchaseTotal) : 0;
  normalized.totalEarnedMoney = Number.isFinite(Number(normalized.totalEarnedMoney)) ? Number(normalized.totalEarnedMoney) : 0;
  normalized.items = { ...fresh.items, ...(save?.items ?? {}) };
  for (const item of SHOP_ITEMS) {
    const count = Math.floor(Number(normalized.items[item.id] ?? 0));
    normalized.items[item.id] = Math.min(item.maxOwned, Math.max(0, Number.isFinite(count) ? count : 0));
  }
  normalized.hiramekiFragments = Math.max(0, Math.floor(Number(normalized.hiramekiFragments ?? 0) || 0));
  normalized.subjectPower = { ...fresh.subjectPower, ...(save?.subjectPower ?? {}) };
  normalized.claimedCollections = { ...(save?.claimedCollections ?? {}) };
  normalized.claimedEncyclopediaMilestones = { ...(save?.claimedEncyclopediaMilestones ?? {}) };
  normalized.awakenings = normalizeAwakeningSave(normalized.awakenings);
  normalized.unlockedKaijutsu = { ...(save?.unlockedKaijutsu ?? {}) };
  unlockKaijutsuForSave(normalized);
  normalized.deckKaijutsu = Array.from({ length: TOTAL_DECK_COUNT }, (_, index) => {
    const skillId = String(save?.deckKaijutsu?.[index] ?? "none");
    return KAIJUTSU_BY_ID.has(skillId) && (skillId === "none" || normalized.unlockedKaijutsu[skillId]) ? skillId : "none";
  });
  normalized.activeDeckIndex = Number.isInteger(normalized.activeDeckIndex) ? Math.min(Math.max(normalized.activeDeckIndex, 0), NORMAL_DECK_COUNT - 1) : 0;
  normalized.selectedDeckIndex = Number.isInteger(normalized.selectedDeckIndex) ? Math.min(Math.max(normalized.selectedDeckIndex, 0), TOTAL_DECK_COUNT - 1) : 0;

  return normalized;
}


function normalizeAwakeningSave(source) {
  const normalized = {};
  if (!source || typeof source !== "object") return normalized;
  for (const [cardId, value] of Object.entries(source)) {
    const card = cardById.get(cardId);
    if (!card || Number(card.rarity) < 4) continue;
    const stage = clamp(Math.floor(Number(value?.stage ?? 0) || 0), 0, 3);
    const boosts = Object.fromEntries(CARD_SIDES.map((side) => [side, 0]));
    let remaining = stage;
    for (const side of CARD_SIDES) {
      if (remaining <= 0) break;
      const maxForSide = Math.max(0, 10 - Number(card[side] ?? 0));
      const requested = Math.max(0, Math.floor(Number(value?.boosts?.[side] ?? 0) || 0));
      const accepted = Math.min(requested, maxForSide, remaining);
      boosts[side] = accepted;
      remaining -= accepted;
    }
    if (stage > 0) normalized[cardId] = { stage, boosts };
  }
  return normalized;
}

function getAwakeningRecord(cardId) {
  const card = cardById.get(cardId);
  const source = state.save?.awakenings?.[cardId];
  const stage = clamp(Math.floor(Number(source?.stage ?? 0) || 0), 0, 3);
  const boosts = Object.fromEntries(CARD_SIDES.map((side) => {
    const maxForSide = Math.max(0, 10 - Number(card?.[side] ?? 0));
    return [side, Math.min(maxForSide, Math.max(0, Math.floor(Number(source?.boosts?.[side] ?? 0) || 0)))];
  }));
  return { stage, boosts };
}

function getAwakeningStageName(stage) {
  return AWAKENING_STAGE_BY_NUMBER.get(Number(stage))?.name ?? "未成長";
}

function getAwakeningAllocatedPoints(cardId) {
  const record = getAwakeningRecord(cardId);
  return CARD_SIDES.reduce((sum, side) => sum + Number(record.boosts[side] ?? 0), 0);
}

function getAwakeningUnspentPoints(cardId) {
  const record = getAwakeningRecord(cardId);
  return Math.max(0, Number(record.stage) - getAwakeningAllocatedPoints(cardId));
}

function isAwakeningEnhancedSide(card, side) {
  return Number(card?.awakeningChanges?.[side] ?? 0) > 0;
}

function getAwakeningChangeClass(card, side) {
  return isAwakeningEnhancedSide(card, side) ? "awakening-value" : "";
}

function applyAwakeningToCard(card) {
  if (!card) return card;
  const record = getAwakeningRecord(card.id);
  if (record.stage <= 0) return card;
  const originalValues = Object.fromEntries(CARD_SIDES.map((side) => [side, Number(card[side] ?? 0)]));
  const values = Object.fromEntries(CARD_SIDES.map((side) => [side, clamp(originalValues[side] + Number(record.boosts[side] ?? 0), 1, 10)]));
  const changes = Object.fromEntries(CARD_SIDES.filter((side) => Number(record.boosts[side] ?? 0) > 0).map((side) => [side, Number(record.boosts[side])]));
  return {
    ...card,
    battleValues: values,
    awakeningChanges: changes,
    awakeningStage: record.stage,
    awakeningOriginalValues: originalValues,
    isAwakenedCard: true
  };
}

function getMaxDeckCopies(cardId) {
  return Math.max(0, ...(state.save?.decks ?? []).map((deck) => Array.isArray(deck) ? countInDeck(deck, cardId) : 0));
}

function getProtectedOwnedCount(cardId) {
  return Math.max(1, getMaxDeckCopies(cardId));
}

function getConvertibleDuplicateCount(cardId) {
  const card=cardById.get(cardId); if(!card)return 0;
  if(Number(card.rarity)>=4 && getAwakeningRecord(cardId).stage<3) return 0;
  return Math.max(0,getOwnedCount(cardId)-getProtectedOwnedCount(cardId));
}

function getAwakeningMaterialCopies(cardId) {
  const card = cardById.get(cardId);
  if (!card) return 0;
  return Math.max(0, getOwnedCount(cardId) - getProtectedOwnedCount(cardId));
}

function setEnhancementView(view) {
  state.enhancementView = view === "residue" ? "residue" : "awakening";
  renderCardEnhanceScreen();
}

function enhancementCardValuesHtml(card, original = false) {
  const values = original
    ? Object.fromEntries(CARD_SIDES.map((side) => [side, Number(card?.awakeningOriginalValues?.[side] ?? cardById.get(card.id)?.[side] ?? card[side] ?? 0)]))
    : Object.fromEntries(CARD_SIDES.map((side) => [side, getCardRawValue(card, side)]));
  return `上${displayValue(values.up)} / 右${displayValue(values.right)} / 下${displayValue(values.down)} / 左${displayValue(values.left)}`;
}

function renderCardEnhanceScreen() {
  const residue = Math.max(0, Number(state.save?.hiramekiFragments ?? 0));
  if ($("hiramekiFragmentsCount")) $("hiramekiFragmentsCount").textContent = residue.toLocaleString("ja-JP");
  if ($("subjectPowerSummary")) $("subjectPowerSummary").textContent = CARD_TYPES.map(t=>`${t}パワー ${getSubjectPower(t)}`).join(" / ");
  const awakeningActive = state.enhancementView !== "residue";
  $("awakeningSection")?.classList.toggle("hidden", !awakeningActive);
  $("residueSection")?.classList.toggle("hidden", awakeningActive);
  $("showAwakeningMenu")?.classList.toggle("active", awakeningActive);
  $("showAwakeningMenu")?.classList.toggle("ghost", !awakeningActive);
  $("showResidueMenu")?.classList.toggle("active", !awakeningActive);
  $("showResidueMenu")?.classList.toggle("ghost", awakeningActive);
  if (awakeningActive) renderAwakeningMenu();
  else renderResidueMenu();
}

function renderAwakeningMenu() {
  const list = $("awakeningCardList");
  const detail = $("awakeningDetail");
  if (!list || !detail) return;
  const cards = CARDS.filter((card) => getOwnedCount(card.id) > 0)
    .sort((a, b) => Number(b.rarity) - Number(a.rarity) || Number(a.no) - Number(b.no));
  if (!cards.length) {
    list.innerHTML = `<p class="muted">成長できるカードを所持していません。</p>`;
    detail.innerHTML = `<p class="muted">カードを入手するとここに表示されます。</p>`;
    state.selectedAwakeningCardId = null;
    return;
  }
  if (!cards.some((card) => card.id === state.selectedAwakeningCardId)) state.selectedAwakeningCardId = cards[0].id;
  list.innerHTML = "";
  for (const baseCard of cards) {
    const card = applyAwakeningToCard(baseCard);
    const record = getAwakeningRecord(baseCard.id);
    const row = document.createElement("button");
    row.type = "button";
    row.className = `enhancement-card-entry ${baseCard.id === state.selectedAwakeningCardId ? "selected" : ""}`;
    row.innerHTML = `
      <div class="enhancement-card-thumb">${cardMiniHtml(card, "", { squareArt: true, showName: false })}</div>
      <div><strong>${escapeHtml(baseCard.name)}</strong><br><small>No.${escapeHtml(baseCard.no)} / ${rarityStars(baseCard.rarity)} / 所持 ${getOwnedCount(baseCard.id)}</small><br><span class="awakening-stage-label">${getAwakeningStageName(record.stage)}</span></div>
    `;
    row.addEventListener("click", () => {
      state.selectedAwakeningCardId = baseCard.id;
      renderAwakeningMenu();
    });
    list.appendChild(row);
  }
  renderAwakeningDetail(state.selectedAwakeningCardId);
}

function renderAwakeningDetail(cardId) {
  const detail=$("awakeningDetail"), baseCard=cardById.get(cardId); if(!detail||!baseCard)return;
  const card=applyAwakeningToCard(baseCard), record=getAwakeningRecord(cardId), unspent=getAwakeningUnspentPoints(cardId);
  const next=AWAKENING_STAGE_BY_NUMBER.get(record.stage+1); const duplicateCopies=getAwakeningMaterialCopies(cardId); const fragments=Number(state.save.hiramekiFragments||0);
  const cost=getLearningGrowthCost(baseCard,next); const power=getSubjectPower(getCardType(baseCard));
  const canAwaken=Boolean(next && duplicateCopies>=next.copies && fragments>=cost.fragments && power>=cost.power && Number(state.save.money||0)>=cost.mp);
  const allocated=getAwakeningAllocatedPoints(cardId); detail.className="awakening-detail";
  detail.innerHTML=`<div class="awakening-detail-card mini-card">${cardMiniHtml(card,"",{squareArt:true,detail:true})}</div><h3>${escapeHtml(baseCard.name)}</h3>
  <p><strong>成長段階：</strong>${getAwakeningStageName(record.stage)}</p><p><strong>元の数値：</strong>${enhancementCardValuesHtml(card,true)}</p><p><strong>成長後：</strong><span class="gold-text">${enhancementCardValuesHtml(card,false)}</span></p>
  <p><strong>割り振り済み：</strong>${allocated} / ${record.stage}　<strong>割り振り可能：</strong>${unspent}</p><div class="awakening-side-buttons">${CARD_SIDES.map(side=>{const labels={up:"上",right:"右",down:"下",left:"左"};const current=getCardRawValue(card,side);return `<button type="button" data-awakening-side="${side}" ${unspent<=0||current>=10?"disabled":""}>${labels[side]} +1</button>`;}).join("")}</div>
  <p class="muted">成長1段階につき好きな1辺を+1できます。上限はAです。</p><div class="awakening-actions">${next?`<button id="performAwakening" type="button" ${canAwaken?"":"disabled"}>${next.name}へ成長</button>`:`<button type="button" disabled>マスターまで成長済み</button>`}<button id="rerollAwakening" type="button" class="ghost" ${record.stage>0&&allocated>0&&fragments>=100?"":"disabled"}>数値を振り直す（かけら100）</button></div>
  ${next?`<div class="awakening-requirements"><strong>${next.name}の必要条件</strong><br>同一カード ${next.copies}枚（使用可能 ${duplicateCopies}枚）<br>まなびポイント ${formatMoney(cost.mp)}<br>ひらめきのかけら ${cost.fragments}（所持 ${fragments}）<br>${escapeHtml(getCardType(baseCard))}パワー ${cost.power}（所持 ${power}）</div>`:""}`;
  detail.querySelectorAll("[data-awakening-side]").forEach(button=>button.addEventListener("click",()=>allocateAwakeningPoint(cardId,button.dataset.awakeningSide)));
  detail.querySelector("#performAwakening")?.addEventListener("click",()=>confirmAwakening(cardId)); detail.querySelector("#rerollAwakening")?.addEventListener("click",()=>confirmAwakeningReroll(cardId));
}

function allocateAwakeningPoint(cardId, side) {
  if (!CARD_SIDES.includes(side)) return;
  const card = cardById.get(cardId);
  const record = getAwakeningRecord(cardId);
  if (!card || getAwakeningUnspentPoints(cardId) <= 0) return;
  const current = Number(card[side] ?? 0) + Number(record.boosts[side] ?? 0);
  if (current >= 10) return;
  record.boosts[side] = Number(record.boosts[side] ?? 0) + 1;
  state.save.awakenings[cardId] = record;
  save();
  renderCardEnhanceScreen();
}

function confirmAwakening(cardId) {
  const card=cardById.get(cardId), record=getAwakeningRecord(cardId), next=AWAKENING_STAGE_BY_NUMBER.get(record.stage+1); if(!card||!next)return;
  const available=getAwakeningMaterialCopies(cardId), fragments=Number(state.save.hiramekiFragments||0), subject=getCardType(card), power=getSubjectPower(subject), cost=getLearningGrowthCost(card,next);
  if(available<next.copies||fragments<cost.fragments||power<cost.power||Number(state.save.money||0)<cost.mp){ showModal("学び成長",`<p>成長素材が足りません。</p><p>同一カード：${available}/${next.copies}枚<br>MP：${formatMoney(state.save.money)}/${formatMoney(cost.mp)}<br>ひらめきのかけら：${fragments}/${cost.fragments}<br>${escapeHtml(subject)}パワー：${power}/${cost.power}</p>`,[{label:"閉じる",onClick:closeModal}]); return;}
  showModal("学び成長",`<p>「${escapeHtml(card.name)}」を<strong>${next.name}</strong>へ成長します。</p><p>同一カード${next.copies}枚・${formatMoney(cost.mp)}・ひらめきのかけら${cost.fragments}・${escapeHtml(subject)}パワー${cost.power}を消費します。</p>`,[{label:"成長する",onClick:()=>{state.save.ownedCards[cardId]=getOwnedCount(cardId)-next.copies;state.save.money-=cost.mp;state.save.hiramekiFragments-=cost.fragments;state.save.subjectPower[subject]=power-cost.power;state.save.awakenings[cardId]={stage:next.stage,boosts:{...record.boosts}};save();updateMoneyDisplays();closeModal();renderCardEnhanceScreen();}},{label:"キャンセル",className:"ghost",onClick:closeModal}]);
}

function confirmAwakeningReroll(cardId) {
  const card = cardById.get(cardId);
  const record = getAwakeningRecord(cardId);
  if (!card || record.stage <= 0) return;
  if (Number(state.save.hiramekiFragments ?? 0) < 100) {
    showModal("数値の振り直し", "<p>ひらめきのかけらが足りません。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }
  showModal("数値の振り直し", `<p>ひらめきのかけらを100消費し、「${escapeHtml(card.name)}」の数値割り振りをすべて解除します。</p><p>解除された${record.stage}ポイントは、再び好きな辺へ割り振れます。</p>`, [
    {
      label: "振り直す",
      onClick: () => {
        state.save.hiramekiFragments = Number(state.save.hiramekiFragments ?? 0) - 100;
        state.save.awakenings[cardId] = { stage: record.stage, boosts: Object.fromEntries(CARD_SIDES.map((side) => [side, 0])) };
        save();
        closeModal();
        renderCardEnhanceScreen();
      }
    },
    { label: "キャンセル", className: "ghost", onClick: closeModal }
  ]);
}

function buildResidueConversion(maxRarity, singleCardId = null) {
  const entries = [];
  for (const card of CARDS) {
    if (Number(card.rarity) > Number(maxRarity)) continue;
    if (singleCardId && card.id !== singleCardId) continue;
    const count = singleCardId ? Math.min(1, getConvertibleDuplicateCount(card.id)) : getConvertibleDuplicateCount(card.id);
    if (count <= 0) continue;
    const unit = Number(RESIDUE_VALUE_BY_RARITY[card.rarity] ?? 0);
    entries.push({ card, count, points: count * unit });
  }
  return entries;
}

function confirmResidueConversion(entries) {
  const valid = (entries ?? []).filter((entry) => entry.count > 0 && getConvertibleDuplicateCount(entry.card.id) >= entry.count);
  const totalCards = valid.reduce((sum, entry) => sum + entry.count, 0);
  const totalPoints = valid.reduce((sum, entry) => sum + entry.points, 0);
  if (!totalCards) {
    showModal("ひらめきのかけら", "<p>素材化できる重複カードがありません。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }
  showModal("ひらめきのかけら化", `<p><strong>${totalCards}枚のカードをひらめきのかけらにします。獲得できるひらめきのかけらは${totalPoints}です。</strong></p>`, [
    {
      label: "決定",
      onClick: () => {
        for (const entry of valid) state.save.ownedCards[entry.card.id] = getOwnedCount(entry.card.id) - entry.count;
        state.save.hiramekiFragments = Number(state.save.hiramekiFragments ?? 0) + totalPoints;
        save();
        closeModal();
        renderCardEnhanceScreen();
        const message = $("residueMessage");
        if (message) message.textContent = `${totalCards}枚を素材化し、ひらめきのかけら${totalPoints}を獲得しました。`;
      }
    },
    { label: "キャンセル", className: "ghost", onClick: closeModal }
  ]);
}

function renderResidueMenu() {
  const list = $("residueCardList");
  if (!list) return;
  const cards = CARDS.filter((card) => getConvertibleDuplicateCount(card.id) > 0)
    .sort((a, b) => Number(a.rarity) - Number(b.rarity) || Number(a.no) - Number(b.no));
  list.innerHTML = "";
  if (!cards.length) {
    list.innerHTML = `<p class="muted">ひらめきのかけらにできる重複カードはありません。</p>`;
    return;
  }
  for (const card of cards) {
    const available = getConvertibleDuplicateCount(card.id);
    const unit = RESIDUE_VALUE_BY_RARITY[card.rarity];
    const row = document.createElement("div");
    row.className = "residue-card-row";
    row.innerHTML = `
      <div class="residue-card-thumb">${cardMiniHtml(card, "", { squareArt: true, showName: false })}</div>
      <div class="residue-card-info"><strong>${escapeHtml(card.name)}</strong><br><small>${rarityStars(card.rarity)} / 所持 ${getOwnedCount(card.id)} / 素材化可能 ${available}</small><br><span>1枚につきひらめきのかけら ${unit}</span></div>
      <button type="button">1枚をかけら化</button>
    `;
    row.querySelector("button").addEventListener("click", () => confirmResidueConversion(buildResidueConversion(card.rarity, card.id)));
    list.appendChild(row);
  }
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    state.save = raw ? normalizeSave(JSON.parse(raw)) : createInitialSave();
  } catch (error) {
    console.error(error);
    state.save = createInitialSave();
  }
  state.selectedDeckIndex = state.save.selectedDeckIndex ?? 0;
  state.ownedCardView = normalizeOwnedCardView(state.save.settings.ownedCardView);
  state.save.settings.ownedCardView = state.ownedCardView;
  if (!Number.isFinite(Number(state.save.money))) state.save.money = 1000;
  save();
  updateMoneyDisplays();
}

function save() {
  state.save.version = VERSION;
  state.save.selectedDeckIndex = state.selectedDeckIndex;
  localStorage.setItem(SAVE_KEY, JSON.stringify(state.save));
}

function addMoney(amount) {
  state.save.money = Math.max(0, Number(state.save.money ?? 0) + Number(amount ?? 0));
  save();
  updateMoneyDisplays();
}

function addTotalEarnedMoney(amount) {
  const value = Number(amount ?? 0);
  if (!Number.isFinite(value) || value <= 0) return;
  state.save.totalEarnedMoney = Number(state.save.totalEarnedMoney ?? 0) + value;
  save();
}

function spendMoney(amount) {
  const cost = Number(amount ?? 0);
  if (Number(state.save.money ?? 0) < cost) return false;
  state.save.money = Number(state.save.money ?? 0) - cost;
  save();
  updateMoneyDisplays();
  return true;
}


function getCollectionSizeLabel(size) { return size === "small" ? "小" : size === "medium" ? "中" : "大"; }
function getSubjectPower(subject) { return Math.max(0, Number(state.save?.subjectPower?.[subject] ?? 0)); }
function addSubjectPower(subject, amount) { if (!CARD_TYPES.includes(subject)) return; state.save.subjectPower[subject] = getSubjectPower(subject) + Math.max(0, Number(amount)||0); }
function isCollectionComplete(collection) { return collection.cardIds.every((id) => Boolean(state.save?.discoveredCards?.[id])); }
function awardNewCollections() {
  const awards=[];
  for (const col of COLLECTIONS) {
    if (state.save.claimedCollections[col.name] || !isCollectionComplete(col)) continue;
    state.save.claimedCollections[col.name]=true;
    state.save.money = Number(state.save.money||0)+col.mpReward;
    state.save.totalEarnedMoney = Number(state.save.totalEarnedMoney||0)+col.mpReward;
    state.save.hiramekiFragments = Number(state.save.hiramekiFragments||0)+col.fragmentReward;
    addSubjectPower(col.subject,col.powerReward);
    awards.push(col);
  }
  return awards;
}
function awardEncyclopediaMilestones() {
  const rate=Math.floor(getCollectionRate()); const awards=[];
  for (let t=20;t<=100;t+=10) {
    if (rate<t || state.save.claimedEncyclopediaMilestones[t]) continue;
    const amount=t===20?10:t===30?20:t===40?30:t===50?40:50;
    state.save.claimedEncyclopediaMilestones[t]=true; state.save.hiramekiFragments=Number(state.save.hiramekiFragments||0)+amount; awards.push({threshold:t,amount});
  }
  return awards;
}
function awardBattleMaterials(battle, won) {
  if (!battle || battle.mode === "online" || battle.mode === "onlineNpc") return {fragments:0,powers:{}};
  const base = battle.npc?.baseDifficulty ?? battle.npc?.difficulty;
  let fragments = won ? (base === "よわい" ? 1 : base === "ふつう" ? 3 : 5) : 1;
  if (won && isShuraNpc(battle.npc)) fragments *= 2;
  const previousWins=Number(state.save.npcWins?.[battle.npc.id]??0);
  if (won && previousWins===0 && (base === "つよい" || isShuraNpc(battle.npc))) fragments += 10;
  state.save.hiramekiFragments=Number(state.save.hiramekiFragments||0)+fragments;
  const counts={};
  for (const card of (battle.playerOriginalDeck ?? (battle.playerHand ?? []).map(entry=>entry.card))) { const subject=getCardType(card); if (CARD_TYPES.includes(subject)) counts[subject]=(counts[subject]||0)+1; }
  const powers={};
  for (const [subject,count] of Object.entries(counts)) {
    let amount=1; if (won && count===5) amount=5; else if (won && count>=3) amount=2;
    addSubjectPower(subject,amount); powers[subject]=amount;
  }
  return {fragments,powers};
}

function addOwnedCard(cardId, count = 1) {
  state.save.ownedCards[cardId] = (state.save.ownedCards[cardId] ?? 0) + count;
  state.save.discoveredCards[cardId] = true;
  const newlyUnlocked = unlockKaijutsuForSave(state.save);
  if (newlyUnlocked.length) state.pendingKaijutsuUnlocks.push(...newlyUnlocked);
  const collectionAwards = awardNewCollections();
  const milestoneAwards = awardEncyclopediaMilestones();
  if (collectionAwards.length || milestoneAwards.length) {
    console.info("学びボーナス", {collectionAwards:collectionAwards.map(x=>x.name), milestoneAwards});
  }
  save(); updateMoneyDisplays();
}

function getOwnedCount(cardId) {
  return state.save.ownedCards[cardId] ?? 0;
}

function countInDeck(deck, cardId) {
  return deck.filter((id) => id === cardId).length;
}

function validateDeck(deck, options = {}) {
  const maxRarity = options.maxRarity ?? null;
  const deckLabel = options.deckLabel ?? "デッキ";
  const cards = deck.map((id) => cardById.get(id)).filter(Boolean);
  const star5 = cards.filter((card) => card.rarity === 5).length;
  const star4 = cards.filter((card) => card.rarity === 4).length;

  for (const card of cards) {
    if (countInDeck(deck, card.id) > getOwnedCount(card.id)) {
      return `「${card.name}」の所持数が足りません。`;
    }
    if (maxRarity && card.rarity > maxRarity) {
      return `${deckLabel}には${rarityStars(maxRarity)}までのカードだけ登録できます。`;
    }
  }

  if (deck.length !== 5) return "デッキは5枚必要です。";
  if (!maxRarity) {
    if (star5 > 1) return "★5は1枚までです。";
    if (star4 > 2) return "★4は2枚までです。";
  }
  return "";
}

function canAddToDeck(deck, cardId, options = {}) {
  const card = cardById.get(cardId);
  const maxRarity = options.maxRarity ?? null;
  const deckLabel = options.deckLabel ?? "デッキ";
  if (!card) return "カードが見つかりません。";
  if (deck.length >= 5) return "デッキは5枚までです。";
  if (countInDeck(deck, cardId) >= getOwnedCount(cardId)) return "所持数を超えて追加できません。";
  if (maxRarity && card.rarity > maxRarity) return `${deckLabel}には${rarityStars(maxRarity)}までのカードだけ登録できます。`;

  const after = [...deck, cardId].map((id) => cardById.get(id));
  if (!maxRarity) {
    if (after.filter((c) => c.rarity === 5).length > 1) return "★5は1枚までです。";
    if (after.filter((c) => c.rarity === 4).length > 2) return "★4は2枚までです。";
  }
  return "";
}

function cardValuesHtml(card, center = "", values = null) {
  const displayValues = values ?? Object.fromEntries(CARD_SIDES.map((side) => [side, getCardRawValue(card, side)]));
  return `
    <div class="card-values">
      <span class="v-up ${getAwakeningChangeClass(card, "up")} ${getKaijutsuChangeClass(card, "up")}">${displayValue(displayValues.up)}</span>
      <span class="v-right ${getAwakeningChangeClass(card, "right")} ${getKaijutsuChangeClass(card, "right")}">${displayValue(displayValues.right)}</span>
      <span class="v-down ${getAwakeningChangeClass(card, "down")} ${getKaijutsuChangeClass(card, "down")}">${displayValue(displayValues.down)}</span>
      <span class="v-left ${getAwakeningChangeClass(card, "left")} ${getKaijutsuChangeClass(card, "left")}">${displayValue(displayValues.left)}</span>
      <span class="v-center">${center}</span>
    </div>
  `;
}

function cardMiniHtml(card, extra = "", options = {}) {
  const values = options.values ?? (options.effective
    ? getCardValueSet(
        card,
        options.battle ?? state.battle,
        options.board ?? null,
        Number.isInteger(options.boardIndex) ? options.boardIndex : null
      )
    : Object.fromEntries(CARD_SIDES.map((side) => [side, getCardRawValue(card, side)])));
  const typeMeta = getCardTypeMeta(card);
  const centerLabel = extra ? escapeHtml(extra) : "";
  const showName = options.showName !== false;
  const showTop = options.showTop !== false;
  const showValues = options.showValues !== false;
  const visualClasses = ["card-visual"];
  if (card?.isShuraCard) visualClasses.push("shura-card");
  if (options.owner === "player" || options.owner === "npc") visualClasses.push(`owner-${options.owner}`);
  if (options.squareArt) visualClasses.push("square-art");
  if (options.detail) visualClasses.push("card-detail-visual");
  const ownerColor = options.owner === "player" ? "#2b7fe9" : "#e6425c";

  return `
    <div class="${visualClasses.join(" ")}" data-type="${typeMeta.key}" style="--card-type-color:${typeMeta.color};--card-owner-color:${ownerColor};">
      ${cardArtHtml(card)}
      ${showTop ? `<div class="card-visual-top only-stars">
        <span class="card-stars">${rarityStars(card.rarity)}</span>
      </div>` : ""}
      ${showValues ? `<div class="card-visual-values">
        <span class="cv cv-up ${getWildChangeClass(card, "up")} ${getAwakeningChangeClass(card, "up")} ${getKaijutsuChangeClass(card, "up")} ${isShuraEnhancedSide(card, "up") ? "shura-value" : ""}">${displayValue(values.up)}</span>
        <span class="cv cv-right ${getWildChangeClass(card, "right")} ${getAwakeningChangeClass(card, "right")} ${getKaijutsuChangeClass(card, "right")} ${isShuraEnhancedSide(card, "right") ? "shura-value" : ""}">${displayValue(values.right)}</span>
        <span class="cv cv-down ${getWildChangeClass(card, "down")} ${getAwakeningChangeClass(card, "down")} ${getKaijutsuChangeClass(card, "down")} ${isShuraEnhancedSide(card, "down") ? "shura-value" : ""}">${displayValue(values.down)}</span>
        <span class="cv cv-left ${getWildChangeClass(card, "left")} ${getAwakeningChangeClass(card, "left")} ${getKaijutsuChangeClass(card, "left")} ${isShuraEnhancedSide(card, "left") ? "shura-value" : ""}">${displayValue(values.left)}</span>
        ${centerLabel ? `<span class="cv cv-center">${centerLabel}</span>` : ""}
      </div>` : ""}
      ${showName ? `<div class="card-visual-name">${escapeHtml(card.name)}</div>` : ""}
    </div>
  `;
}

function cardStatLine(card) {
  return `上${displayValue(card.up)} / 右${displayValue(card.right)} / 下${displayValue(card.down)} / 左${displayValue(card.left)}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function sanitizeRuleIds(ruleIds, preferredId = null) {
  let sanitized = [...new Set((ruleIds ?? []).filter((id) => RULE_NAME_BY_ID[id]))];

  // リトル系は1種類だけ選択可能。ただし、他の追加ルールは併用する。
  const preferredLittle = preferredId && isLittleRuleId(preferredId) ? preferredId : null;
  const littleRules = sanitized.filter(isLittleRuleId);
  if (littleRules.length > 1) {
    const keep = preferredLittle && littleRules.includes(preferredLittle) ? preferredLittle : littleRules[0];
    sanitized = sanitized.filter((id) => !isLittleRuleId(id) || id === keep);
  }

  const removeConflict = (a, b) => {
    if (sanitized.includes(a) && sanitized.includes(b)) {
      const removeId = preferredId === a ? b : a;
      const index = sanitized.indexOf(removeId);
      if (index >= 0) sanitized.splice(index, 1);
    }
  };
  removeConflict("order", "chaos");
  removeConflict("reverse", "ace_killer");
  return sanitized;
}

function getSelectedRuleIds(scope = document) {
  const checked = [...scope.querySelectorAll("[data-rule-id]:checked")].map((input) => input.value);
  return sanitizeRuleIds(checked);
}

function setSelectedRuleIds(ruleIds, scope = document) {
  const sanitized = sanitizeRuleIds(ruleIds);
  state.selectedRuleIds = sanitized;
  scope.querySelectorAll("[data-rule-id]").forEach((input) => {
    input.checked = sanitized.includes(input.value);
  });
  return sanitized;
}

function renderRuleSelector(targetId = "battleRuleList", allowedRuleIds = RULES.map((rule) => rule.id), initialRuleIds = state.selectedRuleIds) {
  const box = $(targetId);
  if (!box) return;
  const allowedSet = new Set(allowedRuleIds.filter((id) => RULE_NAME_BY_ID[id]));
  state.selectedRuleIds = sanitizeRuleIds(initialRuleIds.filter((id) => allowedSet.has(id)));
  box.innerHTML = RULES
    .filter((rule) => allowedSet.has(rule.id))
    .map((rule) => `
      <label class="rule-toggle ${state.selectedRuleIds.includes(rule.id) ? "selected" : ""}">
        <input type="checkbox" value="${rule.id}" data-rule-id="${rule.id}" ${state.selectedRuleIds.includes(rule.id) ? "checked" : ""}>
        <span><strong>${rule.name}</strong><small>${rule.short}</small></span>
      </label>
    `).join("");

  box.querySelectorAll("[data-rule-id]").forEach((input) => {
    input.addEventListener("change", () => {
      const selected = sanitizeRuleIds(getSelectedRuleIds(box), input.value);
      setSelectedRuleIds(selected, box);
      renderRuleSelector(targetId, allowedRuleIds, selected);
    });
  });
}

function getRuleSummary(ruleIds = state.selectedRuleIds) {
  const rules = sanitizeRuleIds(ruleIds);
  if (!rules.length) return "追加ルールなし";
  return rules.map((id) => RULE_NAME_BY_ID[id] ?? id).join(" / ");
}

function getRuleDescriptionHtml(ruleIds) {
  const rules = sanitizeRuleIds(ruleIds);
  if (!rules.length) return `<p class="muted">追加ルールはありません。</p>`;
  return `
    <div class="selected-rule-descriptions">
      ${rules.map((id) => {
        const rule = RULES.find((item) => item.id === id);
        if (!rule) return "";
        return `<div><strong>${escapeHtml(rule.name)}</strong><p>${escapeHtml(rule.short)}</p></div>`;
      }).join("")}
    </div>
  `;
}

function getNpcAttributeCategory(npc) {
  const subject = String(npc?.subject ?? "");
  return ({"こくご":"kokugo","さんすう":"sansuu","りか":"rika","しゃかい":"shakai","えいご":"eigo"}[subject] ?? "other");
}

function getNpcDifficultyRank(difficulty) { return { "よわい": 1, "ふつう": 2, "つよい": 3, "学びマスター": 4, "大人モード": 5 }[difficulty] ?? 99; }

function getFilteredSortedNpcs() {
  const ui = state.npcListUi;
  const modeNpcs = NPCS.filter((npc) => state.npcListMode === "shura" ? getNpcNumber(npc) >= 17 : getNpcNumber(npc) <= 16);
  const filtered = modeNpcs.filter((npc) => isNpcUnlocked(npc)).filter((npc) => {
    if (ui.difficulty !== "all" && npc.difficulty !== ui.difficulty) return false;
    const wins = Number(state.save?.npcWins?.[npc.id] ?? 0);
    if (ui.winStatus === "unwon" && wins > 0) return false;
    if (ui.winStatus === "won" && wins <= 0) return false;
    if (ui.attribute !== "all" && getNpcAttributeCategory(npc) !== ui.attribute) return false;
    return true;
  });
  const direction = ui.sortOrder === "desc" ? -1 : 1;
  filtered.sort((a, b) => {
    let result = 0;
    if (ui.sortField === "name") {
      result = String(a.name).localeCompare(String(b.name), "ja");
    } else if (ui.sortField === "difficulty") {
      result = getNpcDifficultyRank(a.difficulty) - getNpcDifficultyRank(b.difficulty);
      if (result === 0) result = getNpcNumber(a) - getNpcNumber(b);
    } else {
      result = getNpcNumber(a) - getNpcNumber(b);
    }
    return result * direction;
  });
  return filtered;
}

function renderNpcListControls() {
  const controls = {
    npcFilterDifficulty: state.npcListUi.difficulty,
    npcFilterWinStatus: state.npcListUi.winStatus,
    npcFilterAttribute: state.npcListUi.attribute,
    npcSortField: state.npcListUi.sortField,
    npcSortOrder: state.npcListUi.sortOrder
  };
  Object.entries(controls).forEach(([id, value]) => {
    const el = $(id);
    if (el) el.value = value;
  });
}

function renderNpcList() {
  const shuraModeUnlocked = hasDefeatedNpc(16);
  if (!shuraModeUnlocked && state.npcListMode === "shura") {
    state.npcListMode = "normal";
  }

  const shuraMode = state.npcListMode === "shura";
  const modeLabel = $("npcModeLabel");
  const modeToggle = $("npcModeToggle");
  const modeSwitch = modeToggle?.closest(".npc-mode-switch");
  if (modeSwitch) modeSwitch.hidden = !shuraModeUnlocked;
  if (modeLabel) modeLabel.textContent = shuraMode ? "大人モード" : "通常モード";
  if (modeToggle) modeToggle.textContent = shuraMode ? "通常モードに切り替え" : "大人モードに切り替え";

  const panel = document.querySelector(".rule-panel");
  if (panel) {
    panel.innerHTML = shuraMode ? `
      <h3>大人モード</h3>
      <p class="muted">大人モード対戦相手は2手以上先を読む専用AIで行動し、NPCが使用するカードだけがレアリティに応じて強化されます。</p>
      <p class="muted">追加ルールは元になったNPCの候補・抽選数を引き継ぎます。</p>
    ` : `
      <h3>追加ルール</h3>
      <p class="muted">よわい：自由に設定可能</p>
      <p class="muted">ふつう：ランダムで追加ルールが1つ適用される</p>
      <p class="muted">つよい：ランダムで追加ルールが2つ適用される</p>
    `;
  }

  const list = $("npcList");
  const modeNpcs = NPCS.filter((npc) => shuraMode ? getNpcNumber(npc) >= 17 : getNpcNumber(npc) <= 16);
  const hiddenCount = modeNpcs.filter((npc) => !isNpcUnlocked(npc)).length;
  list.innerHTML = hiddenCount > 0
    ? `<div class="summary">${escapeHtml(getNpcUnlockMessage())}<br>未解放の対戦相手：${hiddenCount}人</div>`
    : "";

  renderNpcListControls();
  const filteredNpcs = getFilteredSortedNpcs();
  if (!filteredNpcs.length) {
    list.insertAdjacentHTML("beforeend", '<div class="summary">条件に一致する対戦相手はいません。</div>');
  }

  for (const npc of filteredNpcs) {
    const poolCards = getNpcCardPool(npc);
    const avgPower = poolCards.reduce((sum, card) => sum + card.power, 0) / Math.max(poolCards.length, 1);
    const maxRarity = poolCards.length ? Math.max(...poolCards.map((card) => card.rarity)) : 0;
    const difficultyClass = npc.difficulty === "よわい" ? "weak" : npc.difficulty === "ふつう" ? "normal" : npc.difficulty === "大人モード" ? "shura" : "strong";
    const firstReward = npc.firstWinRewardCardId ? cardById.get(npc.firstWinRewardCardId) : null;
    const firstRewardChoices = (npc.firstWinRewardChoiceIds ?? []).map((id)=>cardById.get(id)).filter(Boolean);
    const wins = Number(state.save.npcWins?.[npc.id] ?? 0);
    const firstRewardStatus = (firstReward || firstRewardChoices.length) ? (wins > 0 ? "獲得済み" : "未獲得") : "なし";
    const firstRewardText = firstReward ? (wins > 0 ? `No.${escapeHtml(firstReward.no)} ${escapeHtml(firstReward.name)}（獲得済み）` : `No.${escapeHtml(firstReward.no)}（未獲得）`) : firstRewardChoices.length ? (wins>0?"★4選択報酬（獲得済み）":"★4を5教科から1枚選択（未獲得）") : firstRewardStatus;
    const firstRewardClass = (firstReward || firstRewardChoices.length) ? (wins > 0 ? "obtained" : "not-obtained") : "none";
    const entryFee = getNpcEntryFee(npc);
    const winMoney = getNpcWinMoney(npc);
    const canChallenge = Number(state.save.money ?? 0) >= entryFee;

    const item = document.createElement("div");
    item.className = "npc-card";
    item.innerHTML = `
      <h3>${escapeHtml(npc.name)} <span class="badge ${difficultyClass}">${npc.difficulty}</span></h3>
      <p class="muted">勝利回数：<strong>${wins}回</strong> / 初回勝利報酬：<span class="first-reward-status ${firstRewardClass}">${firstRewardText}</span></p>
      <p class="muted">所持カード：${poolCards.length}枚 / 最大${rarityStars(maxRarity)} / 平均力 ${avgPower.toFixed(1)}</p>
      <p class="muted">挑戦料：${formatMoney(entryFee)} / 勝利報酬：${formatMoney(winMoney)}</p>
      <p class="muted">レアチャンス率：${getRareChanceRate(npc)}%</p>
      <button data-npc-id="${npc.id}" ${canChallenge ? "" : "disabled"}>${canChallenge ? "対戦する" : "まなびポイント不足"}</button>
    `;
    item.querySelector("button").addEventListener("click", () => startBattle(npc.id));
    list.appendChild(item);
  }
}

function refreshShopStock() {
  const setting=getShopGradeSetting(), rates=setting.rates; const selected=[];
  const pickRarity=()=>{let r=Math.random()*100; for(const rarity of [1,2,3]){r-=rates[rarity];if(r<0)return rarity;}return 1;};
  const addRandom=(rarity)=>{const pool=shuffle(CARDS.filter(c=>c.rarity===rarity&&!selected.some(x=>x.id===c.id)));if(pool[0])selected.push(pool[0]);};
  if(setting.guaranteedStar3)addRandom(3); while(selected.length<3)addRandom(pickRarity()); state.shopStock=shuffle(selected);
}

function enterShop() {
  if (!state.shopInitialized) {
    refreshShopStock();
    state.shopInitialized = true;
  }
  renderShopScreen();
}

function renderShopScreen() {
  updateMoneyDisplays();
  const stockList = $("shopStockList");
  const sellList = $("shopSellList");
  const itemList = $("shopItemList");
  const message = $("shopMessage");
  const refreshButton = $("refreshShop");
  const money = Number(state.save.money ?? 0);
  if (!stockList || !sellList) return;
  const gradeSetting = getShopGradeSetting();
  const nextGrade = getNextShopGradeSetting();
  const refreshFee = getShopRefreshFee();
  const gradeInfo = $("shopGradeInfo");
  if (gradeInfo) {
    const plan = gradeSetting.rates;
    const nextText = nextGrade
      ? `次のお買い物ランクまであと${formatMoney(Math.max(0, nextGrade.required - Number(state.save.shopPurchaseTotal ?? 0)))}`
      : "お買い物ランクMAXです";
    gradeInfo.innerHTML = `お買い物ランク${gradeSetting.grade} / 累計購入 ${formatMoney(state.save.shopPurchaseTotal ?? 0)} / 出現率：★1 ${plan[1]}%・★2 ${plan[2]}%・★3 ${plan[3]}%${gradeSetting.guaranteedStar3?"（★3が1枚確定）":""}<br>${nextText}`;
  }
  if (refreshButton) {
    refreshButton.textContent = `品揃えを更新（${formatMoney(refreshFee)}）`;
    refreshButton.disabled = money < refreshFee;
  }
  if (!message.dataset.keep) message.textContent = `品揃えの更新には${formatMoney(refreshFee)}かかります。`;
  message.dataset.keep = "";

  stockList.innerHTML = state.shopStock.map((card, index) => {
    const price = getCardShopPrice(card);
    const canBuy = Number(state.save.money ?? 0) >= price;
    return `
      <div class="shop-card" data-shop-index="${index}">
        <div class="shop-card-preview mini-card">${cardMiniHtml(card, "", { squareArt: true, showName: false, showTop: false, showValues: false })}</div>
        <div class="shop-card-info">
          <strong>${escapeHtml(card.name)}</strong><br>
          <small>${rarityStars(card.rarity)}</small>
          <div class="shop-values-block">${cardValuesHtml(card)}</div>
          <strong>${formatMoney(price)}</strong><br>
          <span class="owned-badge ${getOwnedCount(card.id) > 0 ? "owned" : "not-owned"}">${getOwnedCount(card.id) > 0 ? "取得済み" : "未取得"}</span>
        </div>
        <button data-buy-index="${index}" ${canBuy ? "" : "disabled"}>${canBuy ? "購入" : "まなびポイント不足"}</button>
      </div>
    `;
  }).join("") || `<p class="muted">現在購入できるカードはありません。品揃え更新ボタンで補充できます。</p>`;

  stockList.querySelectorAll("[data-shop-index]").forEach((element) => {
    const index = Number(element.getAttribute("data-shop-index"));
    applyCardTypeStyle(element, state.shopStock[index]);
  });
  stockList.querySelectorAll("[data-buy-index]").forEach((button) => {
    button.addEventListener("click", () => buyShopCard(Number(button.getAttribute("data-buy-index"))));
  });

  if (itemList) {
    itemList.innerHTML = SHOP_ITEMS.map((item) => {
      const owned = getOwnedItemCount(item.id);
      const remaining = getRemainingItemCapacity(item.id);
      const maxAffordable = item.price > 0 ? Math.floor(Number(state.save.money ?? 0) / item.price) : remaining;
      const maxQuantity = Math.max(0, Math.min(remaining, maxAffordable));
      const options = Array.from({ length: remaining }, (_, index) => index + 1)
        .map((quantity) => `<option value="${quantity}">${quantity}個</option>`)
        .join("");
      const canBuy = remaining > 0 && Number(state.save.money ?? 0) >= item.price;
      const buttonText = remaining <= 0 ? "所持上限" : canBuy ? "購入" : "まなびポイント不足";
      return `
        <div class="shop-item-card" data-shop-item-id="${item.id}">
          <div class="shop-item-icon" aria-hidden="true">${item.id === "lock_detector" ? "🔑" : "✨"}</div>
          <div class="shop-item-info">
            <strong>${escapeHtml(item.name)}</strong>
            <p>${escapeHtml(item.description)}</p>
            <small>価格：${formatMoney(item.price)} / 所持 ${owned}個 / 最大 ${item.maxOwned}個</small>
          </div>
          <div class="shop-item-purchase">
            <select data-item-quantity="${item.id}" ${remaining > 0 ? "" : "disabled"}>${options || '<option value="0">0個</option>'}</select>
            <button data-buy-item-id="${item.id}" ${canBuy ? "" : "disabled"}>${buttonText}</button>
          </div>
        </div>
      `;
    }).join("");

    itemList.querySelectorAll("[data-buy-item-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const itemId = button.getAttribute("data-buy-item-id");
        const select = itemList.querySelector(`[data-item-quantity="${itemId}"]`);
        buyShopItem(itemId, Number(select?.value ?? 1));
      });
    });
  }

  const ownedCards = CARDS
    .filter((card) => getOwnedCount(card.id) > 0)
    .sort((a, b) => a.rarity - b.rarity || Number(a.no) - Number(b.no));

  sellList.innerHTML = ownedCards.map((card) => {
    const owned = getOwnedCount(card.id);
    const inDeck = getTotalInAllDecks(card.id);
    const available = Math.max(0, owned - inDeck);
    const price = getCardSellPrice(card);
    const canSell = available > 0 && (Number(card.rarity) < 4 || getAwakeningRecord(card.id).stage >= 3);
    const reason = available <= 0 ? "デッキ使用中" : (Number(card.rarity)>=4 && getAwakeningRecord(card.id).stage<3) ? "マスター後に売却可能" : `ひらめきのかけら ${price}個`;
    return `
      <div class="shop-card sell-card" data-sell-card-id="${card.id}">
        <div class="shop-card-preview mini-card">${cardMiniHtml(card, "", { squareArt: true, showName: false, showTop: false, showValues: false })}</div>
        <div class="shop-card-info">
          <strong>${escapeHtml(card.name)}</strong><br>
          <small>${rarityStars(card.rarity)} / 所持 ${owned} / 売却可能 ${available}</small>
          <div class="shop-values-block">${cardValuesHtml(card)}</div>
          <span class="muted">${reason}</span>
        </div>
        <button data-sell-id="${card.id}" ${canSell ? "" : "disabled"}>売却</button>
      </div>
    `;
  }).join("") || `<p class="muted">売却できるカードがありません。</p>`;

  sellList.querySelectorAll("[data-sell-card-id]").forEach((element) => {
    applyCardTypeStyle(element, cardById.get(element.getAttribute("data-sell-card-id")));
  });
  sellList.querySelectorAll("[data-sell-id]").forEach((button) => {
    button.addEventListener("click", () => sellOwnedCard(button.getAttribute("data-sell-id")));
  });
}

function buyShopCard(index) {
  const card = state.shopStock[index];
  if (!card) return;
  const price = getCardShopPrice(card);
  if (!price || !spendMoney(price)) {
    showShopMessage("まなびポイントが足りません。", true);
    renderShopScreen();
    return;
  }
  addOwnedCard(card.id);
  state.save.shopPurchaseTotal = Number(state.save.shopPurchaseTotal ?? 0) + price;
  save();
  state.shopStock.splice(index, 1);
  if (state.shopStock.length === 0) { refreshShopStock(); showShopMessage(`「${card.name}」を購入しました。3枚完売したため無料で品揃えを更新しました。`); }
  else showShopMessage(`「${card.name}」を${formatMoney(price)}で購入しました。`);
  renderShopScreen();
}

function buyShopItem(itemId, quantity) {
  const item = SHOP_ITEM_BY_ID.get(itemId);
  if (!item) return;
  const amount = Math.max(1, Math.floor(Number(quantity) || 1));
  const remaining = getRemainingItemCapacity(itemId);
  if (remaining <= 0) {
    showShopMessage(`${item.name}は最大${item.maxOwned}個までです。`, true);
    renderShopScreen();
    return;
  }
  if (amount > remaining) {
    showShopMessage(`購入できるのはあと${remaining}個までです。`, true);
    renderShopScreen();
    return;
  }
  const totalPrice = item.price * amount;
  if (!spendMoney(totalPrice)) {
    showShopMessage("まなびポイントが足りません。", true);
    renderShopScreen();
    return;
  }
  state.save.items[itemId] = getOwnedItemCount(itemId) + amount;
  state.save.shopPurchaseTotal = Number(state.save.shopPurchaseTotal ?? 0) + totalPrice;
  save();
  showShopMessage(`${item.name}を${amount}個、${formatMoney(totalPrice)}で購入しました。`);
  renderShopScreen();
}

function sellOwnedCard(cardId) {
  const card=cardById.get(cardId); if(!card)return; const fragments=getCardSellPrice(card); const available=getOwnedCount(card.id)-getTotalInAllDecks(card.id);
  if(Number(card.rarity)>=4 && getAwakeningRecord(cardId).stage<3){showShopMessage("★4・★5はマスターまで学び成長したカードのみ売却できます。",true);return;}
  if(available<=0){showShopMessage("デッキで使用中のカードは売却できません。",true);return;}
  state.save.ownedCards[card.id]=Math.max(0,getOwnedCount(card.id)-1); state.save.hiramekiFragments=Number(state.save.hiramekiFragments||0)+fragments; save(); showShopMessage(`「${card.name}」を売却し、ひらめきのかけら${fragments}個を獲得しました。`); renderShopScreen();
}

function showShopMessage(message, isError = false) {
  const box = $("shopMessage");
  if (!box) return;
  box.textContent = message;
  box.style.color = isError ? "var(--danger)" : "var(--good)";
  box.dataset.keep = "1";
}

function renderDeckTabsOnly() {
  const tabs = $("deckTabs");
  if (!tabs) return;
  tabs.innerHTML = "";

  for (let i = 0; i < TOTAL_DECK_COUNT; i += 1) {
    const button = document.createElement("button");
    const deckName = getDeckDisplayName(i);
    const activeText = !isLittleDeckIndex(i) && state.save.activeDeckIndex === i ? " 使用中" : "";
    button.textContent = `${deckName}${activeText}`;
    button.className = state.selectedDeckIndex === i ? "active" : "";
    button.addEventListener("click", () => {
      state.selectedDeckIndex = i;
      save();
      renderDeckScreen();
    });
    tabs.appendChild(button);
  }
}


function renderDeckKaijutsuSetting() {
  const info = $("deckKaijutsuInfo");
  if (!info) return;

  const newlyUnlocked = unlockKaijutsuForSave(state.save);
  if (newlyUnlocked.length) save();
  const rate = getCollectionRate();
  const unlockedSkills = KAIJUTSU_SKILLS.filter((skill) => skill.id !== "none" && isKaijutsuUnlocked(skill.id));
  const lockedSkills = KAIJUTSU_SKILLS.filter((skill) => skill.id !== "none" && !isKaijutsuUnlocked(skill.id));
  const unlockedHtml = unlockedSkills.length
    ? unlockedSkills.map((skill) => `<span class="kaijutsu-unlocked-chip">${escapeHtml(skill.name)}</span>`).join(" ")
    : "まだ取得しているひらめきスキルはありません。";
  const nextSkill = lockedSkills.sort((a, b) => a.unlockRate - b.unlockRate)[0];
  const nextText = nextSkill ? `<br><small>次の取得：${escapeHtml(nextSkill.name)}（図鑑${nextSkill.unlockRate}%）</small>` : "<br><small>すべてのひらめきスキルを取得済みです。</small>";
  info.innerHTML = `<p>ひらめきスキルはデッキへ装備せず、NPC対戦中に取得済みのひらめきスキルから選んで使用します。</p><div class="kaijutsu-unlocked-list">${unlockedHtml}</div><small>図鑑コンプリート率 ${rate.toFixed(2)}% / 取得済み ${unlockedSkills.length}/${KAIJUTSU_SKILLS.length - 1}。一度取得したひらめきスキルは、カード追加でコンプ率が下がっても失われません。</small>${nextText}`;
}

function renderDeckScreen() {
  renderDeckTabsOnly();

  const deckNameInput = $("deckNameInput");
  if (deckNameInput) deckNameInput.value = getDeckDisplayName(state.selectedDeckIndex);
  renderDeckKaijutsuSetting();

  normalizeDeckSort();
  $("deckSortField").value = state.deckSort.field;
  $("deckSortOrder").value = state.deckSort.order;
  updateOwnedCardViewButtons();

  renderCurrentDeck();
  renderOwnedCardList();
}

function renderCurrentDeck() {
  const deck = state.save.decks[state.selectedDeckIndex];
  const box = $("currentDeck");
  box.innerHTML = "";

  for (let i = 0; i < 5; i += 1) {
    const cardId = deck[i];
    const row = document.createElement("div");
    row.className = `deck-card ${cardId ? "" : "empty"}`;

    if (!cardId) {
      row.innerHTML = `<div>空きスロット ${i + 1}</div>`;
    } else {
      const baseCard = cardById.get(cardId);
      const card = applyAwakeningToCard(baseCard);
      row.innerHTML = `
        <div class="deck-card-info">
          <div class="deck-card-art">${cardArtHtml(card)}</div>
          <div class="deck-card-text">
            <strong>${escapeHtml(card.name)}</strong><br>
            <small>${rarityStars(card.rarity)} / 所持 ${getOwnedCount(card.id)} / デッキ中 ${countInDeck(deck, card.id)}</small>
          </div>
          ${cardValuesHtml(card)}
        </div>
        <button class="small-button ghost">外す</button>
      `;
      applyCardTypeStyle(row, card);
      row.querySelector("button").addEventListener("click", () => {
        deck.splice(i, 1);
        save();
        renderDeckScreen();
      });
    }
    box.appendChild(row);
  }

  const deckLimit = getDeckRarityLimitByIndex(state.selectedDeckIndex);
  const error = validateDeck(deck, { maxRarity: deckLimit, deckLabel: getDeckDisplayName(state.selectedDeckIndex) });
  const note = getDeckRuleNote(state.selectedDeckIndex);
  $("deckMessage").textContent = error ? error : `このデッキは使用できます。${note ? " " + note : ""}`;
  $("deckMessage").style.color = error ? "var(--danger)" : "var(--good)";
}

function matchesCardRarityFilter(card, value) {
  return value === "all" || Number(card?.rarity) === Number(value);
}

function matchesCardAttributeFilter(card, value) {
  if (value === "all") return true;
  const type = getCardType(card);
  return type === ({kokugo:"こくご", sansuu:"さんすう", rika:"りか", shakai:"しゃかい", eigo:"えいご"}[value] ?? value);
}

function compareCollectionCards(a, b) {
  const field = state.collectionFilter.sortField;
  let result = 0;
  if (field === "name") {
    result = String(a.name).localeCompare(String(b.name), "ja");
  } else if (field === "rarity") {
    result = Number(a.rarity) - Number(b.rarity);
  } else {
    result = Number(String(a.no).replace(/\D/g, "")) - Number(String(b.no).replace(/\D/g, ""));
  }
  if (result === 0) result = String(a.id).localeCompare(String(b.id));
  return state.collectionFilter.sortOrder === "desc" ? -result : result;
}

function renderOwnedCardList() {
  const query = $("cardSearch").value.trim().toLowerCase();
  const list = $("ownedCardList");
  const view = getOwnedCardView();
  list.className = `card-list owned-card-list view-${view}`;
  list.innerHTML = "";

  const owned = CARDS
    .filter((card) => getOwnedCount(card.id) > 0)
    .filter((card) => !query || card.name.toLowerCase().includes(query))
    .filter((card) => matchesCardRarityFilter(card, state.deckFilter.rarity))
    .filter((card) => matchesCardAttributeFilter(card, state.deckFilter.attribute))
    .sort(compareOwnedCards);

  for (const baseCard of owned) {
    const card = applyAwakeningToCard(baseCard);
    const row = document.createElement("div");
    row.className = "owned-row";
    applyCardTypeStyle(row, card);
    row.innerHTML = `
      <div class="owned-row-layout">
        <div class="owned-row-art">${cardArtHtml(card)}</div>
        <div class="owned-row-info">
          <strong>${escapeHtml(card.name)}</strong><br>
          <small>${rarityStars(card.rarity)} / 所持 ${getOwnedCount(card.id)} / デッキ中 ${countInDeck(state.save.decks[state.selectedDeckIndex], card.id)}</small>
        </div>
        <div class="owned-row-values">
          ${cardValuesHtml(card, "+")}
        </div>
      </div>
    `;
    row.addEventListener("click", () => {
      const deck = state.save.decks[state.selectedDeckIndex];
      const error = canAddToDeck(deck, card.id, { maxRarity: getDeckRarityLimitByIndex(state.selectedDeckIndex), deckLabel: getDeckDisplayName(state.selectedDeckIndex) });
      if (error) {
        $("deckMessage").textContent = error;
        $("deckMessage").style.color = "var(--danger)";
        return;
      }
      deck.push(card.id);
      save();
      renderDeckScreen();
    });
    list.appendChild(row);
  }
}


function renderCollectionBonuses() {
  const box=$("collectionBonusList"); if(!box)return;
  box.innerHTML=COLLECTIONS.map(col=>{const done=isCollectionComplete(col), claimed=Boolean(state.save.claimedCollections?.[col.name]);const got=col.cardIds.filter(id=>state.save.discoveredCards?.[id]).length;return `<div class="collection-bonus-card ${done?"complete":""}"><div><strong>${escapeHtml(col.name)}</strong> <span class="badge">${escapeHtml(col.subject)}</span></div><div>${got}/${col.cardIds.length}枚　報酬：${formatMoney(col.mpReward)} / かけら${col.fragmentReward} / ${escapeHtml(col.subject)}パワー${col.powerReward}</div><p>${escapeHtml(col.description)}</p><small>${claimed?"✓ 報酬受取済み":done?"完成！":"未完成"}</small></div>`;}).join("");
}

function renderCollectionScreen() {
  const query = $("collectionSearch").value.trim().toLowerCase();
  if ($("collectionRarityFilter")) $("collectionRarityFilter").value = state.collectionFilter.rarity;
  if ($("collectionAttributeFilter")) $("collectionAttributeFilter").value = state.collectionFilter.attribute;
  if ($("collectionSortField")) $("collectionSortField").value = state.collectionFilter.sortField;
  if ($("collectionSortOrder")) $("collectionSortOrder").value = state.collectionFilter.sortOrder;
  const obtained = CARDS.filter((card) => state.save.discoveredCards[card.id]).length;
  const progressRows = [
    { label: "全体", rarity: null },
    ...[1, 2, 3, 4, 5].map((rarity) => ({ label: `★${rarity}`, rarity }))
  ].map(({ label, rarity }) => {
    const targetCards = rarity == null
      ? CARDS
      : CARDS.filter((card) => Number(card.rarity) === rarity);
    const discovered = rarity == null
      ? obtained
      : targetCards.filter((card) => state.save.discoveredCards[card.id]).length;
    const total = targetCards.length;
    const rate = total > 0 ? (discovered / total) * 100 : 0;
    return { label, discovered, total, rate };
  });

  const totalProgress = progressRows[0];
  const rarityProgressRows = progressRows.slice(1);
  $("collectionSummary").classList.add("collection-progress-summary");
  $("collectionSummary").innerHTML = `
    <div class="collection-progress-title">図鑑コンプリート率</div><div class="muted">20%から10%達成ごとに「ひらめきのかけら」ボーナスがあります。</div>
    <div class="collection-progress-total-row">
      <div class="collection-progress-item is-total">
        <span>全体</span>
        <strong>${totalProgress.discovered}/${totalProgress.total}（${totalProgress.rate.toFixed(2)}%）</strong>
      </div>
      <button
        id="collectionRarityProgressToggle"
        class="secondary collection-progress-toggle"
        type="button"
        aria-expanded="${state.collectionRarityProgressOpen ? "true" : "false"}"
        aria-controls="collectionRarityProgressDetails"
      >${state.collectionRarityProgressOpen ? "★別を閉じる" : "★別を見る"}</button>
    </div>
    <div
      id="collectionRarityProgressDetails"
      class="collection-progress-grid collection-rarity-progress ${state.collectionRarityProgressOpen ? "" : "is-hidden"}"
    >
      ${rarityProgressRows.map((row) => `
        <div class="collection-progress-item">
          <span>${row.label}</span>
          <strong>${row.discovered}/${row.total}（${row.rate.toFixed(2)}%）</strong>
        </div>
      `).join("")}
    </div>
  `;

  const rarityProgressToggle = $("collectionRarityProgressToggle");
  rarityProgressToggle?.addEventListener("click", () => {
    state.collectionRarityProgressOpen = !state.collectionRarityProgressOpen;
    const details = $("collectionRarityProgressDetails");
    details?.classList.toggle("is-hidden", !state.collectionRarityProgressOpen);
    rarityProgressToggle.setAttribute("aria-expanded", state.collectionRarityProgressOpen ? "true" : "false");
    rarityProgressToggle.textContent = state.collectionRarityProgressOpen ? "★別を閉じる" : "★別を見る";
  });

  renderCollectionBonuses();
  const grid = $("collectionGrid");
  grid.innerHTML = "";

  const cards = CARDS
    .filter((card) => !query || card.name.toLowerCase().includes(query))
    .filter((card) => matchesCardRarityFilter(card, state.collectionFilter.rarity))
    .filter((card) => matchesCardAttributeFilter(card, state.collectionFilter.attribute))
    .sort(compareCollectionCards);

  for (const baseCard of cards) {
    const card = state.save.discoveredCards[baseCard.id] ? applyAwakeningToCard(baseCard) : baseCard;
    const owned = getOwnedCount(card.id);
    const unlocked = state.save.discoveredCards[card.id];
    const div = document.createElement("div");
    div.className = `collection-card ${unlocked ? "" : "locked"}`;
    div.innerHTML = unlocked
      ? `
        <div class="collection-card-header">
          <strong>${escapeHtml(card.name)}</strong>
          <small>No.${escapeHtml(card.no)} / 所持 ${owned}</small>
        </div>
        <div class="collection-card-image mini-card">
          ${cardMiniHtml(card, "", { squareArt: true, showName: false, showTop: true, showValues: true })}
        </div>
      `
      : `
        <div class="collection-card-header">
          <strong>???</strong>
          <small>No.${escapeHtml(card.no)} / 未取得</small>
        </div>
        <div class="collection-card-image mini-card locked-card-image">
          <div class="card-stars">${rarityStars(card.rarity)}</div>
          <div class="card-values">
            <span class="v-up">?</span><span class="v-right">?</span><span class="v-down">?</span><span class="v-left">?</span><span class="v-center">?</span>
          </div>
        </div>
      `;
    if (unlocked) applyCardTypeStyle(div, card);
    grid.appendChild(div);
  }
}


function getOnlineRowTotalGames(row) {
  return Number(row.wins ?? 0) + Number(row.losses ?? 0) + Number(row.draws ?? 0);
}

function rankingRowsHtml(rows, kind) {
  if (!rows.length) return `<p class="muted">まだランキングデータがありません。</p>`;

  let displayRows = rows.map((row, index) => ({ ...row, rank: index + 1 }));
  if (kind === "onlineRating") {
    const played = rows.filter((row) => getOnlineRowTotalGames(row) > 0)
      .sort((a, b) => Number(b.rating ?? 1500) - Number(a.rating ?? 1500) || String(a.username ?? "").localeCompare(String(b.username ?? ""), "ja"));
    const noGames = rows.filter((row) => getOnlineRowTotalGames(row) === 0)
      .sort((a, b) => String(a.username ?? "").localeCompare(String(b.username ?? ""), "ja"));
    let previousRating = null;
    let currentRank = 0;
    displayRows = played.map((row, index) => {
      const rating = Number(row.rating ?? 1500);
      if (previousRating === null || rating !== previousRating) currentRank = index + 1;
      previousRating = rating;
      return { ...row, rank: currentRank };
    });
    const noGameRank = played.length + 1;
    displayRows.push(...noGames.map((row) => ({ ...row, rank: noGameRank || 1, noGames: true })));
  }

  return `
    <table class="ranking-table">
      <thead>
        <tr>
          <th>順位</th>
          <th>ユーザー名</th>
          <th>記録</th>
        </tr>
      </thead>
      <tbody>
        ${displayRows.map((row) => {
          let value = "";
          if (kind === "onlineRating") {
            const games = getOnlineRowTotalGames(row);
            value = games > 0
              ? `${Number(row.rating ?? 1500)} / ${Number(row.wins ?? 0)}勝 ${Number(row.losses ?? 0)}敗 ${Number(row.draws ?? 0)}分`
              : `${Number(row.rating ?? 1500)} / 対戦成績なし`;
          }
          if (kind === "collection") value = `${Number(row.rate ?? 0).toFixed(2)}%（${Number(row.count ?? 0)}/${Number(row.total ?? CARDS.length)}）`;
          if (kind === "totalEarnings") value = formatMoney(Number(row.totalEarnedMoney ?? 0));
          const rankText = kind === "onlineRating" ? `同率${row.rank}位` : `${row.rank}位`;
          return `<tr><td>${rankText}</td><td>${escapeHtml(row.username ?? "名無し")}</td><td>${escapeHtml(value)}</td></tr>`;
        }).join("")}
      </tbody>
    </table>
  `;
}

async function renderRankingScreen() {
  const box = $("rankingContent");
  if (!box) return;
  box.innerHTML = `<p class="muted">ランキングを読み込み中です。</p>`;
  try {
    if (getOnlineUserName()) await syncPlayerRankings();
    const fb = await ensureOnlineFirebase();
    const [ratingSnap, collectionSnap, totalEarningsSnap] = await Promise.all([
      fb.get(getLeaderboardRef("onlineRating")),
      fb.get(getLeaderboardRef("collection")),
      fb.get(getLeaderboardRef("totalEarnings"))
    ]);
    const toRows = (snap) => {
      if (!snap.exists()) return [];
      const data = snap.val() ?? {};
      if (Array.isArray(data)) {
        return data.map((value, index) => value ? ({ uid: String(index), ...value }) : null).filter(Boolean);
      }
      return Object.entries(data).map(([uid, value]) => ({ uid, ...(value ?? {}) }));
    };
    const ratings = toRows(ratingSnap).sort((a, b) => Number(b.rating ?? 0) - Number(a.rating ?? 0)).slice(0, 20);
    const collections = toRows(collectionSnap).sort((a, b) => Number(b.rate ?? 0) - Number(a.rate ?? 0) || Number(b.count ?? 0) - Number(a.count ?? 0)).slice(0, 20);
    const totalEarnings = toRows(totalEarningsSnap).sort((a, b) => Number(b.totalEarnedMoney ?? 0) - Number(a.totalEarnedMoney ?? 0)).slice(0, 20);
    box.innerHTML = `
      ${!getOnlineUserName() ? `<p class="muted">自分の記録をランキングへ登録するには、設定画面でランキング用ユーザー名を保存してください。</p>` : ""}
      <div class="ranking-grid">
        <section class="ranking-panel"><h3>オンライン対戦レート</h3>${rankingRowsHtml(ratings, "onlineRating")}</section>
        <section class="ranking-panel"><h3>図鑑コンプリート率</h3>${rankingRowsHtml(collections, "collection")}</section>
        <section class="ranking-panel"><h3>累計獲得MP</h3>${rankingRowsHtml(totalEarnings, "totalEarnings")}</section>
      </div>
    `;
  } catch (error) {
    console.error("ranking load failed", error);
    box.innerHTML = `<p class="danger-text">ランキング読み込みエラー：${escapeHtml(error.code ? `${error.code}: ${error.message ?? error}` : error.message ?? error)}</p><p class="muted">Firebase設定、Anonymous Auth、Realtime Database Rulesを確認してください。</p>`;
  }
}

function renderSettingsScreen() {
  $("effectToggle").checked = Boolean(state.save.settings.effects);
  $("battleCardPopupToggle").checked = Boolean(state.save.settings.battleCardPopup);
  renderProfileSummary(state.online.cachedProfile);
  refreshProfileSummary();
}

function showModal(title, bodyHtml, actions = []) {
  const modal = $("modal");
  modal.classList.remove("final-board-modal");
  state.currentModalSpec = { title, bodyHtml, actions };
  $("modalTitle").textContent = title;
  $("modalBody").innerHTML = bodyHtml;
  const actionBox = $("modalActions");
  actionBox.innerHTML = "";
  for (const action of actions) {
    const button = document.createElement("button");
    button.textContent = action.label;
    button.className = action.className ?? "";
    button.disabled = Boolean(action.disabled);
    button.addEventListener("click", action.onClick);
    actionBox.appendChild(button);
  }
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = $("modal");
  modal.classList.add("hidden");
  modal.classList.remove("final-board-modal");
  delete modal.dataset.onlineWaiting;
  delete modal.dataset.onlineRematchWaiting;
}

function cloneReviewCard(card) {
  if (!card) return null;
  return {
    ...card,
    battleValues: card.battleValues ? { ...card.battleValues } : undefined,
    wildChanges: card.wildChanges ? { ...card.wildChanges } : undefined,
    shuraChanges: card.shuraChanges ? { ...card.shuraChanges } : undefined,
    awakeningChanges: card.awakeningChanges ? { ...card.awakeningChanges } : undefined,
    awakeningOriginalValues: card.awakeningOriginalValues ? { ...card.awakeningOriginalValues } : undefined,
    kaijutsuChanges: card.kaijutsuChanges ? { ...card.kaijutsuChanges } : undefined,
    kaijutsuSkillId: card.kaijutsuSkillId,
    skillRotation: card.skillRotation,
    kaijutsuSummary: card.kaijutsuSummary
  };
}

function captureFinalBattleSnapshot(battle = state.battle) {
  if (!battle || !Array.isArray(battle.board)) return null;
  const board = battle.board.map((cell) => cell ? {
    card: cloneReviewCard(cell.card),
    owner: cell.owner,
    locked: Boolean(cell.locked)
  } : null);
  const playerHand = (battle.playerHand ?? []).map((entry) => ({
    card: cloneReviewCard(entry.card),
    used: Boolean(entry.used)
  }));
  const npcHand = (battle.npcHand ?? []).map((entry) => ({
    card: cloneReviewCard(entry.card),
    used: Boolean(entry.used)
  }));
  const playerRemaining = playerHand.filter((entry) => !entry.used).length;
  const npcRemaining = npcHand.filter((entry) => !entry.used).length;
  const playerBoardCount = board.filter((cell) => cell?.owner === "player").length;
  const npcBoardCount = board.filter((cell) => cell?.owner === "npc").length;

  return {
    mode: battle.mode,
    npc: battle.npc ? { ...battle.npc } : null,
    rules: [...(battle.rules ?? [])],
    fieldEffects: { ...(battle.fieldEffects ?? {}) },
    lockCells: { ...(battle.lockCells ?? {}) },
    typeBoosts: { ...(battle.typeBoosts ?? {}) },
    board,
    playerHand,
    npcHand,
    score: {
      player: playerBoardCount + playerRemaining,
      npc: npcBoardCount + npcRemaining
    }
  };
}

function finalReviewCardHtml(cell, index, snapshot) {
  if (!cell?.card) return "";
  const typeMeta = getCardTypeMeta(cell.card);
  const values = getCardValueSet(cell.card, snapshot, snapshot.board, index);
  return `
    <div class="final-review-card owner-${cell.owner}" data-type="${typeMeta.key}" style="--card-type-color:${typeMeta.color};">
      ${cardMiniHtml(cell.card, "", {
        values,
        squareArt: true,
        detail: true,
        showName: false,
        battle: snapshot,
        board: snapshot.board,
        boardIndex: index,
        owner: cell.owner
      })}
    </div>
  `;
}

function finalReviewHandHtml(entries, snapshot, owner) {
  const remaining = (entries ?? []).filter((entry) => !entry.used && entry.card);
  if (!remaining.length) return '<p class="muted final-review-empty">残り手札なし</p>';
  return `
    <div class="final-review-hand-grid">
      ${remaining.map((entry) => {
        const typeMeta = getCardTypeMeta(entry.card);
        return `
          <div class="final-review-hand-card" data-type="${typeMeta.key}" style="--card-type-color:${typeMeta.color};">
            ${cardMiniHtml(entry.card, "", { squareArt: true, detail: true, showName: false, battle: snapshot, owner })}
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function finalBoardReviewHtml(snapshot) {
  const ruleText = snapshot.rules?.length ? getRuleSummary(snapshot.rules) : "なし";
  const opponentName = snapshot.npc?.name ?? "相手";
  const boardHtml = snapshot.board.map((cell, index) => {
    const fieldValue = getFieldEffectAt(index, snapshot);
    const fieldBadge = fieldValue
      ? `<span class="final-field-badge ${fieldValue > 0 ? "positive" : "negative"}">${fieldValue > 0 ? "+" : ""}${fieldValue}</span>`
      : "";
    const lockBadge = cell?.locked ? '<span class="final-lock-badge" aria-label="ロック">🔒</span>' : "";
    return `
      <div class="final-board-cell ${cell ? `has-card owner-${cell.owner}` : "empty"}">
        ${fieldBadge}
        ${cell ? finalReviewCardHtml(cell, index, snapshot) : '<span class="final-empty-cell">空き</span>'}
        ${lockBadge}
      </div>
    `;
  }).join("");

  return `
    <div class="final-board-review">
      <div class="final-review-summary">
        <strong>自分 ${snapshot.score.player} - ${snapshot.score.npc} ${escapeHtml(opponentName)}</strong>
        <span>追加ルール：${escapeHtml(ruleText)}</span>
      </div>
      <section class="final-review-hand-section">
        <h3>相手の残り手札</h3>
        ${finalReviewHandHtml(snapshot.npcHand, snapshot, "npc")}
      </section>
      <div class="final-board-grid" aria-label="最終盤面">
        ${boardHtml}
      </div>
      <section class="final-review-hand-section">
        <h3>自分の残り手札</h3>
        ${finalReviewHandHtml(snapshot.playerHand, snapshot, "player")}
      </section>
      <div class="final-review-legend">
        <span class="legend-player">青枠：自分</span>
        <span class="legend-npc">赤枠：相手</span>
      </div>
    </div>
  `;
}

function reopenLastResultModal() {
  const spec = state.lastResultModalSpec;
  if (!spec) {
    closeModal();
    return;
  }
  showModal(spec.title, spec.bodyHtml, spec.actions);
}

function showFinalBoardReview() {
  const snapshot = captureFinalBattleSnapshot();
  if (!snapshot) {
    showModal("盤面確認", "<p>確認できる最終盤面がありません。</p>", [
      { label: "閉じる", onClick: closeModal }
    ]);
    return;
  }
  state.lastResultModalSpec = state.currentModalSpec;
  showModal("最終盤面", finalBoardReviewHtml(snapshot), [
    { label: "リザルト画面に戻る", onClick: reopenLastResultModal }
  ]);
  $("modal").classList.add("final-board-modal");
}

function finalBoardAction() {
  return { label: "盤面確認", className: "ghost", onClick: showFinalBoardReview };
}

function getCardDetailHtml(card, options = {}) {
  const effective = Boolean(options.effective);
  return `
    <div class="card-detail-popup">
      <div class="card-detail-preview mini-card detail-card-card">
        ${cardMiniHtml(card, "", { effective, squareArt: true, detail: true, owner: options.owner })}
      </div>
      <div class="card-detail-meta">
        <div><strong>No.${escapeHtml(card.no)}</strong></div>
        <div>${rarityStars(card.rarity)} / 所持 ${getOwnedCount(card.id)}</div>
        <div>総合力 ${CARD_SIDES.reduce((sum, side) => sum + getCardRawValue(card, side), 0)}</div>
        ${card?.isAwakenedCard ? `<div class="awakening-detail-lines"><strong>${getAwakeningStageName(card.awakeningStage)}</strong><br>元の数値：${enhancementCardValuesHtml(card, true)}<br><span class="gold-text">成長後：${enhancementCardValuesHtml(card, false)}</span></div>` : ""}
        ${card?.kaijutsuSkillId ? `<div class="kaijutsu-detail-lines"><strong>ひらめきスキル：${escapeHtml(getKaijutsuSkill(card.kaijutsuSkillId).name)}</strong><br>${escapeHtml(card.kaijutsuSummary ?? "数値・向き変更適用中")}</div>` : ""}
      </div>
    </div>
  `;
}

function showCardDetailPopup(card, options = {}) {
  const actions = [];
  if (typeof options.onSelect === "function") {
    actions.push({
      label: options.selectLabel ?? "このカードを選択",
      onClick: () => {
        closeModal();
        options.onSelect();
      }
    });
  }
  actions.push({ label: "閉じる", className: "ghost", onClick: closeModal });
  showModal(options.title ?? "カード詳細", getCardDetailHtml(card, options), actions);
}

function fitBattleLayout() {
  const battleScreen = screens.battle;
  const battleMain = battleScreen?.querySelector(".battle-main");
  const pixiContainer = $("pixiContainer");
  if (!battleScreen?.classList.contains("active") || !battleMain || !pixiContainer) return;

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 360;
  const documentWidth = document.documentElement.clientWidth || viewportWidth;
  const compact = viewportWidth <= 720;

  const mainStyle = getComputedStyle(battleMain);
  const mainPaddingX = parseFloat(mainStyle.paddingLeft || "0") + parseFloat(mainStyle.paddingRight || "0");
  const battleRect = battleMain.getBoundingClientRect();
  const viewportSafeWidth = Math.max(220, Math.min(viewportWidth, documentWidth) - (compact ? 10 : 24));
  const measuredWidth = Math.min(battleMain.clientWidth || viewportSafeWidth, battleRect.width || viewportSafeWidth, viewportSafeWidth);
  const availableWidth = Math.max(compact ? 220 : 280, measuredWidth - mainPaddingX);
  const handGap = compact ? 3 : 8;
  const cardWidthLimit = compact ? 76 : 92;
  let cardWidth = Math.floor((availableWidth - handGap * 4) / 5);
  cardWidth = clamp(cardWidth, compact ? 44 : 76, cardWidthLimit);

  const cardPadding = clamp(Math.round(cardWidth / 13), 4, 8);
  const artHeight = clamp(Math.round(cardWidth * 0.38), compact ? 18 : 30, compact ? 32 : 42);
  const nameFont = clamp(Math.round(cardWidth / 8.5), 8, 11);
  const valueFont = clamp(Math.round(cardWidth / 6.5), 10, 12);
  const valueBox = clamp(Math.round(cardWidth / 4.4), 13, 16);
  const nameHeight = clamp(Math.round(nameFont * 2.35), 18, 26);
  const valuesHeight = valueBox * 3 + 4;
  const contentHeight = cardPadding * 2 + artHeight + nameHeight + valuesHeight + 16;
  const cardHeight = Math.max(Math.round(cardWidth * 1.62), contentHeight);

  // スクロール時にブラウザのアドレスバー表示/非表示で高さが変わっても盤面サイズが揺れないよう、
  // 3×3のバトル場は横幅だけを基準に固定する。
  const boardSize = Math.floor(Math.min(460, availableWidth));

  battleScreen.style.setProperty("--battle-board-size", `${boardSize}px`);
  battleScreen.style.setProperty("--battle-card-width", `${Math.floor(cardWidth)}px`);
  battleScreen.style.setProperty("--battle-card-min-height", `${Math.floor(cardHeight)}px`);
  battleScreen.style.setProperty("--battle-card-art-height", `${Math.floor(artHeight)}px`);
  battleScreen.style.setProperty("--battle-card-padding", `${Math.floor(cardPadding)}px`);
  battleScreen.style.setProperty("--battle-card-name-font", `${Math.floor(nameFont)}px`);
  battleScreen.style.setProperty("--battle-card-value-font", `${Math.floor(valueFont)}px`);
  battleScreen.style.setProperty("--battle-card-value-size", `${Math.floor(valueBox)}px`);
  battleScreen.style.setProperty("--battle-card-name-height", `${Math.floor(nameHeight)}px`);
  battleScreen.style.setProperty("--battle-hand-gap", `${Math.floor(handGap)}px`);
  battleScreen.style.setProperty("--battle-hand-min-height", `${Math.floor(cardHeight + (compact ? 8 : 10))}px`);

  battleMain.style.minHeight = "";
}
function initPixi() {
  if (state.pixi.app) {
    state.pixi.app.destroy(true, { children: true });
  }

  const app = new PIXI.Application({
    width: 460,
    height: 460,
    backgroundAlpha: 0,
    antialias: true,
    resolution: Math.min(window.devicePixelRatio || 1, 2),
    autoDensity: true
  });

  state.pixi.app = app;
  state.pixi.boardLayer = new PIXI.Container();
  state.pixi.effectLayer = new PIXI.Container();
  app.stage.addChild(state.pixi.boardLayer);
  app.stage.addChild(state.pixi.effectLayer);

  $("pixiContainer").innerHTML = "";
  $("pixiContainer").appendChild(app.view);
  fitBattleLayout();
}

function boardPosition(index) {
  const row = Math.floor(index / 3);
  const col = index % 3;
  const { originX, originY, cellSize, gap } = state.pixi;
  return {
    x: originX + col * (cellSize + gap),
    y: originY + row * (cellSize + gap)
  };
}

function renderBoard() {
  const { boardLayer, cellSize } = state.pixi;
  if (!boardLayer) return;

  boardLayer.removeChildren();

  for (let index = 0; index < 9; index += 1) {
    const pos = boardPosition(index);
    const cell = new PIXI.Graphics();
    cell.beginFill(0x171b31, 0.92);
    cell.lineStyle(2, 0xffffff, 0.16);
    cell.drawRoundedRect(pos.x, pos.y, cellSize, cellSize, 18);
    cell.endFill();
    cell.eventMode = "static";
    cell.cursor = "pointer";
    cell.on("pointertap", () => handleBoardClick(index));
    boardLayer.addChild(cell);

    const targetMode = state.battle?.kaijutsu?.targetMode;
    const hasField = getFieldEffectAt(index, state.battle) !== 0;
    const isEmpty = !state.battle?.board[index];
    const isUnlockedCell = !isLockCell(index, state.battle);
    const targetEligible =
      (targetMode === "field_purge" && hasField && isEmpty && isUnlockedCell) ||
      (targetMode === "field_shift_source" && hasField && isEmpty && isUnlockedCell) ||
      (targetMode === "field_shift_destination" && !hasField && isEmpty && isUnlockedCell) ||
      (targetMode === "soul_boost_card" && state.battle?.board[index]?.owner === "npc");
    if (targetEligible) {
      const targetFrame = new PIXI.Graphics();
      targetFrame.lineStyle(5, 0xd9a7ff, 0.95);
      targetFrame.drawRoundedRect(pos.x + 4, pos.y + 4, cellSize - 8, cellSize - 8, 16);
      boardLayer.addChild(targetFrame);
    }

    const fieldValue = getFieldEffectAt(index, state.battle);
    if (fieldValue) {
      const fieldBadge = new PIXI.Graphics();
      const positive = fieldValue > 0;
      fieldBadge.beginFill(positive ? 0x1e8f57 : 0x9f2d45, 0.92);
      fieldBadge.lineStyle(2, 0xffffff, 0.18);
      fieldBadge.drawRoundedRect(pos.x + cellSize - 48, pos.y + 8, 40, 24, 8);
      fieldBadge.endFill();
      boardLayer.addChild(fieldBadge);

      const fieldLabel = new PIXI.Text(`${fieldValue > 0 ? "+" : ""}${fieldValue}`, {
        fontFamily: "Arial",
        fontSize: 15,
        fontWeight: "bold",
        fill: 0xffffff
      });
      fieldLabel.anchor.set(0.5);
      fieldLabel.x = pos.x + cellSize - 28;
      fieldLabel.y = pos.y + 20;
      boardLayer.addChild(fieldLabel);
    }

    const placed = state.battle?.board[index];
    if (!placed && state.battle?.revealLockCells && isLockCell(index, state.battle)) {
      const detectorBg = new PIXI.Graphics();
      detectorBg.beginFill(0x101626, 0.82);
      detectorBg.lineStyle(3, 0xffd66b, 0.95);
      detectorBg.drawRoundedRect(pos.x + 8, pos.y + 8, cellSize - 16, cellSize - 16, 14);
      detectorBg.endFill();
      boardLayer.addChild(detectorBg);

      const detectorText = new PIXI.Text("🔒", {
        fontFamily: "Arial",
        fontSize: Math.max(26, Math.round(cellSize * 0.25)),
        fill: 0xffd66b
      });
      detectorText.anchor.set(0.5);
      detectorText.x = pos.x + cellSize / 2;
      detectorText.y = pos.y + cellSize / 2;
      boardLayer.addChild(detectorText);
    }
    if (placed) {
      boardLayer.addChild(createPixiCard(placed.card, placed.owner, pos.x + 8, pos.y + 8, index));
      if (placed.locked) {
        const lockBg = new PIXI.Graphics();
        lockBg.beginFill(0x101626, 0.86);
        lockBg.lineStyle(2, 0xffd66b, 0.9);
        lockBg.drawCircle(pos.x + cellSize - 24, pos.y + cellSize - 24, 15);
        lockBg.endFill();
        boardLayer.addChild(lockBg);
        const lockText = new PIXI.Text("🔒", {
          fontFamily: "Arial",
          fontSize: 17,
          fill: 0xffd66b
        });
        lockText.anchor.set(0.5);
        lockText.x = pos.x + cellSize - 24;
        lockText.y = pos.y + cellSize - 24;
        boardLayer.addChild(lockText);
      }
    }
  }
}

function createPixiCard(card, owner, x, y, boardIndex = null) {
  const container = new PIXI.Container();
  container.x = x;
  container.y = y;

  const playerColor = 0x2b7fe9;
  const npcColor = 0xe6425c;
  const borderColor = owner === "player" ? playerColor : npcColor;
  const fillColor = owner === "player" ? 0x163b69 : 0x652033;

  const frame = new PIXI.Graphics();
  frame.beginFill(fillColor, 0.96);
  frame.lineStyle(4, borderColor, 1);
  frame.drawRoundedRect(0, 0, 116, 116, 16);
  frame.endFill();
  container.addChild(frame);

  if (card?.isShuraCard) {
    // 大人カードは、内側から「属性色 → オレンジ → 所有者色」の3層で表示する。
    // 外側の所有者色（青/赤）は base frame が担当。
    const flameFrame = new PIXI.Graphics();
    flameFrame.lineStyle(3, 0xff6a1f, 1);
    flameFrame.drawRoundedRect(3, 3, 110, 110, 14);
    const typeColor = Number.parseInt(getCardTypeMeta(card).color.replace("#", ""), 16);
    flameFrame.lineStyle(3, Number.isFinite(typeColor) ? typeColor : 0xa3adbd, 1);
    flameFrame.drawRoundedRect(7, 7, 102, 102, 12);
    container.addChild(flameFrame);
  }

  // カード画像が未設定の開発版でも盤面描画を止めない。
  // PIXI.Sprite.from("") は実行時例外になり、配置位置より後ろのマスが
  // 描画されなくなるため、画像がない場合は教科色の仮アートを直接描画する。
  const typeMeta = getCardTypeMeta(card);
  const imagePath = getCardImagePath(card);
  if (imagePath) {
    const artMask = new PIXI.Graphics();
    artMask.beginFill(0xffffff, 1);
    artMask.drawRoundedRect(8, 8, 100, 100, 12);
    artMask.endFill();
    container.addChild(artMask);

    const art = PIXI.Sprite.from(imagePath);
    art.x = 8;
    art.y = 8;
    art.width = 100;
    art.height = 100;
    art.alpha = 0.96;
    art.mask = artMask;
    container.addChild(art);

    const vignette = new PIXI.Graphics();
    vignette.beginFill(0x000000, 0.18);
    vignette.drawRoundedRect(8, 8, 100, 100, 12);
    vignette.endFill();
    container.addChild(vignette);
  } else {
    const placeholderColor = PIXI.utils.string2hex(typeMeta.color);
    const placeholder = new PIXI.Graphics();
    placeholder.beginFill(placeholderColor, 0.48);
    placeholder.drawRoundedRect(8, 8, 100, 100, 12);
    placeholder.endFill();
    container.addChild(placeholder);

    const subjectIcon = {
      "こくご": "📖",
      "さんすう": "➗",
      "りか": "🔬",
      "しゃかい": "🗾",
      "えいご": "ABC"
    }[getCardType(card)] ?? "★";
    const placeholderText = new PIXI.Text(subjectIcon, {
      fontFamily: "Arial",
      fontSize: subjectIcon === "ABC" ? 22 : 30,
      fontWeight: "bold",
      fill: 0xffffff,
      align: "center"
    });
    placeholderText.anchor.set(0.5);
    placeholderText.x = 58;
    placeholderText.y = 58;
    container.addChild(placeholderText);
  }

  const typeFrame = new PIXI.Graphics();
  typeFrame.lineStyle(3, PIXI.utils.string2hex(typeMeta.color), 0.95);
  typeFrame.drawRoundedRect(8, 8, 100, 100, 12);
  container.addChild(typeFrame);

  const starBand = new PIXI.Graphics();
  starBand.beginFill(0x0b1020, 0.64);
  starBand.drawRoundedRect(10, 10, 44, 16, 8);
  starBand.endFill();
  container.addChild(starBand);

  const star = new PIXI.Text(rarityStars(card.rarity), {
    fontFamily: "Arial",
    fontSize: 11,
    fill: 0xffd66b,
    fontWeight: "bold"
  });
  star.anchor.set(0.5, 0.5);
  star.x = 32;
  star.y = 18;
  container.addChild(star);


  const values = getCardValueSet(card, state.battle, state.battle?.board, boardIndex);
  addValueText(container, displayValue(values.up), 58, 18, getWildValueColor(card, "up"), { shura: isShuraEnhancedSide(card, "up") });
  addValueText(container, displayValue(values.right), 98, 58, getWildValueColor(card, "right"), { shura: isShuraEnhancedSide(card, "right") });
  addValueText(container, displayValue(values.down), 58, 98, getWildValueColor(card, "down"), { shura: isShuraEnhancedSide(card, "down") });
  addValueText(container, displayValue(values.left), 18, 58, getWildValueColor(card, "left"), { shura: isShuraEnhancedSide(card, "left") });

  if (isBattleCardPopupEnabled()) {
    container.eventMode = "static";
    container.cursor = "pointer";
    container.on("pointertap", (event) => {
      event.stopPropagation();
      showCardDetailPopup(card, { title: owner === "player" ? "場の自分カード" : "場の相手カード", effective: true, owner });
    });
  }

  return container;
}

function addValueText(container, text, x, y, textColor = 0xffffff, options = {}) {
  if (options.shura) {
    const outer = new PIXI.Graphics();
    outer.beginFill(0xe52f16, 0.97);
    outer.drawPolygon([x, y - 16, x + 8, y - 5, x + 12, y - 10, x + 14, y + 5, x + 8, y + 13, x, y + 17, x - 8, y + 13, x - 14, y + 5, x - 11, y - 8, x - 5, y - 3]);
    outer.endFill();
    container.addChild(outer);
    const inner = new PIXI.Graphics();
    inner.beginFill(0xffad1f, 0.98);
    inner.drawPolygon([x, y - 9, x + 6, y, x + 8, y + 7, x, y + 12, x - 8, y + 7, x - 5, y - 2]);
    inner.endFill();
    container.addChild(inner);
  } else {
    const bg = new PIXI.Graphics();
    bg.beginFill(0x0b1020, 0.82);
    bg.lineStyle(1, 0xffffff, 0.16);
    bg.drawRoundedRect(x - 12, y - 10, 24, 20, 7);
    bg.endFill();
    container.addChild(bg);
  }

  // 大人強化だけが付いた数値は、炎の明るい背景でも見やすい黒で描画する。
  // ワイルドカードの色が同じ辺に付いている場合は、従来どおりワイルド色を優先する。
  const resolvedTextColor = options.shura && textColor === 0xffffff ? 0x111111 : textColor;
  const label = new PIXI.Text(text, {
    fontFamily: "Arial",
    fontSize: 14,
    fontWeight: "bold",
    fill: resolvedTextColor
  });
  label.anchor.set(0.5);
  label.x = x;
  label.y = y;
  container.addChild(label);
}

function addBattleLog(message) {
  const log = $("battleLog");
  const row = document.createElement("div");
  row.className = "log-row";
  row.textContent = message;
  log.prepend(row);
}


function isKaijutsuAvailableInBattle(battle = state.battle) {
  return Boolean(battle && !["online", "onlineNpc"].includes(battle.mode));
}

function getBattleKaijutsuState(battle = state.battle) {
  return battle?.kaijutsu ?? null;
}

function getKaijutsuMaxUses() {
  return hasDefeatedNpc(16) ? 2 : 1;
}

function getKaijutsuUsedIds(skillState = getBattleKaijutsuState()) {
  return Array.isArray(skillState?.usedIds) ? skillState.usedIds : [];
}

function getKaijutsuRemainingUses(skillState = getBattleKaijutsuState()) {
  if (!skillState) return 0;
  return Math.max(0, Number(skillState.maxUses ?? 1) - getKaijutsuUsedIds(skillState).length);
}

function hasUsedKaijutsu(skillId, skillState = getBattleKaijutsuState()) {
  return getKaijutsuUsedIds(skillState).includes(skillId);
}

function markKaijutsuUsed(skillId, skillState = getBattleKaijutsuState()) {
  if (!skillState || !skillId || hasUsedKaijutsu(skillId, skillState)) return;
  skillState.usedIds = [...getKaijutsuUsedIds(skillState), skillId];
  skillState.activeSkillId = null;
}

function getKaijutsuTargetHandIndex(battle = state.battle) {
  const target = battle?.kaijutsu?.targetHandIndex;
  return Number.isInteger(target) && target >= 0 ? target : null;
}

function getSelectedHandIndexForKaijutsu() {
  const battle = state.battle;
  if (!battle) return null;
  const forced = getForcedHandIndex("player");
  if (forced !== null) return forced;
  return Number.isInteger(state.selectedHandIndex) ? state.selectedHandIndex : null;
}

function getAvailableKaijutsuSkills(skillState = getBattleKaijutsuState()) {
  return KAIJUTSU_SKILLS.filter((skill) => {
    if (skill.id === "none") return false;
    return isKaijutsuUnlocked(skill.id) && !hasUsedKaijutsu(skill.id, skillState);
  });
}

function getKaijutsuTargetModeLabel(mode) {
  if (mode === "field_purge") return "無効化するフィールド効果のマスを選んでください。";
  if (mode === "field_shift_source") return "移動するフィールド効果のマスを選んでください。";
  if (mode === "field_shift_destination") return "フィールド効果の移動先となる空きマスを選んでください。";
  if (mode === "soul_boost_card") return "強化する相手色のカードを選んでください。";
  return "対象を選んでください。";
}

function renderKaijutsuControl() {
  const button = $("useKaijutsuButton");
  const status = $("kaijutsuStatus");
  if (!button || !status) return;
  const battle = state.battle;
  const skillState = getBattleKaijutsuState(battle);

  if (!battle || !isKaijutsuAvailableInBattle(battle)) {
    button.textContent = "ひらめきスキル：使用不可";
    button.disabled = true;
    status.textContent = battle ? "オンライン対戦ではひらめきスキルを使用できません。" : "";
    return;
  }

  if (!skillState) {
    button.textContent = "ひらめきスキル：使用不可";
    button.disabled = true;
    status.textContent = "";
    return;
  }

  if (skillState.targetMode) {
    const activeSkill = getKaijutsuSkill(skillState.activeSkillId);
    button.textContent = `${activeSkill.name}：対象選択をキャンセル`;
    button.disabled = false;
    status.textContent = getKaijutsuTargetModeLabel(skillState.targetMode);
    return;
  }

  if (skillState.pending) {
    const pendingSkill = getKaijutsuSkill(skillState.pendingSkillId);
    button.textContent = `ひらめきスキル：${pendingSkill.name}（適用待ち）`;
    button.disabled = true;
    status.textContent = "選択したカードを場に出すと効果が確定します。";
    return;
  }

  const remaining = getKaijutsuRemainingUses(skillState);
  const available = getAvailableKaijutsuSkills(skillState);
  const usableTurn = battle.currentTurn === "player" && !battle.locked && !battle.finished;
  button.textContent = `ひらめきスキルを使う（残り${remaining}回）`;
  button.disabled = !usableTurn || remaining <= 0 || available.length === 0;
  if (remaining <= 0) {
    status.textContent = "この対戦で使用できるひらめきスキルをすべて使用しました。";
  } else if (!available.length) {
    status.textContent = "使用できる未使用のひらめきスキルがありません。";
  } else {
    status.textContent = usableTurn
      ? `取得済みのひらめきスキルから選択できます。同じひらめきスキルは1回の対戦で1度だけです。`
      : "自分のターンで、カードを置く前に使用できます。";
  }
}

function armNextCardKaijutsu(skillId, options = {}) {
  const battle = state.battle;
  const skillState = getBattleKaijutsuState(battle);
  const handIndex = getSelectedHandIndexForKaijutsu();
  if (!battle || !skillState || handIndex === null) {
    showModal("ひらめきスキル", "<p>先に、次に場へ出す手札を1枚選択してください。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }
  const entry = battle.playerHand?.[handIndex];
  if (!entry || entry.used) return;
  entry.card = applyKaijutsuToCard(entry.card, skillId, options);
  markKaijutsuUsed(skillId, skillState);
  skillState.pending = true;
  skillState.pendingSkillId = skillId;
  skillState.targetHandIndex = handIndex;
  state.selectedHandIndex = handIndex;
  const skill = getKaijutsuSkill(skillId);
  addBattleLog(`ひらめきスキル「${skill.name}」を発動：${entry.card.kaijutsuSummary || skill.description}`);
  closeModal();
  renderBattleAll();
}

function beginFieldPurgeKaijutsu(skillId = "field_purge") {
  const battle = state.battle;
  const skillState = getBattleKaijutsuState(battle);
  if (!battle || !skillState) return;
  const candidates = Array.from({ length: 9 }, (_, index) => index).filter((index) => {
    return getFieldEffectAt(index, battle) !== 0 && !battle.board[index] && !isLockCell(index, battle);
  });
  if (!candidates.length) {
    showModal("効果クリア", "<p>無効化できるフィールド効果がありません。</p><p>ロックマス、または既にカードが置かれたマスは対象にできません。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }
  skillState.activeSkillId = skillId;
  skillState.targetMode = "field_purge";
  addBattleLog("ひらめきスキル「効果クリア」：無効化するフィールド効果のマスを選択してください。");
  closeModal();
  renderBattleAll();
}

function beginFieldShiftKaijutsu() {
  const battle = state.battle;
  const skillState = getBattleKaijutsuState(battle);
  if (!battle || !skillState) return;
  const sources = Array.from({ length: 9 }, (_, index) => index).filter((index) => {
    return getFieldEffectAt(index, battle) !== 0 && !battle.board[index] && !isLockCell(index, battle);
  });
  const destinations = Array.from({ length: 9 }, (_, index) => index).filter((index) => {
    return !battle.board[index] && !isLockCell(index, battle) && getFieldEffectAt(index, battle) === 0;
  });
  if (!sources.length || !destinations.length) {
    showModal("効果おひっこし", "<p>移動できるフィールド効果、または移動先となる空きマスがありません。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }
  skillState.activeSkillId = "field_shift";
  skillState.targetMode = "field_shift_source";
  skillState.sourceFieldIndex = null;
  addBattleLog("ひらめきスキル「効果おひっこし」：移動するフィールド効果のマスを選択してください。");
  closeModal();
  renderBattleAll();
}

function beginSoulBoostKaijutsu() {
  const battle = state.battle;
  const skillState = getBattleKaijutsuState(battle);
  if (!battle || !skillState) return;
  const candidates = battle.board.map((cell, index) => cell?.owner === "npc" ? index : -1).filter((index) => index >= 0);
  if (!candidates.length) {
    showModal("おうえんパワー", "<p>相手色になっているカードがありません。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }
  skillState.activeSkillId = "soul_boost";
  skillState.targetMode = "soul_boost_card";
  addBattleLog("ひらめきスキル「おうえんパワー」：強化する相手色のカードを選択してください。");
  closeModal();
  renderBattleAll();
}

function resolveKaijutsuBoardTarget(index) {
  const battle = state.battle;
  const skillState = getBattleKaijutsuState(battle);
  const mode = skillState?.targetMode;
  if (!battle || !mode) return false;

  if (mode === "field_purge") {
    const value = getFieldEffectAt(index, battle);
    if (!value || battle.board[index] || isLockCell(index, battle)) {
      addBattleLog("効果クリア：そのマスは無効化できません。");
      return true;
    }
    delete battle.fieldEffects[index];
    delete battle.fieldEffects[String(index)];
    skillState.targetMode = null;
    markKaijutsuUsed("field_purge", skillState);
    addBattleLog(`ひらめきスキル「効果クリア」：マス${index + 1}の${value > 0 ? "+" : ""}${value}効果を無効化しました。`);
    renderBattleAll();
    return true;
  }

  if (mode === "field_shift_source") {
    const value = getFieldEffectAt(index, battle);
    if (!value || battle.board[index] || isLockCell(index, battle)) {
      addBattleLog("効果おひっこし：移動元として選べないマスです。");
      return true;
    }
    skillState.sourceFieldIndex = index;
    skillState.targetMode = "field_shift_destination";
    addBattleLog(`効果おひっこし：マス${index + 1}の${value > 0 ? "+" : ""}${value}を移動します。移動先を選んでください。`);
    renderBattleAll();
    return true;
  }

  if (mode === "field_shift_destination") {
    const sourceIndex = Number(skillState.sourceFieldIndex);
    const value = getFieldEffectAt(sourceIndex, battle);
    if (!Number.isInteger(sourceIndex) || !value) {
      skillState.targetMode = "field_shift_source";
      skillState.sourceFieldIndex = null;
      renderBattleAll();
      return true;
    }
    if (index === sourceIndex || battle.board[index] || isLockCell(index, battle) || getFieldEffectAt(index, battle) !== 0) {
      addBattleLog("効果おひっこし：移動先として選べないマスです。フィールド効果のない別の空きマスを選んでください。");
      return true;
    }
    delete battle.fieldEffects[sourceIndex];
    delete battle.fieldEffects[String(sourceIndex)];
    battle.fieldEffects[index] = value;
    skillState.targetMode = null;
    skillState.sourceFieldIndex = null;
    markKaijutsuUsed("field_shift", skillState);
    addBattleLog(`ひらめきスキル「効果おひっこし」：${value > 0 ? "+" : ""}${value}効果をマス${sourceIndex + 1}からマス${index + 1}へ移動しました。`);
    renderBattleAll();
    return true;
  }

  if (mode === "soul_boost_card") {
    const cell = battle.board[index];
    if (!cell || cell.owner !== "npc") {
      addBattleLog("おうえんパワー：相手色のカードを選んでください。");
      return true;
    }
    const sideLabels = { up: "上", right: "右", down: "下", left: "左" };
    const actions = CARD_SIDES.map((side) => ({
      label: `${sideLabels[side]}を+1`,
      onClick: () => {
        const rotatedSide = getRotationSourceSide(side, cell.card?.skillRotation);
        const rawSide = getMirrorSide(rotatedSide, battle, index);
        cell.card = applyKaijutsuToCard(cell.card, "soul_boost", { side: rawSide });
        skillState.targetMode = null;
        markKaijutsuUsed("soul_boost", skillState);
        addBattleLog(`ひらめきスキル「おうえんパワー」：マス${index + 1}の${sideLabels[side]}を+1しました。`);
        closeModal();
        renderBattleAll();
      }
    }));
    actions.push({ label: "キャンセル", className: "ghost", onClick: closeModal });
    showModal("おうえんパワー", `<p>「${escapeHtml(cell.card.name)}」の強化する辺を選んでください。</p>`, actions);
    return true;
  }

  return false;
}

function cancelKaijutsuTargetSelection() {
  const skillState = getBattleKaijutsuState();
  if (!skillState?.targetMode) return;
  const skill = getKaijutsuSkill(skillState.activeSkillId);
  skillState.targetMode = null;
  skillState.sourceFieldIndex = null;
  skillState.activeSkillId = null;
  addBattleLog(`ひらめきスキル「${skill.name}」の対象選択をキャンセルしました。`);
  renderBattleAll();
}

function showKaijutsuSelectionModal() {
  const battle = state.battle;
  const skillState = getBattleKaijutsuState(battle);
  if (!battle || !skillState) return;
  const available = getAvailableKaijutsuSkills(skillState);
  if (!available.length) {
    showModal("ひらめきスキル", "<p>使用できる未使用のひらめきスキルがありません。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }
  const actions = available.map((skill) => ({
    label: `${skill.name}（${skill.unlockRate}%）`,
    onClick: () => chooseKaijutsu(skill.id)
  }));
  actions.push({ label: "キャンセル", className: "ghost", onClick: closeModal });
  const usedNames = getKaijutsuUsedIds(skillState).map((id) => getKaijutsuSkill(id).name);
  const usedText = usedNames.length ? `<p><small>使用済み：${escapeHtml(usedNames.join("、"))}</small></p>` : "";
  showModal("ひらめきスキルを選択", `<p>この対戦で残り${getKaijutsuRemainingUses(skillState)}回使用できます。同じひらめきスキルは2回使用できません。</p>${usedText}`, actions);
}

function chooseKaijutsu(skillId) {
  const battle = state.battle;
  const skillState = getBattleKaijutsuState(battle);
  if (!battle || !skillState || !isKaijutsuUnlocked(skillId) || hasUsedKaijutsu(skillId, skillState) || getKaijutsuRemainingUses(skillState) <= 0) return;
  const skill = getKaijutsuSkill(skillId);

  if (skillId === "field_purge") {
    beginFieldPurgeKaijutsu(skillId);
    return;
  }
  if (skillId === "field_shift") {
    beginFieldShiftKaijutsu();
    return;
  }
  if (skillId === "soul_boost") {
    beginSoulBoostKaijutsu();
    return;
  }

  const handIndex = getSelectedHandIndexForKaijutsu();
  if (handIndex === null) {
    showModal("ひらめきスキル", "<p>先に、次に場へ出す手札を1枚選択してください。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }

  const sideLabels = { up: "上", right: "右", down: "下", left: "左" };
  if (skill.id === "curse_boost" || skill.id === "blood_contract") {
    const suffix = skill.id === "curse_boost" ? "+1する辺" : "+2する辺";
    const actions = CARD_SIDES.map((side) => ({
      label: `${sideLabels[side]}を選択`,
      onClick: () => armNextCardKaijutsu(skill.id, { side })
    }));
    actions.push({ label: "キャンセル", className: "ghost", onClick: closeModal });
    showModal(skill.name, `<p>${escapeHtml(skill.description)}</p><p><strong>${suffix}を選んでください。</strong></p>`, actions);
    return;
  }

  showModal(skill.name, `<p>${escapeHtml(skill.description)}</p><p>選択中のカードに適用します。</p>`, [
    { label: "使用する", onClick: () => armNextCardKaijutsu(skill.id) },
    { label: "キャンセル", className: "ghost", onClick: closeModal }
  ]);
}

function activateKaijutsu() {
  const battle = state.battle;
  const skillState = getBattleKaijutsuState(battle);
  if (!battle || !skillState || !isKaijutsuAvailableInBattle(battle)) return;
  if (skillState.targetMode) {
    cancelKaijutsuTargetSelection();
    return;
  }
  if (skillState.pending || getKaijutsuRemainingUses(skillState) <= 0 || battle.currentTurn !== "player" || battle.locked || battle.finished) return;
  showKaijutsuSelectionModal();
}

function renderBattleHands() {
  const battle = state.battle;
  if (!battle) return;

  const forcedPlayerIndex = getForcedHandIndex("player");
  const skillTargetIndex = getKaijutsuTargetHandIndex(battle);
  const playerHand = $("playerHand");
  playerHand.innerHTML = "";
  battle.playerHand.forEach((entry, index) => {
    const div = document.createElement("div");
    const isForced = forcedPlayerIndex === index && battle.currentTurn === "player" && !entry.used;
    const isSkillTarget = skillTargetIndex === index && !entry.used;
    div.className = `mini-card ${entry.used ? "used" : ""} ${state.selectedHandIndex === index || isForced || isSkillTarget ? "selected" : ""} ${isForced ? "forced" : ""} ${isSkillTarget ? "kaijutsu-target" : ""}`;
    div.innerHTML = cardMiniHtml(entry.card, isForced ? "指定" : "", { showName: false, effective: true, owner: "player" });
    applyCardTypeStyle(div, entry.card);

    const canSelect = !entry.used && battle.currentTurn === "player" && !battle.locked && forcedPlayerIndex === null && (skillTargetIndex === null || skillTargetIndex === index);
    if (isBattleCardPopupEnabled()) {
      div.addEventListener("click", () => {
        showCardDetailPopup(entry.card, canSelect ? {
          title: "手札カード",
          owner: "player",
          onSelect: () => {
            state.selectedHandIndex = state.selectedHandIndex === index ? null : index;
            renderBattleHands();
          },
          selectLabel: state.selectedHandIndex === index ? "選択を解除" : "このカードを選ぶ"
        } : { title: "手札カード", owner: "player" });
      });
    } else if (canSelect) {
      div.addEventListener("click", () => {
        state.selectedHandIndex = state.selectedHandIndex === index ? null : index;
        renderBattleHands();
      });
    }
    playerHand.appendChild(div);
  });

  const npcHand = $("npcHand");
  npcHand.innerHTML = "";
  const revealNpcHand = battle.npc.difficulty === "よわい" || hasRule("all_open", battle);
  battle.npcHand.forEach((entry, index) => {
    const div = document.createElement("div");
    const isForced = getForcedHandIndex("npc") === index && battle.currentTurn === "npc" && !entry.used;
    if (revealNpcHand) {
      div.className = `mini-card opponent-open ${entry.used ? "used" : ""} ${isForced ? "forced" : ""}`;
      div.innerHTML = cardMiniHtml(entry.card, "", { showName: false, effective: true, owner: "npc" });
      applyCardTypeStyle(div, entry.card);
      if (isBattleCardPopupEnabled()) {
        div.addEventListener("click", () => showCardDetailPopup(entry.card, { title: "相手の手札", owner: "npc" }));
      }
    } else {
      div.className = `card-back ${isForced ? "forced" : ""}`;
      div.textContent = entry.used ? "済" : "PCB";
      if (entry.used) div.style.opacity = "0.28";
    }
    npcHand.appendChild(div);
  });

  const score = calcScore();
  $("scoreLabel").textContent = `自分 ${score.player} - ${score.npc} 相手`;
  $("turnLabel").textContent = battle.finished
    ? "対戦終了"
    : battle.currentTurn === "coin"
      ? "現在のターン：コイントス中"
      : `現在のターン：${battle.currentTurn === "player" ? "プレイヤー" : "相手"}`;
  renderKaijutsuControl();
}

function renderBattleAll() {
  renderBoard();
  renderBattleHands();
  scheduleBattleAutoFit();
}

function calcScore(customBoard = null, playerRemaining = null, npcRemaining = null) {
  const battle = state.battle;
  const board = customBoard ?? battle.board;
  const boardPlayer = board.filter((cell) => cell?.owner === "player").length;
  const boardNpc = board.filter((cell) => cell?.owner === "npc").length;
  const pRemain = playerRemaining ?? battle.playerHand.filter((entry) => !entry.used).length;
  const nRemain = npcRemaining ?? battle.npcHand.filter((entry) => !entry.used).length;

  return {
    player: boardPlayer + pRemain,
    npc: boardNpc + nRemain
  };
}

function getNpcCardPool(npc) {
  return (npc?.cardPool ?? []).map((id) => cardById.get(id)).filter(Boolean);
}

function getNpcCardPoolForRules(npc, ruleIds = []) {
  const maxRarity = getLittleRuleMaxRarity(ruleIds);
  if (!maxRarity) return getNpcCardPool(npc);
  const explicit = npc?.littlePools?.[String(maxRarity)] ?? npc?.littlePools?.[maxRarity];
  const sourceIds = Array.isArray(explicit) ? explicit : (npc?.cardPool ?? []);
  let pool = sourceIds.map((id) => cardById.get(id)).filter((card) => card && card.rarity <= maxRarity);
  if (pool.length < 5) pool = CARDS.filter((card) => card.rarity <= maxRarity);
  return pool;
}

function buildNpcHand(npc, ruleIds = []) {
  const pool = getNpcCardPoolForRules(npc, ruleIds);
  const selected = [];
  const selectedIds = new Set();
  const addCard = (card) => {
    if (!card || selectedIds.has(card.id) || selected.length >= 5) return false;
    selected.push(card);
    selectedIds.add(card.id);
    return true;
  };

  for (const cardId of npc.requiredCards ?? []) {
    const requiredCard = cardById.get(cardId);
    // 難易度調整のため、リトル選択時でもNPCの必須カードは必ず手札に入れる。
    // 例：対戦相手の★3カードは★★★デッキでも手札に入る。
    addCard(requiredCard);
  }

  for (const pattern of npc.handPattern ?? []) {
    const candidates = shuffle(pool.filter((card) => !selectedIds.has(card.id) && (!pattern.rarity || card.rarity === pattern.rarity)));
    for (const card of candidates.slice(0, Math.max(0, Number(pattern.count ?? 0)))) {
      addCard(card);
    }
  }

  for (const card of shuffle(pool.filter((card) => !selectedIds.has(card.id)))) {
    if (selected.length >= 5) break;
    addCard(card);
  }

  return selected.slice(0, 5);
}

function getNpcRuleGroup(npc, groupName) {
  return (npc?.[groupName] ?? []).filter((id) => RULE_NAME_BY_ID[id]);
}

function rollNpcAdditionalRules(npc) {
  const group1 = getNpcRuleGroup(npc, "ruleGroup1");
  const group2 = getNpcRuleGroup(npc, "ruleGroup2");
  const rolled = [];
  const ruleDifficulty = npc.baseDifficulty ?? npc.difficulty;
  if (ruleDifficulty === "ふつう" && group1.length) {
    rolled.push(sample(group1, 1)[0]);
  } else if (ruleDifficulty === "つよい") {
    if (group1.length) rolled.push(sample(group1, 1)[0]);
    if (group2.length) rolled.push(sample(group2, 1)[0]);
  }
  return sanitizeRuleIds(rolled);
}

function rollOnlineAdditionalRules() {
  const candidateIds = RULES.map((rule) => rule.id);
  const picked = sample(candidateIds, 1)[0];
  return picked ? [picked] : [];
}

function ensureNpcFeeAvailable(npc, amount, title = "まなびポイント不足") {
  if (Number(state.save.money ?? 0) >= amount) return true;
  showModal(title, `<p>必要MPは${formatMoney(amount)}です。</p><p>現在のまなびポイント：${formatMoney(state.save.money)}</p>`, [
    { label: "ショップへ", onClick: () => { closeModal(); showScreen("shop"); } },
    { label: "閉じる", className: "ghost", onClick: closeModal }
  ]);
  return false;
}

function chargeNpcChallengeFee(npc) {
  const entryFee = getNpcEntryFee(npc);
  if (!ensureNpcFeeAvailable(npc, entryFee)) return false;
  if (entryFee > 0) spendMoney(entryFee);
  return true;
}

function showWeakRuleSelection(npc) {
  if (!chargeNpcChallengeFee(npc)) return;
  state.selectedRuleIds = [];
  showModal(
    "追加ルール設定",
    `
      <p><strong>${escapeHtml(npc.name)}</strong>は難易度「よわい」のため、追加ルールを自由に設定できます。</p>
      <p class="muted">オーダーとカオス、リバースとエースキラーは同時に付けられません。</p>
      <div id="weakRuleList" class="rule-list"></div>
      <p class="muted">挑戦料${formatMoney(getNpcEntryFee(npc))}は支払い済みです。キャンセル・棄権時も返金されません。</p>
      <p class="muted">勝利報酬：${formatMoney(getNpcWinMoney(npc))}</p>
    `,
    [
      { label: "このルールで対戦開始", onClick: () => { const scope = $("weakRuleList"); const rules = getSelectedRuleIds(scope); closeModal(); startBattle(npc.id, rules, { entryFeePaid: true }); } },
      { label: "キャンセル", className: "ghost", onClick: closeModal }
    ]
  );
  renderRuleSelector("weakRuleList", RULES.map((rule) => rule.id), []);
}

function showRuleLottery(npc, options = {}) {
  const initial = options.initial !== false;
  if (initial && !chargeNpcChallengeFee(npc)) return;

  const rules = Array.isArray(options.rules) ? sanitizeRuleIds(options.rules) : rollNpcAdditionalRules(npc);
  const rerollFee = Math.ceil(getNpcEntryFee(npc) / 2);
  const pending = ensurePendingNpcItems(npc.id);
  const lockOwned = getOwnedItemCount("lock_detector");
  const charmOwned = getOwnedItemCount("miracle_charm");

  const reopenWithSameRules = () => {
    closeModal();
    showRuleLottery(npc, { initial: false, rules });
  };

  const actions = [
    { label: "対戦開始", onClick: () => { closeModal(); startBattle(npc.id, rules, { entryFeePaid: true }); } },
    {
      label: `再抽選（${formatMoney(rerollFee)}）`,
      className: "ghost",
      onClick: () => {
        if (!ensureNpcFeeAvailable(npc, rerollFee, "再抽選できません")) return;
        if (rerollFee > 0) spendMoney(rerollFee);
        closeModal();
        showRuleLottery(npc, { initial: false });
      }
    },
    {
      label: `ヒント虫めがね：${pending.lockDetectorUsed ? "ON" : "OFF"}（所持${lockOwned}）`,
      className: `ghost item-use-button ${pending.lockDetectorUsed ? "active" : ""}`,
      disabled: !pending.lockDetectorUsed && lockOwned <= 0,
      onClick: () => {
        const result = toggleBattlePrepItem("lock_detector", npc.id);
        if (!result.ok) {
          showModal("アイテム設定", `<p>${escapeHtml(result.message)}</p>`, [{ label: "閉じる", onClick: reopenWithSameRules }]);
          return;
        }
        reopenWithSameRules();
      }
    },
    {
      label: `ラッキーおまもり：${pending.miracleCharmUsed ? "ON" : "OFF"}（所持${charmOwned}）`,
      className: `ghost item-use-button ${pending.miracleCharmUsed ? "active" : ""}`,
      disabled: !pending.miracleCharmUsed && charmOwned <= 0,
      onClick: () => {
        const result = toggleBattlePrepItem("miracle_charm", npc.id);
        if (!result.ok) {
          showModal("アイテム設定", `<p>${escapeHtml(result.message)}</p>`, [{ label: "閉じる", onClick: reopenWithSameRules }]);
          return;
        }
        reopenWithSameRules();
      }
    }
  ];

  const effectiveRareRate = Math.min(100, getRareChanceRate(npc) * (pending.miracleCharmUsed ? 2 : 1));
  showModal(
    "追加ルール抽選",
    `
      <p><strong>${escapeHtml(npc.name)}</strong>との対戦では、追加ルールが自動で決まります。</p>
      <p class="rule-result-text">追加ルールは <strong>${escapeHtml(getRuleSummary(rules))}</strong> です。</p>
      ${getRuleDescriptionHtml(rules)}
      <div class="battle-item-status">
        <strong>使用アイテム</strong><br>
        ヒント虫めがね：${pending.lockDetectorUsed ? "ON（対戦開始時に使用。ロックマスがなければ消費しません）" : "OFF"}<br>
        ラッキーおまもり：${pending.miracleCharmUsed ? `ON（対戦開始時に使用。レアチャンス ${getRareChanceRate(npc)}% → ${effectiveRareRate}%）` : "OFF"}
      </div>
      <p class="muted">挑戦料${formatMoney(getNpcEntryFee(npc))}は支払い済みです。</p>
      <p class="muted">再抽選には挑戦料の半額 ${formatMoney(rerollFee)} が必要です。再抽選料は返金されません。</p>
      <p class="muted">勝利報酬：${formatMoney(getNpcWinMoney(npc))}</p>
    `,
    actions
  );
}

function prepareBattleStart(npcId) {
  const npc = npcById.get(npcId);
  if (!npc) return;
  state.pendingNpcItems = {
    npcId: npc.id,
    lockDetectorUsed: false,
    miracleCharmUsed: false
  };
  if (npc.difficulty === "よわい") {
    showWeakRuleSelection(npc);
  } else {
    showRuleLottery(npc);
  }
}



function getDeckCardsForOnlineRules(ruleIds = []) {
  const deckIndex = getDeckIndexForRules(ruleIds);
  const deck = state.save.decks[deckIndex] ?? [];
  const error = validateDeck(deck, { maxRarity: getDeckRarityLimitByIndex(deckIndex), deckLabel: getDeckDisplayName(deckIndex) });
  if (error) return { error, cards: [], deckIndex };
  return { error: "", cards: deck.map((id) => cardById.get(id)).filter(Boolean), deckIndex };
}

function getActiveDeckCardsForOnline() {
  return getDeckCardsForOnlineRules([]);
}

function getRandomRoomId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "";
  for (let i = 0; i < 6; i += 1) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

async function ensureOnlineFirebase() {
  if (state.online.firebase) return state.online.firebase;

  const configModule = await import("./firebase-config.js");
  const firebaseConfig = configModule.firebaseConfig ?? {};
  if (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes("ここに")) {
    throw new Error("Firebase設定が未入力です。firebase-config.js にFirebase Webアプリの設定値を入力してください。");
  }

  const appModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js");
  const authModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js");
  const dbModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js");

  const firebaseApp = appModule.initializeApp(firebaseConfig);
  const auth = authModule.getAuth(firebaseApp);
  await authModule.signInAnonymously(auth);
  const db = dbModule.getDatabase(firebaseApp);

  state.online.firebase = {
    app: firebaseApp,
    auth,
    db,
    uid: auth.currentUser.uid,
    ref: dbModule.ref,
    get: dbModule.get,
    set: dbModule.set,
    update: dbModule.update,
    onValue: dbModule.onValue,
    off: dbModule.off,
    remove: dbModule.remove
  };
  return state.online.firebase;
}

function renderOnlineBattleScreen(message = "") {
  const activeDeck = state.save.deckNames?.[state.save.activeDeckIndex] ?? `デッキ${state.save.activeDeckIndex + 1}`;
  const activeDeckLabel = $("onlineActiveDeckLabel");
  if (activeDeckLabel) activeDeckLabel.textContent = activeDeck;
  renderProfileSummary(state.online.cachedProfile);
  refreshProfileSummary();
  const msg = $("onlineBattleMessage");
  if (msg && message) msg.textContent = message;
  updateMoneyDisplays();
}

function detachOnlineRoom() {
  if (typeof state.online.unsubscribe === "function") {
    state.online.unsubscribe();
  }
  state.online.unsubscribe = null;
  state.online.roomId = null;
  state.online.playerKey = null;
  state.online.lastRoomStatus = null;
  state.online.finishedShown = false;
  state.online.ratingApplying = false;
}

function onlineRoomRef(roomId) {
  const fb = state.online.firebase;
  return fb.ref(fb.db, `${FIREBASE_ROOT}/rooms/${roomId}`);
}

function getIndexedOnlineValue(value, index) {
  if (!value) return undefined;
  if (Array.isArray(value)) return value[index];
  return value[String(index)] ?? value[index];
}

function createEmptyOnlineBoardData() {
  return Object.fromEntries(Array.from({ length: 9 }, (_, index) => [index, { empty: true }]));
}

function serializeOnlineBoardForFirebase() {
  const board = state.battle?.board ?? [];
  return Object.fromEntries(Array.from({ length: 9 }, (_, index) => {
    const cell = board[index];
    return [index, cell ? {
      cardId: cell.card.id,
      owner: localToCanonicalOwner(cell.owner),
      battleValues: cell.card?.battleValues ?? null,
      locked: Boolean(cell.locked)
    } : { empty: true }];
  }));
}

function normalizeOnlineBoardData(boardData) {
  return Array.from({ length: 9 }, (_, index) => {
    const cell = getIndexedOnlineValue(boardData, index);
    if (!cell || cell.empty || !cell.cardId) return null;
    const card = cloneCardForBattle(cardById.get(cell.cardId), cell.battleValues ?? null);
    if (!card) return null;
    return {
      card,
      owner: canonicalToLocalOwner(cell.owner),
      locked: Boolean(cell.locked)
    };
  });
}

function serializeOnlineHandUsedForFirebase(handOrCards) {
  return Object.fromEntries((handOrCards ?? []).map((entry, index) => [
    index,
    Boolean(entry?.used ?? false)
  ]));
}

function createOnlineHandUsedData(cards) {
  return Object.fromEntries((cards ?? []).map((_, index) => [index, false]));
}

function normalizeOnlineHandUsedData(handUsed, length) {
  return Array.from({ length }, (_, index) => Boolean(getIndexedOnlineValue(handUsed, index)));
}

function getOnlinePlayerName(playerKey, room = null) {
  return room?.players?.[playerKey]?.name ?? (playerKey === "p1" ? "プレイヤー1" : "プレイヤー2");
}

function buildOnlineRoom(roomId, deckCards, rules = rollOnlineAdditionalRules()) {
  return {
    version: VERSION,
    roomId,
    status: "waiting",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    rules,
    board: createEmptyOnlineBoardData(),
    turn: null,
    firstTurn: null,
    winner: null,
    result: null,
    typeBoosts: Object.fromEntries(CARD_TYPES.map((type) => [type, 0])),
    players: {
      p1: {
        uid: state.online.firebase.uid,
        name: getOnlineUserName() || "プレイヤー1",
        rating: Number(state.online.cachedProfile?.rating ?? getDefaultOnlineRating()),
        deck: deckCards.map((card) => card.id),
        handUsed: createOnlineHandUsedData(deckCards),
        wildMods: hasRule("wild_card", { rules }) ? generateWildCardMods(deckCards) : {}
      }
    }
  };
}

async function createOnlineRoom() {
  if (!requireOnlineUserName()) return;
  const rules = rollOnlineAdditionalRules();
  const { error, cards, deckIndex } = getDeckCardsForOnlineRules(rules);
  if (error) {
    showModal("デッキ確認", `<p>${escapeHtml(error)}</p><p>オンライン対戦に使う${escapeHtml(getDeckDisplayName(deckIndex))}を5枚で作成してください。</p>`, [
      { label: "デッキへ", onClick: () => { closeModal(); state.selectedDeckIndex = deckIndex; showScreen("deck"); } },
      { label: "閉じる", className: "ghost", onClick: closeModal }
    ]);
    return;
  }

  try {
    const fb = await ensureOnlineFirebase();
    state.online.cachedProfile = await syncPlayerRankings();
    detachOnlineRoom();
    let roomId = getRandomRoomId();
    let roomSnap = await fb.get(onlineRoomRef(roomId));
    for (let i = 0; roomSnap.exists() && i < 8; i += 1) {
      roomId = getRandomRoomId();
      roomSnap = await fb.get(onlineRoomRef(roomId));
    }
    await fb.set(onlineRoomRef(roomId), buildOnlineRoom(roomId, cards, rules));
    attachOnlineRoom(roomId, "p1");
    $("onlineRoomCode").value = roomId;
    renderOnlineBattleScreen(`部屋を作成しました。部屋番号 ${roomId} を相手に伝えてください。`);
    showModal("部屋作成", `<p>部屋番号：<strong class="room-code-big">${roomId}</strong></p><p>相手が入室すると対戦が始まります。</p>`, [
      { label: "閉じる", className: "ghost", onClick: closeModal }
    ]);
    $("modal").dataset.onlineWaiting = "1";
  } catch (error) {
    console.error(error);
    showModal("オンライン接続エラー", `<p>${escapeHtml(error.message ?? error)}</p>`, [{ label: "閉じる", onClick: closeModal }]);
  }
}

async function joinOnlineRoom() {
  if (!requireOnlineUserName()) return;
  const roomId = String($("onlineRoomCode").value ?? "").trim().toUpperCase();
  if (!roomId) {
    renderOnlineBattleScreen("部屋番号を入力してください。");
    return;
  }

  try {
    const fb = await ensureOnlineFirebase();
    state.online.cachedProfile = await syncPlayerRankings();
    detachOnlineRoom();
    const roomRef = onlineRoomRef(roomId);
    const snap = await fb.get(roomRef);
    if (!snap.exists()) throw new Error("指定された部屋が見つかりません。");
    const room = snap.val();
    if (room.status !== "waiting" || room.players?.p2) throw new Error("この部屋には入室できません。すでに対戦が始まっている可能性があります。");
    const { error, cards, deckIndex } = getDeckCardsForOnlineRules(room.rules ?? []);
    if (error) {
      showModal("デッキ確認", `<p>${escapeHtml(error)}</p><p>この部屋の追加ルールでは${escapeHtml(getDeckDisplayName(deckIndex))}が必要です。</p>`, [
        { label: "デッキへ", onClick: () => { closeModal(); state.selectedDeckIndex = deckIndex; showScreen("deck"); } },
        { label: "閉じる", className: "ghost", onClick: closeModal }
      ]);
      return;
    }

    const firstTurn = Math.random() < 0.5 ? "p1" : "p2";
    await fb.update(roomRef, {
      status: "playing",
      updatedAt: Date.now(),
      turn: firstTurn,
      firstTurn,
      "players/p2": {
        uid: fb.uid,
        name: getOnlineUserName() || "プレイヤー2",
        rating: Number(state.online.cachedProfile?.rating ?? getDefaultOnlineRating()),
        deck: cards.map((card) => card.id),
        handUsed: createOnlineHandUsedData(cards),
        wildMods: hasRule("wild_card", { rules: room.rules ?? [] }) ? generateWildCardMods(cards) : {}
      }
    });
    attachOnlineRoom(roomId, "p2");
    renderOnlineBattleScreen(`部屋 ${roomId} に入室しました。`);
  } catch (error) {
    console.error(error);
    showModal("オンライン接続エラー", `<p>${escapeHtml(error.message ?? error)}</p>`, [{ label: "閉じる", onClick: closeModal }]);
  }
}


function onlineMatchmakingRef(uid = null) {
  const fb = state.online.firebase;
  return fb.ref(fb.db, uid ? `${FIREBASE_ROOT}/matchmaking/waiting/${uid}` : `${FIREBASE_ROOT}/matchmaking/waiting`);
}

function getRandomOnlineNpcSpecs() {
  return [
    { id: "online_npc_1", name: "ランダムNPC1", difficulty: "よわい", rating: 1000, pattern: [{ rarity: 1, count: 2 }, { rarity: 2, count: 2 }, { rarity: 3, count: 1 }] },
    { id: "online_npc_2", name: "ランダムNPC2", difficulty: "ふつう", rating: 1500, pattern: [{ rarity: 2, count: 2 }, { rarity: 3, count: 2 }, { rarity: 4, count: 1 }] },
    { id: "online_npc_3", name: "ランダムNPC3", difficulty: "つよい", rating: 2000, pattern: [{ rarity: 3, count: 2 }, { rarity: 4, count: 2 }, { rarity: 5, count: 1 }] }
  ];
}

function buildRandomOnlineNpcHand(spec, ruleIds = []) {
  const maxRarity = getLittleRuleMaxRarity(ruleIds);
  if (maxRarity) return sample(CARDS.filter((card) => card.rarity <= maxRarity), 5);
  const result = [];
  const used = new Set();
  for (const part of spec.pattern) {
    const candidates = shuffle(CARDS.filter((card) => card.rarity === part.rarity && !used.has(card.id)));
    for (const card of candidates.slice(0, part.count)) {
      result.push(card);
      used.add(card.id);
    }
  }
  while (result.length < 5) {
    const card = sample(CARDS.filter((item) => !used.has(item.id)), 1)[0];
    if (!card) break;
    result.push(card);
    used.add(card.id);
  }
  return result.slice(0, 5);
}

async function startRandomOnlineMatch() {
  if (!requireOnlineUserName()) return;
  try {
    const fb = await ensureOnlineFirebase();
    state.online.cachedProfile = await syncPlayerRankings();
    const myUid = fb.uid;
    const now = Date.now();
    detachOnlineRoom();
    renderOnlineBattleScreen("ランダムマッチを検索しています。最大30秒待機します。");
    const waitingSnap = await fb.get(onlineMatchmakingRef());
    const waitingData = waitingSnap.exists() ? waitingSnap.val() : {};
    const opponentEntry = Object.entries(waitingData).find(([uid, ticket]) => uid !== myUid && ticket && now - Number(ticket.createdAt ?? 0) < 30000);
    if (opponentEntry) {
      const [opponentUid, ticket] = opponentEntry;
      const rules = sanitizeRuleIds(ticket.rules ?? rollOnlineAdditionalRules());
      const myDeck = getDeckCardsForOnlineRules(rules);
      if (myDeck.error) {
        showModal("デッキ確認", `<p>${escapeHtml(myDeck.error)}</p><p>ランダムマッチの追加ルールでは${escapeHtml(getDeckDisplayName(myDeck.deckIndex))}が必要です。</p>`, [
          { label: "デッキへ", onClick: () => { closeModal(); state.selectedDeckIndex = myDeck.deckIndex; showScreen("deck"); } },
          { label: "閉じる", className: "ghost", onClick: closeModal }
        ]);
        return;
      }
      const opponentDeckIds = ticket.deck ?? [];
      const roomId = getRandomRoomId();
      const firstTurn = Math.random() < 0.5 ? "p1" : "p2";
      const room = {
        version: VERSION,
        roomId,
        status: "playing",
        createdAt: now,
        updatedAt: now,
        rules,
        board: createEmptyOnlineBoardData(),
        turn: firstTurn,
        firstTurn,
        winner: null,
        result: null,
        players: {
          p1: { uid: opponentUid, name: ticket.name || "プレイヤー1", rating: Number(ticket.rating ?? 1500), deck: opponentDeckIds, handUsed: createOnlineHandUsedData(opponentDeckIds), wildMods: ticket.wildMods ?? {} },
          p2: { uid: myUid, name: getOnlineUserName() || "プレイヤー2", rating: Number(state.online.cachedProfile?.rating ?? 1500), deck: myDeck.cards.map((card) => card.id), handUsed: createOnlineHandUsedData(myDeck.cards), wildMods: hasRule("wild_card", { rules }) ? generateWildCardMods(myDeck.cards) : {} }
        }
      };
      await fb.set(onlineRoomRef(roomId), room);
      await fb.update(fb.ref(fb.db), {
        [`${FIREBASE_ROOT}/matchmaking/waiting/${opponentUid}/matchedRoomId`]: roomId,
        [`${FIREBASE_ROOT}/matchmaking/waiting/${opponentUid}/matchedAt`]: now,
        [`${FIREBASE_ROOT}/matchmaking/waiting/${myUid}`]: null
      });
      attachOnlineRoom(roomId, "p2");
      return;
    }

    const rules = rollOnlineAdditionalRules();
    const deckData = getDeckCardsForOnlineRules(rules);
    if (deckData.error) {
      showModal("デッキ確認", `<p>${escapeHtml(deckData.error)}</p><p>ランダムマッチの追加ルールでは${escapeHtml(getDeckDisplayName(deckData.deckIndex))}が必要です。</p>`, [
        { label: "デッキへ", onClick: () => { closeModal(); state.selectedDeckIndex = deckData.deckIndex; showScreen("deck"); } },
        { label: "閉じる", className: "ghost", onClick: closeModal }
      ]);
      return;
    }
    await fb.set(onlineMatchmakingRef(myUid), {
      uid: myUid,
      name: getOnlineUserName() || "プレイヤー1",
      rating: Number(state.online.cachedProfile?.rating ?? 1500),
      deck: deckData.cards.map((card) => card.id),
      wildMods: hasRule("wild_card", { rules }) ? generateWildCardMods(deckData.cards) : {},
      rules,
      createdAt: now,
      matchedRoomId: null
    });
    const deadline = Date.now() + 30000;
    showModal("ランダムマッチ待機", "<p>対戦相手を探しています。</p><p>30秒以内に見つからない場合はランダムNPCと対戦します。</p>", [
      { label: "キャンセル", className: "ghost", onClick: async () => { try { await fb.remove(onlineMatchmakingRef(myUid)); } catch {} closeModal(); renderOnlineBattleScreen("ランダムマッチをキャンセルしました。"); } }
    ]);
    const timer = setInterval(async () => {
      try {
        const snap = await fb.get(onlineMatchmakingRef(myUid));
        const ticket = snap.exists() ? snap.val() : null;
        if (ticket?.matchedRoomId) {
          clearInterval(timer);
          closeModal();
          attachOnlineRoom(ticket.matchedRoomId, "p1");
          setTimeout(() => fb.remove(onlineMatchmakingRef(myUid)).catch(() => {}), 3000);
          return;
        }
        if (Date.now() >= deadline) {
          clearInterval(timer);
          await fb.remove(onlineMatchmakingRef(myUid));
          closeModal();
          startOnlineRandomNpcBattle();
        }
      } catch (error) {
        clearInterval(timer);
        closeModal();
        showModal("ランダムマッチエラー", `<p>${escapeHtml(error.message ?? error)}</p>`, [{ label: "閉じる", onClick: closeModal }]);
      }
    }, 1200);
  } catch (error) {
    showModal("ランダムマッチエラー", `<p>${escapeHtml(error.message ?? error)}</p>`, [{ label: "閉じる", onClick: closeModal }]);
  }
}

async function startOnlineRandomNpcBattle() {
  const specs = getRandomOnlineNpcSpecs();
  const spec = sample(specs, 1)[0];
  const rules = rollOnlineAdditionalRules();
  const deckData = getDeckCardsForOnlineRules(rules);
  if (deckData.error) {
    showModal("デッキ確認", `<p>${escapeHtml(deckData.error)}</p><p>ランダムNPC戦の追加ルールでは${escapeHtml(getDeckDisplayName(deckData.deckIndex))}が必要です。</p>`, [
      { label: "デッキへ", onClick: () => { closeModal(); state.selectedDeckIndex = deckData.deckIndex; showScreen("deck"); } },
      { label: "閉じる", className: "ghost", onClick: closeModal }
    ]);
    return;
  }
  let npcHandCards = buildRandomOnlineNpcHand(spec, rules);
  let playerCards = deckData.cards;
  if (rules.includes("wild_card")) {
    const wild = setupWildCardForHands(playerCards, npcHandCards, { rules });
    playerCards = wild.playerCards;
    npcHandCards = wild.npcCards;
  }
  const firstTurn = Math.random() < 0.5 ? "player" : "npc";
  state.battle = {
    mode: "onlineNpc",
    npc: { id: spec.id, name: spec.name, difficulty: spec.difficulty, onlineNpcRating: spec.rating },
    rules,
    playerHand: playerCards.map((card) => ({ card, used: false })),
    npcHand: npcHandCards.map((card) => ({ card, used: false })),
    npcBattleCards: npcHandCards,
    board: Array(9).fill(null),
    currentTurn: firstTurn,
    locked: false,
    finished: false,
    forcedPlayerHandIndex: null,
    forcedNpcHandIndex: null,
    entryFee: 0,
    winMoney: 0,
    fieldEffects: createFieldEffectsForBattle({ difficulty: spec.difficulty }),
    lockCells: createLockCellsForBattle({ difficulty: spec.difficulty })
  };
  state.selectedHandIndex = null;
  showScreen("battle");
  $("battleNpcName").textContent = `ランダムマッチ / ${spec.name}`;
  $("battleLog").innerHTML = "";
  initPixi();
  addBattleLog(`ランダムNPC戦を開始しました。相手レート相当：${spec.rating}`);
  addBattleLog(`追加ルール：${getRuleSummary(rules)}`);
  prepareTurn(firstTurn);
  renderBattleAll();
  if (firstTurn === "npc") setTimeout(() => npcTurn(), 550);
}

function attachOnlineRoom(roomId, playerKey) {
  const fb = state.online.firebase;
  state.online.roomId = roomId;
  state.online.playerKey = playerKey;
  state.online.finishedShown = false;
  const roomRef = onlineRoomRef(roomId);
  state.online.unsubscribe = fb.onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      if (state.battle?.mode === "online") {
        showModal("部屋終了", "<p>オンライン対戦の部屋が終了しました。</p>", [
          { label: "オンライン対戦へ", onClick: () => { closeModal(); showScreen("onlineBattle"); } }
        ]);
      }
      detachOnlineRoom();
      return;
    }
    try {
      applyOnlineRoom(snapshot.val());
    } catch (error) {
      console.error("online room apply error", error);
      renderOnlineBattleScreen(`オンライン同期エラー：${error.message ?? error}`);
    }
  });
}

function canonicalToLocalOwner(owner) {
  return owner === state.online.playerKey ? "player" : "npc";
}

function localToCanonicalOwner(owner) {
  if (owner === "player") return state.online.playerKey;
  return state.online.playerKey === "p1" ? "p2" : "p1";
}

function getOpponentKey() {
  return state.online.playerKey === "p1" ? "p2" : "p1";
}


function calcOnlineResult(room) {
  const playerKey = state.online.playerKey;
  const opponentKey = getOpponentKey();
  const score = calcScore();
  let winner = "draw";
  if (score.player > score.npc) winner = playerKey;
  if (score.player < score.npc) winner = opponentKey;
  return {
    winner,
    score: {
      [playerKey]: score.player,
      [opponentKey]: score.npc
    }
  };
}

function applyOnlineRoom(room) {
  const playerKey = state.online.playerKey;
  const opponentKey = getOpponentKey();
  const player = room.players?.[playerKey];
  const opponent = room.players?.[opponentKey];

  if (!player) return;
  if (room.status === "waiting" || !opponent) {
    renderOnlineBattleScreen(`部屋番号 ${room.roomId}：相手の入室待ちです。`);
    return;
  }

  if ($("modal")?.dataset.onlineWaiting === "1" || $("modal")?.dataset.onlineRematchWaiting === "1") {
    closeModal();
  }
  if (room.status === "playing") state.online.finishedShown = false;

  const playerDeck = player.deck ?? [];
  const opponentDeck = opponent.deck ?? [];
  const playerUsed = normalizeOnlineHandUsedData(player.handUsed, playerDeck.length);
  const opponentUsed = normalizeOnlineHandUsedData(opponent.handUsed, opponentDeck.length);

  const playerCards = applyWildCardModsToCards(playerDeck.map((cardId) => cardById.get(cardId)).filter(Boolean), player.wildMods ?? {});
  const opponentCards = applyWildCardModsToCards(opponentDeck.map((cardId) => cardById.get(cardId)).filter(Boolean), opponent.wildMods ?? {});

  const playerHand = playerCards.map((card, index) => ({
    card,
    used: playerUsed[index]
  })).filter((entry) => entry.card);

  const opponentHand = opponentCards.map((card, index) => ({
    card,
    used: opponentUsed[index]
  })).filter((entry) => entry.card);

  const board = normalizeOnlineBoardData(room.board);

  const wasNotPlaying = !state.battle || state.battle.mode !== "online" || state.battle.onlineRoomId !== room.roomId || (state.battle.finished && room.status === "playing");
  if (wasNotPlaying && room.status === "playing") state.selectedHandIndex = null;

  state.battle = {
    mode: "online",
    onlineRoomId: room.roomId,
    playerKey,
    npc: { id: "online", name: getOnlinePlayerName(opponentKey, room), difficulty: "オンライン" },
    rules: room.rules ?? [],
    playerHand,
    npcHand: opponentHand,
    npcBattleCards: [],
    board,
    currentTurn: room.status === "finished" ? "finished" : room.turn === playerKey ? "player" : "npc",
    locked: room.status !== "playing" || room.turn !== playerKey,
    finished: room.status === "finished",
    forcedPlayerHandIndex: null,
    forcedNpcHandIndex: null,
    typeBoosts: room.typeBoosts ?? Object.fromEntries(CARD_TYPES.map((type) => [type, 0])),
    entryFee: 0,
    winMoney: 0
  };

  if (wasNotPlaying) {
    showScreen("battle");
    $("battleLog").innerHTML = "";
    initPixi();
    addBattleLog(`オンライン対戦：部屋 ${room.roomId}`);
    addBattleLog(`あなたは${getOnlinePlayerName(playerKey, room)}です。`);
    addBattleLog(`追加ルール：${getRuleSummary(room.rules ?? [])}`);
    addBattleLog(`先攻：${getOnlinePlayerName(room.firstTurn, room)}`);
  }

  $("battleNpcName").textContent = `オンライン対戦 / ${getOnlinePlayerName(playerKey, room)}`;
  renderBattleAll();

  if (room.status === "playing") {
    const turnText = room.turn === playerKey ? "あなたのターンです。" : "相手のターンです。";
    $("turnLabel").textContent = turnText;
  }

  if (room.status === "finished" && !room.ratingApplied && state.online.playerKey === "p1") {
    applyOnlineRatingIfNeeded(room);
  }

  if (room.status === "finished" && !state.online.finishedShown) {
    if (!room.ratingApplied && !room.ratingError) {
      $("turnLabel").textContent = "レート集計中です。";
      return;
    }
    state.online.finishedShown = true;
    showOnlineResult(room);
  }
}

function showOnlineResult(room) {
  const playerKey = state.online.playerKey;
  const result = room.result ?? {};
  const myScore = result.score?.[playerKey] ?? calcScore().player;
  const opponentScore = result.score?.[getOpponentKey()] ?? calcScore().npc;
  const title = result.winner === "draw" ? "引き分け" : result.winner === playerKey ? "勝利" : "敗北";
  const rating = room.ratingChange?.[playerKey];
  const ratingHtml = rating
    ? `<p>レート：${rating.old} → <strong>${rating.new}</strong>（${rating.diff >= 0 ? "+" : ""}${rating.diff}）</p>`
    : `<p>レート：集計中、または反映できませんでした。</p>`;
  showModal(
    `オンライン対戦：${title}`,
    `<p>オンライン対戦は報酬なしです。</p><p>スコア：自分 ${myScore} - ${opponentScore} 相手</p>${ratingHtml}`,
    [
      finalBoardAction(),
      { label: "もう一度対戦する", onClick: () => { closeModal(); requestOnlineRematch(); } },
      { label: "オンライン対戦へ", onClick: () => { closeModal(); detachOnlineRoom(); state.battle = null; showScreen("onlineBattle"); } },
      { label: "ランキングを見る", className: "ghost", onClick: () => { closeModal(); detachOnlineRoom(); state.battle = null; showScreen("rankings"); } },
      { label: "タイトルへ戻る", className: "ghost", onClick: () => { closeModal(); detachOnlineRoom(); state.battle = null; showScreen("title"); } }
    ]
  );
}

async function startOnlineRematch(room) {
  const fb = await ensureOnlineFirebase();
  const roomId = room.roomId;
  const p1Deck = room.players?.p1?.deck ?? [];
  const p2Deck = room.players?.p2?.deck ?? [];
  const firstTurn = Math.random() < 0.5 ? "p1" : "p2";
  await fb.update(onlineRoomRef(roomId), {
    status: "playing",
    updatedAt: Date.now(),
    board: createEmptyOnlineBoardData(),
    turn: firstTurn,
    firstTurn,
    winner: null,
    result: null,
    ratingApplied: null,
    ratingError: null,
    ratingChange: null,
    rules: room.rules ?? [],
    typeBoosts: Object.fromEntries(CARD_TYPES.map((type) => [type, 0])),
    "players/p1/handUsed": createOnlineHandUsedData(p1Deck),
    "players/p2/handUsed": createOnlineHandUsedData(p2Deck),
    "players/p1/wildMods": hasRule("wild_card", { rules: room.rules ?? [] }) ? generateWildCardMods((p1Deck ?? []).map((id) => cardById.get(id)).filter(Boolean)) : {},
    "players/p2/wildMods": hasRule("wild_card", { rules: room.rules ?? [] }) ? generateWildCardMods((p2Deck ?? []).map((id) => cardById.get(id)).filter(Boolean)) : {},
    "players/p1/rematchReady": false,
    "players/p2/rematchReady": false
  });
}

async function requestOnlineRematch() {
  const roomId = state.online.roomId;
  const playerKey = state.online.playerKey;
  if (!roomId || !playerKey) {
    showScreen("onlineBattle");
    return;
  }
  try {
    const fb = await ensureOnlineFirebase();
    const currentSnap = await fb.get(onlineRoomRef(roomId));
    const currentRoom = currentSnap.exists() ? currentSnap.val() : null;
    const { error, cards, deckIndex } = getDeckCardsForOnlineRules(currentRoom?.rules ?? []);
    if (error) {
      showModal("デッキ確認", `<p>${escapeHtml(error)}</p><p>再戦には${escapeHtml(getDeckDisplayName(deckIndex))}が必要です。</p>`, [
        { label: "デッキへ", onClick: () => { closeModal(); state.selectedDeckIndex = deckIndex; showScreen("deck"); } },
        { label: "閉じる", className: "ghost", onClick: closeModal }
      ]);
      return;
    }
    await fb.update(onlineRoomRef(roomId), {
      [`players/${playerKey}/deck`]: cards.map((card) => card.id),
      [`players/${playerKey}/handUsed`]: createOnlineHandUsedData(cards),
      [`players/${playerKey}/rematchReady`]: true,
      updatedAt: Date.now()
    });
    const snap = await fb.get(onlineRoomRef(roomId));
    const room = snap.exists() ? snap.val() : null;
    if (room?.players?.p1?.rematchReady && room?.players?.p2?.rematchReady) {
      await startOnlineRematch(room);
      return;
    }
    showModal("再戦待機", "<p>再戦希望を送信しました。</p><p>相手も「もう一度対戦する」を押すと再戦が始まります。</p>", [
      { label: "閉じる", className: "ghost", onClick: closeModal }
    ]);
    $("modal").dataset.onlineRematchWaiting = "1";
  } catch (error) {
    showModal("再戦エラー", `<p>${escapeHtml(error.message ?? error)}</p>`, [{ label: "閉じる", onClick: closeModal }]);
  }
}

async function handleOnlineBoardClick(index) {
  const battle = state.battle;
  if (!battle || battle.mode !== "online" || battle.locked || battle.finished || battle.currentTurn !== "player") return;
  if (battle.board[index]) return;

  const handIndex = state.selectedHandIndex;
  if (handIndex === null) {
    addBattleLog("手札を1枚選択してください。");
    return;
  }
  const hand = battle.playerHand[handIndex];
  if (!hand || hand.used) return;

  battle.locked = true;
  await playCard("player", handIndex, index);
  state.selectedHandIndex = null;

  const boardFull = battle.board.every(Boolean);
  const noPlayableCards = battle.playerHand.every((entry) => entry.used) && battle.npcHand.every((entry) => entry.used);
  const finished = boardFull || noPlayableCards;
  const opponentKey = getOpponentKey();
  const updates = {
    board: serializeOnlineBoardForFirebase(),
    updatedAt: Date.now(),
    [`players/${state.online.playerKey}/handUsed`]: serializeOnlineHandUsedForFirebase(battle.playerHand),
    turn: finished ? null : opponentKey,
    status: finished ? "finished" : "playing",
    typeBoosts: battle.typeBoosts ?? {}
  };
  if (finished) {
    updates.result = calcOnlineResult();
    updates.winner = updates.result.winner;
  }

  try {
    const fb = await ensureOnlineFirebase();
    await fb.update(onlineRoomRef(state.online.roomId), updates);
  } catch (error) {
    console.error(error);
    addBattleLog(`オンライン同期エラー：${error.message ?? error}`);
    battle.locked = false;
  }
}

function confirmOnlineExit(destination = "onlineBattle") {
  const battle = state.battle;
  if (!battle || battle.mode !== "online" || battle.finished) {
    detachOnlineRoom();
    state.battle = null;
    showScreen(destination === "title" ? "title" : "onlineBattle");
    return;
  }

  showModal(
    "オンライン対戦を終了",
    "<p>対戦中に終了すると、この端末は部屋から退出します。</p><p>オンライン対戦は報酬なしです。</p>",
    [
      {
        label: "退出する",
        className: "danger",
        onClick: async () => {
          try {
            const fb = await ensureOnlineFirebase();
            if (state.online.roomId) await fb.remove(onlineRoomRef(state.online.roomId));
          } catch (error) {
            console.warn(error);
          }
          closeModal();
          detachOnlineRoom();
          state.battle = null;
          showScreen(destination === "title" ? "title" : "onlineBattle");
        }
      },
      { label: "キャンセル", className: "ghost", onClick: closeModal }
    ]
  );
}
async function startBattle(npcId, selectedRules = null, options = {}) {
  const npc = npcById.get(npcId);
  if (!npc) return;
  if (!isNpcUnlocked(npc)) {
    showModal("未解放", `<p>${escapeHtml(npc.name)}はまだ解放されていません。</p><p>${escapeHtml(getNpcUnlockMessage())}</p>`, [
      { label: "閉じる", onClick: closeModal }
    ]);
    return;
  }
  if (selectedRules === null) {
    prepareBattleStart(npcId);
    return;
  }
  selectedRules = sanitizeRuleIds(selectedRules);
  const deckIndex = getDeckIndexForRules(selectedRules);
  const deck = state.save.decks[deckIndex] ?? [];
  const deckLimit = getDeckRarityLimitByIndex(deckIndex);
  const error = validateDeck(deck, { maxRarity: deckLimit, deckLabel: getDeckDisplayName(deckIndex) });
  if (error) {
    showModal("デッキ確認", `<p>${escapeHtml(error)}</p><p>${escapeHtml(getDeckDisplayName(deckIndex))}を5枚で作成してください。</p>`, [
      { label: "デッキへ", onClick: () => { closeModal(); state.selectedDeckIndex = deckIndex; showScreen("deck"); } },
      { label: "閉じる", className: "ghost", onClick: closeModal }
    ]);
    return;
  }

  if (selectedRules.includes("reverse") && selectedRules.includes("ace_killer")) {
    showModal("ルール確認", "<p>リバースとエースキラーは同時に選択できません。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }
  if (selectedRules.includes("order") && selectedRules.includes("chaos")) {
    showModal("ルール確認", "<p>オーダーとカオスは同時に選択できません。</p>", [{ label: "閉じる", onClick: closeModal }]);
    return;
  }

  const entryFee = getNpcEntryFee(npc);
  if (!options.entryFeePaid) {
    // 直接開始経路が残っていた場合の安全策。通常は追加ルール表示時に支払い済み。
    if (!chargeNpcChallengeFee(npc)) return;
  }

  const pendingItems = state.pendingNpcItems?.npcId === npc.id
    ? { ...state.pendingNpcItems }
    : { npcId: npc.id, lockDetectorUsed: false, miracleCharmUsed: false };

  // 学び成長はNPC対戦だけで有効。オンライン対戦は常に元の数値を使用する。
  const playerBattleDeck = deck.map((id) => cardById.get(id)).filter(Boolean).map((card) => applyAwakeningToCard(card));
  const npcDeck = buildNpcHand(npc, selectedRules);
  let playerHandCards = [...playerBattleDeck];
  let npcHandCards = [...npcDeck];
  let swapInfo = null;

  if (selectedRules.includes("swap") && playerHandCards.length && npcHandCards.length) {
    const playerIndex = Math.floor(Math.random() * playerHandCards.length);
    const npcIndex = Math.floor(Math.random() * npcHandCards.length);
    swapInfo = {
      playerIndex,
      npcIndex,
      playerCard: playerHandCards[playerIndex],
      npcCard: npcHandCards[npcIndex]
    };
    [playerHandCards[playerIndex], npcHandCards[npcIndex]] = [npcHandCards[npcIndex], playerHandCards[playerIndex]];
  }

  // スワップ後、実際に大人モード対戦相手が使用する5枚だけを強化する。
  npcHandCards = applyShuraEnhancementsToNpcHand(npcHandCards, npc);

  const preBattleForRules = { rules: selectedRules };
  if (selectedRules.includes("wild_card")) {
    const wild = setupWildCardForHands(playerHandCards, npcHandCards, preBattleForRules);
    playerHandCards = wild.playerCards;
    npcHandCards = wild.npcCards;
  }

  const lockCells = createLockCellsForBattle(npc);
  const finalizedItems = finalizeBattlePrepItems(pendingItems, lockCells);

  state.battle = {
    npc,
    rules: selectedRules,
    playerHand: playerHandCards.map((card) => ({ card, used: false })),
    playerOriginalDeck: [...playerBattleDeck],
    npcHand: npcHandCards.map((card) => ({ card, used: false })),
    npcBattleCards: npcDeck,
    board: Array(9).fill(null),
    currentTurn: "coin",
    locked: true,
    finished: false,
    forcedPlayerHandIndex: null,
    forcedNpcHandIndex: null,
    typeBoosts: Object.fromEntries(CARD_TYPES.map((type) => [type, 0])),
    fieldEffects: createFieldEffectsForBattle(npc),
    lockCells,
    revealLockCells: finalizedItems.lockDetectorConsumed,
    rareChanceMultiplier: finalizedItems.miracleCharmConsumed ? 2 : 1,
    usedBattleItems: {
      lockDetector: finalizedItems.lockDetectorConsumed,
      miracleCharm: finalizedItems.miracleCharmConsumed
    },
    battleItemResult: finalizedItems,
    entryFee,
    winMoney: getNpcWinMoney(npc),
    swapInfo,
    kaijutsu: {
      maxUses: getKaijutsuMaxUses(),
      usedIds: [],
      pending: false,
      pendingSkillId: null,
      targetHandIndex: null,
      targetMode: null,
      activeSkillId: null,
      sourceFieldIndex: null
    }
  };
  state.pendingNpcItems = {
    npcId: null,
    lockDetectorUsed: false,
    miracleCharmUsed: false
  };
  const battleToken = state.battle;
  state.selectedHandIndex = null;

  showScreen("battle");
  $("battleNpcName").textContent = `${npc.name} / ${npc.difficulty}`;
  $("battleLog").innerHTML = "";
  addBattleLog(`${npc.name}との対戦を開始しました。`);
  addBattleLog(`挑戦料${formatMoney(entryFee)}は追加ルール決定時に支払い済みです。敗北・棄権時は返金されません。`);
  addBattleLog(`勝利報酬：${formatMoney(getNpcWinMoney(npc))}`);
  addBattleLog(`追加ルール：${getRuleSummary(selectedRules)}`);
  addBattleLog(`使用デッキ：${getDeckDisplayName(deckIndex)}`);
  addBattleLog(`ひらめきスキル：この対戦では${state.battle.kaijutsu.maxUses}回使用できます。取得済みのひらめきスキルから選択してください。`);
  if (isShuraNpc(npc)) addBattleLog("大人強化：相手の手札5枚にレアリティ別の数値強化が適用されました。炎表示の数字が強化箇所です。");
  const fieldEntries = Object.entries(state.battle.fieldEffects ?? {});
  if (fieldEntries.length) addBattleLog(`フィールド効果：${fieldEntries.length}マスに効果が発生しました。`);
  if (["ふつう", "つよい", "学びマスター", "大人モード"].includes(npc.difficulty)) {
    if (state.battle.revealLockCells) {
      addBattleLog("ヒント虫めがね：ロックマスの場所を事前に表示します。");
    } else if (state.battle.battleItemResult?.lockDetectorReturned) {
      addBattleLog("ヒント虫めがね：ロックマスがなかったため使用されず、所持数は減りませんでした。");
    } else {
      addBattleLog("ロック：0〜1マスに隠しロックマスが発生する可能性があります。");
    }
  }
  if (state.battle.rareChanceMultiplier > 1) {
    addBattleLog(`ラッキーおまもり：レアチャンス率が${getRareChanceRate(npc)}%から${Math.min(100, getRareChanceRate(npc) * state.battle.rareChanceMultiplier)}%になりました。`);
  }
  if (selectedRules.includes("mirror")) addBattleLog("ミラー：場に出たカードは上下・左右の数字が入れ替わります。");
  if (selectedRules.includes("wild_card")) addBattleLog("ワイルドカード：お互いの手札からランダムで1枚ずつ選ばれ、1辺+2、または1辺A・別の1辺1の変化が発生しました。");
  if (swapInfo) addBattleLog(`スワップ：お互いの手札から1枚を交換しました。対戦後に戻ります。`);
  addBattleLog("コイントスで先攻・後攻を決定します。");
  initPixi();
  renderBattleAll();

  [...$("playerHand").children].forEach((child, index) => {
    child.classList.add("animate-draw");
    child.style.animationDelay = `${index * 80}ms`;
  });

  const firstTurn = await runCoinToss();
  if (state.battle !== battleToken) return;

  battleToken.currentTurn = firstTurn;
  prepareTurn(firstTurn);
  battleToken.locked = false;
  addBattleLog(firstTurn === "player" ? "先攻はプレイヤーです。" : `先攻は${npc.name}です。`);
  renderBattleAll();

  if (firstTurn === "npc" && !battleToken.finished) {
    setTimeout(() => npcTurn(), 550);
  }
}

async function runCoinToss() {
  const firstTurn = Math.random() < 0.5 ? "player" : "npc";
  showModal(
    "コイントス",
    `
      <div class="coin-toss-box">
        <div class="coin-toss-coin tossing" aria-label="コイントス">
          <div class="coin-face coin-front"></div>
          <div class="coin-face coin-back"></div>
        </div>
        <p id="coinTossText">コイントス中...</p>
      </div>
    `,
    []
  );

  await delay(1600);

  const coin = document.querySelector(".coin-toss-coin");
  const text = $("coinTossText");
  if (coin) {
    coin.classList.remove("tossing");
    coin.classList.add(firstTurn === "player" ? "coin-player" : "coin-npc");
  }
  if (text) text.textContent = firstTurn === "player" ? "表：プレイヤーが先攻です。" : "裏：相手が先攻です。";

  await delay(900);
  closeModal();
  return firstTurn;
}

function getFirstUnusedHandIndex(hand) {
  return hand.findIndex((entry) => !entry.used);
}

function getRandomUnusedHandIndex(hand) {
  const indexes = hand.map((entry, index) => entry.used ? null : index).filter((index) => index !== null);
  if (!indexes.length) return -1;
  return indexes[Math.floor(Math.random() * indexes.length)];
}

function prepareTurn(owner) {
  const battle = state.battle;
  if (!battle) return;
  const hand = owner === "player" ? battle.playerHand : battle.npcHand;
  const property = owner === "player" ? "forcedPlayerHandIndex" : "forcedNpcHandIndex";
  battle[property] = null;

  if (hasRule("chaos", battle)) {
    battle[property] = getRandomUnusedHandIndex(hand);
  } else if (hasRule("order", battle)) {
    battle[property] = getFirstUnusedHandIndex(hand);
  }

  if (owner === "player") {
    state.selectedHandIndex = battle[property] >= 0 ? battle[property] : null;
  }

  if (battle[property] >= 0) {
    const card = hand[battle[property]]?.card;
    const ruleName = hasRule("chaos", battle) ? "カオス" : "オーダー";
    addBattleLog(`${ruleName}：${owner === "player" ? "プレイヤー" : battle.npc.name}の出すカードは「${card?.name ?? "不明"}」です。`);
  }
}

function getForcedHandIndex(owner) {
  const battle = state.battle;
  if (!battle) return null;
  const value = owner === "player" ? battle.forcedPlayerHandIndex : battle.forcedNpcHandIndex;
  return Number.isInteger(value) && value >= 0 ? value : null;
}

async function handleBoardClick(index) {
  const battle = state.battle;
  if (battle?.mode === "online") {
    await handleOnlineBoardClick(index);
    return;
  }
  if (!battle || battle.locked || battle.finished || battle.currentTurn !== "player") return;
  if (resolveKaijutsuBoardTarget(index)) return;
  if (battle.board[index]) return;

  const forcedIndex = getForcedHandIndex("player");
  const skillTargetIndex = getKaijutsuTargetHandIndex(battle);
  const handIndex = skillTargetIndex !== null ? skillTargetIndex : forcedIndex !== null ? forcedIndex : state.selectedHandIndex;
  if (handIndex === null) {
    addBattleLog("手札を1枚選択してください。");
    return;
  }

  const hand = battle.playerHand[handIndex];
  if (!hand || hand.used) return;

  battle.locked = true;
  await playCard("player", handIndex, index);
  state.selectedHandIndex = null;
  battle.forcedPlayerHandIndex = null;
  battle.locked = false;

  if (!checkBattleEnd()) {
    battle.currentTurn = "npc";
    prepareTurn("npc");
    renderBattleHands();
    setTimeout(() => npcTurn(), 550);
  }
}

async function playCard(owner, handIndex, boardIndex) {
  const battle = state.battle;
  const hand = owner === "player" ? battle.playerHand : battle.npcHand;
  const entry = hand[handIndex];
  entry.used = true;
  if (owner === "player" && battle.kaijutsu?.pending && battle.kaijutsu.targetHandIndex === handIndex) {
    battle.kaijutsu.pending = false;
    battle.kaijutsu.pendingSkillId = null;
    battle.kaijutsu.targetHandIndex = null;
  }
  const lockedByField = isLockCell(boardIndex, battle);
  battle.board[boardIndex] = { card: entry.card, owner, locked: lockedByField };
  if (lockedByField) {
    addBattleLog(`ロック：${owner === "player" ? "プレイヤー" : battle.npc.name}のカードがロックされました。`);
  }

  if (hasRule("type_ascend", battle) || hasRule("type_descend", battle)) {
    const type = getCardType(entry.card);
    const level = getTypeRuleLevel(entry.card, battle, battle.board);
    if (type && level > 0) {
      if (hasRule("type_ascend", battle)) addBattleLog(`教科パワーアップ：場の${type}カードが${level > 0 ? `+${level}` : "変化なし"}になりました。`);
      if (hasRule("type_descend", battle)) addBattleLog(`教科パワーダウン：場の${type}カードが-${level}になりました。`);
    }
  }

  renderBattleAll();
  addBattleLog(`${owner === "player" ? "プレイヤー" : battle.npc.name}：${entry.card.name}を配置。`);

  await animatePlace(boardIndex, owner);
  const captured = await resolveCaptures(boardIndex);
  if (captured.length === 0) {
    addBattleLog("カードの奪取はありません。");
  } else {
    addBattleLog(`${captured.length}枚のカードを自陣色に変更しました。`);
  }
  renderBattleAll();
}

function getResolvedComparisonValue(card, side, battle, board, boardIndex) {
  // 処理順：フィールド効果 → 1〜Aへ丸める → 通常・セイム・プラス判定。
  return clamp(getEffectiveCardValue(card, side, battle, board, boardIndex), 1, 10);
}

function getCapturePlan(board, boardIndex, battle = state.battle, typeBoosts = battle?.typeBoosts ?? {}) {
  const placed = board[boardIndex];
  if (!placed) return { indexes: [], reasons: [] };
  const owner = placed.owner;
  const indexes = new Set();
  const reasons = [];
  const neighbors = getNeighbors(boardIndex)
    .map((neighbor) => ({ ...neighbor, target: board[neighbor.index] }))
    .filter((item) => item.target);

  if (hasRule("plus", battle)) {
    const sums = new Map();
    for (const item of neighbors) {
      const placedValue = getResolvedComparisonValue(placed.card, item.side, battle, board, boardIndex);
      const targetValue = getResolvedComparisonValue(item.target.card, item.opposite, battle, board, item.index);
      const sum = placedValue + targetValue;
      if (!sums.has(sum)) sums.set(sum, []);
      sums.get(sum).push(item);
    }
    for (const group of sums.values()) {
      if (group.length >= 2) {
        let flipped = 0;
        for (const item of group) {
          if (item.target.owner !== owner && !item.target.locked) {
            indexes.add(item.index);
            flipped += 1;
          }
        }
        if (flipped) reasons.push("プラス");
      }
    }
  }

  if (hasRule("same", battle)) {
    const sameItems = [];
    for (const item of neighbors) {
      const placedValue = getResolvedComparisonValue(placed.card, item.side, battle, board, boardIndex);
      const targetValue = getResolvedComparisonValue(item.target.card, item.opposite, battle, board, item.index);
      if (placedValue === targetValue) sameItems.push(item);
    }
    if (sameItems.length >= 2) {
      let flipped = 0;
      for (const item of sameItems) {
        if (item.target.owner !== owner && !item.target.locked) {
          indexes.add(item.index);
          flipped += 1;
        }
      }
      if (flipped) reasons.push("セイム");
    }
  }

  for (const item of neighbors) {
    if (item.target.owner === owner || item.target.locked) continue;
    const placedValue = getResolvedComparisonValue(placed.card, item.side, battle, board, boardIndex);
    const targetValue = getResolvedComparisonValue(item.target.card, item.opposite, battle, board, item.index);
    if (sideBeats(placedValue, targetValue, battle)) {
      indexes.add(item.index);
    }
  }

  return { indexes: [...indexes], reasons: [...new Set(reasons)] };
}

function getComboCaptures(board, startIndexes, owner, battle = state.battle, typeBoosts = battle?.typeBoosts ?? {}) {
  if (!hasRule("combo", battle)) return [];
  const captured = [];
  const queue = [...startIndexes];
  const seen = new Set(queue);

  while (queue.length) {
    const sourceIndex = queue.shift();
    const source = board[sourceIndex];
    if (!source || source.owner !== owner) continue;

    // コンボでひっくり返ったカードも、通常比較だけでなく
    // セイム・プラスを含めて再判定する。
    const plan = getCapturePlan(board, sourceIndex, battle, typeBoosts);
    for (const index of plan.indexes) {
      const target = board[index];
      if (!target || target.owner === owner || target.locked) continue;
      target.owner = owner;
      if (!seen.has(index)) {
        seen.add(index);
        queue.push(index);
        captured.push(index);
      }
    }
  }

  return captured;
}

async function resolveCaptures(boardIndex) {
  const battle = state.battle;
  const placed = battle.board[boardIndex];
  const plan = getCapturePlan(battle.board, boardIndex, battle, battle.typeBoosts);
  const captured = [];

  if (plan.reasons.length) addBattleLog(`${plan.reasons.join("・")}発動！`);

  for (const index of plan.indexes) {
    const target = battle.board[index];
    if (!target || target.owner === placed.owner || target.locked) continue;
    target.owner = placed.owner;
    captured.push(index);
    renderBoard();
    await animateFlip(index, placed.owner);
  }

  if (hasRule("combo", battle) && captured.length) {
    const comboQueue = [...captured];
    const seen = new Set(comboQueue);
    let comboCount = 0;
    const comboReasons = new Set();

    while (comboQueue.length) {
      const sourceIndex = comboQueue.shift();
      const source = battle.board[sourceIndex];
      if (!source || source.owner !== placed.owner) continue;

      // コンボでひっくり返ったカードを起点に、通常比較・セイム・プラスを再判定する。
      const comboPlan = getCapturePlan(battle.board, sourceIndex, battle, battle.typeBoosts);
      for (const index of comboPlan.indexes) {
        const target = battle.board[index];
        if (!target || target.owner === placed.owner || target.locked) continue;
        target.owner = placed.owner;
        captured.push(index);
        comboCount += 1;
        for (const reason of comboPlan.reasons) comboReasons.add(reason);
        if (!seen.has(index)) {
          seen.add(index);
          comboQueue.push(index);
        }
        renderBoard();
        await animateFlip(index, placed.owner);
      }
    }

    if (comboCount) {
      const reasonText = comboReasons.size ? `（${[...comboReasons].join("・")}含む）` : "";
      addBattleLog(`コンボ発動${reasonText}：${comboCount}枚を追加で変更しました。`);
    }
  }

  return captured;
}

function getNeighbors(index) {
  const row = Math.floor(index / 3);
  const col = index % 3;
  const result = [];

  if (row > 0) result.push({ index: index - 3, side: "up", opposite: "down" });
  if (col < 2) result.push({ index: index + 1, side: "right", opposite: "left" });
  if (row < 2) result.push({ index: index + 3, side: "down", opposite: "up" });
  if (col > 0) result.push({ index: index - 1, side: "left", opposite: "right" });

  return result;
}

async function animatePlace(index, owner) {
  if (!state.save.settings.effects) return;
  const { effectLayer, cellSize } = state.pixi;
  const pos = boardPosition(index);
  const color = owner === "player" ? 0x4aa3ff : 0xff6b7c;
  const ring = new PIXI.Graphics();
  ring.x = pos.x + cellSize / 2;
  ring.y = pos.y + cellSize / 2;
  effectLayer.addChild(ring);

  await tween(360, (t) => {
    ring.clear();
    ring.lineStyle(4, color, 1 - t);
    ring.drawCircle(0, 0, 16 + t * 90);
  });

  effectLayer.removeChild(ring);
}

async function animateFlip(index, owner) {
  if (!state.save.settings.effects) return;
  const { effectLayer, cellSize } = state.pixi;
  const pos = boardPosition(index);
  const color = owner === "player" ? 0x4aa3ff : 0xff6b7c;
  const flash = new PIXI.Graphics();
  flash.x = pos.x;
  flash.y = pos.y;
  effectLayer.addChild(flash);

  await tween(440, (t) => {
    flash.clear();
    flash.beginFill(color, Math.sin(t * Math.PI) * 0.46);
    flash.drawRoundedRect(6, 6, cellSize - 12, cellSize - 12, 18);
    flash.endFill();
  });

  effectLayer.removeChild(flash);
}

function tween(duration, draw) {
  return new Promise((resolve) => {
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      draw(t);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };
    requestAnimationFrame(step);
  });
}

async function npcTurn() {
  const battle = state.battle;
  if (!battle || battle.finished) return;

  battle.locked = true;
  const move = chooseNpcMove();
  if (!move) {
    battle.locked = false;
    checkBattleEnd();
    return;
  }

  await playCard("npc", move.handIndex, move.boardIndex);
  battle.forcedNpcHandIndex = null;
  battle.locked = false;

  if (!checkBattleEnd()) {
    battle.currentTurn = "player";
    prepareTurn("player");
    renderBattleHands();
    addBattleLog("プレイヤーのターンです。");
  }
}

function legalMovesFor(hand, board, owner = null) {
  const emptyIndexes = board
    .map((cell, index) => cell ? null : index)
    .filter((index) => index !== null);

  let allowedHandIndexes = null;
  if (owner) {
    const forcedIndex = getForcedHandIndex(owner);
    if (forcedIndex !== null) allowedHandIndexes = new Set([forcedIndex]);
  }

  const moves = [];
  hand.forEach((entry, handIndex) => {
    if (entry.used) return;
    if (allowedHandIndexes && !allowedHandIndexes.has(handIndex)) return;
    for (const boardIndex of emptyIndexes) {
      moves.push({ handIndex, boardIndex, card: entry.card });
    }
  });
  return moves;
}

function chooseNpcMove() {
  const battle = state.battle;
  let moves = legalMovesFor(battle.npcHand, battle.board, "npc");
  if (moves.length === 0) return null;

  if (battle.npc.difficulty === "よわい") {
    return moves[Math.floor(Math.random() * moves.length)];
  }

  if (battle.npc.difficulty === "ふつう") {
    const scored = moves.map((move) => {
      const sim = simulateMove(battle.board, move.card, "npc", move.boardIndex);
      return {
        move,
        score: sim.captured,
        aiPower: getAiCardPower(move.card, battle, sim.board, move.boardIndex),
        safety: safetyScore(sim.board, move.boardIndex, "npc")
      };
    }).sort((a, b) => (b.score - a.score) || (b.safety - a.safety) || (b.aiPower - a.aiPower));

    if (scored[0].score > 0) return scored[0].move;
    return scored[0].move;
  }

  if (battle.npc.difficulty === "大人モード") {
    return chooseShuraMove(moves);
  }

  return chooseStrongMove(moves);
}

function chooseStrongMove(moves) {
  const battle = state.battle;
  let best = null;

  for (const move of moves) {
    const sim = simulateMove(battle.board, move.card, "npc", move.boardIndex);
    const npcRemaining = battle.npcHand.filter((entry, index) => !entry.used && index !== move.handIndex).length;
    const playerRemaining = battle.playerHand.filter((entry) => !entry.used).length;

    let worstCounter = 0;
    const playerMoves = legalMovesFor(battle.playerHand, sim.board, "player");
    for (const pMove of playerMoves) {
      const counter = simulateMove(sim.board, pMove.card, "player", pMove.boardIndex, sim.typeBoosts);
      const scoreAfterCounter = boardAdvantageForNpc(counter.board, playerRemaining - 1, npcRemaining);
      worstCounter = Math.max(worstCounter, -scoreAfterCounter + counter.captured * 18);
    }

    const score = boardAdvantageForNpc(sim.board, playerRemaining, npcRemaining) * 24
      + sim.captured * 42
      + safetyScore(sim.board, move.boardIndex, "npc")
      + getAiCardPower(move.card, battle, sim.board, move.boardIndex)
      - worstCounter;

    if (!best || score > best.score) {
      best = { move, score };
    }
  }

  return best.move;
}


const SHURA_AI_SEARCH = Object.freeze({
  playerBeam: 12,
  npcBeam: 9
});

function cloneAiSearchHand(hand) {
  return (hand ?? []).map((entry) => ({ card: entry.card, used: Boolean(entry.used) }));
}

function markAiSearchHandUsed(hand, handIndex) {
  return hand.map((entry, index) => index === handIndex ? { ...entry, used: true } : entry);
}

function legalMovesForAiSearch(hand, board, owner, battle = state.battle) {
  const emptyIndexes = board
    .map((cell, index) => cell ? null : index)
    .filter((index) => index !== null);

  let allowedIndexes = hand
    .map((entry, index) => entry.used ? null : index)
    .filter((index) => index !== null);

  // オーダーは将来手でも左から最初の未使用カードに限定する。
  // カオスは次ターンの抽選結果がまだ分からないため、全候補を調べて
  // プレイヤー側は最悪ケース、NPC側は最善の返しとして評価する。
  if (hasRule("order", battle) && allowedIndexes.length) {
    allowedIndexes = [allowedIndexes[0]];
  }

  const moves = [];
  for (const handIndex of allowedIndexes) {
    const card = hand[handIndex]?.card;
    if (!card) continue;
    for (const boardIndex of emptyIndexes) {
      moves.push({ handIndex, boardIndex, card, owner });
    }
  }
  return moves;
}

function isCornerCell(index) {
  return index === 0 || index === 2 || index === 6 || index === 8;
}

function isCenterCell(index) {
  return index === 4;
}

function strategicSideStrength(value, battle = state.battle) {
  if (hasRule("reverse", battle)) return 11 - value;
  if (hasRule("ace_killer", battle) && value === 1) return 7.5;
  return value;
}

function shuraCellPlacementScore(board, boardIndex, owner, battle = state.battle) {
  const cell = board[boardIndex];
  if (!cell) return 0;
  const sign = owner === "npc" ? 1 : -1;
  let score = isCornerCell(boardIndex) ? 34 : isCenterCell(boardIndex) ? 13 : 7;
  if (cell.locked) score += 16;

  const exposed = getNeighbors(boardIndex).filter((neighbor) => !board[neighbor.index]);
  if (exposed.length) {
    const strength = exposed.reduce((sum, neighbor) => {
      const value = getResolvedComparisonValue(cell.card, neighbor.side, battle, board, boardIndex);
      return sum + strategicSideStrength(value, battle);
    }, 0) / exposed.length;
    score += (strength - 5.5) * 3.2;
  } else {
    score += 5;
  }
  return score * sign;
}

function shuraBoardShapeScore(board, battle = state.battle) {
  let score = 0;
  for (let index = 0; index < board.length; index += 1) {
    const cell = board[index];
    if (!cell) continue;
    score += shuraCellPlacementScore(board, index, cell.owner, battle);
  }
  return score;
}

function aiSearchHandPower(hand, battle = state.battle) {
  return (hand ?? [])
    .filter((entry) => !entry.used)
    .reduce((sum, entry) => sum + getAiCardPower(entry.card, battle), 0);
}

function shuraReserveScore(npcHand, playerHand, battle = state.battle) {
  const npcPower = aiSearchHandPower(npcHand, battle);
  const playerPower = aiSearchHandPower(playerHand, battle);
  return (npcPower - playerPower) * 1.15;
}

function shuraConservationBonus(move, hand, battle = state.battle) {
  const available = (hand ?? []).filter((entry) => !entry.used);
  if (available.length <= 2) return 0;
  const powers = available.map((entry) => getAiCardPower(entry.card, battle));
  const selected = getAiCardPower(move.card, battle);
  const max = Math.max(...powers);
  const min = Math.min(...powers);
  const phaseWeight = Math.min(1.4, (available.length - 2) * 0.38);
  // 序盤ほど最強カードを温存し、同等の結果なら弱いカードを先に使う。
  return ((max - selected) * 2.1 + (selected === min ? 4 : 0)) * phaseWeight;
}

function shuraOpponentCommitmentBonus(card, hand, battle = state.battle) {
  const available = (hand ?? []).filter((entry) => !entry.used);
  if (!available.length) return 0;
  const powers = available.map((entry) => getAiCardPower(entry.card, battle));
  const selected = getAiCardPower(card, battle);
  const min = Math.min(...powers);
  const max = Math.max(...powers);
  if (max <= min) return 5;
  // 相手が強いカードを切らないと返せない形を高評価する。
  return ((selected - min) / (max - min)) * 24;
}

function shuraFutureSpecialPotential(board, hand, owner, battle = state.battle) {
  if (!hasRule("same", battle) && !hasRule("plus", battle)) return 0;
  const moves = legalMovesForAiSearch(hand, board, owner, battle);
  const scores = [];

  for (const move of moves) {
    const testBoard = board.slice();
    testBoard[move.boardIndex] = {
      card: move.card,
      owner,
      locked: isLockCell(move.boardIndex, battle)
    };
    const plan = getCapturePlan(testBoard, move.boardIndex, battle, testBoard);
    let score = 0;
    if (plan.reasons.includes("セイム")) score += 22;
    if (plan.reasons.includes("プラス")) score += 22;
    if (plan.reasons.length) {
      const enemyTargets = plan.indexes.filter((index) => testBoard[index]?.owner !== owner).length;
      score += enemyTargets * 7;
      if (isCornerCell(move.boardIndex)) score += 5;
    }
    if (score > 0) scores.push(score);
  }

  scores.sort((a, b) => b - a);
  return (scores[0] ?? 0) + (scores[1] ?? 0) * 0.35;
}

function shuraComboExposure(board, owner, battle = state.battle) {
  if (!hasRule("combo", battle)) return 0;
  let risk = 0;

  for (let index = 0; index < board.length; index += 1) {
    const cell = board[index];
    if (!cell || cell.owner !== owner || cell.locked) continue;
    const friendlyLinks = getNeighbors(index).filter((neighbor) => board[neighbor.index]?.owner === owner).length;
    const exposed = getNeighbors(index).filter((neighbor) => !board[neighbor.index]);
    if (!friendlyLinks || !exposed.length) continue;

    const weakestExposed = Math.min(...exposed.map((neighbor) => {
      const value = getResolvedComparisonValue(cell.card, neighbor.side, battle, board, index);
      return strategicSideStrength(value, battle);
    }));
    risk += friendlyLinks * Math.max(0, 7.5 - weakestExposed) * 2.6;
  }
  return risk;
}

function evaluateShuraPosition(board, npcHand, playerHand, battle = state.battle) {
  const npcRemaining = npcHand.filter((entry) => !entry.used).length;
  const playerRemaining = playerHand.filter((entry) => !entry.used).length;
  const boardScore = boardAdvantageForNpc(board, playerRemaining, npcRemaining) * 72;
  const shapeScore = shuraBoardShapeScore(board, battle);
  const reserveScore = shuraReserveScore(npcHand, playerHand, battle);
  const futureNpc = shuraFutureSpecialPotential(board, npcHand, "npc", battle);
  const futurePlayer = shuraFutureSpecialPotential(board, playerHand, "player", battle);
  const npcComboRisk = shuraComboExposure(board, "npc", battle);
  const playerComboRisk = shuraComboExposure(board, "player", battle);

  return boardScore
    + shapeScore
    + reserveScore
    + futureNpc * 1.15
    - futurePlayer * 1.25
    - npcComboRisk * 1.35
    + playerComboRisk * 0.8;
}

function rankPlayerSearchBranches(branches, battle = state.battle) {
  return branches.sort((a, b) => {
    const aThreat = a.sim.captured * 50 + a.sim.comboCaptured * 74
      + (isCornerCell(a.move.boardIndex) ? 22 : 0)
      + (a.sim.captureReasons.length ? 18 : 0)
      - boardAdvantageForNpc(a.sim.board, a.playerRemaining, a.npcRemaining) * 18;
    const bThreat = b.sim.captured * 50 + b.sim.comboCaptured * 74
      + (isCornerCell(b.move.boardIndex) ? 22 : 0)
      + (b.sim.captureReasons.length ? 18 : 0)
      - boardAdvantageForNpc(b.sim.board, b.playerRemaining, b.npcRemaining) * 18;
    return bThreat - aThreat;
  });
}

function rankNpcSearchBranches(branches, battle = state.battle) {
  return branches.sort((a, b) => {
    const aValue = a.sim.captured * 48 + a.sim.comboCaptured * 68
      + (isCornerCell(a.move.boardIndex) ? 28 : 0)
      + safetyScore(a.sim.board, a.move.boardIndex, "npc")
      + shuraConservationBonus(a.move, a.handBefore, battle);
    const bValue = b.sim.captured * 48 + b.sim.comboCaptured * 68
      + (isCornerCell(b.move.boardIndex) ? 28 : 0)
      + safetyScore(b.sim.board, b.move.boardIndex, "npc")
      + shuraConservationBonus(b.move, b.handBefore, battle);
    return bValue - aValue;
  });
}

function chooseShuraMove(moves) {
  const battle = state.battle;
  const initialNpcHand = cloneAiSearchHand(battle.npcHand);
  const initialPlayerHand = cloneAiSearchHand(battle.playerHand);
  let best = null;

  // 3プライ探索：大人の現在手 → プレイヤーの最善応手 → 大人の次の最善手。
  // 盤面が小さいため全初手を評価し、応手以降は危険度の高い候補へ絞る。
  for (const move of moves) {
    const firstSim = simulateMove(battle.board, move.card, "npc", move.boardIndex);
    const npcAfterFirst = markAiSearchHandUsed(initialNpcHand, move.handIndex);
    const playerAfterFirst = initialPlayerHand;
    const playerMoves = legalMovesForAiSearch(playerAfterFirst, firstSim.board, "player", battle);

    let minimaxScore;
    if (!playerMoves.length) {
      minimaxScore = evaluateShuraPosition(firstSim.board, npcAfterFirst, playerAfterFirst, battle);
    } else {
      const playerBranches = playerMoves.map((playerMove) => {
        const sim = simulateMove(firstSim.board, playerMove.card, "player", playerMove.boardIndex, firstSim.typeBoosts);
        return {
          move: playerMove,
          sim,
          playerRemaining: playerAfterFirst.filter((entry, index) => !entry.used && index !== playerMove.handIndex).length,
          npcRemaining: npcAfterFirst.filter((entry) => !entry.used).length
        };
      });

      const dangerousResponses = rankPlayerSearchBranches(playerBranches, battle)
        .slice(0, SHURA_AI_SEARCH.playerBeam);
      minimaxScore = Number.POSITIVE_INFINITY;

      for (const response of dangerousResponses) {
        const playerAfterResponse = markAiSearchHandUsed(playerAfterFirst, response.move.handIndex);
        const npcFollowMoves = legalMovesForAiSearch(npcAfterFirst, response.sim.board, "npc", battle);
        const commitmentBonus = shuraOpponentCommitmentBonus(response.move.card, playerAfterFirst, battle);
        let bestFollowScore;

        if (!npcFollowMoves.length) {
          bestFollowScore = evaluateShuraPosition(response.sim.board, npcAfterFirst, playerAfterResponse, battle);
        } else {
          const npcBranches = npcFollowMoves.map((followMove) => ({
            move: followMove,
            handBefore: npcAfterFirst,
            sim: simulateMove(response.sim.board, followMove.card, "npc", followMove.boardIndex, response.sim.typeBoosts)
          }));
          const followCandidates = rankNpcSearchBranches(npcBranches, battle)
            .slice(0, SHURA_AI_SEARCH.npcBeam);
          bestFollowScore = Number.NEGATIVE_INFINITY;

          for (const follow of followCandidates) {
            const npcAfterFollow = markAiSearchHandUsed(npcAfterFirst, follow.move.handIndex);
            let leafScore = evaluateShuraPosition(follow.sim.board, npcAfterFollow, playerAfterResponse, battle);
            leafScore += follow.sim.captured * 20 + follow.sim.comboCaptured * 32;
            leafScore += shuraConservationBonus(follow.move, npcAfterFirst, battle);
            if (isCornerCell(follow.move.boardIndex)) leafScore += 16;
            bestFollowScore = Math.max(bestFollowScore, leafScore);
          }
        }

        // コンボでの大量反転は通常の枚数差以上に危険として扱う。
        const responseScore = bestFollowScore
          + commitmentBonus
          - response.sim.captured * 10
          - response.sim.comboCaptured * 46;
        minimaxScore = Math.min(minimaxScore, responseScore);
      }
    }

    let score = minimaxScore
      + firstSim.captured * 24
      + firstSim.comboCaptured * 38
      + shuraConservationBonus(move, initialNpcHand, battle);
    if (isCornerCell(move.boardIndex)) score += 32;
    if (isCenterCell(move.boardIndex)) score += 8;
    if (firstSim.captureReasons.includes("セイム")) score += 10;
    if (firstSim.captureReasons.includes("プラス")) score += 10;

    if (!best || score > best.score) best = { move, score };
  }

  return best?.move ?? moves[0];
}

function boardAdvantageForNpc(board, playerRemaining, npcRemaining) {
  const npc = board.filter((cell) => cell?.owner === "npc").length + npcRemaining;
  const player = board.filter((cell) => cell?.owner === "player").length + playerRemaining;
  return npc - player;
}

function safetyScore(board, boardIndex, owner) {
  const placed = board[boardIndex];
  if (!placed) return 0;

  const exposedSides = getNeighbors(boardIndex).filter((neighbor) => !board[neighbor.index]);
  if (exposedSides.length === 0) return 8;

  const average = exposedSides.reduce((sum, neighbor) => sum + getEffectiveCardValue(placed.card, neighbor.side, state.battle, board, boardIndex), 0) / exposedSides.length;
  return hasRule("reverse", state.battle) ? 11 - average : average;
}

function simulateMove(board, card, owner, boardIndex, typeBoostsOverride = null) {
  const battle = state.battle;
  const simBattle = { ...battle, typeBoosts: { ...(typeBoostsOverride ?? battle.typeBoosts ?? {}) } };
  const copy = board.map((cell) => cell ? { card: cell.card, owner: cell.owner, locked: Boolean(cell.locked) } : null);
  copy[boardIndex] = { card, owner, locked: isLockCell(boardIndex, battle) };
  simBattle.board = copy;

  const plan = getCapturePlan(copy, boardIndex, simBattle, copy);
  const capturedIndexes = [];
  for (const index of plan.indexes) {
    const target = copy[index];
    if (!target || target.owner === owner) continue;
    target.owner = owner;
    capturedIndexes.push(index);
  }

  const comboCaptured = getComboCaptures(copy, capturedIndexes, owner, simBattle, copy);
  return {
    board: copy,
    captured: capturedIndexes.length + comboCaptured.length,
    directCaptured: capturedIndexes.length,
    comboCaptured: comboCaptured.length,
    captureReasons: [...(plan.reasons ?? [])],
    typeBoosts: simBattle.typeBoosts
  };
}

function checkBattleEnd() {
  const battle = state.battle;
  if (!battle) return true;
  if (battle.mode === "online") return false;
  const boardFull = battle.board.every(Boolean);
  const noPlayableCards = battle.playerHand.every((entry) => entry.used) && battle.npcHand.every((entry) => entry.used);

  if (!boardFull && !noPlayableCards) return false;

  battle.finished = true;
  renderBattleAll();

  const score = calcScore();
  if (battle.mode === "onlineNpc") {
    handleOnlineNpcResult(score);
    return true;
  }
  if (score.player > score.npc) {
    addBattleLog(`勝利！ ${score.player} - ${score.npc}`);
    const winMoney = getNpcWinMoney(battle.npc);
    addMoney(winMoney);
    addTotalEarnedMoney(winMoney);
    addBattleLog(`勝利報酬として${formatMoney(winMoney)}を獲得しました。`);
    const previousWins = state.save.npcWins[battle.npc.id] ?? 0;
    const materialAward = awardBattleMaterials(battle, true);
    addBattleLog(`ひらめきのかけらを${materialAward.fragments}個獲得しました。`);
    for (const [subject, amount] of Object.entries(materialAward.powers)) addBattleLog(`${subject}パワーを${amount}個獲得しました。`);
    const firstWinCard = previousWins === 0 && battle.npc.firstWinRewardCardId ? cardById.get(battle.npc.firstWinRewardCardId) : null;
    if (previousWins === 0 && Array.isArray(battle.npc.firstWinRewardChoiceIds)) battle.firstWinRewardChoiceIds = [...battle.npc.firstWinRewardChoiceIds];
    if (firstWinCard) {
      addOwnedCard(firstWinCard.id);
      battle.firstWinRewardCardId = firstWinCard.id;
      addBattleLog(`初回勝利報酬として「${firstWinCard.name}」を獲得しました。`);
    }
    state.save.npcWins[battle.npc.id] = previousWins + 1;
    battle.finalScore = { ...score };
    battle.overwhelmingVictoryBonus = score.player === 8 || score.player === 9;
    if (battle.overwhelmingVictoryBonus) {
      addBattleLog(`圧勝ボーナス！ 最終スコア${score.player}のためレアチャンスが確定しました。`);
    }
    save();
    handleReward();
  } else if (score.player < score.npc) {
    addBattleLog(`敗北... ${score.player} - ${score.npc}`);
    const materialAward=awardBattleMaterials(battle,false); addBattleLog(`ひらめきのかけらを${materialAward.fragments}個獲得しました。`); for(const [subject,amount] of Object.entries(materialAward.powers))addBattleLog(`${subject}パワーを${amount}個獲得しました。`); save();
    showModal("敗北", `<p>今回はカードを獲得できませんでした。</p><p>挑戦料${formatMoney(battle.entryFee)}は返金されません。</p><p>スコア：自分 ${score.player} - ${score.npc} 相手</p>`, [
      finalBoardAction(),
      { label: "再戦", onClick: () => { closeModal(); startBattle(battle.npc.id); } },
      { label: "対戦相手選択", className: "ghost", onClick: () => { closeModal(); showScreen("battleMenu"); } }
    ]);
  } else {
    addBattleLog(`引き分け ${score.player} - ${score.npc}`);
    const refundMoney = Number(battle.entryFee ?? 0);
    if (refundMoney > 0) {
      addMoney(refundMoney);
      addBattleLog(`引き分けのため挑戦料${formatMoney(refundMoney)}が返金されました。`);
    }
    showModal("引き分け", `<p>引き分けのためカード獲得はありません。</p><p>挑戦料${formatMoney(battle.entryFee)}は返金されました。</p><p>スコア：自分 ${score.player} - ${score.npc} 相手</p>`, [
      finalBoardAction(),
      { label: "再戦", onClick: () => { closeModal(); startBattle(battle.npc.id); } },
      { label: "対戦相手選択", className: "ghost", onClick: () => { closeModal(); showScreen("battleMenu"); } },
      { label: "タイトルへ戻る", className: "ghost", onClick: () => { closeModal(); showScreen("title"); } }
    ]);
  }

  return true;
}

async function handleOnlineNpcResult(score) {
  const battle = state.battle;
  const winner = score.player > score.npc ? "player" : score.player < score.npc ? "npc" : "draw";
  const myScore = winner === "draw" ? 0.5 : winner === "player" ? 1 : 0;
  const oldRating = Number(state.online.cachedProfile?.rating ?? getDefaultOnlineRating());
  const opponentRating = Number(battle.npc?.onlineNpcRating ?? 1500);
  const newRating = calculateElo(oldRating, opponentRating, myScore);
  const title = winner === "draw" ? "引き分け" : winner === "player" ? "勝利" : "敗北";
  addBattleLog(`${title} ${score.player} - ${score.npc}`);
  try {
    const fb = await ensureOnlineFirebase();
    const profileSnap = await fb.get(getProfileRef(fb.uid));
    const profile = profileSnap.exists() ? profileSnap.val() : {};
    const wins = Number(profile.onlineWins ?? 0) + (winner === "player" ? 1 : 0);
    const losses = Number(profile.onlineLosses ?? 0) + (winner === "npc" ? 1 : 0);
    const draws = Number(profile.onlineDraws ?? 0) + (winner === "draw" ? 1 : 0);
    const username = getOnlineUserName() || profile.username || "名無し";
    const now = Date.now();
    await fb.update(fb.ref(fb.db), {
      [`${FIREBASE_ROOT}/profiles/${fb.uid}/rating`]: newRating,
      [`${FIREBASE_ROOT}/profiles/${fb.uid}/onlineWins`]: wins,
      [`${FIREBASE_ROOT}/profiles/${fb.uid}/onlineLosses`]: losses,
      [`${FIREBASE_ROOT}/profiles/${fb.uid}/onlineDraws`]: draws,
      [`${FIREBASE_ROOT}/profiles/${fb.uid}/updatedAt`]: now,
      [`${FIREBASE_ROOT}/leaderboards/onlineRating/${fb.uid}`]: { username, rating: newRating, wins, losses, draws, updatedAt: now }
    });
    state.online.cachedProfile = { ...(state.online.cachedProfile ?? {}), rating: newRating, onlineWins: wins, onlineLosses: losses, onlineDraws: draws };
  } catch (error) {
    addBattleLog(`レート反映エラー：${error.message ?? error}`);
  }
  showModal(`ランダムNPC戦：${title}`, `<p>スコア：自分 ${score.player} - ${score.npc} 相手</p><p>レート：${oldRating} → <strong>${newRating}</strong>（${newRating - oldRating >= 0 ? "+" : ""}${newRating - oldRating}）</p>`, [
    finalBoardAction(),
    { label: "もう一度ランダムマッチ", onClick: () => { closeModal(); state.battle = null; showScreen("onlineBattle"); startRandomOnlineMatch(); } },
    { label: "オンライン対戦へ", className: "ghost", onClick: () => { closeModal(); state.battle = null; showScreen("onlineBattle"); } },
    { label: "タイトルへ戻る", className: "ghost", onClick: () => { closeModal(); state.battle = null; showScreen("title"); } }
  ]);
}

function getFirstWinRewardCard(battle) {
  const cardId = battle?.firstWinRewardCardId;
  return cardId ? cardById.get(cardId) : null;
}

function firstWinRewardHtml(battle) {
  const card = getFirstWinRewardCard(battle);
  if (!card) return "";
  return `
    <div class="first-win-reward">
      <p><strong>初回勝利報酬</strong>として以下のカードも獲得しました。</p>
      <div class="reward-grid">${rewardDisplayCardHtml(card)}</div>
    </div>
  `;
}

function getRareChanceCards(npc) {
  const rarities = Array.isArray(npc?.rareChanceRarities) ? npc.rareChanceRarities.map(Number) : null;
  const maxRarity = getRareChanceMaxRarity(npc);
  return CARDS.filter((card) => {
    if (npc?.rareChanceType && getCardType(card) !== npc.rareChanceType) return false;
    if (rarities && !rarities.includes(card.rarity)) return false;
    if (!rarities && card.rarity > maxRarity) return false;
    return true;
  });
}

function getChooseRewardCards(battle) {
  return battle.npcBattleCards.filter((card) => card.rarity <= 3);
}

function getRandomRewardCards(battle) {
  return battle.npcBattleCards.filter((card) => card.rarity <= 4);
}

function getRewardFallbackCard(battle) {
  return battle.npcBattleCards
    .filter((card) => card.rarity <= 4)
    .sort((a, b) => a.rarity - b.rarity || a.power - b.power)[0] ?? null;
}

function getVictoryMoneyHtml(battle) {
  const winMoney=getNpcWinMoney(battle.npc); return `<p>勝利報酬として${formatMoney(winMoney)}を獲得しました。</p>`;
}

function rollRewardRule(npc, battle = state.battle) {
  if (battle?.overwhelmingVictoryBonus) return "rare_chance";
  const weights = getRewardWeights(npc, battle);
  const total = Object.values(weights).reduce((sum, value) => sum + value, 0);
  let roll = Math.random() * total;

  for (const [rule, weight] of Object.entries(weights)) {
    roll -= weight;
    if (roll <= 0) return rule;
  }

  return "random_one";
}

function handleReward() {
  const battle = state.battle;
  if (Array.isArray(battle?.firstWinRewardChoiceIds) && battle.firstWinRewardChoiceIds.length && !battle.firstWinRewardChoiceResolved) {
    const choices=battle.firstWinRewardChoiceIds.map(id=>cardById.get(id)).filter(Boolean);
    showModal("初回勝利報酬を選択",`<p>学びマスター初回勝利！ ★4カードを1枚選んでください。</p><div class="reward-grid">${choices.map(card=>rewardCardHtml(card)).join("")}</div>`,[]);
    document.querySelectorAll("[data-reward-card-id]").forEach(el=>el.addEventListener("click",()=>{const id=el.getAttribute("data-reward-card-id");if(!battle.firstWinRewardChoiceIds.includes(id))return;const card=cardById.get(id);addOwnedCard(id);battle.firstWinRewardCardId=id;battle.firstWinRewardChoiceResolved=true;closeModal();handleReward();})); return;
  }
  const rule = rollRewardRule(battle.npc, battle);

  if (rule === "choose_one") {
    const choices = getChooseRewardCards(battle);
    if (!choices.length) {
      const fallback = getRewardFallbackCard(battle);
      if (fallback) {
        addOwnedCard(fallback.id);
        showRewardResult(fallback, "選択可能な★3以下カードがなかったため、★4以下のカードからランダムで獲得しました。");
      } else {
        showModal("カード獲得なし", `${getVictoryMoneyHtml(battle)}${firstWinRewardHtml(battle)}<p>獲得可能なカードがありませんでした。</p>`, postVictoryActions());
      }
      return;
    }

    showModal(
      "報酬：好きなカードを1枚選択",
      `${getVictoryMoneyHtml(battle)}${firstWinRewardHtml(battle)}<p>報酬抽選：相手カードから選択取得（★3まで）</p><div class="reward-grid">${choices.map((card) => rewardCardHtml(card)).join("")}</div>`,
      [{
        label: "表示カードからランダムで受け取る",
        className: "ghost",
        onClick: () => {
          const card = choices[Math.floor(Math.random() * choices.length)];
          addOwnedCard(card.id);
          closeModal();
          showRewardResult(card, "選択取得の候補からランダム受け取りにしました。");
        }
      }]
    );

    document.querySelectorAll("[data-reward-card-id]").forEach((element) => {
      element.addEventListener("click", () => {
        const cardId = element.getAttribute("data-reward-card-id");
        const card = cardById.get(cardId);
        if (!card || card.rarity > 3) return;
        addOwnedCard(cardId);
        closeModal();
        showRewardResult(card, "選択取得で獲得しました。★3までが選択対象です。");
      });
    });
    return;
  }

  if (rule === "rare_chance") {
    const rareCards = shuffle(getRareChanceCards(battle.npc))
      .sort((a, b) => {
        const ownedA = getOwnedCount(a.id) > 0 ? 1 : 0;
        const ownedB = getOwnedCount(b.id) > 0 ? 1 : 0;
        return ownedA - ownedB || b.rarity - a.rarity || b.power - a.power;
      });
    const card = rareCards[Math.floor(Math.random() * Math.min(rareCards.length, 30))];
    if (!card) {
      showModal("カード獲得なし", `${getVictoryMoneyHtml(battle)}${firstWinRewardHtml(battle)}<p>レアチャンス対象カードがありませんでした。</p>`, postVictoryActions());
      return;
    }
    addOwnedCard(card.id);
    const effectiveRate = Math.min(100, getRareChanceRate(battle.npc) * Math.max(1, Number(battle.rareChanceMultiplier ?? 1)));
    const rewardMessage = battle.overwhelmingVictoryBonus
      ? `圧勝ボーナス！ 最終スコア${battle.finalScore?.player ?? "8または9"}のためレアチャンス確定。対象：${getRareChanceLabel(battle.npc)}`
      : `レアチャンス ${effectiveRate}% に当選しました。対象：${getRareChanceLabel(battle.npc)}`;
    showRewardResult(card, rewardMessage);
    return;
  }

  const randomCandidates = getRandomRewardCards(battle);
  const card = randomCandidates[Math.floor(Math.random() * randomCandidates.length)] ?? getRewardFallbackCard(battle);
  if (!card) {
    showModal("カード獲得なし", `${getVictoryMoneyHtml(battle)}${firstWinRewardHtml(battle)}<p>ランダム取得可能な★4以下カードがありませんでした。</p>`, postVictoryActions());
    return;
  }
  addOwnedCard(card.id);
  showRewardResult(card, "相手カードからランダム取得しました。ランダム取得は★4までが対象です。");
}

function rewardDisplayCardHtml(card) {
  const typeMeta = getCardTypeMeta(card);
  return `
    <div class="reward-card reward-display-card" data-type="${typeMeta.key}" style="--card-type-color:${typeMeta.color};">
      <div class="reward-card-preview mini-card">
        ${cardMiniHtml(card, "", { squareArt: true, detail: true, showName: false })}
      </div>
      <div class="reward-card-info">
        <strong>${escapeHtml(card.name)}</strong><br>
        <small>${rarityStars(card.rarity)} / ${cardStatLine(card)}</small>
      </div>
    </div>
  `;
}

function rewardCardHtml(card) {
  const typeMeta = getCardTypeMeta(card);
  return `
    <div class="reward-card" data-type="${typeMeta.key}" style="--card-type-color:${typeMeta.color};">
      <div class="reward-card-preview mini-card">
        ${cardMiniHtml(card, "", { squareArt: true, detail: true, showName: false })}
      </div>
      <div class="reward-card-info">
        <strong>${escapeHtml(card.name)}</strong><br>
        <small>${rarityStars(card.rarity)} / ${cardStatLine(card)}</small><br>
        <span class="owned-badge ${getOwnedCount(card.id) > 0 ? "owned" : "not-owned"}">${getOwnedCount(card.id) > 0 ? "取得済み" : "未取得"}</span>
      </div>
      <button class="small-button reward-get-button" data-reward-card-id="${card.id}">このカードを入手</button>
    </div>
  `;
}

function postVictoryActions() {
  return [
    finalBoardAction(),
    { label: "再戦", onClick: () => { const npcId = state.battle?.npc?.id; closeModal(); if (npcId) startBattle(npcId); } },
    { label: "対戦相手選択", className: "ghost", onClick: () => { closeModal(); showScreen("battleMenu"); } },
    { label: "デッキ画面", className: "ghost", onClick: () => { closeModal(); showScreen("deck"); } },
    { label: "タイトルへ戻る", className: "ghost", onClick: () => { closeModal(); showScreen("title"); } }
  ];
}

function showRewardResult(card, reason) {
  showModal(
    "カード獲得",
    `${getVictoryMoneyHtml(state.battle)}${firstWinRewardHtml(state.battle)}<p>${escapeHtml(reason)}</p><div class="reward-grid">${rewardDisplayCardHtml(card)}</div>`,
    postVictoryActions()
  );
}

function confirmBattleExit(destination = "title") {
  const battle = state.battle;
  if (battle?.mode === "online") {
    confirmOnlineExit(destination === "title" ? "title" : "onlineBattle");
    return;
  }
  if (!battle || battle.finished) {
    state.battle = null;
    showScreen(destination === "battleMenu" ? "battleMenu" : "title");
    return;
  }

  const destText = destination === "battleMenu" ? "対戦相手選択へ戻る" : "タイトルへ戻る";
  showModal(
    "棄権確認",
    `<p>対戦中に${destText}と棄権になります。</p><p>挑戦料${formatMoney(battle.entryFee ?? 0)}は返ってきませんが、よろしいですか？</p>`,
    [
      {
        label: "棄権する",
        className: "danger",
        onClick: () => {
          closeModal();
          addBattleLog("棄権しました。挑戦料は返金されません。");
          state.battle = null;
          showScreen(destination === "battleMenu" ? "battleMenu" : "title");
        }
      },
      { label: "キャンセル", className: "ghost", onClick: closeModal }
    ]
  );
}

async function forceUpdate() {
  try {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((name) => caches.delete(name)));
    if ("serviceWorker" in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((reg) => reg.unregister()));
    }
  } catch (error) {
    console.warn(error);
  }
  location.reload();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("Service Worker registration failed", error);
    });
  });
}

function bindEvents() {
  $("versionLabel").textContent = `v${VERSION}`;
  $("backTitleBtn").addEventListener("click", () => confirmBattleExit("title"));

  $("goBattle").addEventListener("click", () => showScreen("battleSelect"));
  $("goNpcBattle").addEventListener("click", () => showScreen("battleMenu"));
  $("goOnlineBattle").addEventListener("click", () => showScreen("onlineBattle"));
  $("createOnlineRoom").addEventListener("click", createOnlineRoom);
  $("joinOnlineRoom").addEventListener("click", joinOnlineRoom);
  const randomMatchBtn = $("randomOnlineMatch");
  if (randomMatchBtn) randomMatchBtn.addEventListener("click", startRandomOnlineMatch);
  $("onlineRoomCode").addEventListener("input", (event) => { event.target.value = event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8); });
  $("goDeck").addEventListener("click", () => showScreen("deck"));
  $("goShop").addEventListener("click", () => showScreen("shop"));
  $("goCardEnhance").addEventListener("click", () => showScreen("cardEnhance"));
  $("goCollection").addEventListener("click", () => showScreen("collection"));
  $("goRankings").addEventListener("click", () => showScreen("rankings"));
  $("goRules").addEventListener("click", () => showScreen("rules"));
  $("goSettings").addEventListener("click", () => showScreen("settings"));
  $("updateButton").addEventListener("click", forceUpdate);

  $("showAwakeningMenu")?.addEventListener("click", () => setEnhancementView("awakening"));
  $("showResidueMenu")?.addEventListener("click", () => setEnhancementView("residue"));
  $("convertAllStar1")?.addEventListener("click", () => confirmResidueConversion(buildResidueConversion(1)));
  $("convertAllStar2")?.addEventListener("click", () => confirmResidueConversion(buildResidueConversion(2)));
  $("convertAllStar3")?.addEventListener("click", () => confirmResidueConversion(buildResidueConversion(3)));

  $("cardSearch").addEventListener("input", renderOwnedCardList);
  $("ownedViewVertical").addEventListener("click", () => setOwnedCardView("vertical"));
  $("ownedViewHorizontal").addEventListener("click", () => setOwnedCardView("horizontal"));
  $("deckSortField").addEventListener("change", (event) => {
    state.deckSort.field = event.target.value;
    renderOwnedCardList();
  });
  $("deckSortOrder").addEventListener("change", (event) => {
    state.deckSort.order = event.target.value;
    renderOwnedCardList();
  });
  $("collectionSearch").addEventListener("input", renderCollectionScreen);

  [
    ["deckRarityFilter", state.deckFilter, "rarity", renderOwnedCardList],
    ["deckAttributeFilter", state.deckFilter, "attribute", renderOwnedCardList],
    ["collectionRarityFilter", state.collectionFilter, "rarity", renderCollectionScreen],
    ["collectionAttributeFilter", state.collectionFilter, "attribute", renderCollectionScreen],
    ["collectionSortField", state.collectionFilter, "sortField", renderCollectionScreen],
    ["collectionSortOrder", state.collectionFilter, "sortOrder", renderCollectionScreen]
  ].forEach(([id, target, key, render]) => {
    const control = $(id);
    if (!control) return;
    control.addEventListener("change", (event) => {
      target[key] = event.target.value;
      render();
    });
  });

  $("npcModeToggle")?.addEventListener("click", () => {
    if (!hasDefeatedNpc(16)) {
      state.npcListMode = "normal";
      renderNpcList();
      return;
    }
    state.npcListMode = state.npcListMode === "shura" ? "normal" : "shura";
    state.npcListUi.difficulty = "all";
    renderNpcList();
  });

  [
    ["npcFilterDifficulty", "difficulty"],
    ["npcFilterWinStatus", "winStatus"],
    ["npcFilterAttribute", "attribute"],
    ["npcSortField", "sortField"],
    ["npcSortOrder", "sortOrder"]
  ].forEach(([id, key]) => {
    const control = $(id);
    if (!control) return;
    control.addEventListener("change", (event) => {
      state.npcListUi[key] = event.target.value;
      renderNpcList();
    });
  });


  $("useKaijutsuButton")?.addEventListener("click", activateKaijutsu);

  $("deckNameInput").addEventListener("input", (event) => {
    const name = event.target.value.trim() || getDeckDefaultName(state.selectedDeckIndex);
    state.save.deckNames[state.selectedDeckIndex] = name;
    save();
    renderDeckTabsOnly();
  });

  $("setActiveDeck").addEventListener("click", () => {
    if (isLittleDeckIndex(state.selectedDeckIndex)) {
      $("deckMessage").textContent = "リトル専用デッキは、リトルルール時に自動で使用されます。通常使用デッキには設定できません。";
      $("deckMessage").style.color = "var(--danger)";
      return;
    }
    const error = validateDeck(state.save.decks[state.selectedDeckIndex]);
    if (error) {
      $("deckMessage").textContent = error;
      $("deckMessage").style.color = "var(--danger)";
      return;
    }
    state.save.activeDeckIndex = state.selectedDeckIndex;
    save();
    renderDeckScreen();
  });

  $("clearDeck").addEventListener("click", () => {
    state.save.decks[state.selectedDeckIndex] = [];
    save();
    renderDeckScreen();
  });

  $("effectToggle").addEventListener("change", (event) => {
    state.save.settings.effects = event.target.checked;
    save();
  });

  $("battleCardPopupToggle").addEventListener("change", (event) => {
    state.save.settings.battleCardPopup = event.target.checked;
    save();
  });

  const debugMoneyButton = $("debugMoneyButton");
  if (debugMoneyButton) {
    debugMoneyButton.addEventListener("click", () => {
      const passwordInput = $("debugPassword");
      const message = $("debugMessage");
      const password = String(passwordInput?.value ?? "");
      if (password !== "ps20240626") {
        if (message) {
          message.textContent = "パスワードが違います";
          message.style.color = "var(--danger)";
        }
        return;
      }
      addMoney(1000000);
      if (passwordInput) passwordInput.value = "";
      if (message) {
        message.textContent = "まなびポイントを1,000,000MP増やしました。";
        message.style.color = "var(--success, #62d98b)";
      }
    });
  }

  $("checkUserName").addEventListener("click", () => checkUserNameAvailability(true));
  $("saveUserName").addEventListener("click", saveUserNameSetting);
  $("syncRankings").addEventListener("click", async () => {
    const result = $("userNameCheckResult");
    try {
      if (!getOnlineUserName()) {
        if (result) result.textContent = "先にユーザー名を保存してください。";
        return;
      }
      const profile = await syncPlayerRankings();
      renderProfileSummary(profile);
      if (result) result.textContent = "ランキング情報を更新しました。ランキング画面を開くと表示されます。";
    } catch (error) {
      if (result) result.textContent = `更新エラー：${error.message ?? error}`;
    }
  });

  $("exportSave").addEventListener("click", () => {
    $("saveText").value = btoa(unescape(encodeURIComponent(JSON.stringify(state.save))));
  });

  $("importSave").addEventListener("click", () => {
    try {
      const json = decodeURIComponent(escape(atob($("saveText").value.trim())));
      state.save = normalizeSave(JSON.parse(json));
      save();
      renderSettingsScreen();
      showModal("読み込み完了", "<p>セーブデータを読み込みました。</p>", [{ label: "閉じる", onClick: closeModal }]);
    } catch (error) {
      showModal("読み込み失敗", "<p>セーブデータの形式が正しくありません。</p>", [{ label: "閉じる", onClick: closeModal }]);
    }
  });

  $("resetSave").addEventListener("click", () => {
    showModal("初期化確認", "<p>所持カード・デッキ・図鑑情報を初期化します。</p>", [
      {
        label: "初期化する",
        className: "danger",
        onClick: () => {
          state.save = createInitialSave();
          save();
          closeModal();
          showScreen("title");
        }
      },
      { label: "キャンセル", className: "ghost", onClick: closeModal }
    ]);
  });

  $("giveUpButton").addEventListener("click", () => confirmBattleExit("battleMenu"));

  $("refreshShop").addEventListener("click", () => {
    const fee = getShopRefreshFee();
    if (!spendMoney(fee)) {
      showShopMessage(`品揃えの更新には${formatMoney(fee)}が必要です。`, true);
      renderShopScreen();
      return;
    }
    refreshShopStock();
    state.shopInitialized = true;
    showShopMessage(`品揃えを更新しました。${formatMoney(fee)}を支払いました。`);
    renderShopScreen();
  });

  window.addEventListener("resize", scheduleBattleAutoFit);
  window.addEventListener("orientationchange", () => setTimeout(scheduleBattleAutoFit, 180));
}

function init() {
  loadSave();
  bindEvents();
  showScreen("title");
  document.body.dataset.appReady = "1";
}

try {
  init();
} catch (error) {
  console.error("まなびカードバトル 起動エラー", error);
  document.body.dataset.appReady = "0";
  const titleCard = document.querySelector("#screen-title .title-card");
  if (titleCard) {
    const errorBox = document.createElement("div");
    errorBox.className = "startup-error";
    errorBox.innerHTML = `<strong>ゲームの読み込みに失敗しました。</strong><br><small>${String(error?.message ?? error)}</small><br><small>「最新版に更新」またはブラウザの再読み込みをお試しください。</small>`;
    titleCard.appendChild(errorBox);
  }
}
registerServiceWorker();
