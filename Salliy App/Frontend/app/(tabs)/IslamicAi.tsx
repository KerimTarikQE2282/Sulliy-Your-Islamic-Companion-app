import { ImageBackground, ImageBackgroundBase, SafeAreaView, Text, TextInput, View } from "react-native";
import silloutte from '../../assets/images/Sillouette.png'
export default function IslamicAi() {
  return (
    <SafeAreaView  className="bg-primary h-full w-full px-5"   >
      <ImageBackground
      source={silloutte}
       className="absolute inset-0 bg-cover"
      >
        <View className="items-center">
       <View className="w-[95vw] h-[85vh] bg-white rounded-lg relative top-10 ">
        <View className="bg-black text-white text-3xl w-[95vw] rounded-t-lg h-[10vh]">
          <Text className="text-white text-center py-10 text-2xl font-bold">Ask Islamic Ai any thing</Text>
        </View>
        <View>
          
        </View>
<View>
      <View className='flex flex-row   h-[5vh] rounded-lg py-5 w-[90vw] text-2xl mt-10  px-5 bg-slate-100 justify-center relative top-[65vh] left-3 '>
        <TextInput
        placeholderTextColor='#7b7b8b'
       placeholder="Ask Islamic Ai any thing"
        className='h-[5vh] w-[70vw]  relative bottom-5 right-4'
        />
         </View>
    </View>
      </View> 
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
