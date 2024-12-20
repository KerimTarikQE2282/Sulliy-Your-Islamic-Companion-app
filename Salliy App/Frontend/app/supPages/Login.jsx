import { ImageBackground, ImageBackgroundBase, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import silloutte from '../../assets/images/Sillouette.png'
import React from 'react'
import FromField from '../Components/Form/FormField'
import Button from "../Components/Form/Button";
import { router } from "expo-router";
import {useForm} from 'react-hook-form'
import {Devtool} from '@hookform/devtools'
export default function Login() {
  
  
    const {getValues,register,control,handleSubmit}=useForm({
      defaultValues:{
        email:'',
        password:''
      }
    })
    const onSubmit=(data)=>{
      console.log(data)
    }
  return (
    <SafeAreaView  className="bg-primary h-full w-full px-5"   >
      <ImageBackground
      source={silloutte}
       className="absolute inset-0 bg-cover"
      >
            <Text className='text-7xl  text-white  mt-10 font-light relative left-[15vw] top-[10vh]'>Sulliy</Text>
            <Text className='text-7xl  text-white  mt-10 font-light relative left-[15vw] top-[10vh]'>Login</Text>
            <View className="mt-[13vh] ml-10">
            <FromField title='email' placeholder='Email'    name="email" control={control}/>
            <FromField title='password' placeholder='Password'     name="password" control={control}/>
            </View>
            <View className="relative left-[10vw] top-[5vh]">
            <Button title='Login' functionality={handleSubmit(onSubmit)}/>
              
            </View>
            <Text className="relative left-[10vw] top-[5vh] text-white mt-10">not registered yet... <TouchableOpacity  onPress={()=>router.push('./Registration')}><Text style={{textDecorationLine:'underline'}} className="text-red-400"> Register? </Text> </TouchableOpacity></Text>
            <View>
              
            </View>
      </ImageBackground>
      {/* <Devtool control={control}/> */}
    </SafeAreaView>
  );
}
