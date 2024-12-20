const mongoose = require('mongoose');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const PrayerSchema = new mongoose.Schema({
  
   name:{ 
    type: String,
    required: true
    },
  time:{
    type:String,
    required:true    
},
    status: { 
    type: String, 
    enum: ['Prayed', 'NotPrayed'], 
    default: 'NotPrayed'
     },
 
});



module.exports=mongoose.model('Prayer',PrayerSchema);