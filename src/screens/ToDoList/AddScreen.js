import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddScreen = ({ }) => {
    const [newName, setNewName] = useState("")

    const getName = async () => {
        try {
            const value = await AsyncStorage.getItem('name');
            if (value !== null) {
                console.log('name', value)
                setNewName(value)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getName();
    }, [])
    const ToDoData = [
        {
            id: 1,
            title: "Welcome to To-Do",
            
        },
        {
            id: 2,
            title: "Welcome to To-Do"
        },
        {
            id: 3,
            title: "Welcome to To-Do"

        },
        {
            id: 4,
            title: "Welcome to To-Do"
        },
        {
            id: 5,
            title: "Welcome to To-Do"
        },
        {
            id: 6,
            title: "Welcome to To-Do"
        },
        {
            id: 7,
            title: "Welcome to To-Do"
        },
        {
            id: 8,
            title: "Welcome to To-Do"
        },
    ]
    return (
        <View style={styles.page}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: '500', color: '#000000', flex: 1 }}> Hi {newName + ','}</Text>

                <TouchableOpacity>
                    <Image source={require('../../../assets/images/delete.png')} style={{ height: 40, width: 40, tintColor: 'red' }} />
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={ToDoData}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.ctn}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                                <Text style={{ fontSize: 16, color: 'black', marginLeft: 10 }}>{item.title}</Text>
                                <TouchableOpacity style={{ marginLeft: 100 }}>
                                    <Image source={require('../../../assets/images/checkbox.png')} style={{ height: 30, width: 30 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require('../../../assets/images/delete.png')} style={{ height: 30, width: 30 }} />
                                </TouchableOpacity>


                            </View>
                        </View>
                    )
                }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                <View style={styles.textInput}>
                    <TextInput
                        placeholder='Add new item'
                        placeholderTextColor={'black'}
                        style={{ fontSize: 15 }}

                    />
                </View>
                <TouchableOpacity style={styles.addbtn}>
                    <Image source={require("../../../assets/images/add.png")} style={{ height: 40, width: 40, tintColor: 'black', alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'White',
        paddingTop: 25,
        paddingHorizontal: 15
    },
    ctn: {
        height: 70,
        backgroundColor: '#D8D8D8',
        borderRadius: 5,
        marginTop: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 10
    },
    textInput: {
        height: 50,
        width: 320,
        backgroundColor: 'gray',
        borderRadius: 25,
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        textAlign: 'center',
    },
    addbtn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'gray',
        justifyContent: "center",
        alignSelf: 'flex-end',
        marginBottom: 10
    }
})