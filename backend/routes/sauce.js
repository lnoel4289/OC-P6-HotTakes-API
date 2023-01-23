const express = require('express');
const auth = require('auth');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');

router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/', auth, sauceCtrl.createSauce);