import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import DateTimePickerModal from '@react-native-community/datetimepicker'
import { FontAwesome5 } from '@expo/vector-icons';


const AddProfile = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectDate, setSelectedDate] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {

        const dt = new Date(date);
        const x = dt.toISOString().split("T");
        const x1 = x[0].split('-');
        console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
        setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0])
        hideDatePicker();
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{ height: 900, alignItems: 'center' }}>

                <View style={{ alignItems: 'center', marginTop: 40, width: 331, borderWidth: 0.5, borderColor: '#D9D9D9', paddingBottom: 20 }}>
                    <View style={{ width: 101, height: 99, backgroundColor: '#D9D9D9', marginTop: 30, borderRadius: 20 }}>

                        <TouchableOpacity style={{ backgroundColor: '#fff', width: 24, height: 24, borderRadius: 12, position: 'absolute', top: 72, left: 75, paddingTop: 3, paddingLeft: 4 }}>
                            <AntDesign name="camerao" size={17} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, marginTop: 30 }}>First Name*</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, marginTop: 15 }}>Last Name*</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 12, marginTop: 15 }}>Blood Grpup*</Text>
                            <TextInput style={styles.inputBox} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, marginTop: 15 }}>Roll No*</Text>
                            <TextInput style={[styles.inputBox, { marginLeft: 15 }]} />
                        </View>
                    </View>
                    {/* DOB */}
                    <View style={{
                        marginTop: 15
                    }}>
                        <Text style={{ fontSize: 12 }}>DOB*</Text>
                        <TouchableOpacity style={{
                            borderColor: '#1A4683',
                            width: 283,
                            borderWidth: 1,
                            borderRadius: 13,
                            marginTop: 5, width: 283, height: 52, borderRadius: 13, justifyContent: 'space-between', flexDirection: 'row', padding: 12
                        }}
                            onPress={() => {
                                showDatePicker()
                            }}>
                            <Text style={{ fontSize: 12, marginTop: 6 }}>{selectDate}</Text>
                            <FontAwesome5 name="calendar-alt" size={20} color="black" />
                        </TouchableOpacity>

                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleDateConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, marginTop: 15 }}>Student Id*</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, marginTop: 15 }}>Address Line 1*</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, marginTop: 15 }}>Address Line 2*</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <TouchableOpacity style={styles.btn} >
                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>Save</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default AddProfile
const styles = StyleSheet.create({

    input: {
        height: 52,
        borderWidth: 1,
        borderColor: '#1A4683',
        width: 283,
        borderRadius: 13,
        marginTop: 5
    },
    inputBox: {
        height: 52,
        borderWidth: 1,
        borderColor: '#1A4683',
        width: 137,
        borderRadius: 13,
        marginTop: 5
    },
    btn: {

        width: 285,
        height: 44,
        backgroundColor: '#1A4683',
        marginTop: 10,
        justifyContent: 'center',
        marginTop: 25,
        alignItems: 'center',
        borderRadius: 20
    },
})