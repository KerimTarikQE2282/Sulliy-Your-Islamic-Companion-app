import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeft } from 'lucide-react-native';
import { ChevronRight } from 'lucide-react-native';
var ethiopianDate = require('ethiopian-date');
import Page from './SubFunctions/MonthComponentGenerator'
const Ethiopian = () => {
    const [months,setMonths]=React.useState(0)
    const [myDate,setMyDate]=React.useState('')

    const DatesofTheWeek = ["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "ዓርብ", "ቅዳሜ"];
    const MonthsOfTheYear = [
      "መስከረም", // Meskerem
      "ጥቅምት",   // Tikimt
      "ኅዳር",     // Hidar
      "ታኅሳስ",   // Tahsas
      "ጥር",      // Tir
      "የካቲት",   // Yekatit
      "መጋቢት",   // Megabit
      "ሚያዝያ",   // Miazia
      "ግንቦት",   // Ginbot
      "ሰኔ",      // Sene
      "ሐምሌ",     // Hamle
      "ነሐሴ",     // Nehase
      "ጳጉሜን"     // Pagumē (13th month, only 5 or 6 days)
    ];

    const Today = new Date();
    const EthiopianDate=EthiopianDateConverter()
    const day=EthiopianDate.day
    const month=EthiopianDate.month
    const year=EthiopianDate.year

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
  const ethiopianMonthsWithDays = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 5];

  
  for(let i=0;i<monthsWithDays.length;i++){
    const day=EthiopianDateConverter()
    
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




const EthiopianDateConverter = () => {
      const Zare = new Date();
      const year = Zare?.getFullYear();   // e.g., 2024
      const month = Zare?.getMonth() + 1; // e.g., 12 (December, since months are zero-based)
      const day = Zare?.getDate(); 
      const Today=ethiopianDate.toEthiopian(year,month,day)
    return ({
      year:Today[0],
      month:Today[1],
      day:Today[2]
    }) 
}

export default Ethiopian