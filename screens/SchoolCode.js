import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


import SvgLogo from '../components/Svglogo'


import Checkbox from 'expo-checkbox'

const SchoolCode = (props) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={{}} >

            < SvgLogo />
            <View style={{ marginLeft: 30, marginRight: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>
                    Enter School <Text style={{ color: '#BB2A25' }}>Code</Text>
                </Text>
                <Text style={{ color: 'grey', fontSize: 12 }}>Enter your information below</Text>
            </View>
            <View style={{ alignItems: 'right', justifycontent: 'right' }}>
                <TextInput placeholder='Type here..' placeholderTextColor={'lightgrey'} style={styles.input} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{}}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Checkbox style={{ height: 15, width: 15 }} value={isChecked} onValueChange={setChecked} />
                        <TouchableOpacity>
                            <Text style={{ width: 120, marginLeft: 5, color: '#1A4683', fontSize: 12 }}>Remember Me  </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    marginTop: 50,
                    width: 285
                }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={styles.btn}>
                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('FindSchool')} style={[styles.btn, styles.contBtn]}>
                        <Text style={{ color: '#1A4683', fontSize: 14, fontWeight: 500 }}>Find your school</Text>
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
        width: 285,
        height: 44,
        backgroundColor: '#1A4683',
        marginTop: 10,
        justifyContent: 'center',
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 20
    },
    contBtn: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#1A4683',
        marginTop: 16,
    }
});