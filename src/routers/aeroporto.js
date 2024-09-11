const express = require('express')
const router = express.Router()
const aeroporto = require('../controllers/aeroporto.js')
const cep = require('../middlewares/cep.js')

router.post('/',cep, aeroporto.store)
router.get('/', aeroporto.index)
router.get('/:id', aeroporto.show)
router.put('/:id',cep, aeroporto.update)
router.delete('/:id', aeroporto.destroy)

module.exports = router