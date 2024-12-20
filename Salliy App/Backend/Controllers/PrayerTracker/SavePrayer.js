const StatusCodes=require('http-status-codes')
const { UnauthenticatedError, BadRequestError } = require('../../errors');
const Prayer=require('../../models/Prayer/Prayer')
const savePrayer=async (req,res) => {
    const {name,time } = req.body;
    console.log(name,time)
    //TODO : also include user data from authenticated then 
    const alreadyPrayed=await Prayer.findOne({name:name,time:time})
    if(alreadyPrayed){
        const prayerTrackerd=await Prayer.create({
            name:name,
            time:time,
            status:"NotPrayed"
        })
    }
    else{
        const prayerTrackerd=await Prayer.create({
            name:name,
            time:time,
            status:"Prayed"
        })
    }
   

    res.status(StatusCodes.OK);


}
const getPrayer=async (req,res) => {
    const prayerTrackerd=await Prayer.find()
    console.log("🚀 ==> file: SavePrayer.js:31 ==> getPrayer ==> prayerTrackerd:", prayerTrackerd);

    //TODO : also include user data from authenticated
    res.status(StatusCodes.OK).json(prayerTrackerd);
}
module.exports={savePrayer,getPrayer}