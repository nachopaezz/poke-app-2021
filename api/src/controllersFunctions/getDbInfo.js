const { Pokemon, Type } = require('../db')

const getApiInfo = async () => {
    const pokemonDb = await Pokemon.findAll({include: Type})
    try{
        return pokemonDb
    }catch(err){
        console.log(err)
    }

}

// const getApiInfo = async () => {
//     return await Pokemon.findAll({includes: Type})
// }

module.exports = getApiInfo;