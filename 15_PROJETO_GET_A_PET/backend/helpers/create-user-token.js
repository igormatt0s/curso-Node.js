const jwt = require('jsonwebtoken')

const createUserToken = async (user, req, res) => {
    
    // create token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, "nossosecret")
    // o segundo parametro deve ser uma string forte de token

    // return token
    res.status(200).json({
        message: 'Você está autenticado',
        token: token,
        userId: user._id,
    })
}

module.exports = createUserToken