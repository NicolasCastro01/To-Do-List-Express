const express = require('express');
const path = require('path');


const checkListRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')

const rootRouter = require('./src/routes/index')
const methodOverride = require('method-override')
require('./config/database')


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));
const server = require('./server')
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname,'src/views'));
app.set('view engine', 'ejs')

app.use('/',rootRouter)
app.use('/checklists',checkListRouter)
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks', taskRouter.simple)

module.exports = app;