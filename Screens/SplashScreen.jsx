import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions';
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigateToNextScreen = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Replace 'SplashScreen' with 'Home' screen in the navigation stack
      navigation.replace('Login'); // Use 'replace' instead of 'navigate'
    };

    navigateToNextScreen();
  }, [navigation]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}  className="bg-orange-500">
      <Image source={require('../assets/Minar.png')} style={{ height: responsiveHeight(100), top: responsiveHeight(10) }} />
      <Image source={require('../assets/Circle.png')} style={{ top: responsiveHeight(-50) }} />
      <Image source={require('../assets/Logo.png')} style={{ top: responsiveHeight(-67), width: responsiveWidth(24) }} />
    </View>
  );
};

export default SplashScreen;
