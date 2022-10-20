const express=require('express')
const fs=require('fs')
const path =require('path')
const app=express()
const port=8000


app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')

app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('index.pug',params)
})
app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params)
})
app.get('/about',(req,res)=>{
    const params={}
    res.status(200).render('about.pug',params)
})

app.post('/contact',(req,res)=>{
    Name=req.body.name
    date=req.body.date
    email=req.body.email
    hobbies=req.body.hobbies
    let outputToWrite= `name:${Name}, D.O.B:${date}, email:${email} ,Hobbies:${hobbies}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'message':'Your form is submitted successfully'}
    res.status(200).render('contact.pug',params)
})


app.listen(port,()=>{
    console.log(`The application start on port ${port}`)
})
