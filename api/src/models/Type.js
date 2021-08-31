const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // Defino el modelo TYPE en otro archivo.
  sequelize.define('type', {
    name:{
        type: DataTypes.STRING,
        unique: true
      }
  });
};
