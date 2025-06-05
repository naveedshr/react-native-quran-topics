import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {mystyles} from '../../styles/globalstyles'

export default function Nimaz() {

  const [ayat, setAyat] = useState(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const rewards = require('../../data/nimaz.json')
  
  const fetchQuran = async () => {
    const response = await fetch('http://api.alquran.cloud/v1/ayah/3:15/editions/quran-uthmani,en.asad,ur.kanzuliman');
    const data = await response.json();
    if (response.ok) {
      setAyat(data);
    }
  }

  useEffect(() => {
    // fetchQuran();
  }, []);

  if (loading) {
    return (
      <Text>Loading</Text>
    )
  }

  return (

    <View style={{flex: 1}}>
      <FlatList
        data={rewards}
        renderItem={({ item }) => {
          return (
            <View style={mystyles.card}>
              <View style={{ flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 0, marginBottom: 10 }}>
                <Text style={mystyles.reference}>QURAN: {item.reference}</Text>
                <Text style={mystyles.reference}>{item.id}/11</Text>

              </View>

              <Text style={mystyles.arabicText}>{item.ar}</Text>
              <Text style={mystyles.englishText}>{item.en}</Text>
              <Text style={mystyles.urduText}>{item.ur}</Text>
            </View>
          )
        }}
        keyExtractor={item => item.reference}
        ListHeaderComponent={<View style={{ height: 8}}></View>}
        ListFooterComponent={<View style={{ height: 8}}></View>}
        ItemSeparatorComponent={<View style={{ height: 10}}></View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9f0ee',
    // backgroundColor: '#000',
  },

})