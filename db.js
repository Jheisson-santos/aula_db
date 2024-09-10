const mongoose = require("mongoose")

const mongoDB = "mongodb+srv://Jheisson_Santos:JSON_EU@lionscurso.6svtk.mongodb.net/aluguel"

async function main(){
    await mongoose.connect(mongoDB)
}
main().then(() => console.log("conectado")).catch(err => console.log(err))

module.exports = mongoose