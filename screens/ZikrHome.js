import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Zikr from './Zikr/Zikr';
import Tasbeeh from './Zikr/Tasbeeh';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function Home() {
    return (
        <View style={styles.container}>
        <Stack.Navigator initialRouteName='Zikr' screenOptions={{
            headerTitleAlign: 'center',
            headerShown: true,
            headerTitleStyle: styles.headerTitle,
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name='Zikr' component={Zikr} options={{
                title: '"صبح و شام کے اذکار"',
                headerShown: false,
            }}/>
            <Stack.Screen name='Tasbeeh' component={Tasbeeh} options={{
                title: '"تسبیح"',
                headerShown: false,
            }} />
        </Stack.Navigator>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight,
    },
    headerTitle: {
        fontSize: 22, 
        color: '#fff', 
        fontFamily: 'Noto-Regular',
    },
    headerStyle: {
        backgroundColor:'#424242',
    },
})