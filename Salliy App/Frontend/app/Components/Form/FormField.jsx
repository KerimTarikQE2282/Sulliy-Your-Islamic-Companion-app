import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Eye } from 'lucide-react-native';
import { EyeClosed } from 'lucide-react-native';

const  TextField = ({title,value,placeholder,onChange,style}) => {
    const [passwordVisisble,setPasswordVisible]=React.useState(false)
    const [secureTextEntry,setSecureTextEntry]=React.useState(false)
    const passwordVisibilityModifier=()=>{
    if(passwordVisisble){
        setSecureTextEntry(!secureTextEntry)
        setPasswordVisible(!passwordVisisble)
        
    }
    else if(!passwordVisisble){
        setSecureTextEntry(!secureTextEntry)
        setPasswordVisible(!passwordVisisble)
       
    }
}
  return (
    <View clasName={`${style}`} >
      <View className='flex flex-row  bg-white h-[5vh] rounded-lg py-5 justify-between w-[80vw] text-2xl mt-10  px-5'>
        <TextInput
   
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#7b7b8b'
        onChange={onChange}
        className='h-[5vh] w-[70vw]  relative bottom-5 right-4'
        secureTextEntry={secureTextEntry}
        />
        {
            title=='password' &&
            <TouchableOpacity onPress={()=>passwordVisibilityModifier()} className=" h-10 w-10 relative right-5 items-center bottom-4 py-3">
                    {
                        passwordVisisble?
                        
                        
                        <EyeClosed size={20}  color='#7b7b8b'/>
                        :<Eye size={20} color='#7b7b8b'/>
                    }
            </TouchableOpacity>
        }

      </View>
    </View>
  )
}

export default TextField