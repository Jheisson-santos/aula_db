const Caneta = require('../models/caneta')

const store = (req, res)=>{
    Caneta.create(req.body)
    res.json({status: 'Caneta criada'})
}

const index = async (req, res)=>{ 
    const content = await Caneta.find().exec()
    res.json(content)
}

const show = async (req, res) => {
    const content = await Caneta.findById(req.params.id).exec()
    res.json(content)
}

const update = (req, res) => {
    Caneta.findByIdAndUpdate(req.params.id, req.body, {new: true}).exec()
    res.json()
}

const destroy = (req, res) => {
    Caneta.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}