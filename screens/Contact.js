import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const Data = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <View style={{
                width: 332, height: 620, borderWidth: 1, borderColor: 'grey', borderRadius: 12,
                borderLeftWidth: 4, borderLeftColor: '#7A94B7'
            }}>
                <View style={{ margin: 20 }}>
                    <Text style={{ color: '#1A4683', fontSize: 18, fontWeight: 600, marginTop: 10 }}>Support</Text>
                    <Text style={{ fontSize: 10, color: '#494B4A', marginTop: 2 }}>Enter your information below</Text>
                    <Text style={{ fontSize: 12, marginTop: 15, marginBottom: 5 }}>First Name *</Text>
                    <TextInput style={styles.input} />
                    <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 5 }}>Last Name *</Text>
                    <TextInput style={styles.input} />
                    <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 5 }}>Subject *</Text>
                    <TextInput style={styles.input} />
                    <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 5 }}>Email *</Text>
                    <TextInput style={styles.input} />
                    <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 5 }}>Message *</Text>
                    <TextInput style={[styles.input, styles.messageBox]} />

                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Contact = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: true }} >
            <Stack.Screen name='Contact' component={Data} />

        </Stack.Navigator>
    )
}

export default Contact
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 36,
        borderRadius: 4,
        paddingLeft: 10
    },
    messageBox: {
        height: 115
    },
    btn: {
        width: 285,
        height: 44,
        backgroundColor: '#1A4683',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

})