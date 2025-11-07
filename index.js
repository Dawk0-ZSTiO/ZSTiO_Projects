const express = require('express');
const mongoose = require('mongoose');
const app = express();

const baza = 'mongodb://127.0.0.1:27017/sklep1'
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

const ksiazkiModel = mongoose.model('ksiazki', ksiazkiSchema, '')