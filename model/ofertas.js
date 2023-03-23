const mongoose = require('mongoose')

const ofertasSchema = new mongoose.Schema(
    {  dato : String, imagen : String, nombre : String, descripcion : String, url: String,},
    { collection : 'ofertas' }
)

const Ofertas = mongoose.model('Ofertas', ofertasSchema)

module.exports={
    Ofertas
}