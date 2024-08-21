import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderButton from '../../components/Button/HeaderButton';
import FormHeader from '../../components/Button/FormHeader';
import FormButton from '../../components/Button/FormButton';
import FavouriteScreen from '../Favourite/FavouriteScreen';
import FormButton2 from '../../components/Button/FormButton2';

const CartScreen = ({ navigation }) => {
    const ChartData = [
        {
            id: 1,
            Image: require('../../../assets/images/girlly.png'),
            title: 'Women T-Shirt',
            size: 'Size(Medium)',
            color: 'Color(white)',
            price: 123,
        },
        {
            id: 2,
            Image: require('../../../assets/images/girl4.png'),
            title: 'Girl T-Shirt',
            size: 'Size(Medium)',
            color: 'Color(white)',
            price: 324,
        },
        {
            id: 3,
            Image: require('../../../assets/images/men1.png'),
            title: 'Men T-Shirt',
            size: 'Size(Medium)',
            color: 'Color(white)',
            price: 345,
        },
        {
            id: 4,
            Image: require('../../../assets/images/girlly.png'),
            title: 'Women T-Shirt',
            size: 'Size(Medium)',
            color: 'Color(white)',
            price: 123,
        },
        {
            id: 5,
            Image: require('../../../assets/images/girlly.png'),
            title: 'Women T-Shirt',
            size: 'Size(Medium)',
            color: 'Color(white)',
            price: 123,
        },
    ];
    return (
        <View style={styles.page}>
            <FormHeader title={'My Cart'} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={ChartData}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <Image source={item.Image} style={{ height: 100, width: 100 }} />

                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 14, color: 'black' }}>
                                        {item.title}
                                    </Text>
                                    <Text style={{ fontSize: 14, color: 'black', marginTop: 5 }}>
                                        {item.size}
                                    </Text>

                                    <Text style={{ fontSize: 14, color: 'red', marginTop: 5 }}>
                                        ${item.price}
                                    </Text>
                                </View>
                                <View>
                                    <Image
                                        source={require('../../../assets/images/delete.png')}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: 'black',
                                            alignSelf: 'flex-end',
                                            marginRight: 5,
                                        }}
                                    />
                                    <Text style={{ fontSize: 14, color: 'black', marginTop: 5 }}>
                                        {item.color}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: 'red',
                                            marginTop: 5,
                                            textAlign: 'right',
                                            textAlignVertical: 'center',
                                            marginRight: 5,
                                        }}>
                                        {' '}
                                        - 2 +
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
            <View style={{ height: '40%', backgroundColor: '#D8D8D8' }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                            Sub Total
                        </Text>
                        <Text style={{ fontSize: 15, color: '#BC5B5B', fontWeight: 'bold' }}>
                            $1000
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                            Shipping
                        </Text>
                        <Text style={{ fontSize: 15, color: '#BC5B5B', fontWeight: 'bold' }}>
                            $100
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                            Discount
                        </Text>
                        <Text style={{ fontSize: 15, color: '#BC5B5B', fontWeight: 'bold' }}>
                            $50
                        </Text>
                    </View>
                    <View
                        style={{ height: 1, width: '100%', backgroundColor: 'black' }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 25, marginRight: 25, marginBottom: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>
                            Total
                        </Text>
                        <Text style={{ fontSize: 15, color: '#BC5B5B', fontWeight: 'bold' }}>
                            $1050
                        </Text>
                    </View>
                    <FormButton2
                        title={'Checkout'}
                        onPress={() => navigation.navigate('DetailScreen')}
                    />
                </View>
            </View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 15,
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
        backgroundColor: 'white',
        marginTop: 10,
    },
});

{
    /* <View>
                    <Image source={require('../../../assets/images/men1.png')} style={{ height: 68, width: 50 }} />
    
                    <View style={{ flexDirection: 'row' }}>
                        <Text> Men T-Shirt </Text></View>
                    <Text>Size(medium)</Text>
                </View> */
}

//     < View >
//     <View style={{ flex: 1 }}>

//     </View>
//     <View style={{ height: '40%' }}></View>
// </View >
