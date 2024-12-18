import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeft } from 'lucide-react-native';
import { ChevronRight } from 'lucide-react-native';
var hijri = require('hijri');
import Page from './SubFunctions/MonthComponentGenerator'
const Hijri = () => {
    const [months,setMonths]=React.useState(0)
    const [myDate,setMyDate]=React.useState('')

    const DatesofTheWeek = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    const MonthsOfTheYear = [
      "محرم",     // Muharram
      "صفر",       // Safar
      "ربيع الأول", // Rabi' al-Awwal
      "ربيع الآخر", // Rabi' al-Thani
      "جمادى الأولى", // Jumada al-Awwal
      "جمادى الآخرة", // Jumada al-Thani
      "رجب",       // Rajab
      "شعبان",     // Sha'ban
      "رمضان",     // Ramadan
      "شوّال",     // Shawwal
      "ذو القعدة", // Dhu al-Qi'dah
      "ذو الحجة",  // Dhu al-Hijjah
      "المحرم",     // 13th month (in leap years)
  ];

    const HijriDate=HijriDateConverter()
    console.log("🚀 ==> file: Hijri.jsx:29 ==> Hijri ==> HijriDate:", HijriDate);

    const day=HijriDate.day
    const month=HijriDate.month
    const year=HijriDate.year

    const DaysComp=DatesofTheWeek.map(element=>{
        return(
            <View className='w-[11.4vw] h-[6.4vh]  border-r-slate-200'>
         <Text className=' font-extralight  mt-5 m-1'>{element}</Text>   
        </View>
        )
      })
     const ofsett=DateStructureMaker()

    const viewComponents = Page(month,day,ofsett);

      React.useEffect(()=>{
        setMonths(month-1)
        setMyDate(`${MonthsOfTheYear[month-1]} , ${year}`)

      },[])
    return (
     <View className='h-[40vh] bg-white'>
     <View className="h-[8vh] border-b border-b-slate-300 bg-[#0d322c] py-5 ">
        <Text className='text-center text-4xl font-bold mr-5 text-white'>{myDate}</Text>
        </View>
      <View className='h-[32vh] flex flex-row'>
        <TouchableOpacity className=' w-[10vw] flex justify-center' onPress={()=>months!==0 ?setMonths(months-1): ''}>
            <ChevronLeft color={"black"}/>
        </TouchableOpacity>
        <View className=' w-[80vw] flex flex-col'>
        <View className='flex flex-row'>
        {DaysComp}
        </View>
        <View className='flex flex-row flex-wrap'>
        
        {(viewComponents.Calendar_pages)[months]}
        </View>
        </View>
        <TouchableOpacity className=' w-[10vw] flex justify-center' onPress={()=>months!==11 ?setMonths(months+1): ''}>
            <ChevronRight color={"black"}/>
        </TouchableOpacity >

      </View>
    </View>
  )
}




const DateStructureMaker=()=>{
  const DateStructure=[];
  const monthsWithDays = [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30];

  for(let i=0;i<monthsWithDays.length;i++){
    const day=HijriDateConverter()
    
    const year=day.year;
    const date = new Date(year, i, 1);
    const dayOfWeek = date.getDay();
   DateStructure.push(
    {
      lenghtOfMonths:monthsWithDays[i],
      offset:dayOfWeek
    }
   )


  }
  return DateStructure
}




const HijriDateConverter = () => {
const Hijri=hijri.convert(new Date(), 0)
let dateObj={
  year:Hijri?.year,
  month:Hijri?.month,
  day:Hijri?.dayOfWeek
}
    console.log("🚀 ==> file: Hijri.jsx:113 ==> HijriDateConverter ==> dateObj:", dateObj);

    
    return (dateObj) 
}

export default Hijri



