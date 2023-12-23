const express = require('express');
//const userdbs = require('./server/model');
const bodyparser = require('body-parser');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
//mongoose.connect('mongodb://localhost:27017')
const connectDB = require('./server/connection');
///const route = require('./server/router');
const app = express();
connectDB();
app.use(bodyparser.urlencoded({extended:true}));
connectDB();
//app.set('views', path.join(__dirname, 'views'));//اولش که سی اس نبود اچ تی ام ال بدون این کار نمیکرد بعد که سی اساس اومد
//خط پایینو نوشتم بعد بالا رو کامنت کردم اوکی شد و نمیدونم چطور بدون اون داره کار میکنه
app.use('/css', express.static(path.resolve(__dirname, "public")))
app.set('view engine', 'ejs');
/*app.get('/',(req,res)=>{
    res.render('index');
});*/
app.get('/add-user',(req,res)=>{
   res.render('add-user');
});
/*app.post('/api/users', (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new userdbs({
        name : req.body.name,
        email : req.body.email,
        gender: req.body.gender,
        status : req.body.status
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

});
//app.get('/api/users', controller.find);
//app.put('/api/users/:id', controller.update);
//app.delete('/api/users/:id', controller.delete);*/
app.use('/', require('./server/router'));
//این روت بالایی که نبود اصن نمیتونستی کاربر اضافه کنی 
//تو چت جی پی تی در مورد این خط بالایی گفته با انتخاب روت پث(/)برای کد بالا،هرچی روت تعریف کرده باشی که در ادامه روت پث بیاداین خط بالا براش لحاظ میشه
/*Applying for All Paths Starting from '/':

By using '/' as the path, you're indicating that the middleware and routes defined in ./server/router should be applied for any path that starts with the root path.
For example, if you have a route defined in the router as /example, it will be accessible at http://localhost:3000/example*/
/*const plainPassword = 'mySecurePassword';

// Generate a salt (a random value)
const saltRounds = 10;

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed Password:', hash);

    // Store the hashed password in your database
    // ...
  }
});*/

app.listen(3000,()=>{console.log('app is running on port3000')});


