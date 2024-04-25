import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
import SvgLogo from '../components/Svglogo'


const SchoolCode = (props) => {

    return (
        <View style={{}} >
            {/* <View style={{ width: 325, height: 307, marginTop: 89, marginLeft: 30 }}>
                <Image
                    style={{ width: "100%", borderRadius: 20, marginLeft: 6 }}
                    source={require("../img/Frame3.png")}
                />
            </View> */}
            <SvgLogo />
            <View style={{ marginLeft: 30, marginRight: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>
                    Let's get you <Text style={{ color: '#BB2A25' }}>Logged in</Text>
                </Text>
                <Text style={{ color: 'grey', fontSize: 12 }}>Enter your information below</Text>
            </View>
            <View style={{ alignItems: 'right', justifycontent: 'right' }}>
                <TextInput placeholder='username' placeholderTextColor={'lightgrey'} style={styles.input} />
                <TextInput placeholder='password' placeholderTextColor={'lightgrey'} style={styles.input} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{}}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>

                        <TouchableOpacity style={{ marginRight: 9 }}>
                            <Text style={{ width: 120, color: '#1A4683', fontSize: 12 }}>Forgot password </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    marginTop: 25,
                    width: 285
                }}>
                    <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate('TabScreen')}>
                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Log in</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}


export default SchoolCode

const styles = StyleSheet.create({
    input: {
        marginTop: 14,
        height: 52,
        borderWidth: 0.5,
        borderColor: '#1A4683',
        borderRadius: 10,
        paddingLeft: 10,
        marginRight: 30, marginLeft: 30
    },
    btn: {
        width: 270,
        height: 44,
        backgroundColor: '#1A4683',
        marginTop: 10,
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 20
    },

});