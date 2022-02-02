const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require("../models/signUpModels")
const jwt = require("jsonwebtoken")
const jwt_decode = require("jwt-decode")
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
       username: request.body.username, 
       password: request.body.password
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

router.get('/dashboard', async (req, res) => {
	const token = req.headers['x-axxess-token']
    //console.log(req.headers)
	try {
		const decoded = jwt.verify(token, 'secretqwerty')
		const email = decoded.email
        console.log(email)
		const user = await signUpTemplateCopy.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


module.exports = router