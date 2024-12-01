import { ImageBackground, ImageBackgroundBase, SafeAreaView, Text, View } from "react-native";
import silloutte from '../../../assets/images/Sillouette.png'
export default function Index() {
  return (
    <SafeAreaView  className="bg-primary h-full w-full px-5"   >
      <ImageBackground
      source={silloutte}
       className="absolute inset-0 bg-cover"
      >
        
      
      </ImageBackground>
    </SafeAreaView>
  );
}
