import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FormHeader from '../../components/Button/FormHeader'

const ProfileScreen = () => {
    const ProfileData = [
        {
            id: 1,
            title: "Order History",
            image: require('../../../assets/images/rightarrow.png'),
            icon: require('../../../assets/images/watch.png')
        },
        {
            id: 2,
            title: "Personal Details",
            image: require('../../../assets/images/rightarrow.png'),
            icon: require('../../../assets/images/info.png')
        },
        {
            id: 3,
            title: "Address",
            image: require('../../../assets/images/rightarrow.png'),
            icon: require('../../../assets/images/location.png')
        },
        {
            id: 4,
            title: "Payment Method",
            image: require('../../../assets/images/rightarrow.png'),
            icon: require('../../../assets/images/card.png')
        },
        {
            id: 5,
            title: "About",
            image: require('../../../assets/images/rightarrow.png'),
            icon: require('../../../assets/images/about.png')
        },
        {
            id: 6,
            title: "Help",
            image: require('../../../assets/images/rightarrow.png'),
            icon: require('../../../assets/images/help.png')
        },
        {
            id: 7,
            title: "Logout",
            image: require('../../../assets/images/rightarrow.png'),
            icon: require('../../../assets/images/logout.png')
        }
    ]
    return (
        <View style={styles.page}>
            <FormHeader title={"My Profile"} />
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Image source={require('../../../assets/images/girlly.png')} style={{ height: 100, width: 100, borderRadius: 50, borderColor: 'red', borderWidth: 2 }} />
                <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
                    Aleena Shasheen
                </Text>
                <Text style={{ fontSize: 15, color: 'grey' }}>
                    Shasheenaleena@gmail.com
                </Text>
            </View>
            <FlatList
                data={ProfileData}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5, marginTop: 20 }}>
                            <View style={styles.Container}>
                                <Image
                                    source={item.icon}
                                    style={{ height: 25, width: 25, tintColor: 'red' }}
                                />
                            </View>

                            <Text style={{
                                fontSize: 15,
                                color: 'black',
                                // textAlign: 'center',
                                textAlignVertical: "center",
                                marginLeft: 20,
                                flex: 1

                            }}>
                                {item.title}
                            </Text>

                            <TouchableOpacity>
                                <Image
                                    source={item.image}
                                    style={{ height: 25, width: 25, alignItems: 'center' }}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }

                }
            />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    Container: {
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#D8D8D8',
    }
})