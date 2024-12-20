const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pages = req.body.pages

    const query = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')`

    conn.query(query, function(err) {
        if(err){
            console.log(err)
            return
        }
    
        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const query = 'SELECT * FROM books'

    conn.query(query, function(err, data) {
        if(err){
            console.log(err)
            return
        }

        const books = data

        res.render('books', {books})
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    conn.query(query, function(err, data) {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book', {book})
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    conn.query(query, function(err, data) {
        if(err){
            console.log(err)
            return
        }

        const book = data[0]

        res.render('editbook', {book})
    })
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