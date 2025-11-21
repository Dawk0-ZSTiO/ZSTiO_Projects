const express = require('express');
const mongoose = require('mongoose');
const app = express();
const baza = 'mongodb://127.0.0.1:27017/restaurants';


mongoose.connect(baza)
    .then(() => console.log("Połączono z bazą MongoDB"))
    .catch(err => console.error("Błąd połączenia z bazą:", err));

const restauracjeSchema = new mongoose.Schema({
    name: String,
    city: String,
    cuisine: String,
    rating: Number
});

const restauracjeModel = mongoose.model('Restaurants', restauracjeSchema, 'restaurants');

app.get('/api/restaurants', (req, res) => {
    const { city, cuisine } = req.query;
    let filter = {};

    if (city) {
        filter.city = city;
    }

    if (cuisine) {
        filter.cuisine = cuisine;
    }

    restauracjeModel
        .find(filter)
        .then(dane => {
            res.json(dane);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Błąd podczas pobierania danych' });
        });
});

app.get('/', (req, res) => {
    res.send('<h1>API Restauracje</h1><p>Użyj /api/restaurants</p>');
});

// http://localhost:5555/api/restaurants
// http://localhost:5555/api/restaurants?city=Warsaw
// http://localhost:5555/api/restaurants?cuisine=Italian


app.listen(5555, () => {
    console.log("Serwer działa na porcie 5555");
});

//https://www.canva.com/design/DAG5UCSwGKQ/gP1QRt23NdxFN5-aCBZguw/edit?utm_content=DAG5UCSwGKQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton