



require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');

const MongoStore = require('connect-mongo');

const flash = require('connect-flash');

const routes = require('./routes');

const path = require('path');
const helmet = require('helmet');

const csrf = require('csurf');

const { meuMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middlewares');


app.use(helmet());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'oloco asdoosd ereasd()',
    store: MongoStore.create({ mongoUrl:'mongodb+srv://oliverdornellas:34416591@oliverjs.uvoba74.mongodb.net/?retryWrites=true&w=majority'}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());
//passando caminho, views > arquivos que redrizan na tela
app.set('views', path.resolve(__dirname, 'src', 'views'));
//engine utilizada, neste caso, ejs.
app.set('view engine', 'ejs');

app.use(csrf());
//Nossos próprios middlewares
//colocando em uso.
app.use(meuMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


//inicializando aplicação
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})




