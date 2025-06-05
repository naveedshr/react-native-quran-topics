import { StyleSheet, Text, View, ActivityIndicator, Image, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fontisto, Foundation, Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import ZikrHome from './screens/ZikrHome';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Qibla from './screens/Qibla';

const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Winky-Sans': require('./assets/fonts/WinkySans/WinkySans-Regular.ttf'),
    'Winky-Sans-Bold': require('./assets/fonts/WinkySans/WinkySans-Bold.ttf'),
    'Winky-Sans-SemiBold': require('./assets/fonts/WinkySans/WinkySans-SemiBold.ttf'),
    'Noto-Medium': require('./assets/fonts/NotoNastaliqUrdu-Medium.ttf'),
    'Noto-Regular': require('./assets/fonts/NotoNastaliqUrdu-Regular.ttf'),
    'arabic1': require('./assets/fonts/Naskh-Nastaleeq-IndoPak-QWBW.ttf'),
    'arabic2': require('./assets/fonts/MUHAMMADIBold.ttf'),
    'arabic3': require('./assets/fonts/UthmanicHafs1Ver09.ttf'),
    'arabic4': require('./assets/fonts/PDMS_SALEEM_QURANFONTQESHIP_0.ttf'),
    'urdu1': require('./assets/fonts/Lateef-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="lightblue" />
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#2e2e2e'}}>
      <NavigationContainer style={styles.container} screenOptions={{}}>
        <StatusBar
          style="light"
          // backgroundColor={'#424242'}
          // hidden={true}
        />
        <Tab.Navigator initialRouteName='Home' screenOptions={{ 
          headerTitleAlign: 'center', 
          
          headerShown: true, 
          headerStyle: {backgroundColor: '#2e2e2e'}, 
          headerTintColor: '#fff', 
          tabBarStyle: {height: 55, backgroundColor: '#2e2e2e'},
          tabBarIconStyle: {height: 40, width: 40, marginTop: 2},
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: "#787878" //"#7d9e98"
          }}>
          <Tab.Screen name="Home" component={Home} options={{
            title: "Quran Topics",
            tabBarIcon: ({ tintColor }) => (
              <FontAwesome5 name="book" size={35} color="#fff" />
            ),
            headerShown: false,
          }}/>
          <Tab.Screen name="ZikrHome" component={ZikrHome} options={{
            title: '"صبح و شام کے اذکار"',
            headerTitleStyle: {fontFamily: 'Noto-Regular'},
            tabBarIcon: ({ tintColor }) => (
              <FontAwesome5 name="clipboard-list" size={35} color="#fff" style={{margin:-0, padding: 0, alignSelf: 'center'}} />
            ),
            // headerShown: false,
          }}/>
          <Tab.Screen name="Qibla" component={Qibla} options={{
            title: "Qibla Direction",
            tabBarIcon: ({ tintColor }) => (
              <Fontisto name="compass-alt" size={35} color="#fff" style={{margin:-0, padding: 0, alignSelf: 'center'}} />
            ),
            // headerShown: false,
          }}/>
          <Tab.Screen name="About" component={About} options={{
            title: "About Us",
            tabBarIcon: ({ tintColor }) => (
              <MaterialIcons name="info" size={38} color="#fff" />
            ),
          }}/>
          <Tab.Screen name="Contact" component={Contact} options={{
            title: "Contact Us",
            tabBarIcon: ({ tintColor }) => (
              <MaterialIcons name="mail" size={38} color="#fff" />
            ),
            // headerShown: false,
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f0ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
