import { StyleSheet, Text, View, FlatList } from 'react-native'
import { mystyles } from '../../styles/globalstyles'

export default function Nimaz() {

  const rewards = require('../../data/toba.json')

  return (
    <View style={styles.container}>
      <FlatList
        data={rewards}
        renderItem={({ item }) => {
          return (
            <View style={mystyles.card}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 0, marginBottom: 10 }}>
                <Text style={mystyles.reference}>QURAN: {item.reference}</Text>
                <Text style={mystyles.reference}>{item.id}/44</Text>
              </View>
              <Text style={mystyles.arabicText}>{item.ar}</Text>
              <Text style={mystyles.englishText}>{item.en}</Text>
              <Text style={mystyles.urduText}>{item.ur}</Text>
            </View>
          )
        }}
        keyExtractor={item => item.reference}
        ListHeaderComponent={<View style={{ height: 8 }}></View>}
        ListFooterComponent={<View style={{ height: 8 }}></View>}
        ItemSeparatorComponent={<View style={{ height: 10 }}></View>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})