const express = require('express')
const instance = require('./connect')
const routes = express()


// Users
routes.post('/', async (req, res) =>{
    const { body } = req
    const obj = {
        to: body.to,
        message: body.message
    }
    try {
        const axios = await instance.post('', obj)
        return res.json(axios.data)
        
    } catch (error) {
        return res.status(400).json(error)
    }

})

module.exports = routes