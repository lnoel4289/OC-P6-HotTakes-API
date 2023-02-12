const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv'); // Module permettant de générer nos propres variables d'environnement via `.env`.
const express = require('express');
const app = express();
const path = require ('path'); // Module apportant des méthodes pour retourner des url

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

dotenv.config();
dbConnect(); // Connexion à la base de données.

//MIDDLEWARE GENERAUX---------------

app.use(express.json()); // Middleware parsant la requête en objet JS

app.use((req, res, next) => { // Définition des autorisations CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);
app.use('/images', express.static(path.join(__dirname, 'images'))); // Génère l'URL de destination pour le stockage du fichier joint par l'utilisateur.

// ---------------------------------

module.exports = app;