const db = require('../db.js')

const Schema = db.Schema

const refrigeranteSchema = new Schema({
    porcentagem_suco:{
        type: String,
        required: true
    },
    kl200ml: {
        type: String,
        required: true
    },
    sabor: {
        type: String,
        required: true
    },
    tamanhoML: {
        type: String,
        required: true
    }
})

const Refrigerante = db.model("refrigerante", refrigeranteSchema)

module.exports = Refrigerante