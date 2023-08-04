const marvelModel = require('../models/personajes')

const getMarvel = async() =>{
    return marvelModel.find({})
}

const createMarvel = async(body) =>{

    const newPersonaje = new marvelModel(body)
    await newPersonaje.save()

    return newPersonaje
}

module.exports = {
    getMarvel,
    createMarvel
}