const {Ofertas} = require('./../model/ofertas')
const {conectar} = require('../utils/utils')

conectar()

const getOfertas = async (req, res) =>{
    let buscar = await Ofertas.find()
    res.status(200).json(buscar)
}

module.exports={
    getOfertas
}