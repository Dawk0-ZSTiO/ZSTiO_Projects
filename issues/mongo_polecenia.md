```
show databases

use firma

db.pracownicy.insertOne({id_prac: 10, imie: "Jan", nazwisko:"Kowalski", etat: "prezes", zatrudniony: new Date("2001-01-01"),placa: 5730.00,id_zesp: 10})

db.pracownicy.insertOne({id_prac: 20, 
imie: "Tadeusz", 
nazwisko:"Nowak", 
etat: "dyrektor", 
zatrudniony: new Date("2001-01-01"),
placa: 9730.00,
id_zesp: 10})

db.getCollectionNames() lub show collections

db.pracownicy.insertMany([{id_prac: 30, imie: "Beata", nazwisko: "Tryla", etat:'pracownik', zatrudniony: new Date("2010-03-02"), placa: 2300.00, id_zesp:30}, {id_prac: 40, imie: "Katarzyna", nazwisko: "Czarny", etat: 'pracownik',zatrudniony: new Date("2013-10-22"), placa: 2500.00, id_zesp: 30}])


db.pracownicy.find()

db.pracownicy.find().pretty()

db.pracownicy.find({id_prac: 30})

db.pracownicy.find({imie: 'Beata'})

db.pracownicy.find({ etat: "pracownik", placa: 2300 })

db.pracownicy.find({etat: {$in: ["prezes", "dyrektor"]}})

db.pracownicy.find({etat: {$nin: ["prezes", "dyrektor"]}})

db.pracownicy.find({placa: {$gt: 3000}})

db.pracownicy.find({zatrudniony: {$lt: ISODate("2011-01-01")}})

db.pracownicy.find({placa: {$gt: 3000, $lt: 5000}})

db.pracownicy.find({$or: [{etat: "pracownik"}, {placa: {$gt: 4000}}]})
db.pracownicy.find({$and: [{etat: "pracownik"}, {placa: {$gt: 2400}}]})
db.pracownicy.find({$or: [{etat: "pracownik"}, {etat: "prezes"}]})
db.pracownicy.find({$nor: [{etat: "pracownik"}]})


.sort()
.limit()


db.pracownicy.update({nazwisko: 'Tryla'}, {$set:{etat: 'kierownik'}})


db.pracownicy.deleteMany({})

db.pracownicy.deleteOne({id_prac:20})

db.pracownicy.drop()

db.dropDatabase()


db.pracownicy.insertOne({name: "Jan", age:22})
```