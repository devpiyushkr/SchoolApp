import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const FeeUpdate = () => {
    return (
        <ScrollView>
            <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20, backgroundColor: '#fff' }}>
                <View style={{ width: 338, borderColor: 'lightgrey', borderWidth: 0.6, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                    <View style={{ backgroundColor: 'black', height: 34, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>Status</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'lightgrey', borderWidth: 0.2, borderBottomWidth: 0.6, padding: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Admission no.</Text>
                        <Text style={{ color: '#1A4683', fontWeight: 500 }}>19033</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'lightgrey', borderWidth: 0.2, borderBottomWidth: 0.6, padding: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Father's Name</Text>
                        <Text style={{ color: '#1A4683', fontWeight: 500 }}>Arun Kumar</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'lightgrey', borderWidth: 0.2, borderBottomWidth: 0.6, padding: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Student Name</Text>
                        <Text style={{ color: '#1A4683', fontWeight: 500 }}>Aman Singh</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'lightgrey', borderWidth: 0.2, borderBottomWidth: 0.6, padding: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Session</Text>
                        <Text style={{ color: '#1A4683', fontWeight: 500 }}>2021-2024</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'lightgrey', borderWidth: 0.2, borderBottomWidth: 0.6, padding: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Moblie Number</Text>
                        <Text style={{ color: '#1A4683', fontWeight: 500 }}>978300322</Text>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'lightgrey', borderWidth: 0.2, borderBottomWidth: 0.6, padding: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Class & Section</Text>
                        <Text style={{ color: '#1A4683', fontWeight: 500 }}>12 B</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'lightgrey', borderWidth: 0.2, borderBottomWidth: 0.6, padding: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Payment Status</Text>
                        <Text style={{ color: '#BB2A25', fontWeight: 500 }}>Pending</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'lightgrey', borderWidth: 0.2, borderBottomWidth: 0.6, padding: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Date</Text>
                        <Text style={{ color: '#1A4683', fontWeight: 500 }}>22/12/2023</Text>
                    </View>

                    {/* Fee Details----- */}

                    <View style={{ backgroundColor: 'black', height: 34, alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 10, borderTopLeftRadius: 10, marginTop: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>Fee Details</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 0.2, borderColor: 'lightgrey', borderBottomWidth: 0.6 }}>
                        <Text style={{ color: '#BB2A25', fontSize: 14 }}>Fee Head</Text>
                        <Text style={{ color: '#BB2A25', fontSize: 14 }}>Due Date</Text>
                        <Text style={{ color: '#BB2A25', fontSize: 14 }}>Amount</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 10, borderWidth: 0.2, borderColor: 'lightgrey', borderBottomWidth: 0.6 }}>
                        <Text style={{ fontSize: 14, fontWeight: 600 }}>Other Fee</Text>
                        <Text style={{ fontSize: 14, color: '#494B4A' }}>22/12/2023</Text>
                        <Text style={{ fontSize: 14, color: '#494B4A' }}>22900</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 10, borderWidth: 0.2, borderColor: 'lightgrey', borderBottomColor: 'green', borderBottomWidth: 0.6 }}>
                        <Text style={{ fontSize: 14, fontWeight: 600 }}>Tution Fee</Text>
                        <Text style={{ fontSize: 14, color: '#494B4A' }}>11/09/2023</Text>
                        <Text style={{ fontSize: 14, color: '#494B4A' }}>1900</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 10, borderWidth: 0.2, borderColor: 'lightgrey', borderBottomWidth: 0.6, borderBottomColor: '#BB2A25' }}>
                        <Text style={{ fontSize: 14, fontWeight: 600 }}>Due</Text>
                        <Text style={{ fontSize: 14, color: '#494B4A', marginLeft: 50 }}>1/10/2023</Text>
                        <Text style={{ fontSize: 14, color: '#494B4A' }}>24000</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 15 }}>
                        <Text style={{ color: '#BB2A25' }}>Five thousand six hundred only</Text>
                    </View>
                    <View style={{ marginTop: 8, marginLeft: 20, marginRight: 20, marginBottom: 10 }}>
                        <Text style={{ fontSize: 11 }}>1.This is a system generated document and does not require signature.</Text>
                        <Text style={{ fontSize: 11, marginTop: 5 }}>2.All payments made are subject to realization of the same</Text>
                    </View>

                    <View>

                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default FeeUpdate