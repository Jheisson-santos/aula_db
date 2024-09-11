const express = require('express')
const router = express.Router()
const moto = require('../controllers/moto.js')

router.post('/', moto.store)
router.get('/', moto.index)
router.get('/:id', moto.show)
router.put('/:id', moto.update)
router.delete('/:id', moto.destroy)

module.exports = router