import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgAttendence from '../components/SvgAttendence'
import SvgTimetable from '../components/SvgTimetable'
import SvgFeeUpdate from '../components/SvgFeeUpdate'
import SvgCirular from '../components/SvgCircular'
import SvgAssignment from '../components/SvgAssignment'
import SvgBirthTop from '../components/SvgBirthTop'
import SvgHome from '../components/SvgHome'
import SvgBirth from '../components/SvgBirth'


const HomePage = ({ navigation }) => {
    return (
        <View style={{}}>
            <View style={{ borderBottomWidth: 1, borderColor: 'lightgrey', padding: 5, paddingTop: 50, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15, backgroundColor: '#fff' }}>
                <View>
                    <Ionicons name="menu-outline" size={30} color="black" onPress={() => navigation.openDrawer()} />
                </View>
                <View><Text style={{ fontSize: 15, fontWeight: 800, marginTop: 5, }}>St. Josesph's <Text style={{ color: '#BB2A25' }}>Academy</Text></Text></View>
                <View>
                    <Ionicons onPress={() => navigation.navigate('Notification')} name="notifications-sharp" size={24} color="black" />
                </View>
            </View>
            <View style={{}}>
                <View style={{ margin: 15 }}>




                    <Text style={{ fontSize: 18, fontWeight: 600 }}>Hii, <Text style={{ color: '#BB2A25' }}>Arman</Text></Text>
                    <Text style={{ fontSize: 10, color: '#1A4683' }}>Be updated with students...</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 5 }}>
                    <View style={{ width: 331, height: 122 }}>
                        <SvgHome />
                    </View>
                    <View style={{ width: 331, height: 122, marginLeft: 15, marginRight: 15 }}>
                        <SvgHome />
                    </View>
                    <View style={{ width: 331, height: 122 }}>
                        <SvgHome />
                    </View>
                </ScrollView>
                <View style={{ margin: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>Explore <Text style={{ color: '#BB2A25' }}>Updates</Text></Text>
                    <Text style={{ fontSize: 10, color: '#1A4683' }}>Be updated with students...</Text>
                </View>

                {/* ----boxes--1---- */}


                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginRight: 12 }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Attendence')} style={{ marginTop: 8, marginLeft: 6, backgroundColor: '#fff' }}>
                            <SvgAttendence />

                        </TouchableOpacity>
                        <Text style={{ color: '#1A4683', fontWeight: 600 }}>Attendence</Text>
                    </View>
                    <View style={{ width: 105, height: 103, backgroundColor: '#fff', padding: 5, marginTop: 7, borderRadius: 5 }}>
                        <TouchableOpacity  >
                            <SvgTimetable />

                        </TouchableOpacity>
                        <Text style={{ color: '#1A4683', fontWeight: 600, marginLeft: 10, marginTop: 8 }}>Time Table</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('FeeUpdate')} style={{ width: 103, height: 103, marginTop: 8, backgroundColor: '#fff' }}>
                            <SvgFeeUpdate />

                        </TouchableOpacity>
                        <Text style={{ color: '#1A4683', fontWeight: 600 }}>Fee Update</Text>
                    </View>

                </View>

                {/* --------- */}
                {/* ----boxes2------ */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginRight: 12, marginTop: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Circular')} style={{ width: 106, height: 103, marginTop: 8, backgroundColor: '#fff' }}>
                            <SvgCirular />
                        </TouchableOpacity>
                        <Text style={{ color: '#1A4683', fontWeight: 600 }}>Circular</Text>
                    </View>
                    <View>
                        <View style={{ width: 105, height: 103, backgroundColor: '#fff', padding: 0, marginTop: 10, borderRadius: 7 }}>
                            <TouchableOpacity  >
                                <SvgBirthTop />
                                <SvgBirth />

                            </TouchableOpacity>

                        </View>
                        <Text style={{ color: '#1A4683', fontWeight: 600, marginLeft: 25 }}>Birthday</Text>
                    </View>
                    <View style={{ alignItems: 'center', borderRadius: 20 }}>
                        <TouchableOpacity style={{ width: 103, height: 103, marginTop: 8, backgroundColor: '#fff' }}>
                            <SvgAssignment />

                        </TouchableOpacity>
                        <Text style={{ color: '#1A4683', fontWeight: 600 }}>Assignment</Text>
                    </View>

                </View>

                {/* --------- */}

            </View>

        </View>

    )
}

export default HomePage