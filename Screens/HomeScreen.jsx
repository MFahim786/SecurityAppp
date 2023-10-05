import {View, Text, TouchableOpacity,
   Image, 
   FlatList,
  } from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen() {
  const navigation=useNavigation();
  return (
    // {/*main menu*/}
    <ScreenWrapper className="flex-1 bg-orange-500">
      <View className="justify-center items-center bg-orange-500" >
            <View className="pt-20">
                <Image source={require('../assets/Logo.png')} />
            </View>
            <View style={{
                backgroundColor: 'white',
                width: responsiveWidth(100),
                height: responsiveHeight(90),
                borderTopLeftRadius: responsiveWidth(10),
                borderTopRightRadius: responsiveWidth(10)
            }} className="mt-10">

                <Image source={require('../assets/fr.png')}
                    style={{
                        marginTop: 80,
                        marginLeft: 150,
                        alignItems: 'center'
                    }} className="justify-center" />
                <View>
                    <TouchableOpacity style={{
                        width: responsiveWidth(50),
                        height: responsiveHeight(8),
                        marginTop: responsiveHeight(12),
                        marginLeft: responsiveWidth(25),
                        borderRadius: 40,
                        borderStyle: "solid",
                        borderColor: "#000",
                        borderWidth: responsiveWidth(0.3),
                    }}
                    onPress={()=>navigation.navigate('Camera')}
                        className="py-3 bg-slate-200 items-center justify-center "   >
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
                            Mark Attendence
                        </Text>

                    </TouchableOpacity>
                    <View style={{
                        marginLeft: responsiveWidth(45),
                        marginTop: responsiveHeight(4)
                    }}>
                        <Image source={require('../assets/Rectangle30.png')} />
                    </View>
                    <Text style={{
                        fontSize: responsiveFontSize(2),
                        fontWeight: "500",
                        fontFamily: "Karla-Medium",
                        color: "#818187",
                        textAlign: "left",
                        marginLeft: responsiveWidth(42),
                        marginTop: responsiveHeight(5)
                    }}>Unmarked</Text>
                    <TouchableOpacity style={{
                        width: responsiveWidth(40),
                        height: responsiveHeight(7),
                        marginTop: responsiveHeight(4.5),
                        marginLeft: responsiveWidth(30),
                        marginBottom:responsiveHeight(10),
                    }}
                        className="py-3 bg-orange-500 rounded-full items-center justify-center "    
                        onPress={()=>navigation.navigate('Login')}
                        >
                        <Text
                            className="text-xl font-bold text-center text-gray-700 " style={{
                                borderRadius: 30,
                                fontSize: responsiveFontSize(3),
                                fontWeight: "700",
                                color: "#fff",
                            }}
                        >
                            Signout
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    </ScreenWrapper>
  );
}
