const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const usersRoutes = require('./Routes/user');
const memberDetailsRoutes = require('./Routes/memberDetails');
const accountsRoutes = require('./Routes/accounts');
const app = express();

var cors = require('cors');
app.use(cors()) 


//connecting the API to monogoose database//
mongoose.connect(config.DATABASE, {useNewUrlParser: true})
.then(() => {console.log("Mongodb connected")})
.catch(err => {console.log(err)});

//specifying ways to pass our data//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static('frontend/build'))


// USER ROUTES //
app.use('/', usersRoutes);

// MEMBER DETAILS ROUTES//
app.use('/', memberDetailsRoutes);

// ACCOUNTS ROUTES//
app.use('/', accountsRoutes);


if(process.env.NODE_ENV === 'production'){
    app.get('/*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
    })
}

//defining the port for the API// 
const port = process.env.PORT || 5000 ;
app.listen(port,()=>{
    console.log(`SERVER RUNNNING`)
})