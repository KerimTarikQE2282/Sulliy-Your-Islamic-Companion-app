import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Index from '../(tabs)/index'
import Prayers from './Prayers'
import HomeIcon from '../../assets/icons/Home.png'
import PrayerIcon from '../../assets/icons/Prayer.png'
import IslamicAi from './IslamicAi'
import Bot from '../../assets/icons/Bot.png'
import Quran from './Quran'
import Profile from './Profile'
import Book from '../../assets/icons/Book.png'
import ProfileIcon from '../../assets/icons/Profile.png'
const TabIcon = ({ icon, color, name, focused }:any) => {
  
    return (
      <View>
       <Image
       source={icon}
       resizeMode='contain'
       tintColor={color}
       className='w-7 h-7 items-center justify-center ml-5'
       />
       <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-2 w-[15vw] text-center`} style={{color:color}}>
        {name}
  
       </Text>
      </View>
    );
  };


const _layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarShowLabel:false,
      tabBarActiveTintColor:'#165449',
      tabBarInactiveTintColor:'#CDCDE0',
      headerShown:false   ,
      
      tabBarStyle:{
     backgroundColor:'#00000',
     borderTopWidth:0,
     borderTopColor:'#232533',
     height:74 ,
     marginTop:10
      }
    }}
    >
       <Tabs.Screen
       name='index'
       options={{
        title:'index',
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={HomeIcon}
            color={color}
            focused={focused}
            name="Home"
            />
        )
       }} />
         <Tabs.Screen
       name='Prayers'
       options={{
        title:'Prayers',
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={PrayerIcon}
            color={color}
            focused={focused}
            name="Prayers"
            />
        )
       }} />
        <Tabs.Screen
       name='IslamicAi'
       options={{
        title:'IslamicAi',
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={Bot}
            color={color}
            focused={focused}
            name="IslamicAi"
            />
        )
       }} />
      <Tabs.Screen
       name='Quran'
       options={{
        title:'Quran',
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={Book}
            color={color}
            focused={focused}
            name="Quran"
            />
        )
       }} />
       <Tabs.Screen
       name='Profile'
       options={{
        title:'Profile',
        tabBarIcon:({color,focused})=>(
            <TabIcon
            icon={ProfileIcon}
            color={color}
            focused={focused}
            name="Profile"
            />
        )
       }} />
    
    </Tabs>
  )
}

export default _layout