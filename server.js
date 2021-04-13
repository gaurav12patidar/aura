const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('dist/hero-firebase'));
app.get('/*',(req,res)=>
    res.sendFile('index.html',{root:'dist/hero-firebase/'}),
);
app.listen(process.env.PORT || 8080);