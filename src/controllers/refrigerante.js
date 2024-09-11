const Refrigerante = require('../models/refrigerante.js')

const store = (req, res)=>{
    Refrigerante.create(req.body)
    res.json({status: 'Refrigerante criada'})
}

const index = async (req, res)=>{ 
    const content = await Refrigerante.find().exec()
    res.json(content)
}

const show = async (req, res) => {
    const content = await Refrigerante.findById(req.params.id).exec()
    res.json(content)
}

const update = (req, res) => {
    Refrigerante.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec()
    res.json()
}

const destroy = (req, res) => {
    Refrigerante.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}