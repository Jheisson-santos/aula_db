const axios = require('axios')

const cep_endereco = (req, res, next)=>{
    req.body.cep = req.body.cep.replaceAll(".", "").replaceAll("-", "")
if(req.body.cep != undefined && req.body.cep.length == 8 && !isNaN(Number(req.body.cep))){
    axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then((resposta)=>{
        
        req.body.endereco = resposta.data

        const { bairro, logradouro, estado, UF, localidade } = resposta.data
        req.body.endereco = { bairro, logradouro, estado, UF, localidade }
        delete req.body.cep
        next()
    })
} else {res.status(400).json()}}
module.exports = cep_endereco
