import React, { useState } from "react";
import { ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import silloutte from "../../assets/images/Sillouette.png";
import FormField from "../Components/Form/FormField";
import Button from "../Components/Form/Button";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [department, setDepartment] = useState("");

  const handleRegister = () => {
    const userData = {
      username,
      email,
      password,
      phoneNumber,
      profilePicture,
      address,
      dateOfBirth,
      department,
    };
    console.log("User Data:", userData);
    // Add your API call or further processing logic here
  };

  return (
    <SafeAreaView className="bg-primary h-full w-full px-5 " >
      <ImageBackground source={silloutte} className="absolute inset-0 bg-cover">
        <ScrollView className=" w-full flex-1 h-[200vh]">
            <View className="h-[120vh]">
        <Text className="text-7xl text-white mt-10 font-light relative left-[15vw] top-[10vh]">
          Sulliy
        </Text>
        <Text className="text-7xl text-white mt-10 font-light relative left-[15vw] top-[10vh]">
          Register
        </Text>
        <View className="mt-[10vh] ml-10">
          <FormField
            title="Username"
            placeholder="Enter username"
            value={username}
            onChange={setUsername}
          />
          <FormField
            title="Email"
            placeholder="Enter email"
            value={email}
            onChange={setEmail}
          />
          <FormField
            title="Password"
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChange={setPassword}
          />
          <FormField
            title="Phone Number"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
          <FormField
            title="Profile Picture URL"
            placeholder="Enter profile picture URL"
            value={profilePicture}
            onChange={setProfilePicture}
          />
          <FormField
            title="Address"
            placeholder="Enter address"
            value={address}
            onChange={setAddress}
          />
          <FormField
            title="Date of Birth"
            placeholder="YYYY-MM-DD"
            value={dateOfBirth}
            onChange={setDateOfBirth}
          />
          <FormField
            title="Department"
            placeholder="Enter department"
            value={department}
            onChange={setDepartment}
          />
        </View>
        <View className="relative left-[10vw] top-[5vh]">
          <Button title="Register" functionality={handleRegister} />
        </View>
        </View>
        </ScrollView>
    
      </ImageBackground>
    </SafeAreaView>
  );
}
