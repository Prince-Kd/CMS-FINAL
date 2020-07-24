const mongoose = require('mongoose');


const TitheSchema = mongoose.Schema({
   ID: {type: String, unique:1, maxlength: 5},
   name: {type:String, default: ""},
   January:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   Feburary:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   March:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   April:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   May:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   June:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   July:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   August:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   September:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   October:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   November:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   },
   December:{
      amount: {type:Number, default:0.00},
      status: {type:String, enum:['paid', 'not paid'], default:'not paid'},
      date: {type:String, default: ""}
   }
})


const Tithe = mongoose.model('Tithe',TitheSchema )

module.exports = { Tithe }