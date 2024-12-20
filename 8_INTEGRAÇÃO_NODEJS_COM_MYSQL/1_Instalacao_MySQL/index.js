const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

// cria conexão com o banco de dados nodemysql
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
})

// conecta com o banco de dados
conn.connect(function (err) {
    if(err){
        console.log(err)
    }

    console.log('Conectou ao MySQL com sucesso!')

    app.listen(3000)
})