const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let Mongo_Url = 'mongodb://localhost/todo-List'

mongoose.connect(Mongo_Url, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log('Conectado ao MongoDB')).catch((err) => console.log(err))
