import { StyleSheet, Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {mystyles} from '../../styles/globalstyles'
// import { mystyles } from '.../styles/globalstyles';
import { Feather } from '@expo/vector-icons';

export default function Women() {

  const [ayat, setAyat] = useState(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const rewards = require('../../data/women.json')

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
                <Text style={mystyles.reference}>{item.id}/10</Text>

              </View>

              <Text style={mystyles.arabicText}>{item.ar}</Text>
              <Text style={mystyles.englishText}>{item.en}</Text>
              <Text style={mystyles.urduText}>{item.ur}</Text>
              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{height:20, width:20, marginHorizontal: 5}}>
                <Feather name='copy' size={20} color={'#a8a8a8'}/>
              </TouchableOpacity>
              <TouchableOpacity style={{height:20, width:20, marginHorizontal: 5}}>
                <Feather name='share-2' size={20} color={'#a8a8a8'}/>
              </TouchableOpacity>
              </View>
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