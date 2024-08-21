import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    const fashionData = [
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
        }, {
            id: 3,
            title: "Boys T-shirt",
            price: 300,
            image: require('../../../assets/images/girlly.png')
        },
        {
            id: 4,
            title: "Girls T-shirt",
            price: 300,
            image: require('../../../assets/images/girly2.png')
        },
        {
            id: 5,
            title: "Girls T-shirt",
            price: 300,
            image: require('../../../assets/images/girl3.png')
        },
        {
            id: 6,
            title: "Girls T-shirt",
            price: 300,
            image: require('../../../assets/images/girl4.png')
        },
        {
            id: 7,
            title: "Men T-shirt",
            price: 200,
            image: require('../../../assets/images/men1.png')
        },
        {
            id: 8,
            title: "Girls T-shirt",
            price: 300,
            image: require('../../../assets/images/girl4.png')
        },
        {
            id: 9,
            title: "Men T-shirt",
            price: 200,
            image: require('../../../assets/images/men1.png')
        },
        {
            id: 10,
            title: "Girls T-shirt",
            price: 300,
            image: require('../../../assets/images/girl4.png')
        },
    ];


    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
                <Text style={{
                    color: '#DC4242',
                    fontSize: 23,
                    fontWeight: 'bold'
                }}>
                    Welcome back!
                </Text>

                <View style={{ marginLeft: "auto" }}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/notification.png')}
                            style={{ height: 20, width: 20, tintColor: 'grey', }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={{ color: "black", marginLeft: 15, fontWeight: 'bold' }}>Aleena Shasheen</Text>
            {/* SEARCH BOX */}
            <View style={styles.searchbtn}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/search.png')}
                            style={{ height: 20, width: 20, tintColor: 'grey', }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <TextInput style={{
                            marginRight: 250,
                            fontSize: 15,
                        }}
                            placeholder='Search' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/microphone.png')}
                            style={{ height: 20, width: 20, tintColor: 'grey', }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* BANNER */}
            <View>
                <View style={styles.box}>
                    <View style={{
                        marginLeft: 20
                    }}>
                        <Text style={styles.textstyl}>
                            Shop with us!
                        </Text>
                        <Text style={styles.textstyl}>
                            Get 50% off
                        </Text>
                        <Text style={styles.textstyl} >
                            On items
                        </Text>
                        <View style={styles.shpbtn}>
                            <Text style={{ fontSize: 18, color: "black" }}>Shop Now</Text>
                        </View>
                    </View>
                    <Image source={require("../../../assets/images/girly2.png")}
                        style={{
                            height: 130,
                            width: 100,
                            marginRight: 40,
                            marginTop: 10,
                            alignSelf: 'center'

                        }}
                    />
                </View>
            </View>
            <View style={{ marginTop: 20, paddingBottom: 335 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={fashionData}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { item })}>
                                    <Image source={item.image} style={{ height: 140, width: 130, justifyContent: 'flex-start', alignSelf: 'center' }} />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5 }}>
                                    <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
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
                <View style={{ marginBottom: 100 }}></View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingTop: 20,
        // paddingBottom: 100
    },
    searchbtn: {
        height: 40,
        backgroundColor: '#D8D8D8',
        borderRadius: 20,
        marginTop: 15,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    container: {
        height: 200,
        width: "48%",
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 10,
    },
    textstyl: {
        fontSize: 18,
        color: "white",
        paddingBottom: 5,
        marginTop: 10,
    },
    shpbtn: {
        height: 50,
        width: 110,
        backgroundColor: '#D8D8D8',
        marginTop: 15,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 15,
    },
    box: {
        height: 200,
        backgroundColor: '#BC5B5B',
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 10,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 30,
    },
    allbtn: {
        height: 30,
        width: 75,
        backgroundColor: '#BC5B5B',
        borderRadius: 15,
        textAlignVertical: 'center',
        textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        color: "white"

    },
    btn: {
        height: 30,
        width: 75,
        backgroundColor: '#D8D8D8',
        borderRadius: 15,
        textAlignVertical: 'center',
        textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        color: "black",
        marginLeft: 20,
    },
    boybtn: {
        height: 200,
        width: 150,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 5,
        backgroundColor: '#D8D8D8',
        marginTop: 20,
    }
})