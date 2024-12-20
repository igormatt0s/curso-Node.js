const inquirer = require("inquirer");
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual é o seu nome? '
    },
    {
        name: 'p2',
        message: 'Qual é a sua idade? '
    },
]).then((answers) => {
    if (!answers.p1 || !answers.p2) {
        throw new Error("O nome e a idade são obrigatórios!")
    }

    console.log(chalk.bgYellow.black(`O nome do usuário é ${answers.p1} e a idade é ${answers.p2}`))

}).catch(err => console.log(err))