import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
const AttendenceMarked = () => {
    return (
        <View className="justify-center items-center bg-orange-500" >
            <View className="pt-20 ">
                <Image source={require('../assets/Logo.png')} />
            </View>
            <View style={{
                backgroundColor: 'white',
                width: responsiveWidth(100),
                height: responsiveHeight(90),
                borderTopLeftRadius: responsiveWidth(10),
                borderTopRightRadius: responsiveWidth(10)
            }} className="mt-10">

                <View style={{
                    flex:0.5,
                    borderRadius: 30,
                    marginLeft: responsiveWidth(5),
                    marginRight: responsiveWidth(4),
                    top: responsiveHeight(3),
                    width: responsiveWidth(90),
                    height: responsiveHeight(25)
                }} className="bg-orange-500" 
                
                
                />
                  <Image source={require('../assets/Ellipse5.png')} style={{top:responsiveHeight(-20),alignItems:'center',justifyContent:'center',left:responsiveWidth(41)}}/>
                  <Text style={{fontSize: 24,
                    fontWeight: "500",
                    fontFamily: "Roboto-Medium",
                    color: "#ff0000",
                    textAlign: "center",
                    width: responsiveWidth(100),
                   top:responsiveHeight(-19)}}>John Smith</Text>

                   
                   <Text style={{fontSize: 20,
                    fontFamily: "Dosis-Regular",
                    color: "#fff3f3",
                    textAlign: "center",
                    width: responsiveWidth(100),
                    top:responsiveHeight(-18),
                    height: 22}}>ID: 12904</Text>                   
                   <Text style={{fontSize: 20,
                    fontFamily: "Dosis-Regular",
                    color: "#fff3f3",
                    textAlign: "center",
                    width: responsiveWidth(100),
                    top:responsiveHeight(-18),
                    height: 22}}>Weapon No: 456677</Text>                   
                   <Text style={{fontSize: 20,
                    fontFamily: "Dosis-Regular",
                    color: "#fff3f3",
                    textAlign: "center",
                    width: responsiveWidth(100),
                    top:responsiveHeight(-18),
                    height: 22}}>Phone No: 0324-55246</Text>    
                    
                    
                   
                    <View>
                    <TouchableOpacity style={{
                        width: responsiveWidth(50),
                        height: responsiveHeight(8),
                        marginTop: responsiveHeight(-9),
                        marginLeft: responsiveWidth(25),
                        borderRadius: 40,
                        borderStyle: "solid",
                        borderColor: "#000",
                        borderWidth: responsiveWidth(0.3),
                    }}
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
                            Attendence Marked
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
                        marginTop: responsiveHeight(4),
                        marginLeft: responsiveWidth(30)
                    }}
                        className="py-3 bg-orange-500 rounded-full items-center justify-center"      >
                        <Text
                            className="text-xl font-bold text-center text-gray-700 " style={{
                                borderRadius: 30,
                                fontSize: responsiveFontSize(3),
                                fontWeight: "700",
                                color: "#fff",
                            }}
                        >
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    )
}

export default AttendenceMarked;

const styles = StyleSheet.create({})