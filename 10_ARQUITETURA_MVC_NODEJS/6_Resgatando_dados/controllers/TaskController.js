const Task = require('../models/Task')

module.exports = class TaskController {
    // Para invocar os módulos sem intanciar o objeto cria métodos estáticos

    //View para formulário de criação das tarefas
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        // Validações
        // Processar dados

        await Task.create(task)

        res.redirect('/tasks')
    }

    //View para visualizar todas as tarefas
    static async showTasks(req, res) {
        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})
    }
}