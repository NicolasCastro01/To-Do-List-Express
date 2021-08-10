const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let Mongo_Url = 'mongodb://localhost/todo-List'

mongoose.connect('mongodb+srv://nicolascastro83:9b0siTCUl2ux8G3z@cluster0.uictp.mongodb.net/checklist?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log('Conectado ao MongoDB')).catch((err) => console.log(err))