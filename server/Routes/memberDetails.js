const express = require('express');
const { Member } = require('../models/member');
const { Attendance } = require('../models/attendance');
const { Welfare } = require('../models/welfare');
const { Tithe } = require('../models/tithes');
const { auth} = require('../middleware/auth');

const router = express.Router();

//route to add details of new church member//
router.post('/api/add_member', (req,res)=>{
    try{

        const member = new Member(req.body)
        const welfare = new Welfare({
            'ID': req.body.ID,
            'name' : `${req.body.Surname} ${req.body.Othernames}`
        })
        const tithe = new Tithe({
            'ID': req.body.ID,
            'name' : `${req.body.Surname} ${req.body.Othernames}`
        })

    //saving member details in database 
    welfare.save();   
    tithe.save();
    member.save((err,doc)=>{
        if(err) return res.status(400).send({message: err});
        res.status(200).send({message: doc.ID
        })
    })
    }catch(err){
        throw(err);
    }
})

//route to search for existing member by id  //
router.post('/api/search_member', (req,res)=>{
    try{
        
        Member.findOne({'ID':req.body.ID},(err,member)=>{
            if(!member) return res.status(400).send({message:'Member not found'});
            res.send({message: member})
        })
    }catch(err){
        throw(err);
    }
})

//route to view all members
router.get('/api/view_members', (req, res) => {
	try{
		Member.find({}, (err, members) => {
			res.status(200).send({message: members})
		});
	}catch(err){
		throw(err);
	}
})

//route to update or edit details of existing member//
router.post('/api/update_member', (req,res)=>{
    try{
        Member.findOneAndUpdate(req.body.ID,req.body,{new:true},(err,doc)=>{
            if(err) return res.status(400).send({message: "Error, Try Again"});
            res.status(200).send({
                message: "Member Details Updated Successfully!!"
            })
        })
    }catch(err){
        throw(err);
    }

})

//route to delete all details of a member//
router.delete('/api/delete_member', (req,res)=>{
   try{
    Member.findOneAndRemove(req.body.ID,(err,doc)=>{
        if(err) return res.status(400).send({message: "Error, Try Again"});
        res.status(200).send({message: "Member Details Deleted Successfully!!"})
    })
   }catch(err){
       throw(err);
   }
})

router.post('/api/attendance', (req, res) => {
	try{
		const attendance = new Attendance(req.body)
    		attendance.save((err)=>{
        		if(err) return res.status(400).send({message: "Error, Try Again"});
        		res.status(200).send({message: "Attendance Recorded!"})
    		})
    	}catch(err){
        	throw(err);
   	}
})


module.exports = router;