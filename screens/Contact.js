import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'

export default function Contact() {
  return (
    <View style={styles.container}>
      <View style={styles.addressIcon}>
        <FontAwesome name="map-marker" size={40} color="#fff" />
      </View>
      <Text style={styles.contactText}>Infinity Solutions Pvt. Ltd.
                                        Plot 3, St 4, NHS 44000,
                                        Rawalpindi, Pakistan.</Text>

      <View style={styles.addressIcon}>
        <FontAwesome name="phone" size={40} color="#fff" />
      </View>
      <Text style={styles.contactText}>+92-51-51486248{"\n"}+92-51-8426486</Text>
      
      <View style={styles.addressIcon}>
        <FontAwesome name="envelope" size={35} color="#fff" />
      </View>
      <Text style={styles.contactText}>info.infinitysolutions@gmail.com</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
      },
      addressIcon: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#303030",
      },
      contactText: {
        fontSize: 16,
        fontFamily: 'Open-Sans',
        margin: 10,
        width: Dimensions.get('window').width*0.8,
        textAlign: 'center',
        color: '#474747',
      },
})