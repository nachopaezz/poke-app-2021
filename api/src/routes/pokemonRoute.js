// const { Router } = require('express');
// const router = Router();
// const { getAllPokemons } = require('../controllersFunctions/getAllPokemons');
// const { Pokemon } = require('../db')

// // router.get('/', async (req, res) => {
// //     const name = req.query;
// //     let pokemonsTotal = await getAllPokemons();
// //     if(name) {
// //         let pokemonName = await pokemonsTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase))
// //         pokemonName.length ? res.status(200).send(pokemonName) : res.status(404).send('Pokemon not found');
// //     } else {
// //         res.status(200).send(pokemonsTotal);
// //     }
// // })

// module.exports = router;


const { Router } = require('express');
const { getAllPokemons } = require('../controllersFunctions/getAllPokemons');
const getDetail = require('../controllersFunctions/getDetail');
const createPokemon = require('../controllersFunctions/createPokemon');

//pruebas
const getApiInfo = require('../controllersFunctions/getApiInfo');
const getDbInfo = require('../controllersFunctions/getDbInfo');

const router = Router()


router.get('/', async(req,res,next)=>{
  const {name} = req.query
  const result = await getAllPokemons()
  try{
    if (name) {
      let resultName = await getDetail('GET_NAME', name);
       /* resultName.length	< 0? res.status(200).send(resultName) :res.status(404).json('Pokemon not found') ; */
       if(resultName.length === 0){
         return res.status(404).json('Pokemon not found')
       }
       return res.status(200).json(resultName)
      }
       return res.status(200).json(result)

  }catch(err){
     return next(err)
  }
});


// Me trae los 40 pokemon
router.get('/API', async(req, res, next)=>{
const result = await getApiInfo()
try{
  return res.status(200).json(result)
}catch(err){
  next(err)
}
})

// Si no tengo ningun dato, me trae el arreglo vacio
router.get('/DB', async(req, res, next)=>{
const result = await getDbInfo()
try{
  return res.status(200).json(result)
}catch(err){
  next(err);
}
})

router.get("/:id", async(req, res, next)=>{
    const { id } = req.params
    const result = await getDetail("GET_ID", id)
    try{
        return res.json(result)
    }catch(err){
        next(err);
    }
});



router.post('/',  async (req,res,next) =>{
  const {name, hp, attack, defense, speed, height, weight, sprite, type} = req.body
 try{
   const result = await createPokemon(name, hp, attack, defense, speed, height, weight, sprite, type)
  res.send(result)
 }catch(err){
   next(err)
 }

});


module.exports = router;