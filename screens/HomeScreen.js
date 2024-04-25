import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomePage from './HomePage';
import Notification from './Notification';
import Attendence from './Attendence';
import CustomDrawer from './CustomDrawer';
import FeeUpdate from './FeeUpdate';
import Circular from './Circular';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='HomePage' component={HomePage} />
            <Stack.Screen name='Attendence' options={{ headerShown: true }} component={Attendence} />
            <Stack.Screen name='Notification' options={{ headerShown: true }} component={Notification} />
            <Stack.Screen name='FeeUpdate' options={{ headerShown: true, title: 'Fee Updates' }} component={FeeUpdate} />
            <Stack.Screen name='Circular' options={{ headerShown: true }} component={Circular} />
            {/* <Stack.Screen name='Attendence' component={Attendence} /> */}
        </Stack.Navigator>
    )
}
const HomeScreen = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name='HomeScreenStack' component={HomeScreenStack} />
        </Drawer.Navigator>

    )
}

export default HomeScreen