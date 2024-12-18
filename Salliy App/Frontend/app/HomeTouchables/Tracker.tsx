import { FlatList, ImageBackground, ImageBackgroundBase, SafeAreaView, Text, View } from "react-native";
import silloutte from '../../assets/images/Sillouette.png'; // Ensure this path is correct
import Hijri from '../Components/Calendar/Variants/Hijri'
import { Check, X } from 'lucide-react-native';


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
  return (
    <View className={`h-[10vh] ${item.name!='Fajr' && 'border-t'} border-slate-200 py-3 flex flex-row justify-between`}>
      <View>
      <Text className="ml-10 text-4xl font-extralight">{item.name}</Text>
      <Text className="ml-10 text-xl font-light mt-2">{item.time}</Text>
      </View>
      <View>
        <View className={` rounded-full ${item.prayed? 'bg-green-500':'bg-red-500'} mr-10 mt-5 w-[10vw] h-[10vw] text-center `}>
        {
  item.prayed ? (
    <Check className="relative left-10" color={'white'} />
  ) : (
    <X color={'white'} />
  )
}
        </View>
      </View>
    </View>
  )
}


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
