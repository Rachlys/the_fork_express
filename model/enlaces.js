const mongoose = require('mongoose')

const enlacesSchema = new mongoose.Schema(
    { href : String , title : String, target : Boolean},
    { collection : 'enlaces'}
)

const Enlaces = mongoose.model('Enlaces', enlacesSchema)

module.exports = {
    Enlaces
}