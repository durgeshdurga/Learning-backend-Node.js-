
const express= require('express');
const app = express();
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render("index");
})
// app.get('/profile/durgesh',(req,res)=>{
//     res.send("Profile chal rha hai")
// })
/**
 * now suppose main kisi k name se route search krna chahta hu toh usi k name
 * se route bhi create krna padega.Example: 
 * Amit k search krunga toh '/profile/amit' aise create krna padega
 * durgesh ka karunga toh '/profile/durgesh'
 * Isse hame bahut sara routes create krna pad jayega
 * jo achha coding practice nai hai
 * Note:- To overcome from this we have to use colon(:) as shown below
 * ab colon k baad dynamic bn jayega jo kaise bhi usse krne pe same result 
 * dega
 * 
 */
// colon(:) lagane se us part ko dynamic bana skte hain
// app.get('/profile/:username',(req,res)=>{
//     res.send("Profile chal rha hai")
// })

app.get('/profile/:username',(req,res)=>{
    res.send(`Welcome ${req.params.username}`);
})

app.listen(3000,()=>{
    console.log("It's running!!");
    
})
