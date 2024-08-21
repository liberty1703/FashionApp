import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import FormHeader from '../../components/Button/FormHeader'

const FavouriteScreen = () => {
    const FavouriteData = [
        {
            id: 1,
            title: "Men T-shirt",
            price: 200,
            image: require('../../../assets/images/men1.png')
        },
        {
            id: 2,
            title: "Women T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        },
        {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        },
        {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        },
        {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        },
        {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        },
        {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        },
        {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        },
    ]
    return (
        <View style={styles.page}>
            <FormHeader title={'MY Faveourite'} />
            <View style={{ marginTop: 20, }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={FavouriteData}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                                    <Image
                                        source={item.image}
                                        style={{ height: 140, width: 130, justifyContent: 'flex-start', alignSelf: 'center' }}
                                    />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5 }}>
                                    <Text style={{
                                        fontSize: 15,
                                        color: 'black',
                                        fontWeight: 'bold'
                                    }}>
                                        {item.title}
                                    </Text>
                                    <Text style={{
                                        fontSize: 15,
                                        color: 'red',
                                        fontWeight: 'bold'
                                    }}>
                                        ${item.price}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5 }}>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../../../assets/images/star.png')}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: 'red'
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../../../assets/images/mail.png')}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: 'red'
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>

    )
}

export default FavouriteScreen

const styles = StyleSheet.create({
    page: {
        // flex: 1,
        backgroundColor: "#FFFFFFFF",
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    container: {
        height: 200,
        width: "48%",
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 10,
    },
})