const Moto = require('../models/moto.js')

const store = (req, res)=>{
    Moto.create(req.body)
    res.json({status: 'Moto criada'})
}

const index = async (req, res)=>{ 
    const content = await Moto.find().exec()
    res.json(content)
}

const show = async (req, res) => {
    const content = await Moto.findById(req.params.id).exec()
    res.json(content)
}

const update = (req, res) => {
    Moto.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec()
    res.json()
}

const destroy = (req, res) => {
    Moto.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}