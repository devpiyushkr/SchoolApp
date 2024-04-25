import { StatusBar } from 'expo-status-bar';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './screens/Login';
import SchoolCode from './screens/SchoolCode';
import Welcome from './screens/Welcome';
import FindSchool from './screens/FindSchool';
import FindSchl from './screens/FindSchl';
import Contact from './screens/Contact';
import ProfileScreen from './screens/ProfileScreen';
import MessageScreen from './screens/MessageScreen';
import HomeScreen from './screens/HomeScreen';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabScreen = () => {
  return (

    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? "#BB2A25" : "black"} size={26} />
          ),
        }}

        name='HomeScreen' component={HomeScreen} />
      <Tab.Screen name='MessageScreen' component={MessageScreen}
        options={{

          tabBarLabel: 'Message',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="message" size={24} color={focused ? "#BB2A25" : "black"} />
          ),
        }}

      />
      <Tab.Screen name='Contact' component={Contact}
        options={{
          tabBarLabel: 'Call',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="call-sharp" size={24} color={focused ? "#BB2A25" : "black"} />
          )
        }}
      />
      <Tab.Screen name='ProfileScreen' component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="person" size={24} color={focused ? "#BB2A25" : "black"} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='SchoolCode' component={SchoolCode} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='FindSchool' component={FindSchool} />
        <Stack.Screen name='FindSchl' component={FindSchl} />
        <Stack.Screen name="TabScreen" component={TabScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

