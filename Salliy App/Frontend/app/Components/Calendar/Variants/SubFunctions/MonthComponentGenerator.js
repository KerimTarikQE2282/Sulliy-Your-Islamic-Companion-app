import { View, Text } from 'react-native';
import React from 'react';

export default function Page(month,day,offset) {

  month=month-1
  day=day-1

    const monthsWithDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const renderOffset = (offset) => {
      console.log()
        return Array.from({ length: offset }, (_, i) => (
            <View
                key={i}
                className={`w-[11.4vw] h-[4vh] border-r border-r-slate-200 mr-2 '}`}
            >
              <View className="w-[5vw] h-[1px] bg-gray-300 my-4 transform rotate-45" />
            </View>
        ));
    };

    const renderDays = (daysInMonth,isCurrent,day) => {
      console.log()
        return Array.from({ length: daysInMonth }, (_, i) => (
            <View
                key={i}
                className={`w-[11.4vw] h-[4vh] border-r border-r-slate-200 mr-2 ${(isCurrent && i==day) &&'bg-[#0d322c] '}`}
            >
                <Text className={`text-center font-extralight text-2xl mt-2 ${(isCurrent && i==day) &&' text-white'}`}>{i + 1}</Text>
            </View>
        ));
    };

    const Calendar_pages = monthsWithDays.map((days, index) =>{
      let isCurrent;
      
      if(index==month){
        isCurrent=true
      }else{
        isCurrent=false
      }
      return(
        <View key={index} className='flex flex-row flex-wrap'>
          {renderOffset(offset[index].offset)}
            {renderDays(days,isCurrent,day)}
        </View>
    )
    } );
      // console.log("🚀 ==> file: MonthComponentGenerator.js:35 ==> constCalendar_pages=monthsWithDays.map ==> month:", month);

      // console.log("🚀 ==> file: MonthComponentGenerator.js:5 ==> Page ==> month:", month);

    return {Calendar_pages};
}
