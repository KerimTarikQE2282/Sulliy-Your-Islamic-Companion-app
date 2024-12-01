import { Image, ImageBackground, ImageBackgroundBase, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import silloutte from '../../assets/images/Sillouette.png'
import Remember from '../../assets/icons/remember.png'
import qibla from '../../assets/icons/qibla.png'
import statistics from '../../assets/icons/statistics.png'
import religion from '../../assets/icons/religion.png'
import tasbih from '../../assets/icons/tasbih.png'
import MapView from 'react-native-maps';
import { router } from "expo-router";
export default function Index() {

  const touchables=[
    {
      icon:Remember,
      text:'Athkar',
      color:'#FFA500',
      pagelink:'./HomeTouchables/Athkar'
    },
    {
      icon:qibla,
      text:'Qiblah',
      color:'#000000',
      pagelink:'./HomeTouchables/Qiblah'

    },
    {
      icon:statistics,
      text:'Tracker',
      color:'#0000FF',
      pagelink:'./HomeTouchables/Tasbih'

    },
    {
      icon:religion,
      text:'Duas',
      color:'#C0C0C0',
      pagelink:'./HomeTouchables/Tracker'

    },
    {
      icon:tasbih,
      text:'Tasbih',
      color:'#FFA500',
      pagelink:'./HomeTouchables/athkar'

    }
  ]
  const TouchableOpacities=touchables.map(data=>{
    return(
      <TouchableOpacity className="w-[13vw] h-[13vw] bg-white rounded-full" onPress={()=>router.push(`${data.pagelink}`)}>
            <Image
              source={data.icon}
              resizeMode="contain"
              tintColor={data.color}
              className="relative left-2 top-3"
            />
            <Text className="relative top-10 left-3 text-lg text-white">{data.text}</Text>
          </TouchableOpacity>
    )
  })
  return (
    <SafeAreaView  className="bg-primary h-full w-full px-5 "   >
      <ImageBackground
      source={silloutte}
       className="absolute inset-0 bg-cover"
      >
        <ScrollView className="px-8 flex ">
        <View className="h-[20vh]  mt-[10vh]  rounded-xl isolation-isolate p-5" style={{ backgroundColor: '#FFFFFF2A' }}>
          <Text className="font-bold text-black text-3xl opacity-100 " style={{ color: '#FFFFFF' }}>Welcome Back, kerim</Text>
          <View className="flex flex-row gap-3">
          <Text className="text-2xl font-bold text white mt-3 text-white relative ">Fajr</Text><Text className="text-2xl  text white mt-3 text-white relative ">26 ,Jumada | 1449</Text>
          </View>
          <Text className="text-2xl  text white mt-3 text-white relative ">Bole</Text>
        </View>
        <View className="w-full h-[45vh] relative bottom-16 rounded-xl" style={{borderRadius: 1000}} >
        <MapView style={{ flex: 1 }}  />
        </View>
      
        <View className="flex-row gap-5 ml-[0.5vw]">
          {TouchableOpacities}
        </View>

        </ScrollView>
      
      </ImageBackground>
    </SafeAreaView>
  );
}
