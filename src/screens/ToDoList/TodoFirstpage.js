import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderButton from '../../components/Button/HeaderButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const TodoFirstpage = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    console.log(name)
    const handleSubmit = async () => {
        if (name === "") {
            Alert.alert(
                "Error",
                "Name is empty"
            )
        } else {
            try {
                await AsyncStorage.setItem('name', name)
                console.log('saved successfully')
            } catch (error) {
                console.log('error saving', error)
            }
            navigation.navigate("Main", { screen: "AddScreen", name })
        }
    }

    return (
        <View style={styles.page}>
            <HeaderButton title={'ToDo List'} />
            <Image source={require('../../../assets/images/success.jpg')} style={{
                height: 150,
                width: 200,
                alignSelf: 'center',
                marginTop: 100,
                borderRadius: 35
            }} />
            <Text style={{
                fontSize: 25,
                color: "black",
                alignSelf: "center",
                marginTop: 20,
                marginBottom: 10,
                fontWeight: "bold"
            }}>
                You are Welcome!
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: '#000000' }}> Name</Text>
            <TextInput style={styles.textInput}
                placeholder={'enter your name'}
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <TouchableOpacity onPress={() => handleSubmit()} style={styles.addbtn}>
                <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
                    Continue
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default TodoFirstpage

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "White",
        paddingTop: 15,
        paddingHorizontal: 10
    },
    textInput: {
        height: 45,
        backgroundColor: '#D8D8D8',
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    addbtn: {
        height: 50,
        borderRadius: 10,
        backgroundColor: '#DC4242',
        justifyContent: "center",
        paddingHorizontal: 10,
        marginTop: 60

    }
})