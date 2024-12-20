const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
}) //nome do banco de dados, nome do usuário, senha do usuário, {...}

try {
    sequelize.authenticate()
    console.log("Conectamos com sucesso com o Sequelize!")
} catch(err) {
    console.log("Não foi possível conectar: ", err)
}

module.exports = sequelize