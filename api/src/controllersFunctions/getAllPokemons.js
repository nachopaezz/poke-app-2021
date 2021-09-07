const getApiInfo = require('./getApiInfo');
const getDbInfo = require('./getDbInfo');

// Función que concatena toda la información de API + DB

const getAllPokemons = async () => {
    const apiInfo = getApiInfo();
    const dbInfo = getDbInfo();
    const infoTotal = dbInfo.concat(apiInfo);

    return infoTotal;
}

module.exports = { getAllPokemons };
