const mongoose = require('mongoose')

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zsx8h5v.mongodb.net/`

mongoose.connect(url)
.then(()=>{
    console.log("Conexión a la base de datos exitosa")
})
.catch((error)=>{
    console.error(error)
})

module.exports = mongoose