import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormHeader from '../../components/Button/FormHeader'

const NotificationScreen = () => {
    const NotificationData = [
        {
            id: 1,
            text: 'Special Offer',
            title: 'Today 10:30 PM'
        },

    ]
    const Data = [
        {
            id: 2,
            text: 'Special Offer',
            title: 'Today 10:30 PM'
        },
        {
            id: 3,
            text: 'Special Offer',
            title: 'Today 10:30 PM'
        },
        {
            id: 4,
            text: 'Special Offer',
            title: 'Today 10:30 PM'
        },
        {
            id: 5,
            text: 'Special Offer',
            title: 'Today 10:30 PM'
        },
    ]
    return (
        <View style={styles.page}>
            <FormHeader title={'Notifications'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> Last 30 Days</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}> All Marks As Read</Text>
            </View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginTop: 20 }}> Today</Text>
            <FlatList
                data={NotificationData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../assets/images/notification.png')} style={{ height: 35, width: 35, tintColor: 'black', }} />
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 23, fontWeight: 'bold', color: "black" }}>{item.text}</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}> {item.title}</Text>
                                </View>


                            </View>
                        </View>
                    )
                }}
            />
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginTop: 20 }}> Yesterday</Text>
            <FlatList
                data={Data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../assets/images/notification.png')} style={{ height: 35, width: 35, tintColor: 'black', }} />
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 23, fontWeight: 'bold', color: "black" }}>{item.text}</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}> {item.title}</Text>
                                </View>


                            </View>
                        </View>
                    )
                }}
            />
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginTop: 20, alignSelf: 'center', marginBottom: 10, textAlignVertical: 'center' }}>See More</Text>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 15,
        paddingHorizontal: 15
    },
    container: {
        height: 85,
        // width: "50%",
        borderRadius: 10,
        backgroundColor: '#D8D8D8',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 15,
        paddingHorizontal: 50,
        paddingTop: 10


    },
})