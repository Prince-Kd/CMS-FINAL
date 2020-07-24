const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config').get(process.env.NODE_ENV);
const SALT_I = 10;

//schema of user details//
const userSchema = mongoose.Schema({
     firstname:{
        type:String,
        maxlength:100
    },
    lastname:{
        type:String,
        maxlength:100
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    username:{
        type:String,
        required:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    role:{
        type: Number,
        default: 0
    },
    token:{
        type:String
    }
})

//method to generate hash for password before saving to database//
userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
        //generating sal to hash password//
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err);

            //generating hash for password//
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next()
    }
})

//creating method to compare existing password in database and password of user//
userSchema.methods.comparePassword = function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch);
    })
}

//creating method to generate token to authenticate user//
userSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(),config.SECRET);

    user.token = token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user)
    })
}

userSchema.methods.getCleanUser = function(user){
    user = this;
    if (!user) return null;
    return{
        username: user.username,
        role: (user) => {
            if(user.role === 1)
                return "Admin";
            else if(user.role === 2)
                return "Data Entry";
            else
                return "Accounts";
            }
        }
}

userSchema.statics.findByToken = function(token,cb){
    var user  = this;

    jwt.verify(token,config.SECRET,function(err,decode){
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user)
        })
    })
}

//creating method to delete token when user is logging out//
userSchema.methods.deleteToken = function(token,cb){
    var user = this;

    user.update({$unset:{token:1}},(err,user)=>{
        if(err) return cb(err);
        cb(null,user)
    })
}


const User = mongoose.model('User',userSchema)

module.exports = { User }