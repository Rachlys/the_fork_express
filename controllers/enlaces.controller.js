/* Para empezar a hacer las funciones de las peticiones, necesitamos mongoose y el modelo */
const { Enlaces } = require('./../model/enlaces')

/* Conectamos con mongoose */
const { conectar } = require('../utils/utils')
conectar()

/* Función de solicitar alumnos usando la función find */
const getEnlaces = async (req, res)=>{
    const buscar =  await Enlaces.find()
    res.status(200).json(buscar)
}



module.exports = {
    getEnlaces
}