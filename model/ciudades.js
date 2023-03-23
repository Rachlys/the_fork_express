const mongoose = require('mongoose')

const ciudadesSchema = new mongoose.Schema(
    { dato : String, imagen : String, nombre : String, url : String, pais : String},
    { collection : 'ciudades' }
)

const Ciudades = mongoose.model('Ciudades', ciudadesSchema)


module.exports = {
    Ciudades
}