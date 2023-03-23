const mongoose = require('mongoose')

let conectar = async () => await mongoose.connect('mongodb+srv://romi:romi@cluster0.2vt47.mongodb.net/the_fork?retryWrites=true&w=majority', ()=>{
console.log('coectado a mongo')
})

conectar()

module.exports = {
    conectar
}