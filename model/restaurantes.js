const mongoose = require('mongoose')

const restaurantesSchema = new mongoose.Schema(
    { dato : String, imagen : String, nombre : String, url : String, tipos : Array, nota : Number, pagos: Object, descripcion: String, ciudad: String, oferta: Number},
    { collection : 'restaurantes'}
)

const Restaurantes = mongoose.model('Restaurantes', restaurantesSchema)

module.exports = {
    Restaurantes
}