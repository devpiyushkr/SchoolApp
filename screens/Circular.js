import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Circular = () => {
    return (
        <ScrollView>
            <View style={{ alignItems: 'center', backgroundColor: '#fff' }}>
                <View style={{ borderWidth: 1, borderColor: '#BB2A25', borderRadius: 10, borderLeftWidth: 5, borderBottomWidth: 5, width: 332, height: 478, marginTop: 10 }}>
                    <View style={{ alignItems: 'flex-end', padding: 15 }}>
                        <Text style={{ fontSize: 12, fontWeight: 500, color: '#BB2A25' }}>Date <Text style={{ color: '#494B4A' }}> 22/12/2023</Text></Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 13, fontWeight: 500, color: '#BB2A25' }}>Subject <Text style={{ color: '#494B4A' }}> Fee Related</Text></Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            If you pay the school fees online from the software please note down if your transaction completed successfully.
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            The same will be available in receipts online immediately.
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            Same will be reflected in the receipts and ledger menu within 2-3 working days.
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            If you transaction was not completed or failed due to any reason before paying again, please check your transaction status from Fees/Bills Online transaction menu.
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            If status of your transaction is pending/initiated please press refresh button or wait for some time (it depends on bank server).
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#BB2A25', marginTop: 30, fontSize: 13, fontWeight: 600 }}>
                            For any query you may call to school office

                        </Text>
                    </View>
                </View>
                {/* --------- */}
                <View style={{ borderWidth: 1, borderColor: '#7A94B7', borderRadius: 10, borderLeftWidth: 5, borderBottomWidth: 5, width: 332, height: 478, marginTop: 10 }}>
                    <View style={{ alignItems: 'flex-end', padding: 15 }}>
                        <Text style={{ fontSize: 12, fontWeight: 500, color: '#7A94B7' }}>Date <Text style={{ color: '#494B4A' }}> 22/12/2023</Text></Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: 13, fontWeight: 500, color: '#7A94B7' }}>Subject <Text style={{ color: '#494B4A' }}> Fee Related</Text></Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            If you pay the school fees online from the software please note down if your transaction completed successfully.
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            The same will be available in receipts online immediately.
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            Same will be reflected in the receipts and ledger menu within 2-3 working days.
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            If you transaction was not completed or failed due to any reason before paying again, please check your transaction status from Fees/Bills Online transaction menu.
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#494B4A', marginTop: 10, fontSize: 13 }}>
                            If status of your transaction is pending/initiated please press refresh button or wait for some time (it depends on bank server).
                        </Text>
                        <Text style={{ lineHeight: 18, color: '#7A94B7', marginTop: 30, fontSize: 13, fontWeight: 600 }}>
                            For any query you may call to school office

                        </Text>
                    </View>
                </View>
            </View >
        </ScrollView>
    )
}

export default Circular