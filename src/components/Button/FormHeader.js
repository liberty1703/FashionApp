import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const FormHeader = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowCtn}>
                <Image
                    source={require('../../../assets/images/arrow.png')}
                    style={{ height: 20, width: 20, tintColor: 'grey' }}
                />
            </TouchableOpacity>
            <Text
                style={{
                    color: '#000',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginRight: 20,
                    // textAlign: "center",

                }}>
                {title}
            </Text>
            <View></View>

        </View>
    )
}

export default FormHeader

const styles = StyleSheet.create({
    arrowCtn: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#D8D8D8',
    },
})

