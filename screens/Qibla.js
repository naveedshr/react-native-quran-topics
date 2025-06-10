import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { Magnetometer } from 'expo-sensors';

export default function Qibla() {
  const [location, setLocation] = useState(null);
  const [heading, setHeading] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const rotateAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();

    const subscription = Magnetometer.addListener(data => {
      let angle = calculateHeading(data);
      setHeading(angle);
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: heading,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [heading]);

  const calculateHeading = (magnetometer) => {
    let { x, y } = magnetometer;
    let angle = Math.atan2(y, x);
    angle = angle * (180 / Math.PI);
    angle = angle - 90; // adjust for your device
    if (angle < 0) {
      angle += 360;
    }
    return Math.round(angle);
  };

  const getQiblaDirection = () => {
    if (!location) return 0;
    const kaabaLat = 21.4225;
    const kaabaLng = 39.8262;
    const lat1 = (Math.PI / 180) * location.latitude;
    const lat2 = (Math.PI / 180) * kaabaLat;
    const diffLong = (Math.PI / 180) * (kaabaLng - location.longitude);

    const x = Math.sin(diffLong);
    const y = Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(diffLong);

    let initialBearing = Math.atan2(x, y) * (180 / Math.PI);
    initialBearing = (initialBearing + 360) % 360;
    return Math.round(initialBearing);
  };

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  const qiblaDir = getQiblaDirection();
  const directionDifference = (qiblaDir - heading + 360) % 360;

  return (
    <View style={styles.container}>
      <View style={styles.compassContainer}>
        <Animated.Image
          source={require('../assets/images/qibla-compass.png')}
          style={[
            styles.needle,
            {
              transform: [{ rotate: `${directionDifference}deg` }],
            },
          ]}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Your Heading: {heading}°</Text>
        <Text style={styles.text}>Qibla Direction: {qiblaDir}°</Text>
        <Text style={styles.text}>Turn {Math.round(directionDifference)}° to face Qibla</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  compassContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: '#424242',
    height: 300,
    width: 300,
  },
  needle: {
    width: 200,
    height: 200,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
    width: Dimensions.get('window').width * 0.7,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#d6d6d6',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#303030',
    fontFamily: 'Open-Sans'
  },
});
