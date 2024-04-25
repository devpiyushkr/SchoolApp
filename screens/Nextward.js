import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Nextward = (props) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 360, height: 650, margin: 20, borderRadius: 10, borderWidth: 0.5, borderColor: 'lightgrey' }}>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: 'grey', fontSize: 12 }}>2023-2024</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        <View style={{ borderRadius: 20 }}>
                            <View style={{ alignItems: 'center' }}>
                                <ImageBackground
                                    imageStyle={{ borderRadius: 20 }}
                                    source={require('../img/girl.png')} resizeMode="cover" style={{ width: 101, height: 99 }}>

                                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 24, height: 24, borderRadius: 12, position: 'absolute', top: 72, left: 75, paddingTop: 3, paddingLeft: 4 }}>
                                        <AntDesign name="camerao" size={17} color="black" />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>
                            <TouchableOpacity style={[styles.btn, { marginTop: 13 }]}>
                                <Text style={{ color: '#fff' }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 500 }}>Rohit <Text style={{ color: '#1A4683' }}>Karmakar</Text></Text>
                            <View style={{ width: 200, marginTop: 6 }}>
                                <Text style={{ fontSize: 12 }}>Address - <Text style={{ color: 'grey' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text></Text>
                            </View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('AddProfile')} style={[styles.btn, styles.wardBtn]}>
                                <Text style={{ color: '#1A4683' }}>Add Ward</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* --------- */}
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.4, borderColor: 'grey', borderBottomWidth: 1, borderColor: 'lightgrey', padding: 10 }}>
                            <Text style={{ fontSize: 14 }}>Grade</Text>
                            <Text style={{ marginBottom: 0, fontSize: 14, color: '#1A4683' }}>3rd B</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.4, borderColor: 'grey', borderBottomWidth: 1, borderColor: 'lightgrey', padding: 10, marginTop: 10, borderBottomColor: 'red' }} >
                            <Text style={{ fontSize: 14 }}>Date of Birth</Text>
                            <Text style={{ fontSize: 14, color: '#1A4683' }}>03/12/2000</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.4, borderColor: 'grey', borderBottomWidth: 1, borderColor: 'lightgrey', padding: 10, marginTop: 10, borderBottomColor: 'red' }}>
                            <Text style={{ fontSize: 14 }}>Roll no</Text>
                            <Text style={{ marginBottom: 5, fontSize: 14, color: '#1A4683' }}>3</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.4, borderColor: 'grey', borderBottomWidth: 1, borderColor: 'lightgrey', padding: 10, marginTop: 10, borderBottomColor: 'red' }}>
                            <Text style={{ fontSize: 14 }}>Blood Group</Text>
                            <Text style={{ marginBottom: 5, fontSize: 14, color: '#1A4683' }}>O +ve</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 0.4, borderColor: 'grey', borderBottomWidth: 1, borderColor: 'lightgrey', padding: 10, marginTop: 10, borderBottomColor: 'red' }}>
                            <Text style={{ fontSize: 14 }}>Student Id</Text>
                            <Text style={{ marginBottom: 5, fontSize: 14, color: '#1A4683' }}>21Def51</Text>
                        </View>
                    </View>
                    <View style={{ padding: 20 }}>
                        <TouchableOpacity style={[styles.btn, { height: 44 }]} >
                            <Text style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Log out</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn, styles.nextward]} >
                            <Text style={{ color: "#1A4683", fontSize: 14, fontWeight: 500, marginLeft: 100 }}>Next Ward</Text>
                            <AntDesign name="arrowright" size={24} color="#1A4683" style={{ marginLeft: 90 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </ScrollView>
    )
}

export default Nextward
const styles = StyleSheet.create({
    btn: {

        height: 34,
        backgroundColor: '#1A4683',
        marginTop: 10,
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 20
    },
    wardBtn: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        marginTop: 35,
        marginLeft: 10,
        borderColor: '#1A4683',
        width: 172

    },
    nextward: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        marginTop: 20,
        height: 44,
        borderColor: '#1A4683',
        flexDirection: 'row'
    },


});