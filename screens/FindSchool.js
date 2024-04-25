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

const FindSchool = (props) => {
    const [name, setName] = useState('')
    const [selected, setSelected] = React.useState(null);

    console.log("selected", selected)
    console.log("name: ", name)

    const nav = () => {
        props.navigation.navigate('FindSchl')
    }
    return (
        <View style={{}} >
            <View style={{ width: 325, height: 307, marginTop: 40, marginLeft: 0 }}>
                {/* <Image
                    style={{ width: "100%", borderRadius: 20, marginLeft: 6 }}
                    source={require("../img/Frame3.png")}
                /> */}
                <SvgLogo />
            </View>
            <View style={{ marginLeft: 30, marginRight: 30, marginTop: 80 }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>
                    Find Your <Text style={{ color: '#BB2A25' }}>School</Text>
                </Text>
                <Text style={{ color: 'grey', fontSize: 12, marginTop: 5 }}>Select your information below</Text>
            </View>
            <View style={{
                alignItems: 'right', justifycontent: 'right', marginLeft: 28, marginRight: 30,
                marginTop: 30
            }}>
                <SelectList
                    textStyle={{ fontSize: 9, paddingTop: 8, paddingBottom: 8 }}
                    inputStyles={{ fontSize: 14, color: '#fff', fontWeight: 500 }}
                    boxStyles={{ borderRadius: 18, height: 52, padding: 0, borderColor: '#8B9FB7', backgroundColor: '#1A4683' }}
                    dropdownTextStyles={{ fontSize: 13, borderBottomWidth: 0.4, padding: 10, borderColor: 'lightgrey' }}
                    dropdownStyles={{ borderColor: '#8B9FB7' }}
                    search={false}
                    maxHeight={150}
                    data={data}
                    setSelected={(val) => setSelected(val)}
                    placeholder='School Name'
                    onChange={(value) => setName(value)}
                />
                {
                    selected != null ? nav() : null
                }
            </View>

        </View>
    )

}

export default FindSchool

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