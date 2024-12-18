import React, { useState, useEffect } from 'react';
import { Image, View, Text, Dimensions, SafeAreaView, Alert } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import axios from 'axios';
import * as Location from 'expo-location';
import QiblahCompass from '../../assets/images/QiblahCompas.png'

const { height, width } = Dimensions.get('window');

export default App = () => {
  const [subscription, setSubscription] = useState(null);
  const [magnetometer, setMagnetometer] = useState(0);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [location, setLocation] = useState({
    latitude: '',
    longitude: ''
  });
  const [myQiblahDegree, setMyQiblahDegree] = useState<number>(0);

  useEffect(() => {
    _toggle();
    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((data) => {
        setMagnetometer(_angle(data));
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const _angle = (magnetometer: any) => {
    let angle = 0;
    if (magnetometer) {
      let { x, y, z } = magnetometer;
      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    return Math.round(angle);
  };

  const LocationGetter = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Qibla Error', 'Location required to enable Qibla feature');
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  useEffect(() => {
    LocationGetter();
  }, []);

  useEffect(() => {
    if (fetchStatus || !location.longitude || !location.latitude) return;
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.aladhan.com/v1/qibla/${location.longitude}/${location.latitude}`);
        console.log('🚀 ==> Qiblah Degree:', res.data.data.direction);
        setMyQiblahDegree(Number(res.data.data.direction)); // Ensure it is stored as a number
        setFetchStatus(true);
      } catch (error) {
        console.error('Failed to fetch Qiblah degree, retrying...', error);
        Alert.alert('Connection Error','please connect to the internet')
        setTimeout(fetchData, 3000);
      }
    };
    fetchData();
  }, [location, fetchStatus]);

  // Matching with a tolerance (e.g., 5 degrees tolerance)
  const isAligned = Math.abs(magnetometer - myQiblahDegree) < 5;

  return (
    <SafeAreaView className="px-5 bg-primary">
      
      <View className="bg-primary w-full h-[100vh]">
      <Text className='ml-[40vw] mt-10 text-2xl text-white font-bold'>View Qiblah</Text>

        <View
          className={`w-[50vw] h-[50vw] relative top-[25vh] left-[26vw] rounded-full opacity-100 ${
            isAligned ? `bg-green-500` : `bg-red-500`
          }`}
        >

          <Image
          source={QiblahCompass}
          className='w-[50vw] h-[50vw]'
          style={{
           
            transform: [{ rotate: 105 - Math.floor(magnetometer) + 'deg' }]
          }}
          resizeMode='cover'
          />


        </View>
      </View>
    </SafeAreaView>
  );
};
