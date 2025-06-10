import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

export default function Topics() {
  const navigation = useNavigation();

  const boxesData = [
    { id: 1, label: 'نماز', screen: 'Nimaz' },
    { id: 2, label: 'روزہ', screen: 'Roza' },
    { id: 3, label: 'توبہ', screen: 'Toba' },
    { id: 4, label: 'صدقہ', screen: 'Charity' },
    { id: 5, label: 'انصاف', screen: 'Justice' },
    { id: 6, label: 'انعام', screen: 'Rewards' },
    { id: 7, label: 'عذاب', screen: 'Punishments' },
    { id: 8, label: 'توحید', screen: 'Tauheed' },
    { id: 9, label: 'خواتین', screen: 'Women' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LottieView source={require('../../assets/animations/bookanimation.json')}
          autoPlay
          loop
          resizeMode={'stretch'}
          speed={1}
          style={{ width: 160, height: 160, marginTop: 25, marginBottom: -15 }}
        />
        <Text style={{ fontSize: 11, fontWeight: '600', color: '#fff', fontFamily: 'Open-Sans' }}>🌙 Wednesday, 17 Shawwal 1446 AH</Text>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5, borderTopLeftRadius: 10, borderRadius: 10, backgroundColor: '#474747' }}>
          <Text style={styles.title}>Explore Topics</Text>
        </View>
      </View>
      <View style={{ flex: 1, margin: 2 }}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate(boxesData[0].screen)}
          >
            <View style={styles.test}><Image source={require('../../assets/images/pray.png')} style={styles.image} /></View>
            <Text style={styles.boxText}>{boxesData[0].label}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate(boxesData[1].screen)}
          >
            <View style={styles.test}><Image source={require('../../assets/images/fasting.png')} style={styles.image} /></View>
            <Text style={styles.boxText}>{boxesData[1].label}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate(boxesData[2].screen)}
          >
            <View style={styles.test}><Image source={require('../../assets/images/repentance.png')} style={styles.image} /></View>
            <Text style={styles.boxText}>{boxesData[2].label}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate(boxesData[3].screen)}
          >
            <View style={styles.test}><Image source={require('../../assets/images/charity.png')} style={styles.image} /></View>
            <Text style={styles.boxText}>{boxesData[3].label}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate(boxesData[4].screen)}
          >
            <View style={styles.test}><Image source={require('../../assets/images/justice.png')} style={styles.image} /></View>
            <Text style={styles.boxText}>{boxesData[4].label}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate(boxesData[5].screen)}
          >
            <View style={styles.test}><Image source={require('../../assets/images/reward.png')} style={styles.image} /></View>
            <Text style={styles.boxText}>{boxesData[5].label}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate(boxesData[6].screen)}
          >
            <View style={styles.test}><Image source={require('../../assets/images/prison.png')} style={styles.image} /></View>
            <Text style={styles.boxText}>{boxesData[6].label}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate(boxesData[7].screen)}
          >
            <View style={styles.test}><Image source={require('../../assets/images/tauheed.png')} style={styles.image} /></View>
            <Text style={styles.boxText}>{boxesData[7].label}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate(boxesData[8].screen)}
          >
            <View style={styles.test}><Image source={require('../../assets/images/women.png')} style={styles.image} /></View>
            <Text style={styles.boxText}>{boxesData[8].label}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
  },
  header: {
    width: Dimensions.get('window').width,
    height: 250,
    backgroundColor: '#2e2e2e',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontFamily: 'Open-Sans'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
    marginHorizontal: 1,
    flex: 1,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#b2c2bf',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    marginHorizontal: 2,
    paddingTop: 15,
  },
  boxText: {
    fontSize: 16,
    fontFamily: 'Noto-Medium',
    color: '#404040',
  },
  image: {
    height: 35,
    width: 35,
  },
  test: {
    height: 50,
    width: 50,
    marginBottom: 5,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#e3d040',
    borderColor: '#d1bf34',
    justifyContent: 'center',
    alignItems: 'center',
  },
});