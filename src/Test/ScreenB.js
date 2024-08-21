import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenB = ({ route }) => {

    const name = route.params.koko
    const newItem = route.params.item
    console.log(route)

    return (
        <View>
            <Text>{newItem.name}</Text>
        </View>
    )
}

export default ScreenB

const styles = StyleSheet.create({})