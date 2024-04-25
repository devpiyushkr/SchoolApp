import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import SvgHomeProfile from '../components/SvgHomeProfile'
import SvgAssignmentIcon from '../components/SvgAssignmentIcon'
import FeeUpadte from '../components/IconFeeUpdate'
import Birthday from '../components/IconBirthday'
import Circular from '../components/IconCircular'
import Timetable from '../components/IconTimetable'


const CustomDrawer = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#FFD1E3', }}>
                <View style={{ margin: 20, marginTop: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View></View>
                    <View>
                        <Text style={{ fontSize: 14, fontWeight: 800, marginTop: 5 }}>St. Josesph's <Text style={{ color: '#BB2A25' }}>Academy</Text></Text>
                        <Text style={{ fontSize: 7, marginLeft: 10 }}>Laborate Est Orale ( work is workship)</Text>
                    </View>
                    <AntDesign onPress={() => navigation.closeDrawer()} name="arrowleft" size={24} color="black" />
                </View>
                <View style={{ marginTop: 0, marginLeft: 25, width: 240 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <SvgHomeProfile style={{ margin: 0, backgroundColor: '#fff', borderTopLeftRadius: 10 }} />
                        <View style={{ borderWidth: 0.4, borderColor: 'lightgrey', width: 146, alignItems: 'center', borderTopRightRadius: 10, backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 18, fontWeight: 500, marginTop: 5 }}>Aman Singh</Text>
                            <Text style={{ fontSize: 10, fontWeight: 400 }}>Grade 3rd B</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ width: 248, height: 33, backgroundColor: '#BB2A25', alignItems: 'center', borderRadius: 20, position: 'relative', bottom: 12 }}>
                        <Text style={{ color: '#fff', fontSize: 12, fontWeight: 400, marginTop: 8 }}>Edit</Text>
                    </TouchableOpacity>

                </View>
            </View>

            {/* ------------------ */}

            <TouchableOpacity onPress={() => navigation.navigate('Attendence')} style={{ flexDirection: 'row', borderWidth: 0.5, borderColor: 'lightgrey', padding: 7, marginTop: 20 }}>
                <Ionicons style={{ marginLeft: 16 }} name="person" size={24} color="black" />

                <Text style={{ marginLeft: 15, marginTop: 3 }}>Attendence</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('FeeUpdate')} style={{ flexDirection: 'row', borderWidth: 0.5, borderColor: 'lightgrey', padding: 8, marginTop: 17, paddingLeft: 20 }}>

                <FeeUpadte />
                <Text style={{ marginLeft: 15, marginTop: 0 }}>Fee Updates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 0.5, borderColor: 'lightgrey', padding: 8, marginTop: 17, paddingLeft: 20 }}>

                <Birthday />
                <Text style={{ marginLeft: 15, marginTop: 0 }}>Birthdays</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 0.5, borderColor: 'lightgrey', padding: 8, marginTop: 17, paddingLeft: 20 }}>

                <SvgAssignmentIcon />
                <Text style={{ marginLeft: 15, marginTop: 0 }}>Assignment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Circular')} style={{ flexDirection: 'row', borderWidth: 0.5, borderColor: 'lightgrey', padding: 8, marginTop: 17, paddingLeft: 20 }}>

                <Circular />
                <Text style={{ marginLeft: 23, marginTop: 0 }}>Circular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 0.5, borderColor: 'lightgrey', padding: 8, marginTop: 17, paddingLeft: 20 }}>

                <Timetable />
                <Text style={{ marginLeft: 15, marginTop: 0 }}>Time Table</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 200, height: 35, backgroundColor: '#BB2A25', alignItems: 'center', borderRadius: 20, position: 'absolute', bottom: 12, marginLeft: 30 }}>
                <Text style={{ color: '#fff', marginTop: 8, fontSize: 13 }}>Log Out</Text>
            </TouchableOpacity>
        </View >
    )
}

export default CustomDrawer