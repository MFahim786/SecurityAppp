import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-svg';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

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

  

  return (
    <View className="flex-1">
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
      <Text className="text-lg text-red-600">how about you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});

export default CameraComponent;
