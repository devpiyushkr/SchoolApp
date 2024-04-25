import { View, Text } from 'react-native'
import React from 'react'

const Message2 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 332, height: 521, borderWidth: 1, borderColor: '#D16F6B', borderLeftWidth: 4, borderBottomWidth: 4, borderRadius: 8, }}>
                <View style={{ alignItems: 'flex-end', margin: 15 }}>
                    <Text style={{ fontSize: 13, color: '#1A4683' }}>Date : <Text style={{ color: '#494B4A' }}>22/2/2022</Text></Text>
                </View>
                <View style={{ margin: 15, width: 290, height: 414 }}>
                    <Text style={{ fontSize: 13, color: '#494B4A', marginTop: 10 }}>To</Text>
                    <Text style={{ fontSize: 13, color: '#494B4A', marginTop: 20 }}>Rohit Karmakar</Text>
                    <Text style={{ color: '#1A4683', fontSize: 13, marginTop: 20 }}>Subject : <Text style={{ color: '#494B4A' }}>Fee related</Text></Text>
                    <Text style={{ fontSize: 13, color: '#494B4A', marginTop: 20, lineHeight: 18.18 }}>If you pay the school fees online from the software please note down if your transaction completed successfully. Some will be reflected in the Receipts and Ledger menu within 2-3 working days.</Text>
                    <Text style={{ fontSize: 13, color: '#494B4A', marginTop: 15, lineHeight: 18.18 }}>If you pay the school fees online from the software please note down if your transaction completed successfully. Some will be reflected in the Receipts and Ledger menu within 2-3 working days.
                    </Text>
                    <View style={{ alignItems: 'flex-end', marginTop: 80 }}>
                        <Text style={{ fontSize: 13, color: '#1A4683', fontWeight: 500 }}>Regards</Text>
                        <Text style={{ fontSize: 13, color: '#494B4A' }}>Principle</Text>
                    </View>

                </View>
            </View>
        </View >
    )
}

export default Message2