import { ImageBackground, ImageBackgroundBase, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import silloutte from '../../assets/images/Sillouette.png'
import { HelpingHand, Menu } from 'lucide-react-native';
import { Heart } from 'lucide-react-native';
import { Sun } from 'lucide-react-native';
import { Sunset } from 'lucide-react-native';
import { BedDouble } from 'lucide-react-native';
import { HandHelping } from 'lucide-react-native';
import { Sunrise } from 'lucide-react-native';
import { Book } from 'lucide-react-native';
import { useState } from "react";
import { router } from "expo-router";

export default function Athkar() {
  const [athkarType,setAthkarTypes]=useState(true)
  const athkarTypes = [
    {
      "id": 1,
      "title": "Morning Athkar",
      "icon": <Sun color={'white'} className="w-[10vw] h-[10vw]" size={45}/>,
      "route": "./Athkars/MorningAthkars",
      "color": "#FFA500"
    },
    {
      "id": 2,
      "title": "Evening Athkar",
      "icon": <Sunset color={'white'} className="w-[10vw] h-[10vw]" size={45}/>,
      "route": "/evening-athkar",
      "color": "#1E90FF"
    },
    {
      "id": 3,
      "title": "Sleep Athkar",
      "icon": <BedDouble color={'white'} className="w-[10vw] h-[10vw]"  size={45}/>,
      "route": "/sleep-athkar",
      "color": "#FF6347"
    },
    
    {
      "id": 4,
      "title": "Waking up Athkar",
      "icon": <Sunrise color={'white'} className="w-[10vw] h-[10vw]" size={45} />,
      "route": "/waking-up-athkar",
      "color": "#9370DB"
    },
    {
      "id": 6,
      "title": "Surah Al-Kahf",
      "icon": <Book color={'white'} className="w-[15vw] h-[15vw] " size={45} />,
      "route": "/surah-al-kahf",
      "color": "#3CB371"
    },
    {
      "id": 6,
      "title": "Duas",
      "icon": <HelpingHand color={'white'} className="w-[15vw] h-[15vw] " size={45} />,
      "route": "/surah-al-kahf",
      "color": "#1E90FF"
    }
  ];
  
  const AzkarTyesList=athkarTypes.map((data:any)=>{
return(
  <TouchableOpacity className="mt-10" onPress={()=>router.push(data.route) }>
  <View style={{ backgroundColor: 'rgba(0, 0, 0,0.2)' }} className="w-full h-[10vh] rounded-xl flex-row">
  <View className="w-[20vw] h-full items-center justify-center rounded-l-lg" style={{ backgroundColor: data.color }}>
  {data.icon}
</View>
    <View>
      <Text className="ml-10 text-white text-4xl font-bold mt-9">{data.title}</Text>
    </View>
  </View>
</TouchableOpacity>
)
  })
  
  return (
    <SafeAreaView  className="bg-primary h-full w-full px-5"   >
      <ImageBackground
      source={silloutte}
       className="absolute inset-0 bg-cover px-5"
      >
        <Text className="text-3xl text-white font-bold mt-[10vh]">Athkars</Text>
        <View>
          <View className="w-[52vw] h-[5vh] rounded-lg  relative left-[1vw] top-[2vh] flex flex-row py-3 gap-1" style={{ backgroundColor: 'rgba(0, 0, 0,0.2)' }} > 
            <TouchableOpacity className="flex flex-row gap-2 border-r px-2 border-white black h-[5vh] relative bottom-3 rounded-l py-3"  style={athkarType && { backgroundColor: 'rgba(0, 0, 0,0.2)' }} onPress={()=>setAthkarTypes(true)}> <Menu  color={'white'}/> <Text className="text-center items-center mt-1 text-white " >All Athkars</Text></TouchableOpacity>
            <TouchableOpacity className="flex flex-row gap-2  px-2  black h-[5vh] relative bottom-3 rounded-lg py-3"  style={!athkarType && { backgroundColor: 'rgba(0, 0, 0,0.2)' }} onPress={()=>setAthkarTypes(false)}> <Heart  color={'white'}/> <Text className="text-center items-center mt-1 text-white " >My Athkars</Text></TouchableOpacity>

          </View>
        </View>
        <ScrollView>
        {AzkarTyesList}
        </ScrollView>
        
      
      </ImageBackground>
    </SafeAreaView>
  );
}
