const { DataTypes } = require('sequelize') // propriedade que dá acesso a todos os tipos de banco de dados

const db = require('../db/conn')

 // define o módulo User para criar a tabela users com os atributos
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, // não aceita campos NULL
    },
    occupation: {
        type: DataTypes.STRING,
        require: true, // não ceita campos NULL ou vazios
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    },
})

module.exports = User