import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Successfuly = ({navigation}) => {
  return (
  <View style ={styles.page}>
       <Image
        source={require("../fashionapp/assets/images/success.jpg")}
        style={styles.image}
      />
      <Text style={{
        fontSize: 25, 
        color: "black",
        alignSelf: "center",
        marginTop: 60,
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
      <TouchableOpacity>
      <Text style= {styles.signin}>
        Sign in
      </Text>
      </TouchableOpacity>
      
    </View>

  )
}

export default Successfuly

const styles = StyleSheet.create({
  page: {
    flex: 1, 
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  image: {
    height: 150,
    width: 200,
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center', 
  },
  
  signin: {
    height: 40,
    width:350,
    borderColor: "red",
    backgroundColor: "red",
    borderRadius: 10,
    fontSize: 20,
        marginTop: 80,
        color: "white",
        textAlign: "center",
        textAlignVertical: 'center'
       },
       
})