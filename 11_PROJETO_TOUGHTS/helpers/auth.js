// Função checkAuth middleware de verificação de autenticação, caso o usuário não esteja logado ele é barrado
module.exports.checkAuth = function(req, res, next) {
    const userId = req.session.userId

    if(!userId) {
        res.redirect('/login')
    }

    next()
}