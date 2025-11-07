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


