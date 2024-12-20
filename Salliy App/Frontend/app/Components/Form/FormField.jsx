import { View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Eye, EyeClosed } from 'lucide-react-native';
import { Controller } from 'react-hook-form';

const TextField = ({ title, placeholder, style, name, control }) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
    setSecureTextEntry((prev) => !prev);
  };

  return (
    <View className={`${style}`}>
      <View className="flex flex-row bg-white h-[5vh] rounded-lg py-5 justify-between w-[80vw] text-2xl mt-10 px-5">
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <>
              <TextInput
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={onChange}
                className="h-[5vh] w-[70vw] relative bottom-5 right-4"
                secureTextEntry={secureTextEntry}
              />
              {title === 'password' && (
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  className="h-10 w-10 relative right-5 items-center bottom-4 py-3"
                >
                  {isPasswordVisible ? (
                    <EyeClosed size={20} color="#7b7b8b" />
                  ) : (
                    <Eye size={20} color="#7b7b8b" />
                  )}
                </TouchableOpacity>
              )}
            </>
          )}
        />
      </View>
    </View>
  );
};

export default TextField;
