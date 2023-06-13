const {default: mongoose} = require('mongoose')

const Solar = require('../Models/solarSchema')

const getallSolar = async (req,res) => {
    const solar = await Solar.find({}).sort({createdAt: -1})

    res.status(200).json(solar)
}

const getsingleSolar = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid DB id.'})
    }
    const solar = await Solar.findById(id)
    if(!solar) {
        return res.status(404).json({error: 'Unable to find the detail.'})
    }
    
    res.status(200).json(solar)
}

const addSolar = async (req,res) =>{
    const {Name, NoSP, Type} = req.body
    try{
    const solar = await Solar.create({Name, NoSP, Type})
    res.status(200).json(solar)
    }
    catch(error) {
        return res.status(400).json({error: 'Unable to create a solar detail.'})
    }

}

const updateSolar = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid DB id.'})
    }
    const solar = await Solar.findOneAndUpdate({_id: id})
    if(!solar) {
        return res.status(404).json({error: 'Unable to find the detail.'})
    }
    
    res.status(200).json(solar)
}

const deleteSolar = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Not a valid DB id.'})
    }
    const solar = await Solar.findOneAndDelete({_id: id})
    if(!solar) {
        return res.status(404).json({error: 'Unable to find the detail.'})
    }
    
    res.status(200).json(solar)
}

module.exports = {
    getallSolar,
    getsingleSolar,
    addSolar,
    updateSolar,
    deleteSolar

}