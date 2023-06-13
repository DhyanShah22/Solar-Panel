const express = require('express') 
const {
    getallSolar,
    getsingleSolar,
    addSolar,
    updateSolar,
    deleteSolar
} = require('../Controllers/solarControllers')

const router = express.Router()

router.get('/', getallSolar)

router.get('/:id', getsingleSolar)

router.post('/', addSolar)

router.patch('/:id', updateSolar)

router.delete('/:id', deleteSolar)

module.exports = router