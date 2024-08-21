import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Success = ({ navigation }) => {
  return (
    <View style={styles.page2}>
      <Image source={require('../assets/images/success.jpg')} style={{
        height: 150,
        width: 200,
        alignSelf: 'center',
        marginTop: 100,
      }} />
      <Text style={{
        fontSize: 25,
        color: "black",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 10,
        fontWeight: "bold"
      }}>
        Successfuly Registered
      </Text>
      <Text style={styles.text}>
        Congratulations your account registered
      </Text>
      <Text style={styles.text}>
        in this application
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Bottom" })} style={styles.signupbtn}>
        <Text style={{ fontSize: 16, color: '#fff' }}>
          Thank you
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Success

const styles = StyleSheet.create({
  page2: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  signupbtn: {
    height: 45,
    backgroundColor: '#BC5B5B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  }
})