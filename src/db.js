const mongoose = require("mongoose")

const mongoDB = ""

async function main(){
    await mongoose.connect(mongoDB)
}
main().then(() => console.log("conectado")).catch(err => console.log(err))

module.exports = mongoose
