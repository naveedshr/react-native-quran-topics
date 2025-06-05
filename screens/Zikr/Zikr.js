import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Foundation } from '@expo/vector-icons';

const stack = createNativeStackNavigator();

export default function Zikr({navigation, route}) {

  const izkaar = require('../../data/izkaar.json');
  console.log("Izkaar: ", izkaar[0].en);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={izkaar}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tasbeeh', {ar: item.ar, en: item.en , ur: item.ur, count: item.count})}>
                <Image source={require('../../assets/images/counter.png')} style={{height: 45, width: 45}} />
                </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <Text style={styles.arabicText} numberOfLines={1}>{item.ar}</Text>
                <Text style={styles.urduText} numberOfLines={1}>{item.ur}</Text>
              </View>
            </View>
          )
        }}
        keyExtractor={item => item.id}
        ListHeaderComponent={<View style={{ height: 8 }}></View>}
        ListFooterComponent={<View style={{ height: 8 }}></View>}
        ItemSeparatorComponent={<View style={{ height: 10 }}></View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 85,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  arabicText: {
    fontFamily: 'arabic4',
    fontSize: 24,
    textAlign: 'right',
    color: '#b83021',
  },
  englishText: {
    fontFamily: 'Open-Sans',
    fontSize: 14,
    marginVertical: 10,
    color: '#303030',
  },
  urduText: {
    fontFamily: 'Noto-Regular',
    fontSize: 14,
    textAlign: 'right',
    color: '#303030',
  },
  button: {
    width: 70,
    height: 64,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#e3d040',
    borderColor: '#d1bf34',
    borderWidth: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
})