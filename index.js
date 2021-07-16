const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./models/user');

const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')

//static files
app.use(express.static('./public'));

var connectionUrl = ('mongodb://localhost/contact3');

mongoose.connect(connectionUrl, {useNewUrlParser: true}, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('connected to database...........');
    };
});


app.get('/', (req, res) => {
    res.render('contact');
});



app.post('/sucess', (req, res) => {
    const SaveUser = new UserModel(req.body);
    SaveUser.save(function(err, savedUser){
        if(err){
            console.log(err);
        }else{
            res.render('sucess');
        };
    });
});


app.get('/admin', (req, res) => {
    const SavedUser = new UserModel();
    SavedUser.firstname = req.body.firstname;
    SavedUser.lastname = req.body.lastname;
    SavedUser.email = req.body.email;
    SavedUser.url = req.body.url;
    SavedUser.message = req.body.message;

    res.render('admin', {
        title:'UserModel',
        SavedUser: SavedUser
    });
});

app.listen(3000);
console.log('you are on port 3000');
