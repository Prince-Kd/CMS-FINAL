const express = require('express');
const mongoose = require('mongoose');
const { Tithe } = require('../models/tithes');
const { Welfare } = require('../models/welfare');
const { auth} = require('../middleware/auth');

const router = express.Router();

mongoose.set('useFindAndModify', false);

router.post('/api/payTithe', (req, res) => {
    try{
        Tithe.findOneAndUpdate({'ID':req.body.ID}, req.body, {new:true}, (err,doc)=>{
            if(err) return res.status(400).send({message: err});
            res.send({
                message: "Paid Successfully!!",
		doc
            })
        })
    }catch(err){
        throw(err);
    }
})

router.post('/api/payWelfare', (req, res) => {
    try{
        Welfare.findOneAndUpdate(req.body.ID, req.body, {new:true}, (err,doc)=>{
            if(err) return res.status(400).send({message: err});
            res.send({
                message: "Paid Successfully!!"
            })
        })
    }catch(err){
        throw(err);
    }
})

router.get('/api/getAllTithe', (req, res) => {
	try{
		Tithe.find({}, (err, doc) => {
			res.status(200).send({message: doc})
		})
	}catch(err){
		throw(err)
	}
})
router.get('/api/getAllWelfare', (req, res) => {
	try{
		Welfare.find({}, (err, doc) => {
			if(err) return res.status(400).send({message: err})
			res.status(200).send({message: doc})
		})
	}catch(err){
		throw(err)
	}
})

router.post('/api/search_tithe', (req,res)=>{
    try{
        
        Tithe.findOne({'ID':req.body.ID},(err,details)=>{
            if(!details) return res.status(400).send({message:'Not found'});
            res.send({message: details})
        })
    }catch(err){
        throw(err);
    }
})

router.post('/api/search_welfare', (req,res)=>{
    try{
        
        Welfare.findOne({'ID':req.body.ID},(err, details)=>{
            if(!details) return res.status(400).send({message:'Not found'});
            res.send({message: details})
        })
    }catch(err){
        throw(err);
    }
})

module.exports = router;