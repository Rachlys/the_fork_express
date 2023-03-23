/* Para empezar a hacer las funciones de las peticiones, necesitamos mongoose y el modelo */
const { Restaurantes } = require('./../model/restaurantes')

/* Conectamos con mongoose */
const { conectar } = require('../utils/utils')
conectar()

/* Función de solicitar alumnos usando la función find */
const getRestaurantes = async (req, res)=>{
    const buscar =  await Restaurantes.find()
    res.status(200).json(buscar)
}



module.exports = {
    getRestaurantes
}