const mongoose = require('mongoose');

//schema of member details to be added to database//
const MemberSchema = mongoose.Schema({
    ID:{type:String, required:true, unique:1, maxlength: 5 },
    Surname:{type:String, required:true},
    Othernames:{type:String, required:true},
    DOB:{type:String, default:'N/A'},
    Gender:{type:String, required:true, enum: ["Male","Female"]},
    Postal_address:{type:String, default:'N/A'},
    HouseNumber:{type: String, default: 'N/A'},
    Residence:{type:String, default:'N/A'},
    Hometown:{type:String, required:true},
    Telephone1:{type: String, required: true, minlength:10, maxlength:10},
    Telephone2: {type: String, default:'N/A', maxlength:10},
    Profession: {type:String, default:'N/A'},
    Previous_Congregation: {type:String},
    Former_Church:{type:String},
    Baptized:{type:String, required:true, enum: ["Yes","No"]},
    Communicant: {type:String, required:true, enum: ["Yes","No"]},
    Baptism_Date: {type:String, default:'N/A'},
    Baptism_Place: {type:String, default:'N/A'},
    Baptism_Pastor: {type:String, default:'N/A'},
    Confirmation_Date: {type:String, default:'N/A'},
    Confirmation_Place: {type:String, default:'N/A'},
    Confirmation_Pastor: {type:String, default:'N/A'},
    Marital_Status: {type:String, required:true, enum: ["Married","Single","Widowed"]},
    Marriage_Type: {type:String, default:'N/A'},
    Spouse_Name: {type:String, default:'N/A'},
    Spouse_Church: {type:String, default:'N/A'},
    Father: {type:String, default:'N/A'},
    Mother: {type:String, default:'N/A'},
    children: [{
        name: {type:String},
        dob: {type:String},
        gender:{type:String, enum: ["","Male","Female"]} 
    }],
    Gift: {type:String},
    Next_Of_Kin:[{
        name: {type:String},
        relation: {type:String}
    }]
        
},{timestamps:true})

const Member = mongoose.model('Member',MemberSchema )

module.exports = { Member }