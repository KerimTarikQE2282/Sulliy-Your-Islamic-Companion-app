import { FlatList, ImageBackground, ImageBackgroundBase, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import silloutte from '../../assets/images/Sillouette.png'; // Ensure this path is correct
import Hijri from '../Components/Calendar/Variants/Hijri'
import { Check, X } from 'lucide-react-native';
import axios from "axios";
import React from "react"; 



export default function Tracker() {

  return (
    <SafeAreaView  className="bg-primary h-full w-full px-5"   >
      <ImageBackground
      source={silloutte}
       className="absolute inset-0 bg-cover"
      >
        <View className="flex flex-col">
        <View className="mt-10">
        <Hijri/>
        </View>
        <View className="px-2 rounded-full">
          <View className=" h-[52vh] rounded-xl w-full mt-5 bg-white">
            <FlatList
            data={prayerData}
            keyExtractor={(item)=>item.name}
            renderItem={({item})=>(
              <TrackerCell item={item}/>
  )}/>
          </View>
        </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const prayerData = [
  {
    name: "Fajr",
    time: "5:00 AM",
    prayed: true, // Placeholder value
  },
  {
    name: "Dhuhr",
    time: "12:30 PM",
    prayed: false, // Placeholder value
  },
  {
    name: "Asr",
    time: "3:45 PM",
    prayed: true, // Placeholder value
  },
  {
    name: "Maghrib",
    time: "6:15 PM",
    prayed: false, // Placeholder value
  },
  {
    name: "Isha",
    time: "7:45 PM",
    prayed: true, // Placeholder value
  },
];




const TrackerCell = ({item}:any) => {
  const [PrayerData,setPrayerData]=React.useState([])
  const [checker,setChecker]=React.useState(false)
  const today=new Date()
  const day=today.getDate()
  const month=(today.getMonth())+1
  const year=today.getFullYear()
  const date=`${day}-${month}-${year}`
  const PrayedSubmission=async (prayedTime:any)=>{
    const PrayedData={
      time:date,
      name:prayedTime
    }
      try{
        const res=await axios.post('http://192.168.1.164:3002/api/v1/Prayer/',PrayedData)
        console.log("🚀 ==> file: Tracker.tsx:81 ==> PrayedSubmission ==> res:", res);

      }
      catch(error:any){
        console.error('Axios error message:', error.message);
        console.error('Axios request config:', error.config);
        console.error('Axios response:', error.response);
        console.error('Axios error code:', error.code);
      }

    
    
  }
  React.useEffect( ()=>{
    const getPrayerDataInitially=async()=>{
    try{
      const res=await axios.get('http://192.168.1.164:3002/api/v1/Prayer/')
      setPrayerData(res.data)

    }catch(error:any){  
      console.error('Axios error message:', error.message);
        console.error('Axios request config:', error.config);
        console.error('Axios response:', error.response);
        console.error('Axios error code:', error.code);
    }
    }
    getPrayerDataInitially()
  },[PrayerData])
  React.useEffect(()=>{
    PrayerData.map((data:any)=>{
      if(item.name==data.name){
        setChecker(true)
      }
    })
  ,[PrayerData]})
  return (
    <View className={`h-[10vh] ${item.name!='Fajr' && 'border-t'} border-slate-200 py-3 flex flex-row justify-between`}>
      <View>
      <Text className="ml-10 text-4xl font-extralight">{item.name}</Text>
      <Text className="ml-10 text-xl font-light mt-2">{item.time}</Text>
      </View>
      <View>
        <TouchableOpacity className={` rounded-full ${ checker ? 'bg-green-500':'bg-slate-500'} mr-10 mt-5 w-[10vw] h-[10vw] text-center pl-[2.3vw] pt-2 `} onPress={()=>{PrayedSubmission(item.name)}}>
        {
  item.prayed && (
    <Check  color={'white'} />
  ) 
}
        </TouchableOpacity>
      </View>
    </View>
  )
}