const express = require('express');
const { User } = require('../models/user');
const { Report } = require('../models/reports');
const { Attendance } = require('../models/attendance');
const { auth} = require('../middleware/auth');
const path = require('path');

const router = express.Router();


//route to register a user to the system//
router.post('/api/register', async (req,res)=>{
    try{
        //checking to see if user already exists in database by searching for email//
        const user = await User.findOne({'email':req.body.email});
         if(user) return res.status(400).send({message: 'user already exists'})

         //checking if username has already been taken//
        const userName = await User.findOne({'username':req.body.username});
         if(userName) return res.status(400).send({message: 'username already taken'})

        const   NewUser = new User(req.body);

        //saving new user details in database//
        NewUser.save((err,doc)=>{
            if(err) return res.status(400).send({message: "Registeration Unsucessful!!"});
            res.status(200).send({message: "Registered Successfully"})
        })
    }catch(err){
        throw(err);
    }
})

//route to login a user into the system//
router.post('/api/login', async (req,res)=>{
    try{
        //checking to see if username exists in database//
        User.findOne({'username':req.body.username}, (err, user) => {
            if(!user) return res.status(400).send({message:'Auth failed, username not found'})

            //implementing method to compare user password with the one in the database//
            user.comparePassword(req.body.password,(err,isMatch)=>{
                if(!isMatch){

                    return res.status(400).send({message: "Wrong Password"});
                }
                //implementing method to generate token to authenticate user//
                user.generateToken((err,user)=>{
                    if(err) return res.status(400).send({message: "Error"})
                    var userData = {
                        name: `${user.firstname} ${user.lastname}`,
                        username: user.username,
                        role: user.role
                    }
                    res.cookie('auth', user.token).send({message: userData});
                })
            })
        })
        
    }catch(err){
        throw(err);
    }
})



//route to logout user//
router.get('/api/logout', auth, async (req,res)=>{
    try{
        req.user.deleteToken(req.token,(err,user)=>{
            if(err) return res.status(400).send({message: "Error, Try Again"});
            res.send({message: "Logged out"})
        })
    }catch(err){
        throw(err);
    }

})

router.post('/api/SaveReport', async (req,res)=>{
    try{
        const NewReport = new Report(req.body);

        //saving new reports in database//
        NewReport.save((err)=>{
            if(err) return res.status(400).send({message: "Error, Try Again"});
            res.status(200).send({message: "Report Saved"})
        })
    }catch(err){
        throw(err);
    }
})

router.get('/api/getReports', async (req,res)=>{
    try{
		Report.find({}, (err, reports) => {
            	res.status(200).send({message: reports})
        })
    }catch(err){
        throw(err);
    }

})

router.get('/api/getAttendance', async (req,res)=>{
    try{
		Attendance.find({}, (err, attendance) => {
            	res.status(200).send({message: attendance})
        })
    }catch(err){
        throw(err);
    }

})

module.exports = router;

