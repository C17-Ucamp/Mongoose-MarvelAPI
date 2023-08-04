const express = require('express')
const app = express()
const cors = require('cors')
require('./db/mongodb')
const rutaMarvel = require('./routes/index')
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use(rutaMarvel)

app.get('/', (req,res)=>{
    res.send("Servidor vivo")
})


const PORT = 5006

app.listen(PORT, ()=>{
    console.log(`Servidor conectado al puerto ${PORT}`)
})