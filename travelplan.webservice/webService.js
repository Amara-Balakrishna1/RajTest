var async = require('async');
var express = require('express');
var app = express();
var Q = require('q')
var mysql = require('mysql');
var bodyParser = require('body-parser');
var fs = require('fs');
var UsersInfo = require('./mock-data/UsersInfo.json');
var TripsInfo = require('./mock-data/TripsInfo.json');
var DaysInfo = require('./mock-data/DaysInfo.json');

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/getAllUsers', function (req, res) {
    res.send(UsersInfo);
})
app.post('/isUser', function (req, res) {
    console.log('test');
    var obj, valid = false;
    var { firstName, password } = req.body;
    UsersInfo.forEach((d,i) => {
    if (d.firstname === firstName && d.password === password) {
        valid = d.id;
    }
})
res.status(200).send(valid);
})

app.delete('/deleteUser/:id', function (req, res) {
    const { id } = req.params;array=[];
    UsersInfo.forEach((d, i) => {
      if(d.id !== id)
        array.push(UsersInfo[i]);
    });
    UsersInfo = array;
    res.status(200).send(true);
})

app.get('/getUserInfo/userId/:id', function (req, res) {
    const { id } = req.params;
    const index = UsersInfo.map(d => d.id).indexOf(id)
    res.send(UsersInfo[index]);
})

app.post('/addUser', function (req, res) {
    var obj, valid = false;
    var id = UsersInfo.length + 1;
    var { gender, firstname, lastname, dob, marritalStatus, address, gmail, phone, pan, emergencyContact, admin, password } = req.body;
    if (UsersInfo.map(d => d.id).indexOf(id) === -1)
    {
        UsersInfo.push({
            id,
            gender,
            firstname,
            lastname,
            dob,
            marritalStatus,
            address,
            gmail,
            phone,
            pan,
            emergencyContact,
            admin,
            password
        })
        res.status(200).send(true);
    }
    else
    {
        res.status(200).send(false);
    }
})


app.get('/getTripsInfo/userId/:id',function(req,res){
    const usersTripsInfo = TripsInfo.filter(d => d.id === req.params.id)
    res.status(200).send(usersTripsInfo)
})

app.get('/getTripInfo/userId/:userId/tripId/:tripId',function(req,res){
    const { tripId, userId } = req.params;
    const tripInfo = DaysInfo.filter(d => ((d.tripid = tripId) && (d.id === userId)));
    res.status(200).send(tripInfo)
})

app.get('/getDayInfo/userId/:userId/tripId/:tripId/day/:daysPosition',function(req,res){
    const { tripId, userId, daysPosition } = req.params;
    const tripInfo = DaysInfo.filter(d => ((d.tripid = tripId) && (d.id === userId) && (d.daysPosition === parseInt(daysPosition) )));
    res.status(200).send(tripInfo)
})

// app.get('/',function (req,res) {
//     res.writeHead(200,{"Content-Type":"text/html"});
//     fs.createReadStream('./form.html','UTF-8').pipe(res);
// });
app.listen(3000, ()=>{ console.log('Express server is listening on port 3000');})