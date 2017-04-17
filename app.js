var express = require('express');
var app = express();
// import path from 'path';
var path = require('path');

app.use(express.static(__dirname+'/public'));

app.use('*', function(req,res) {
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(3001,function () {
    console.log('server started at http://localhost:3001');
});