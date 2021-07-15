const express = require('express');
var mongoose = require('mongoose');
const articles = require('./models/messages');


mongoose.connect('mongodb://localhost/contacts');
let db = mongoose.connection;

let Contacts = require('./models/messages')

var app = express();

db.once('open', function(){
    console.log('Connected to db');
});
db.on('error', function(err){
    console.log(err);
});

app.set('view engine', 'ejs');

// parser middleware // parse json
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//static files
app.use(express.static('./public'));

app.get('/', function(req, res){
    Contacts.find({}, function(err, contacts){
        if(err){
            console.log(err);
        } else{
            res.render('contact', {
                title:'Contacts',
                contacts:contacts
                
            });
        };
    });
});

app.post('/contact/success', function(req, res){
    let contacts = new Contacts();
    contacts.name = req.body.name;
    contacts.email = req.body.email;
    contacts.phone = req.body.phone;
    contacts.website = req.body.website;
    contacts.body = req.body.body;

    Contacts.save(function(err){
        if(err){
            console.log(err);
            return;
        }else{
            res.redirect('sucess')
        }
    })
});


// listen to port
app.listen(3000);
console.log('you are on port 3000');