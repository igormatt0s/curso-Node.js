const Task = require('../models/Task')

module.exports = class TaskController {
    // Para invocar os módulos sem intanciar o objeto cria métodos estáticos

    //View para formulário de criação das tarefas
    static createTask(req, res) {
        res.render('tasks/create')
    }
}