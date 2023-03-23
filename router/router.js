/* Importamos express para poder usar los routes */
const express = require('express')
const router = express.Router()

const {getCiudades} = require('./../controllers/ciudades.controller')
const {getEnlaces} = require('./../controllers/enlaces.controller')
const {getOfertas} = require('./../controllers/ofertas.controller')
const {getRestaurantes} = require('./../controllers/restaurantes.controller')


router.route('/ciudades')
.get(getCiudades)

router.route('/enlaces')
.get(getEnlaces)

router.route('/ofertas')
.get(getOfertas)

router.route('/restaurantes')
.get(getRestaurantes)

module.exports = router