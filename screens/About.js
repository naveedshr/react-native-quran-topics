import { Text, SafeAreaView, View, Image, StyleSheet, Dimensions, Linking, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function About() {

  const OpenURL = async (url) => {
    await Linking.openURL(url);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.description}>
          Discover the beauty and guidance of the Holy Quran with our comprehensive Islamic application. This app aims to facilitate the understanding and application of the tolerant teachings of Islam in your daily lives. Through it, you can delve into the verses of the Holy Quran and explore them according to specific topics such as prayer (Namaz), fasting (Roza), charity (Sadqa), and many others.
          {"\n\n"}
          In addition, the application provides an accurate compass to determine the direction of the Qibla, ensuring that you perform your prayers in the correct direction wherever you are. To enhance the remembrance of Allah in your life, the application includes a feature for daily Adhkar (Izkaar) and a Tasbeeh counter (Tasbeeh Counter) to help you maintain your recitations and supplications.
          {"\n\n"}
          We strive to make this application your trusted companion in your faith journey, providing you with the tools and resources necessary to deepen your understanding of Islam and strengthen your connection with Allah Almighty.
        </Text>
        <Text style={[styles.description, {fontSize:13,fontWeight: 'bold', alignSelf: 'center'}]}>Explore, Understand, Elevate Your Faith</Text>
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#474747', margin: 10 }}>FOLLOW US</Text> */}
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <FontAwesome style={{ marginHorizontal: 10, marginVertical: 5 }} name="facebook-square" size={30} color="#474747" onPress={() => { OpenURL("http://www.facebook.com/capitaluniversityislamabad/") }} />
          <FontAwesome style={{ marginHorizontal: 10, marginVertical: 5 }} name="instagram" size={30} color="#474747" onPress={() => { OpenURL("https://www.instagram.com/capital_university") }} />
          <FontAwesome style={{ marginHorizontal: 10, marginVertical: 5 }} name="twitter-square" size={30} color="#474747" onPress={() => { OpenURL("https://twitter.com/Capital_U") }} />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#ecf0f1',
    alignItems: 'center',
    // padding: 8,
  },
  aboutHeader: {
    width: Dimensions.get('window').width,
    height: 235,
    backgroundColor: '#A0153E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutImage: {
    // backgroundColor: '#fff',
    height: 120,
    width: 151,
    // borderRadius: 75,
    // borderColor: '#fff',
    // borderWidth: 3,
    marginTop: 45,
  },
  description: {
    textAlign: 'justify',
    marginVertical: 10,
    marginHorizontal: 12,
    fontSize: 14,
    fontFamily: 'Open-Sans',
    color: '#474747'
  },
});
