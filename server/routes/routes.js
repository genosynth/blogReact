const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require("../models/signUpModels")
const jwt = require("jsonwebtoken")
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
        //console.log(data)
    })
    .catch (error => {
        response.json(error)
        //console.log(error)
    })
})

router.post('/login', async(request, response) => {
    //response.send('send')
   const user = await signUpTemplateCopy.findOne({
       username: "genoj",//request.body.username, 
       password: "gen" //request.body.password
    })

    if(user){

        const token = jwt.sign({
            username:user.username,
            email:user.email
        }, 'secretqwerty')
        console.log(user)
        return response.json({status: 'ok', user:token})
    } else {return response.json({status:"error", user:false})}

})

module.exports = router