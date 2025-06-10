import { StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import ZikrHome from './screens/ZikrHome';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Qibla from './screens/Qibla';

const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf'), //yes
    'Noto-Medium': require('./assets/fonts/NotoNastaliqUrdu-Medium.ttf'), //yes
    'Noto-Regular': require('./assets/fonts/NotoNastaliqUrdu-Regular.ttf'), //yes
    'arabic4': require('./assets/fonts/PDMS_SALEEM_QURANFONTQESHIP_0.ttf'), //yes
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="lightblue" />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2e2e2e' }}>
      <NavigationContainer style={styles.container} screenOptions={{}}>
        <StatusBar
          style="light"
        // backgroundColor={'#424242'}
        // hidden={true}
        />
        <Tab.Navigator initialRouteName='Home' screenOptions={{
          headerTitleAlign: 'center',

          headerShown: true,
          headerStyle: { backgroundColor: '#2e2e2e' },
          headerTintColor: '#fff',
          tabBarStyle: { height: 65, backgroundColor: '#2e2e2e' },
          tabBarIconStyle: { height: 40, width: 40, marginTop: 6 },
          tabBarShowLabel: false,
          tabBarLabelStyle: { margin: 0, fontSize: 12, color: 'white', },
          tabBarActiveBackgroundColor: "#525252" //"#7d9e98"
        }}>
          <Tab.Screen name="Home" component={Home} options={{
            title: "Quran Topics",
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./assets/images/tabbar/home.png')} style={{ width: 25, height: 25 }} />
            ),
            headerShown: false,
          }} />
          <Tab.Screen name="ZikrHome" component={ZikrHome} options={{
            title: '"صبح و شام کے اذکار"',
            headerTitleStyle: { fontFamily: 'Noto-Regular' },
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./assets/images/tabbar/rectangle-list.png')} style={{ width: 25, height: 25 }} />
            ),
            // headerShown: false,
          }} />
          <Tab.Screen name="Qibla" component={Qibla} options={{
            title: "Qibla Direction",
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./assets/images/tabbar/wind-rose.png')} style={{ width: 45, height: 45 }} />
            ),
            // headerShown: false,
          }} />
          <Tab.Screen name="About" component={About} options={{
            title: "About Us",
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./assets/images/tabbar/square-info.png')} style={{ width: 25, height: 25 }} />
            ),
          }} />
          <Tab.Screen name="Contact" component={Contact} options={{
            title: "Contact Us",
            tabBarIcon: ({ tintColor }) => (
              <Image source={require('./assets/images/tabbar/envelope.png')} style={{ width: 25, height: 25 }} />
            ),
            // headerShown: false,
          }} />
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
