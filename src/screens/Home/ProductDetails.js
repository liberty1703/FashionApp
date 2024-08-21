import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import HeaderButton from '../../components/Button/HeaderButton'
import { useNavigation } from '@react-navigation/native'
import DetailScreen from '../DeliveryDetails/DetailScreen'


const ProductDetails = ({ route }) => {
    const navigation = useNavigation();
    console.log('.........', route)
    const data = route.params.item
    console.log('data on product', data)
    return (
        <View style={styles.page}>
            <View style={styles.Container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/images/arrow.png')} style={{ height: 30, width: 30, marginTop: 10 }} />
                </TouchableOpacity>

                <Image source={data.image} style={{ alignSelf: 'center', width: 500, height: 340 }} />
            </View>
            <ScrollView>
                <View style={{ marginTop: 10, marginLeft: 25, marginRight: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>{data.title}</Text>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/images/star.png')} style={{ height: 25, width: 25, tintColor: 'red' }} />
                            <Image source={require('../../../assets/images/star.png')} style={{ height: 25, width: 25, tintColor: 'red' }} />
                            <Image source={require('../../../assets/images/star.png')} style={{ height: 25, width: 25, tintColor: 'red' }} />
                            <Image source={require('../../../assets/images/star.png')} style={{ height: 25, width: 25, tintColor: 'red' }} />
                        </View>
                        <Text style={{ fontSize: 15, color: 'grey' }}>
                            2038 Reviews
                        </Text>
                    </View>
                </View>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 20, marginRight: 20, marginTop: 15 }}>
                    Select your Sizes
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={styles.box}>S</Text>
                        <Text style={styles.box1}>M</Text>
                        <Text style={styles.box}>L</Text>
                        <Text style={styles.box}>XL</Text>
                    </View>
                    <Text style={styles.box3}> -  2  +</Text>
                </View>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 20, marginRight: 20, marginTop: 15 }}>
                    Description
                </Text>
                <Text style={{ fontSize: 15, color: 'black', marginLeft: 20, marginRight: 10 }}>
                    T-shirt is a style of fabric shirt named after the T
                    shap of its body and sleeves. Traditional, it has short sleeves and no round neckles, known as acrew, which lack a collar.
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        color: 'red', fontSize: 20, fontWeight: 'bold', marginLeft: 35, marginTop: 15, extAlign: 'center',
                        textAlignVertical: 'center'
                    }}>
                        $331
                    </Text>
                    <TouchableOpacity style={styles.shopbtn} onPress={() => navigation.navigate(DetailScreen)}>
                        <Text style={{
                            color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginTop: 15, textAlign: 'center',
                            textAlignVertical: 'center',
                        }}>
                            Shop Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "White",

    },
    Container: {
        height: 380,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: 'grey',

    },
    box: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#D8D8D8',
        marginLeft: 20,
        marginTop: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        color: 'black'
    },
    box1: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'red',
        marginLeft: 20,
        marginTop: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        color: 'black'
    },
    box3: {
        height: 40,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#D8D8D8',
        marginLeft: 20,
        marginTop: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        color: 'black'
    },
    shopbtn: {
        height: 50,
        width: '65%',
        backgroundColor: '#BC5B5B',
        borderRadius: 5,
        marginTop: 10,
        marginRight: 20,
        borderRadius: 30
    }

})