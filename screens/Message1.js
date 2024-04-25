import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Message1 = (props) => {
    return (
        <ScrollView>
            <View style={{ padding: 10, flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View style={{ borderRadius: 20 }}>
                        <View style={{ alignItems: 'center' }}>
                            <ImageBackground

                                source={require('../img/boy.png')} resizeMode="cover" style={{ width: 88, height: 88 }}>

                                <TouchableOpacity style={{ backgroundColor: '#fff', width: 24, height: 24, borderRadius: 12, position: 'absolute', top: 62, left: 60, paddingTop: 3, paddingLeft: 4 }}>
                                    <AntDesign name="camerao" size={17} color="black" />
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>

                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 500 }}>Aman <Text style={{ color: '#1A4683' }}>Singh</Text></Text>
                        <View style={{ width: 200, marginTop: 6 }}>
                            <Text style={{ fontSize: 12, fontWeight: 500 }}>Date of Birth - <Text style={{ color: 'grey' }}>12/10/2011</Text></Text>
                            <Text style={{ fontSize: 12, fontWeight: 500 }}>Grade -             <Text style={{ color: 'grey' }}>3rd B</Text></Text>
                        </View>

                    </View>
                </View>
                {/* ----------messageBox---- */}
                <TouchableOpacity onPress={() => props.navigation.navigate('Message')} style={{ width: 321, height: 119, borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', padding: 10, marginTop: 15 }}>
                    <View style={{ alignItems: 'flex-end', padding: 3 }}><Text style={{ fontSize: 12, color: 'grey' }}>22/03/2022</Text></View>
                    <Text style={{ fontSize: 12, color: '#1A4683', fontWeight: 600 }}>From: <Text style={{ color: 'black' }}>Principle</Text></Text>
                    <Text style={{ fontSize: 12, color: '#1A4683', marginTop: 10, marginBottom: 10, fontWeight: 600 }}>Subject: <Text style={{ color: 'black' }}>Fee related</Text></Text>
                    <Text style={{ fontSize: 12, color: "grey" }}>If you paid the school fee online from the soft...</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Message2')} style={{ width: 321, height: 119, borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', padding: 10, marginTop: 15 }}>
                    <View style={{ alignItems: 'flex-end', padding: 3 }}><Text style={{ fontSize: 12, color: 'grey' }}>22/03/2022</Text></View>
                    <Text style={{ fontSize: 12, color: '#1A4683', fontWeight: 600 }}>From: <Text style={{ color: 'black' }}>Principle</Text></Text>
                    <Text style={{ fontSize: 12, color: '#1A4683', marginTop: 10, marginBottom: 10, fontWeight: 600 }}>Subject: <Text style={{ color: 'black' }}>Fee related</Text></Text>
                    <Text style={{ fontSize: 12, color: "grey" }}>If you paid the school fee online from the soft...</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 321, height: 119, borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', padding: 10, marginTop: 15 }}>
                    <View style={{ alignItems: 'flex-end', padding: 3 }}><Text style={{ fontSize: 12, color: 'grey' }}>22/03/2022</Text></View>
                    <Text style={{ fontSize: 12, color: '#1A4683', fontWeight: 600 }}>From: <Text style={{ color: 'black' }}>Principle</Text></Text>
                    <Text style={{ fontSize: 12, color: '#1A4683', marginTop: 10, marginBottom: 10, fontWeight: 600 }}>Subject: <Text style={{ color: 'black' }}>Fee related</Text></Text>
                    <Text style={{ fontSize: 12, color: "grey" }}>If you paid the school fee online from the soft...</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 321, height: 119, borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', padding: 10, marginTop: 15 }}>
                    <View style={{ alignItems: 'flex-end', padding: 3 }}><Text style={{ fontSize: 12, color: 'grey' }}>22/03/2022</Text></View>
                    <Text style={{ fontSize: 12, color: '#1A4683', fontWeight: 600 }}>From: <Text style={{ color: 'black' }}>Principle</Text></Text>
                    <Text style={{ fontSize: 12, color: '#1A4683', marginTop: 10, marginBottom: 10, fontWeight: 600 }}>Subject: <Text style={{ color: 'black' }}>Fee related</Text></Text>
                    <Text style={{ fontSize: 12, color: "grey" }}>If you paid the school fee online from the soft...</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 321, height: 119, borderRadius: 10, borderWidth: 1, borderColor: 'lightgrey', padding: 10, marginTop: 15 }}>
                    <View style={{ alignItems: 'flex-end', padding: 3 }}><Text style={{ fontSize: 12, color: 'grey' }}>22/03/2022</Text></View>
                    <Text style={{ fontSize: 12, color: '#1A4683', fontWeight: 600 }}>From: <Text style={{ color: 'black' }}>Principle</Text></Text>
                    <Text style={{ fontSize: 12, color: '#1A4683', marginTop: 10, marginBottom: 10, fontWeight: 600 }}>Subject: <Text style={{ color: 'black' }}>Fee related</Text></Text>
                    <Text style={{ fontSize: 12, color: "grey" }}>If you paid the school fee online from the soft...</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    )
}

export default Message1