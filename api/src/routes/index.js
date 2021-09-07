const { Router } = require('express');
const { Pokemon, Type } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemon = require('./pokemonRoute');
const type = require('./typeRoute');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemonRoute', pokemon);
router.use('/typeRoute', type);

module.exports = router;
