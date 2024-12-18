import { ImageBackground, ImageBackgroundBase, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import silloutte from '../../assets/images/Sillouette.png'
import React from 'react'
import FromField from '../Components/Form/FormField'
import Button from "../Components/Form/Button";
import { router } from "expo-router";

export default function Login() {
    const [email,setEmail]=React.useState('')
    const [password,setPassowrd]=React.useState('')

  return (
    <SafeAreaView  className="bg-primary h-full w-full px-5"   >
      <ImageBackground
      source={silloutte}
       className="absolute inset-0 bg-cover"
      >
            <Text className='text-7xl  text-white  mt-10 font-light relative left-[15vw] top-[10vh]'>Sulliy</Text>
            <Text className='text-7xl  text-white  mt-10 font-light relative left-[15vw] top-[10vh]'>Login</Text>
            <View className="mt-[13vh] ml-10">
            <FromField title='email' placeholder='Email' value={email} onChange={setEmail} style={" relative left-[10vw] top-[25vh]"}/>
            <FromField title='password' placeholder='Password' value={email} onChange={setEmail} style={" relative left-[10vw] top-[25vh]"}/>
            </View>
            <View className="relative left-[10vw] top-[5vh]">
            <Button title='Login' functionality={() => {}}/>
            </View>
            <Text className="relative left-[10vw] top-[5vh] text-white mt-10">not registered yet... <TouchableOpacity  onPress={()=>router.push('./Registration')}><Text style={{textDecorationLine:'underline'}} className="text-red-400"> Register? </Text> </TouchableOpacity></Text>
            <View>
              
            </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
