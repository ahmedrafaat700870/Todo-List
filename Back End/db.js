const mongoose = require('mongoose')
const URL = 'mongodb://localhost:27017/TodoList';
mongoose.connect(URL, (err) =>{
    if (err)
    {
        console.log(err)
    } else {
        console.log('Connect to DataBase')
    }
})