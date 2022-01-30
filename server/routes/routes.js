const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require("../models/signUpModels")

router.post('/sign', (request, response) => {
    //response.send('send')
    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        password: request.body.password,
        email: request.body.email,
        dob: request.body.dob 

    })

    signedUpUser.save()
    .then (data => {
        response.json(data)
    })
    .catch (error => {
        response.json(error)
    })
})

module.exports = router