import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import Onboardscreen from '../Screens/OnBording';
import AttendenceMarked from '../Screens/AtendanceMarked';
import CameraComponent from '../Screens/Camera';

const Stack = createNativeStackNavigator();
export default function Appnavigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{animationEnabled:true}}>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="SplashScreen" component={SplashScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="Onbord" component={Onboardscreen} />
        <Stack.Screen options={{headerShown:false}} name="AttendaceMarked" component={AttendenceMarked} />
        <Stack.Screen options={{headerShown:false}} name="Camera" component={CameraComponent} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}