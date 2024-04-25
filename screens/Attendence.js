import { View, Text } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
import { ScrollView } from 'react-native-gesture-handler'

const Attendence = () => {
    return (
        <ScrollView>
            <View>
                <View style={{ borderWidth: 1, borderColor: '#D1716D', margin: 20, borderRadius: 10 }}>
                    <Calendar
                        style={{ borderRadius: 10 }}
                        markingType={'custom'}
                    // markedDates={{
                    //     '2023-12-28': { customStyles: { customStyles: { backgroundColor: 'black' }, text: { color: 'white', backgroundColor: 'black', padding: 3 } } }
                    // }}
                    />
                    <View style={{ backgroundColor: '#D1716D', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <Text style={{ color: '#fff', fontWeight: 500 }}>Last Update</Text>
                        <Text style={{ color: '#fff', fontWeight: 500 }}>:</Text>
                        <Text style={{ color: '#fff', fontWeight: 500 }}>12/06/2023</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                        <Text style={{ fontWeight: 500 }}>Total <Text style={{ color: '#1A4683' }}>School Days</Text></Text>
                        <Text style={{ fontWeight: 500 }}>:</Text>
                        <Text style={{ fontWeight: 500 }}>603</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                        <Text style={{ fontWeight: 500 }}>Total <Text style={{ color: '#26843A' }}>Present Days</Text></Text>
                        <Text style={{ fontWeight: 500 }}>:</Text>
                        <Text style={{ fontWeight: 500 }}>603</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                        <Text style={{ fontWeight: 500 }}>Total <Text style={{ color: '#BB2A25' }}>Absent Days</Text></Text>
                        <Text style={{ fontWeight: 500 }}>:</Text>
                        <Text style={{ fontWeight: 500 }}>603</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                        <Text style={{ fontWeight: 500 }}>Total <Text style={{ color: '#1A4683' }}>Leave</Text></Text>
                        <Text style={{ fontWeight: 500 }}>:</Text>
                        <Text style={{ fontWeight: 500 }}>603</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                        <Text style={{ fontWeight: 500 }}>Total <Text style={{ color: '#1A4683' }}>School Days</Text></Text>
                        <Text style={{ fontWeight: 500 }}>:</Text>
                        <Text style={{ fontWeight: 500 }}>603</Text>
                    </View>

                    {/* -----------Analytics */}

                    <View style={{ backgroundColor: '#D1716D', alignItems: 'center', padding: 6 }}>
                        <Text style={{ color: '#fff', fontWeight: 500 }}>Analytics</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginLeft: 20, marginRight: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#1A4683', fontSize: 15, fontWeight: 500, marginTop: 10 }}>Present</Text>
                            <View style={{ borderWidth: 1, borderColor: 'lightgrey', padding: 10, borderRadius: 19, borderTopWidth: 3, borderLeftWidth: 3, marginLeft: 10 }}>
                                <Text>84.5%</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#BB2A25', fontSize: 15, fontWeight: 500, marginTop: 10 }}>Absent</Text>
                            <View style={{ borderWidth: 1, borderColor: '#BB2A25', padding: 10, borderRadius: 19, borderTopWidth: 3, borderLeftWidth: 3, marginLeft: 10 }}>
                                <Text>15.9%</Text>
                            </View>
                        </View>
                    </View>
                    {/* ---- */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginLeft: 25, marginRight: 25 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#BB2A25', fontSize: 15, fontWeight: 500, marginTop: 10, }}>Late</Text>
                            <View style={{ borderWidth: 1, borderColor: '#BB2A25', padding: 10, borderRadius: 19, borderTopWidth: 3, borderLeftWidth: 3, marginLeft: 20 }}>
                                <Text>0.0%</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#1A4683', fontSize: 15, fontWeight: 500, marginTop: 10 }}>Leave</Text>
                            <View style={{ borderWidth: 1, borderColor: '#1A4683', padding: 10, borderRadius: 19, borderTopWidth: 3, borderLeftWidth: 3, marginLeft: 10 }}>
                                <Text>15.9%</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Attendence