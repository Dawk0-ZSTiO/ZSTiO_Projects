```
EKSPORT: mongodump -d ksiazki -o "C:\Users\Dawid Andryszczyk\Desktop\mongo"

IMPORT: mongorestore -d KSIAZKI2 "C:\Users\Dawid Andryszczyk\Desktop\mongo\ksiazki"


1) db.ksiazki.updateOne({id_ksiazki: 4}, {$set: {rok_wydania: 2000}})
2) db.ksiazki.updateMany({id_ksiazki: {$in: [9, 15]}}, {$set: {gatunek: 'literatura współczesna'}})
3) db.ksiazki.updateMany({gatunek: 'powieść'}, {$mul: {cena: 1.10}})
4) db.ksiazki.updateMany({rok_wydania: 2003}, {$mul: {cena: 0.85}})
5) db.ksiazki.deleteOne({id_ksiazki: 1})
6) db.ksiazki.deleteMany({id_ksiazki: {$mod: [2, 0]}})
7) db.ksiazki.findOneAndDelete({}, { sort: { cena: -1 } });
8) db.ksiazki.renameCollection('books')
9) db.books.drop()
10) db.dropDatabase()
```