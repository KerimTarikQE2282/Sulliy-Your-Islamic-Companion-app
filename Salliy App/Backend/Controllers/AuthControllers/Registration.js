const StatusCodes=require('http-status-codes')
const UserAuth=require('../../models/Auth/UserAuth')
const UserData=require('../../models/User/User')
const registerUser=async (req,res) => {
    const { username, email, password,role, phoneNumber, profilePicture, address, dateOfBirth, department, dateCreated, lastLogin, status } = req.body;
    const UserExists=await UserAuth.findOne({
        email:email
    })

    if(UserExists){
        throw new Error('user already exists')
    }
    const userAuthd=await UserAuth.create({
        email:email,
        password:password
    });
    const createdUser=await UserData.create({
        username:username,
        email:email,
        role:role,
        phoneNumber:phoneNumber,
        profilePicture:profilePicture,
        address:address,
        dateOfBirth:dateOfBirth,
        department:department,
        dateCreated:dateCreated,
        lastLogin:lastLogin,
        status:status
    })
    res.status(StatusCodes.OK).json({token:userAuthd.createJWT(),user:createdUser.username})


}
module.exports={registerUser};