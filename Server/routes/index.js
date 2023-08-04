// const express = require('express')
// const router = express.Router()

// const marvelRouter = require('./marvel')

// router.use('/marvel', marvelRouter)


// module.exports = router

const express = require('express');
const router = express.Router();

const marvelRouter = require('./marvel')

router.use('/marvel', marvelRouter)

module.exports = router