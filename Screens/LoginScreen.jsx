import { Image, StyleSheet, Text, View, TextInput,Switch,LinearGradient,Pressable, TouchableOpacity} from 'react-native'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { themeColors } from '../theme';
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const navigation=useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <View className="justify-center items-center bg-orange-500" >
      <View className="pt-20 bg-orange-500">
        <Image source={require('../assets/Logo.png')} />
      </View>
      <View style={{ backgroundColor: 'white', width: '100%', height: 900, borderTopLeftRadius: 50, borderTopRightRadius: 50 }} className="mt-10 bg-orange-500">
      <View style={{marginTop:responsiveHeight(5),marginLeft:responsiveWidth(10)}} className="font-semibold ">

      <View className="space-y-3">
      <Text style={{color:'black',fontWeight:500,}}>Email/Phone Number</Text>
      <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email"
          // value="john@gmail.com" 
          style={{marginRight:responsiveWidth(10),fontFamily:themeColors.fontfamily ,borderColor:'black',borderTopColor:'black'}}
          />
      <Text style={{color:'black',fontWeight:500}}>Password</Text>
      <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="password"
            secureTextEntry
          // value="john@gmail.com" 
          style={{marginRight:responsiveWidth(10),fontFamily:themeColors.fontfamily ,borderColor:'black'}}
          />
          <View className="flex-row justify-between mt-2">
          <Switch
              value={checked}
              onValueChange={(value) => setChecked(value)} // Update the state when the switch is toggled
            />
         
         <Text style={{fontSize: responsiveFontSize(1.5),
          fontWeight: "500",
          top:responsiveWidth(1),
          fontFamily: "Karla-Medium",
          color: "#818187",left:responsiveWidth(-23)}}>Save me</Text>
         <Text style={{fontSize: responsiveFontSize(1.5),
          fontWeight: "700",
          top:responsiveWidth(1),
          fontFamily: "Inter-Bold",
          color: "#ff0000",right:responsiveWidth(12)}}>Forget Password</Text>
         
         </View>
        
      </View>
      <TouchableOpacity style={{ width: responsiveWidth(40), height: responsiveHeight(7) ,marginTop:responsiveHeight(12),marginLeft:responsiveWidth(20),justifyContent:'center',alignItems:'center'}}
      className="py-3 bg-orange-500 rounded-full items-center justify-center" 
      onPress={()=>navigation.navigate('Home')}
      >
      <Text
          className="text-xl font-bold text-center text-gray-700 " style={{
              borderRadius: 30,
              fontSize: responsiveFontSize(3),
              fontWeight: "700",
              color: "#fff",
          }}
      >
          Login
      </Text>
  </TouchableOpacity>
     </View> 
     <Text className="text-xl text-gray-700 font-bold text-center py-5 mt-10">Or Signup With</Text>
     <View className="flex-row justify-center space-x-7 " style={{marginTop:40}}>
       <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
         <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
       </TouchableOpacity>
       <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
         <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
       </TouchableOpacity>
       <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
         <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
       </TouchableOpacity>
     </View>
      </View>
    </View>
  )
}



export default LoginScreen;
