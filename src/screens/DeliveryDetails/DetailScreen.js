import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FormHeader from '../../components/Button/FormHeader'
import FormButton2 from '../../components/Button/FormButton2';

const DetailScreen = ({ navigation }) => {
    const addressData = [
        { id: 1, title: "Home Address", contact: "+234123456789", address: "Adelabu street, Ogbomosho, Nipost Nigeria" },
        { id: 2, title: "Office Address", contact: "+234123456789", address: "Adelabu street, Ogbomosho, Nipost Nigeria" },
    ];
    return (
        <View style={styles.page}>
            <FormHeader title={'Address'} />
            <Text style={{ fontSize: 20, color: 'black', marginLeft: 15, fontWeight: 'bold', marginBottom: 10 }}>
                Shoppping Information
            </Text>

            {/* CONTAINER */}

            <FlatList
                data={addressData}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.bigCircle}>
                                {item.id === 1 &&
                                    <View style={{ height: 25, width: 25, backgroundColor: '#BC5B5B', borderRadius: 100 }} />
                                }
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 14, color: 'black' }}>{item.title}</Text>
                                <Text style={{ fontSize: 14, color: 'black' }}>{item.contact}</Text>
                                <Text style={{ fontSize: 12, color: 'black' }}>{item.address}</Text>
                            </View>
                            <Image source={require('../../../assets/images/edit.png')} style={{ height: 15, width: 15 }} />
                        </View>
                    )
                }}
            />

            {/* PAYMENT METHOD */}
            <Text style={{ fontSize: 20, color: 'black', marginLeft: 15, fontWeight: 'bold' }}>
                Payment Method
            </Text>
            <View style={{ flexDirection: 'row', marginLeft: 30, }}>
                <TouchableOpacity style={styles.box}>
                    <Image source={require('../../../assets/images/pa.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Image source={require('../../../assets/images/vs.png')} style={{ height: 30, width: 35 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Image source={require('../../../assets/images/ma.png')} style={{ height: 30, width: 50 }} />
                </TouchableOpacity>
            </View>

            {/* AMOUNT */}
            <Text style={{ fontSize: 20, color: 'black', marginLeft: 15, fontWeight: 'bold', }}>
                Amount
            </Text>
            <View style={{ height: '30', backgroundColor: '#D8D8D8', marginTop: 5, marginHorizontal: 20 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                            Order Amount
                        </Text>
                        <Text style={{ fontSize: 15, color: '#BC5B5B', fontWeight: 'bold' }}>
                            $1000
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                            Delivery Charges
                        </Text>
                        <Text style={{ fontSize: 15, color: '#BC5B5B', fontWeight: 'bold' }}>
                            $100
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                            Discount
                        </Text>
                        <Text style={{ fontSize: 15, color: '#BC5B5B', fontWeight: 'bold' }}>
                            $50
                        </Text>
                    </View>
                    <View
                        style={{ height: 1, width: '100%', backgroundColor: 'black' }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, color: '#BC5B5B', fontWeight: 'bold' }}>
                            Total Payment
                        </Text>
                        <Text style={{ fontSize: 15, color: '#BC5B5B', fontWeight: 'bold' }}>
                            $1050
                        </Text>
                    </View>

                </View>
            </View>
            <FormButton2
                title={'Payment'}
                onPress={() => navigation.navigate('ThankyouScreen')}
            />
        </View >
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "White",
        addingHorizontal: 10,
        paddingTop: 15,
    },
    bigCircle: {
        height: 50,
        width: 50,
        borderWidth: 4,
        borderColor: '#BC5B5B',
        borderRadius: 100,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 100,
        // borderWidth: 1,
        marginHorizontal: 20,
        paddingHorizontal: 14,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#D8D8D8',

    },
    box: {
        height: 50,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#D8D8D8',
        marginLeft: 20,
        marginTop: 20
    },
    // paymentctn: {
    //     height: 150,
    //     backgroundColor: '#D8D8D8',
    //     marginLeft: 10,
    //     marginRight: 10,
    //     marginTop: 20
    // },
})