const { default: axios } = require('axios');
const { Router } = require('express');
const {Type} = require('../db')

const router = Router()


router.get('/', async (req, res) => {
    try{const infoApitype = await axios.get('https://pokeapi.co/api/v2/type');  // Entra a la API, me trae la info
    const infoType = infoApitype.data.results.map(elem => elem.name); // Mapea y devuelve muchos arreglos
    const createType = infoType.forEach(elem => {  // Una vez mapeado, hace un findOrCreate y me guarda esas ocupaciones en el modelo.
      Type.findOrCreate({    // Si no lo encuentra, lo crea. Si lo encuentra lo deja pasar.
        where: {name : elem}  // Donde el nombre sea este elemento q estoy mapeando.
      })
      });
    const typeFinal = await Type.findAll();
    res.send(typeFinal);}
    catch(error){console.log(error)}
  })


module.exports = router;