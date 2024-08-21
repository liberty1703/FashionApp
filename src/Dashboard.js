import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dashboard = ({ }) => {
    return (
        <View style={styles.page}>
            <View>
                <Image source={require("../assets/images/girlly.png")} style={{}} />
            </View>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "White",
        paddingHorizontal: 15,
        paddingTop: 20,
    }
})