```
Mongosh:
db.pracownicy.updateOne({},{$set:{etat:"pracownik"}}) - zmiana zawartości 
db.pracownicy.updateOne({placa: {$gt: 5000, $lt: 6000}},{$set:{etat:"prezes"}}) - przedział wartości
db.pracownicy.deleteOne({id_prac: 20})

show collections - pokazuje kolekcje
db.pracownicy.renameCollection("klienci",true) - zmiana nazwy kolekcji
```