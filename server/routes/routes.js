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
        //console.log(email)
		const user = await signUpTemplateCopy.findOne({ email: email })

		return res.json({ status: 'okay', user: user })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

router.get('/getArticles', async (req, res)=> {
    const user = await signUpTemplateCopy.findOne({
        username: req.body.username
    })
    console.log("bab")
    if (user){
        return res.json({status:"gotem", user:true})
    } else { return res.json({status:"error getting articles", user:false})}
})

router.post('/article', async (req, res)=> { // this is used to post articles in the database of the user signed in
  //response.send('send')
  const user = await signUpTemplateCopy.findOne({
    username: req.body.username, 
    
 })

 //console.log(user.articles)

 if(user){
    user.articles.push({name:req.body.articleName, content:req.body.articleContent})
    user.save()
    return console.log(user.articles)
 } else {return res.json({status:"error", user:false})}
})


module.exports = router