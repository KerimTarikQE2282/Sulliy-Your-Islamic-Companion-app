import React from 'react';
import { ImageBackground, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import silloutte from '../../assets/images/Sillouette.png'; // Ensure this path is correct

export default function Tasbih() {
  return (
    <SafeAreaView className="bg-primary h-full w-full">
      <ImageBackground
        source={silloutte}
        className="absolute inset-0 bg-cover"
      >
        <WebView
          source={{ uri: 'https://my.spline.design/untitled-043695752de76bf549eed3f334c12dfe/' }} // Replace with your Spline embed URL
          className="flex-1 w-[90vw] h-[50vh]" // Use flex-1 to ensure the WebView takes up the available space
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
