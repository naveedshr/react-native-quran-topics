import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack';
import Nimaz from './Topics/Nimaz';
import Justice from './Topics/Justice';
import Rewards from './Topics/Rewards';
import Charity from './Topics/Charity';
import Punishments from './Topics/Punishments';
import Tauheed from './Topics/Tauheed';
import Women from './Topics/Women';
import Topics from './Topics/Topics';
import Roza from './Topics/Roza';
import Toba from './Topics/Toba';

const Stack1 = createNativeStackNavigator();
const Stack = createStackNavigator();

export default function Home() {
    return (
        <View style={styles.container}>
            <Stack.Navigator initialRouteName='Topics' screenOptions={{
                headerTitleAlign: 'center',
                headerShown: true,
                headerTitleStyle: styles.headerTitle,
                headerStyle: styles.headerStyle,
                headerTintColor: '#fff',
            }}>
                <Stack.Screen name='Topics' component={Topics} options={{
                    title: "Topics",
                    headerShown: false,
                }} />
                <Stack.Screen name='Nimaz' component={Nimaz} options={{
                    title: '"نماز سے متعلق آیات"',
                }} />
                <Stack.Screen name='Roza' component={Roza} options={{
                    title: '"روزہ سے متعلق آیات"'
                }} />
                <Stack.Screen name='Toba' component={Toba} options={{
                    title: '"توبہ سے متعلق آیات"',
                }} />
                <Stack.Screen name='Charity' component={Charity} options={{
                    title: '"صدقہ سے متعلق آیات"',
                }} />
                <Stack.Screen name='Justice' component={Justice} options={{
                    title: '"انصاف سے متعلق آیات"'
                }} />
                <Stack.Screen name='Rewards' component={Rewards} options={{
                    title: '"انعامات سے متعلق آیات"'
                }} />
                <Stack.Screen name='Punishments' component={Punishments} options={{
                    title: '"عذاب سے متعلق آیات"'
                }} />
                <Stack.Screen name='Tauheed' component={Tauheed} options={{
                    title: '"توحید سے متعلق آیات"'
                }} />
                <Stack.Screen name='Women' component={Women} options={{
                    title: '"خواتین سے متعلق آیات"'
                }} />
            </Stack.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 22,
        color: '#fff',
        fontFamily: 'Noto-Regular',
    },
    headerStyle: {
        backgroundColor: '#2e2e2e',
        height: 65,
    },
})