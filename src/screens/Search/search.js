import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import FormHeader from '../../components/Button/FormHeader'

const SearchScreen = () => {
    const SearchData = [
        {
            id: 1,
            text: 'Women Dress',
        },
        {
            id: 2,
            text: "Men T-Shirt's",
        },
        {
            id: 3,
            text: 'Women Dress',
        },
        {
            id: 4,
            text: "Men T-Shirt's",
        },
    ]
    const Data = [
        {
            id: 1,
            title: 'Women Dress',
        },
        {
            id: 2,
            title: "Men T-Shirt's",
        },
        {
            id: 4,
            title: 'Women Dress',
        },
        {
            id: 5,
            title: "Men T-Shirt's",
        },
        {
            id: 6,
            title: 'Women Dress',
        },
        {
            id: 7,
            title: "Men T-Shirt's",
        },
        {
            id: 8,
            title: 'Women Dress',
        },
        {
            id: 9,
            title: "Men T-Shirt's",
        },
    ]
    return (
        <View style={styles.page}>
            <FormHeader title={'My Search'} />
            <View style={styles.searchbtn}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity >
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
            <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', marginTop: 20, paddingHorizontal: 15 }}>
                Recently Searches
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={SearchData}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>{item.text}</Text>
                        </View>
                    )
                }}
            />
            <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', paddingHorizontal: 15 }}>
                Popular Searches
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={Data}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 15,
        paddingHorizontal: 10
    },
    searchbtn: {
        height: 40,
        backgroundColor: '#D8D8D8',
        borderRadius: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    container: {
        height: 60,
        width: "48%",
        borderRadius: 10,
        backgroundColor: '#D8D8D8',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 30,

    },
})