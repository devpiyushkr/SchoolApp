import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Message from './Message';
import Message1 from './Message1';
import Message2 from './Message2';
const Stack = createNativeStackNavigator();
const MessageScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name='Message1' component={Message1} options={{ title: 'Message' }} />
            <Stack.Screen name='Message' component={Message} options={{ title: 'Message' }} />
            <Stack.Screen name='Message2' component={Message2} options={{ title: 'Message' }} />
        </Stack.Navigator>
    )
}

export default MessageScreen