import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
const SplashScreen = () => {
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
       <Image source={require('../assets/Minar.png')} style={{height:responsiveHeight(100),top:responsiveHeight(10)}}/>
       <Image source={require('../assets/Circle.png')} style={{top:responsiveHeight(-50)}}/>
       <Image source={require('../assets/Logo.png')} style={{top:responsiveHeight(-67),width:responsiveWidth(24)}}/>
    </View>
  )
}

export default SplashScreen