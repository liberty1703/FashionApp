import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FormButton2 = ({ title, onPress }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={onPress} style={styles.signupbtn}>
            <Text style={{ fontSize: 16, color: '#fff' }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FormButton2

const styles = StyleSheet.create({
    signupbtn: {
        height: 45,
        width: '95%',
        backgroundColor: '#BC5B5B',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10
    }
})