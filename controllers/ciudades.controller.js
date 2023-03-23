
const { Ciudades } = require('../model/ciudades')
const { conectar } = require('../utils/utils')
conectar()


const getCiudades = async (req, res)=>{
    const buscar = await Ciudades.find()
    res.status(200).json(buscar)
}



module.exports ={
    getCiudades
}