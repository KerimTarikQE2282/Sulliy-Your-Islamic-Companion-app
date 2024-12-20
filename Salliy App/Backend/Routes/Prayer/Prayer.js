const express=require('express');
const router=express.Router();
const {savePrayer,getPrayer}=require('../../Controllers/PrayerTracker/SavePrayer')
router.route('/').post(savePrayer).get(getPrayer)

module.exports=router
