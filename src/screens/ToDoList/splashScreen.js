import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'

const COLORS = {
    white: "#ffffff",
    black: "#000000",
    grey: "#f6f5fa",
    chocolate: "#CECFCD",
}

const SplashScreen = () => {

    const [todo, setTodo] = useState("");

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "First todo",
            isChecked: false,
        }, {
            id: 2,
            title: "Second todo",
            isChecked: false,
        },
    ]);

    // const todoData = [
    //     {
    //         id: 1,
    //         title: "First todo",
    //         isChecked: false,
    //     }, {
    //         id: 2,
    //         title: "Second todo",
    //         isChecked: false,
    //     },
    // ];


    const handleDeleteAll = () => {
        Alert.alert('Delete', 'Delete all todos?', [
            {
                text: 'Yes',
                onPress: () => setTodos([]),
            },
            {
                text: 'No',
                onPress: () => console.log('No'),
                style: 'cancel',
            },
            // { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
    }

    const addTodo = () => {
        console.log('todo entered', todo);

        if (todo.length < 1) {
            Alert.alert('Error', 'enter a todo', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        } else {

            const freshTodo = {
                id: Math.random(),
                title: todo,
                isChecked: false
            };

            setTodos([...todos, freshTodo])
        }

    }


    return (
        <View style={styles.page}>
            <View style={{ flex: 1, paddingHorizontal: 20, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 17, color: COLORS.black, fontWeight: 'bold' }}>Hi Favour,</Text>
                    <TouchableOpacity onPress={() => handleDeleteAll()}>
                        <Image source={require('../../assets/delete.png')} style={{ height: 24, width: 24, tintColor: 'red' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 35, paddingBottom: 20, }} >
                    <FlatList
                        data={todos}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.container}>
                                    <Text numberOfLines={1} style={{ fontSize: 15, fontWeight: "500", color: COLORS.black, flex: 1, textDecorationLine: item.isChecked ? 'line-through' : 'none', }}>{item.title}</Text>
                                    <TouchableOpacity>
                                        <Image source={item.isChecked ? require('../../assets/check1.png') : require('../../assets/check2.png')} style={{ height: 20, width: 20, }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/delete.png')} style={{ height: 20, width: 20, marginLeft: 12 }} />
                                    </TouchableOpacity>

                                </View>
                            )
                        }}
                    />
                </View>
            </View>
            <View style={styles.bigCtn}>
                <View style={styles.textInputCtn}>
                    <TextInput
                        placeholder='enter something'
                        style={{ fontSize: 14, color: COLORS.black }}
                        value={todo}
                        onChangeText={(a) => setTodo(a)}
                    />
                </View>
                <TouchableOpacity onPress={() => addTodo()} style={styles.plusCtn}>
                    <Text style={{ fontSize: 30, color: COLORS.white, fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.grey,
        paddingTop: 10,
    },
    container: {
        height: 55,
        backgroundColor: COLORS.white,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: COLORS.chocolate,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    bigCtn: {
        height: 70,
        borderWidth: 1,
        borderColor: COLORS.chocolate,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 10,
        backgroundColor: COLORS.white,
    },
    textInputCtn: {
        height: 50,
        width: '82%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.chocolate,
        paddingHorizontal: 10,
    },
    plusCtn: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
