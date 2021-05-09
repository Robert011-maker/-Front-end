const express = require('express');
const request=require('requests');
const app=express();
const hbs=require('hbs');
const path=require('path');
const Port=process.env.PORT || 8000;
const template_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,'../templates/partials');
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
app.use(express.static(path.join(__dirname,'../public')));
console.log('sdjfs');





app.get('/',(req,res)=>{
res.render('index.hbs');
})
app.get('/about',(req,res)=>{
res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render('404error');
})
app.listen(Port);

