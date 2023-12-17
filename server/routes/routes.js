const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require("../models/signUpModels")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");

router.post('/sign', async(request, response) => {
    //response.send('send')
    let hashedPassword = await bcrypt.hash(request.body.password, 8);
    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        password: hashedPassword,
        email: request.body.email,
        dob: request.body.dob 

    })

    signedUpUser.save()
    .then (data => {
        console.log(data)
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
       //password: request.body.password {THIS IS COMMENTED AS PASSWORD IS BEING CHECKED BY HASHING AFTER THIS LINE}
    })

    if(user && await bcrypt.compare(request.body.password, user.password)){

        const token = jwt.sign({
            username:user.username,
            email:user.email
        }, 'secretqwerty')
        console.log(user)
        return response.json({status: 'ok', user:token})
    } else {return response.json({status:"error", user:false})}

})

router.post('/article', async (req, res)=> { // this is used to post articles in the database of the user signed in
  //response.send('send')
  const user = await signUpTemplateCopy.findOne({
    username: req.body.username, 
    
 })

 //console.log(user.articles)

 if(user){
    user.articles.push({name:req.body.articleName, content:req.body.articleContent, date: req.body.date})
    user.save()
    return console.log(user.articles)
 } else {return res.json({status:"error", user:false})}
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
    const users = await signUpTemplateCopy.find().select("username").select("articles")
    //console.log(users)
    if (users){
        return res.json({status:"gotem", users:users})
    } else { return res.json({status:"error getting articles", users:false})}
}) 

router.post('/deleteArticle', async (req, res)=>{

    const user = await signUpTemplateCopy.findOne({ username: req.body.username })
    //console.log(user.articles)

    for (let i=0; i<user.articles.length; i++){
        if (user.articles[i].id==req.body.article._id){
            user.articles.splice(i,1)
        }
    }
  
    user.save()
    
    return res.json({ status: 'deleted', article: req.body.article._id })

})

router.post('/editArticle', async (req, res)=> { // this is used to post articles in the database of the user signed in
    //response.send('send')
    const user = await signUpTemplateCopy.findOne({
      username: req.body.username, 
      
   })  
     
   if(user){
      user.articles.forEach((article)=>{
          if(article._id==req.body.id){
              article.name=req.body.articleName
              article.content=req.body.articleContent
              console.log(article)
              user.save()
          }
          
      })
      
      return console.log(user.articles)
   } else {return res.json({status:"error", user:false})}
  })


module.exports = router