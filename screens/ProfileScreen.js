import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile1 from './Profile1';
import AddProfile from './AddProfile';
import Nextward from './Nextward';

const Stack = createNativeStackNavigator();
const ProfileScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name='Profile1' component={Profile1} options={{ title: 'Profile' }} />
            <Stack.Screen name='AddProfile' component={AddProfile} options={{ title: 'Profile' }} />
            <Stack.Screen name='NextWard' component={Nextward} options={{ title: 'Profile' }} />

        </Stack.Navigator>
    )
}

export default ProfileScreen