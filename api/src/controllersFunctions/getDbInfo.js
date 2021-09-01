const { Pokemon, Type } = require('../db')

const getApiInfo = async () => {
    return await Pokemon.findAll({includes: Type})
}

model.exports = getApiInfo;