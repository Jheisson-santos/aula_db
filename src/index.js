const express = require('express')
const app = express()
const port = 3000
const caneta = require('./routers/caneta.js')
const aeroporto = require('./routers/aeroporto.js')
const moto = require('./routers/moto.js')
const refrigerante = require('./routers/refrigerante.js')

app.use(express.json())
app.use('/caneta', caneta)
app.use('/aeroporto', aeroporto)
app.use('/moto', moto)
app.use('/refrigerante', refrigerante)

app.listen(port, () => {
    console.log(`Porta ativa :${port}`)
})

