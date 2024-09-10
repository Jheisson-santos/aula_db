const db = require('./db.js')

const Schema = db.Schema

const livroSchema = new Schema({
    nome:{
        type: String,
        required: [true,"iNFORME UM NOME"]
    },
    quantidadepg: {
        type: Number
    }
})

const Livro = db.model("Abacaxi", livroSchema)

Livro.create({
    nome: "1984",
    quantidadepg: 450
})