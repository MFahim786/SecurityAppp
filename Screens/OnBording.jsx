import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
const Onboardscreen = () => {
  return (
    <View style={{backgroundColor:'white'}} >
      <Image source={require('../assets/onboardimg.png')} style={{width:responsiveWidth(100)}}/>
    <View>
    <Text style={{color:'black',marginTop:responsiveWidth(-13),marginLeft:responsiveWidth(1),alignItems:'center',fontSize: responsiveFontSize(5),
    fontFamily: "Kavoon-Regular",
    color: "#fff",
    textAlign: "center"}}>STAY SAVE</Text>
    </View>

     <Text style={{color:'black',fontFamily: "Kavoon-Regular",
     textAlign: "center",
     fontSize:responsiveFontSize(5),
     width: responsiveWidth(100),
     height: responsiveHeight(5)}}>With</Text>
     
     <Text style={{fontSize: 64,
        fontFamily: "OdorMeanChey-Regular",
        color: "#f29100",
        textAlign: "center",top:responsiveHeight(4)}}>MANDARIN</Text>
        <TouchableOpacity style={{
            width: responsiveWidth(50), height: responsiveHeight(8), marginTop: responsiveHeight(12), marginLeft: responsiveWidth(25), borderRadius: 20,
            borderStyle: "solid",
            borderColor: "orange",
            borderWidth: responsiveWidth(0.3),
        }}
            className="py-3 bg-slate-100 items-center justify-center "   >
            <Text
                className="text-xl font-bold text-center text-gray-700 " style={{
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: "500",
                    fontFamily: "Dosis-Medium",
                    color: "#848383",
                    textAlign: "center",
                    width: responsiveWidth(183),
                    height: responsiveHeight(2)
                }}
            >
                Get Started
            </Text>

        </TouchableOpacity>
     </View>
  )
}

export default Onboardscreen