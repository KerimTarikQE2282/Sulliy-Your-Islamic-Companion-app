const mongoose = require('mongoose');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const UserAuthSchema = new mongoose.Schema({
  
    email: {
     type: String, 
     unique: true
     },
     password: { 
    type: String,
    required: true
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
    Subscribed: { 
    type: Boolean,
    default:false
     },
   
   
});

UserAuthSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
})

UserAuthSchema.methods.createJWT=function(){
    return jwt.sign({user:{id:this._id,userId:this._id,role:this.role}},'dwnajndlwjandjklnJKBuX9012UDH98WBUCInwqJC',{
        expiresIn:'4d'
    })
};
UserAuthSchema.methods.passwordChecker=async function(suppliedPassword){
    const isMatch=await bcrypt.compare(suppliedPassword,this.password)
    return isMatch;
}

module.exports=mongoose.model('UserAuth',UserAuthSchema);