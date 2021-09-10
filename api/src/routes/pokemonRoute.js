const { Router } = require("express");
const { getAllPokemons } = require("../controllersFunctions/getAllPokemons");
const getDetail = require("../controllersFunctions/getDetail");
const createPokemon = require("../controllersFunctions/createPokemon");


const getApiInfo = require("../controllersFunctions/getApiInfo");
const getDbInfo = require("../controllersFunctions/getDbInfo");

const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  const result = await getAllPokemons();
  try {
    if (name) {
      let resultName = await getDetail("GET_NAME", name);
      if (resultName.length === 0) {
        return res.status(404).json("Pokemon not found");
      }
      return res.status(200).json(resultName);
    }
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});

// http://localhost:3001/pokemonRoute?name=bulbasaur -----> Detalle de Bulbasaur


// Me trae los 40 pokemon
router.get("/API", async (req, res, next) => {
  const result = await getApiInfo();
  try {
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

// Si no tengo ningun dato, me trae el arreglo vacio
router.get("/DB", async (req, res, next) => {
  const result = await getDbInfo();
  try {
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});


router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const pokemonsRuta = await getAllPokemons();
    if (id) {
      let pokemonId = pokemonsRuta.filter((elem) => elem["id"] == id); // Parsear y probar json en send
      pokemonId.length
        ? res.status(200).json(pokemonId)
        : res.status(404).send("El Pokemon solicitado no  fue encontrado");
    }
  } catch (error) {
    console.log(error);
  }
});

// http://localhost:3001/pokemonRoute/1/  --->  Muestra Pokemon
// http://localhost:3001/pokemonRoute/40/  --->  Muestra Pokemon
// http://localhost:3001/pokemonRoute/41/  ---> El Pokemon solicitado no fue encontrado


router.post("/", async (req, res, next) => {
  const {                                    // El objeto con todo lo que me va llegar de personaje.
    name,hp,attack,defense, speed,height,weight,sprite,types,
  } = req.body;
  try {
    const result = await createPokemon(      // Creo el personaje.
      name, hp, attack, defense, speed, height, weight, sprite, types
    );
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
