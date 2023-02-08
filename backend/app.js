const dotenv = require('dotenv'); // Module permettant de générer nos propres variables d'environnement via `.env`.
const express = require('express');
const app = express();
const path = require ('path'); // Module apportant des méthodes pour gérer des url

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

dotenv.config();

//MIDDLEWARE GENERAUX---------------

app.use(express.json());

app.use((req, res, next) => { // Définition des autorisations CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });
  
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images'))); // Génère l'URL pour le stockage du fichier joint par l'utilisateur.

// ---------------------------------

module.exports = app;