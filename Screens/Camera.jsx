import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-svg';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import ScreenWrapper from '../components/ScreenWrapper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveScreenHeight as Rh,responsiveScreenWidth as Rw } from 'react-native-responsive-dimensions';
const CameraComponent = () => {
  const device = useCameraDevice('front'); // Specify 'back' for the back camera
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    checkPermission();
  }, [device]); // Include 'device' in the dependency array

  const checkPermission = async () => {
    const cameraPermission = await Camera.requestCameraPermission();
    console.log(cameraPermission);
    setHasPermission(cameraPermission === 'authorized');
  };

  if(device==null) return <ActivityIndicator/>

  return (
    <View className="flex-1 " style={styles.container}>
        <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
      <TouchableOpacity >
        <View style={styles.backbutton}>
      <Ionicons 
              name='navigate-sharp'
              size={23}
              color="green"
            />
        </View>
      </TouchableOpacity>
      <View className=" h-20 w-20    bg-orange-500 mt-11 rounded-full ml-7" style={styles.CaputreButton}>
     
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 

  },
  CaputreButton:{
 marginTop:Rh(75),
 marginLeft:Rh(20)
  },
 backbutton:{
  marginTop:Rh(5),
 },
});

export default CameraComponent;
