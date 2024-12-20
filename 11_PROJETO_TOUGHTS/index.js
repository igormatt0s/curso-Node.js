const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

// Models
const Tought = require('./models/Tought')
const User = require('./models/User')

// Import Routes
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')

// Import Controller
const ToughtController = require('./controllers/ToughtController')

// receber resposta do body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

// template engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// public path
app.use(express.static('public'))

// session middleware - onde as sessions serão salvas
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000, // equivale a um dia
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    }),
)

// flash messages - mensagens de espaço do sistema inseridas com o tempo
app.use(flash())

// set session to res - salva sessão na resposta
app.use((req, res, next) => {
    // confere se o usuário tem a sessão
    if(req.session.userId) {
        // garante que o id do usuário estará em todas as requisições de respostas da sessão
        res.locals.session = req.session
    }

    next()
})

// Routes
app.use('/toughts', toughtsRoutes)
app.use('/', authRoutes)

app.get('/', ToughtController.showToughts)

conn
//.sync({force: true})
.sync()
.then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))