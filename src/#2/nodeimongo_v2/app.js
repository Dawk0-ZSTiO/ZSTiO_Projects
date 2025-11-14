const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Połączenie z MongoDB
// const baza = 'mongodb://root:tajnehaslo@127.0.0.1:27017/firma?authSource=admin';
const baza = 'mongodb://127.0.0.1:27017/sklep1';

// Schemat MongoDB
const ksiazkiSchema = new mongoose.Schema({
    id_ksiazki: Number,
    Tytul: String,
    Autor: String,
    Gatunek: String,
    Rok_wydania: Number,
    Cena: Number
});

const ksiazkiModel = mongoose.model('Ksiazki', ksiazkiSchema, 'ksiazki');


//Przekazanie plików z folderu public
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect(baza)
    .then(()=>{
        console.log('Połączono z bazą');
        //trasa główna - zwraca index.html
        app.get('/', async (req, res) => {
            res.sendFile(path.join(__dirname, 'public', 'index.html'))
        });

        //pobranie z bazy
        app.get('/api/ksiazki', async(req,res)=> {
            try{
                const ksiazki = await ksiazkiModel.find({});
                res.json(ksiazki);
            } catch(err) {
                console.error(err);
                res.status(500).json({error: 'Błąd pobierania danych'});
            }
        });
        //uruchomienie serwera
        app.listen(5555, ()=>{
            console.log('Serwer działa na porcie 5555');
        });
    })
    .catch(err => console.error('Błąd połączenia z bazą', err));