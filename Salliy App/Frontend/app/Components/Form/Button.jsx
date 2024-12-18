import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title,funtionality}) => {
  return (
    <View>
     <TouchableOpacity className="bg-secondary rounded-lg  h-[6vh] w-[80vw] py-2 font-bold" onPress={()=>functionality()}>
        <Text className="text-white text-center mt-2 text-3xl ">  {title}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Button