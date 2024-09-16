import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const SetState = () => {
    let x = 2;
    const [catNumber, setCatNumber] = useState(0);
    const [name, setName] = useState("Favour")
    const addNumber = () => {
        setCatNumber(catNumber + 1)
    }

    const removeNumber = () => {
        setCatNumber(catNumber - 1)
    }
    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 40, color: "black" }}> My name is {name}</Text>
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity onPress={() => setName("Ade")} style={styles.container}>
                    <Text style={{ fontSize: 20, color: "white" }}>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SetState

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingTop: 20
    },
    container: {

    }
})