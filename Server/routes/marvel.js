 const express = require('express')
 // const mongoose = require('mongoose')
 const router = express.Router()
 // const {marvelController} = require('../controllers')
 const { getMarvel,
     createMarvel} = require('../controllers/marvel')
  router.get('/', async(req,res)=>{
         const personaje = await getMarvel()
         res.send(personaje)
     })
 router.post('/', async(req,res)=>{
         const newPersonaje = req.body;
         try{
             const newmarvel = await createMarvel(newPersonaje)
             res.status(201)
             res.send(newmarvel)
         } catch(error){
             console.error(error)
         }
     })

 module.exports = router

