const axios = require('axios')

const instanceAxios = axios.create({
    baseURL: 'https://integrador.saltzap.com/webhook/85929578-91bb-4003-b3d9-41c586eb6cbe',
    params:{
        api_key: ''
    }
})

module.exports = instanceAxios