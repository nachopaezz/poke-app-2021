const { Pokemon, Type } = require("../db");

const createPokemon = async (
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  sprite,
  types
) => {
  try {
    const addpokemon = await Pokemon.create({
      name: name,
      hp: hp || 0,
      attack: attack || 0,
      defense: defense || 0,
      speed: speed || 0,
      height: height || 0,
      weight: weight || 0,
      sprite: sprite || "https://image.flaticon.com/icons/png/512/528/528101.png",
    });
    if (types.length === 1) {
      await addpokemon.addtypes(types[0]);
    } else {
      await addpokemon.addtypes(types[0]);
      await addpokemon.addtypes(types[1]);
    }
    return addpokemon;
  } catch (err) {
    return { result: "Verifica los datos ingresados" };
  }
};

module.exports = createPokemon;
