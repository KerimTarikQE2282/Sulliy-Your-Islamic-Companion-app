import { ImageBackground, ImageBackgroundBase, SafeAreaView, Text, View } from "react-native";
import silloutte from '../../assets/images/Sillouette.png'
export default function IslamicAi() {
  return (
    <SafeAreaView  className="bg-primary h-full w-full px-5"   >
      <ImageBackground
      source={silloutte}
       className="absolute inset-0 bg-cover"
      >
       <View className="w-[90vw] h-[90vh] bg-white rounded-lg">

        </View> 
      
      </ImageBackground>
    </SafeAreaView>
  );
}
