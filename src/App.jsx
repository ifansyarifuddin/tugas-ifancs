import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import beranda from './screens/beranda';
import Info from './screens/Info';
import Privasi from './screens/Privasi';
import Tafsir from './router/Tafsir';
import TafsirDetail from './router/TafsirDetail';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={beranda} 
      options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Privasi" component={Privasi} 
      options={{
          tabBarLabel: 'Privasi Police',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="police-badge" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Info" component={Info} options={{
          tabBarLabel: 'Info Aplikasi',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Tafsir" component={Tafsir}/>
        <Stack.Screen name="TafsirDetail" component={TafsirDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})