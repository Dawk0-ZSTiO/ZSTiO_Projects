const express = require('express');
const mongoose = require('mongoose');
const app = express();

const baza = 'mongodb://127.0.0.1:27017/sklep1';
//const baza  = 'nazwa_użytkownika:haslo@mongodb://127.0.0.1:27017/sklep1?authSource=admin' <------------- Gdyby było zabezpieczone

mongoose.connect(baza);

const ksiazkiSchema = mongoose.Schema({

    id_ksiazki: Number,
    Tytul: String,
    Autor: String,
    Gatunek: String,
    Rok_wydania: Number,
    Cena: Number
})

const ksiazkiModel = mongoose.model('ksiazki', ksiazkiSchema, 'ksiazki')

app.get('/', (req, res) => {
    ksiazkiModel.find({}).then(function(ksiazki){
        // res.json(ksiazki);


        //WSTAWIENIE DO LOCALHOSTA HTML!!!!!

        let html = '<h1>Lista książek </h1><ul>';
        ksiazki.forEach(k=>{
            html +=  `<li><strong>${k.Tytul}</strong> - Autor: ${k.Autor}</li>`;
        });
        html += '</ul>';
        res.send(html);





    }).catch(function (err){
        console.log(err);
        res.status(500).send({error: "Nie pobrano zawartości, błąd serwera"});
    });
});

app.listen(5555, () => {
    console.log("Serwer został uruchomiony na porcie 5555");
});