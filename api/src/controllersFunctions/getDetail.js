const {getAllPokemons} = require('./getAllPokemons')


//Esta Funcion Filtra los datos dependiendo de del tipo de info que reecibe de prop
//Con GET_ID filtro por iD y traigo sus datos
//Con GET_NAME filtro por name y traigo sus datos

const getDetail = async (detail, response)=>{
    const pokemonDetails = await getAllPokemons()
    if(detail == "GET_ID"){
        const result = pokemonDetails.find(e => e.id.toString() === response)
        return result;
    }
    if(detail == "GET_NAME"){
        const result = pokemonDetails.find(e => e.name === response)
        return result;
    }

};


module.exports = getDetail;