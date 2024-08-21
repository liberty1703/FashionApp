import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ScreenA = () => {
    const navigation = useNavigation();
    const name = "Talking Favour"
    const listData = [
        { id: 1, name: 'ade' },
        { id: 2, name: 'shina' },
        { id: 3, name: 'adigun' },
    ]
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("ScreenB", { koko: name })}
                style={{ padding: 20, backgroundColor: 'red', marginTop: 30 }}>
                <Text>Press</Text>
            </TouchableOpacity>

            <FlatList
                data={listData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ScreenB', { item })}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ScreenA

const styles = StyleSheet.create({})