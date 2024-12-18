import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeft } from 'lucide-react-native';
import { ChevronRight } from 'lucide-react-native';
import Page from './SubFunctions/MonthComponentGenerator'
const Ethiopian = () => {
    const [months,setMonths]=React.useState(0)
    const [myDate,setMyDate]=React.useState('')

    const DatesofTheWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const MonthsOfTheYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const Zare = new Date();
    const year = Zare?.getFullYear();   // e.g., 2024
    const month = Zare?.getMonth() + 1; // e.g., 12 (December, since months are zero-based)
    const day = Zare?.getDate(); 
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

export default Ethiopian


const DateStructureMaker=()=>{
  const DateStructure=[];
  const monthsWithDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for(let i=0;i<monthsWithDays.length;i++){
    const Today=new Date()
    const year=Today.getFullYear();
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