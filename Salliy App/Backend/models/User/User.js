const mongoose = require('mongoose');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  
    username: {
     type: String, 
     required: [true,"please provide user name"],
     unique: true
     },
    email: { 
    type: String, 
    required: true, 
    unique: true 
    },
    role: { 
        type: String,
        enum: ['admin', 'Lvl1Employee',"user"], 
        default: 'user'
         },
    phoneNumber: { 
    type: String
    },
    profilePicture: { 
    type: String
    },
    address: { 
    type: String
    },
    dateOfBirth: { 
    type: Date
    },
    department: { 
    type: String
    },
    dateCreated: { 
    type: Date,
    default: Date.now 
    },
    lastLogin: { 
    type: Date
     },
    status: { 
    type: String, 
    enum: ['active', 'inactive', 'suspended'], 
    default: 'active'
     },
 
});



module.exports=mongoose.model('User',userSchema);