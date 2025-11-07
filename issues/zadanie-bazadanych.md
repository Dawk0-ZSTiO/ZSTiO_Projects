```
db.zadanie1.insertMany([
  {
    id_ksiazki: 1,
    tytul: "Pan Tadeusz",
    autor: "Adam Mickiewicz",
    gatunek: "epos",
    rok_wydania: 2004,
    cena: 13.86
  },
  {
    id_ksiazki: 2,
    tytul: "Potop",
    autor: "Henryk Sienkiewicz",
    gatunek: "powieść historyczna",
    rok_wydania: 2007,
    cena: 45.85
  },
  {
    id_ksiazki: 3,
    tytul: "Romeo i Julia",
    autor: "William Szekspir",
    gatunek: "tragedia",
    rok_wydania: 2010,
    cena: 78.72
  },
  {
    id_ksiazki: 4,
    tytul: "Skąpiec",
    autor: "Molier",
    gatunek: "komedia",
    rok_wydania: 1998,
    cena: 34.73
  },
  {
    id_ksiazki: 5,
    tytul: "Kordian",
    autor: "Juliusz Słowacki",
    gatunek: "epos",
    rok_wydania: 2005,
    cena: 49.79
  },
  {
    id_ksiazki: 6,
    tytul: "Inny świat",
    autor: "Gustav Herling-Grudziński",
    gatunek: "powieść",
    rok_wydania: 2007,
    cena: 35.17
  },
  {
    id_ksiazki: 7,
    tytul: "Dżuma",
    autor: "Albert Camus",
    gatunek: "powieść",
    rok_wydania: 2004,
    cena: 49.76
  },
  {
    id_ksiazki: 8,
    tytul: "Proces",
    autor: "Franz Kafka",
    gatunek: "powieść",
    rok_wydania: 2012,
    cena: 36.94
  },
  {
    id_ksiazki: 9,
    tytul: "Kod Leonarda da Vinci",
    autor: "Dan Brown",
    gatunek: "powieść",
    rok_wydania: 2014,
    cena: 64.26
  },
  {
    id_ksiazki: 10,
    tytul: "Hobbit",
    autor: "J.R.R. Tolkien",
    gatunek: "fantastyka",
    rok_wydania: 2013,
    cena: 64.18
  },
  {
    id_ksiazki: 11,
    tytul: "Ania z Zielonego Wzgórza",
    autor: "Lucy Maud Montgomery",
    gatunek: "powieść",
    rok_wydania: 2008,
    cena: 20.7
  },
  {
    id_ksiazki: 12,
    tytul: "Lew, czarownica i stara szafa",
    autor: "Clive Staples Lewis",
    gatunek: "fantastyka",
    rok_wydania: 2006,
    cena: 35.41
  },
  {
    id_ksiazki: 13,
    tytul: "Mistrz i Małgorzata",
    autor: "Michaił Bułhakow",
    gatunek: "powieść",
    rok_wydania: 2003,
    cena: 93.3
  },
  {
    id_ksiazki: 14,
    tytul: "Opowieść wigilijna",
    autor: "Charles Dickens",
    gatunek: "powieść",
    rok_wydania: 2007,
    cena: 33.67
  },
  {
    id_ksiazki: 15,
    tytul: "Władca much",
    autor: "William Golding",
    gatunek: "powieść",
    rok_wydania: 2009,
    cena: 35.17
  },
  {
    id_ksiazki: 16,
    tytul: "Trzej muszkieterowie",
    autor: "Aleksander Dumas",
    gatunek: "powieść przygodowa",
    rok_wydania: 2003,
    cena: 49.76
  },
  {
    id_ksiazki: 17,
    tytul: "Moby Dick",
    autor: "Herman Melville",
    gatunek: "powieść przygodowa",
    rok_wydania: 2011,
    cena: 36.94
  },
  {
    id_ksiazki: 18,
    tytul: "Emma",
    autor: "Jane Austen",
    gatunek: "powieść",
    rok_wydania: 2011,
    cena: 64.26
  }
])

*******************************************
ZAPYTANIA:
a) db.zadanie1.find({id_ksiazki: 5})
b) db.zadanie1.find({gatunek: "powieść"})
c) db.zadanie1.find({rok_wydania: 2004})
d) db.zadanie1.find({$or: [{gatunek: 'powieść'}, {gatunek: 'epos'}]})
e) db.zadanie1.find({rok_wydania: 2004}, {tytul: 1, _id: 0})
f) db.zadanie1.find({}, {tytul: 1, autor: 1, _id: 0}).sort({autor: 1})
g) db.zadanie1.find({id_ksiazki: {$gte: 5, $lte: 11}})
h) db.zadanie1.find({tytul: /^P/})
i) db.zadanie1.find({tytul: /ob/})
j) db.zadanie1.find({$and: [{$or: [{gatunek: 'powieść'}, {gatunek: 'epos'}]}, {rok_wydania: 2004}]})
k) db.zadanie1.find().sort({rok_wydania: -1}).limit(3)
l) db.zadanie1.find({cena: {$lte: 30}})
m) db.zadanie1.aggregate([{ $group: { _id: null, sredniaCena: { $avg: '$cena' }}}])


```