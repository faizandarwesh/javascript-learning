require('dotenv').config();
const express = require('express');

const app = express();

app.get('/',(req,res)=> {
    res.send('Hello from chai aur code');
});

app.get('/home',(req,res)=>{
    res.send('Hello from home page');
});

app.listen(process.env.PORT,()=>{
    console.log(`app is listening to port : ${process.env.PORT}`);
});