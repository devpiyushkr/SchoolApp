import { View, Text, Image, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import SvgLogo from '../components/Svglogo'
const data = [
    { key: '1', value: 'AB School' },
    { key: '2', value: 'Police DAV Jalandar' },
    { key: '3', value: 'St. Joseph Academy Dehradun' },
    { key: '4', value: 'Academy' },

]

const FindSchl = (props) => {
    const [selected, setSelected] = React.useState(null);

    return (
        <View style={{}} >
            <View style={{ width: 325, height: 307, marginTop: 40, marginLeft: 0 }}>
                <SvgLogo />
            </View>
            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 70 }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>
                    Find Your <Text style={{ color: '#BB2A25' }}>School</Text>
                </Text>
                <Text style={{ color: 'grey', fontSize: 12, marginTop: 5 }}>Select your information below</Text>
            </View>
            <View style={{ alignItems: 'right', justifycontent: 'right' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#1A4683', height: 50, alignItems: 'center', marginLeft: 30, marginRight: 30, marginTop: 30, borderRadius: 20 }}>
                    <Text style={{ marginLeft: 20 }}>Dav School</Text>
                    <Text style={{ marginRight: 20 }}>^</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{}}></View>
                    <View style={{ width: 200 }}>

                        <TouchableOpacity style={{ marginRight: 9 }}>
                            <Text style={{ width: 120, fontSize: 14, fontWeight: 700, width: '100%' }}>School Code -<Text style={{ color: 'red' }}>SJDAJH</Text>  </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    marginTop: 25,
                    width: 285
                }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={styles.btn}>
                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Back To Login</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default FindSchl

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

});