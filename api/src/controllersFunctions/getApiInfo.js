const axios = require('axios');
const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

const getApiInfo = async() => {
    const firstPokemon = await axios.get(POKEMON_URL) // 20 Pokemons
    const secondPokemon = await axios.get(firstPokemon.data.next) // Próximos 20 Pokemons
    const allPokemons = firstPokemon.data.results.concat(secondPokemon.data.results)
    const test = await axios.get(allPokemons[0].url)
    // Devuelve solamente lo que yo necesito desde el back a mi aplicación
    try {
        const result = allPokemons.map(e => axios.get(e.url))
         let pokemons = Promise.all(result)
            .then(e => {
                let pokemon = e.map(e => e.data)
                let resultado = []
                pokemon.map(e => {
                      resultado.push({
                        id: e.id,
                        name : e.name,
                        hp: e.stats[0].base_stat,
                        attack: e.stats[1].base_stat,
                        defense: e.stats[2].base_stat,
                        speed: e.stats[5].base_stat,
                        height: e.height,
                        weight: e.weight,
                        sprite: e.sprites.other.dream_world.front_default,
                        types: e.types.length < 2 ? [{name :e.types[0].type.name}] : [{name :e.types[0].type.name}, {name :e.types[1].type.name}]

                        })
                })
                return resultado;
            })
        return pokemons;
    } catch (err) {
        console.log(err)
    }
}

module.exports = getApiInfo;
