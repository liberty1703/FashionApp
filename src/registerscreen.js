import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
<ScrollView 
showsVerticalScrollIndicator={false}
>
<View style ={styles.page}>
      <View style={styles.row}>
      <TouchableOpacity>
      <Image style = {styles.box}
      source={require('../fashionapp/assets/images/arrow.png')}
      
      />
      </TouchableOpacity>
      <Text style={{
        fontSize: 25, 
        marginLeft: 20,
        color: "black"
      }}>
        Register
      </Text>
      </View>
      <Text style={{
        fontSize: 20,
        marginTop: 30,
        color: "black"
      }}>
        Full name
      </Text>
      <TextInput style={styles.txtinput1}
      placeholder='Liberty Abraham'
      ></TextInput>
      <Text style={{
        fontSize: 20,
        marginTop: 30,
        color: "black"
      }}>
        Email
      </Text>
      <TextInput style={styles.txtinput1}
      placeholder='libertyabraham46@gmail.com'
      ></TextInput>
      <Text style={{
        fontSize: 20,
        marginTop: 30,
        color: "black"
      }}>
        Password
      </Text>
      <TextInput style={styles.txtinput1}
      placeholder='********************************'
      ></TextInput>
     
       <Text style= {styles.signin}>
        Sign up
      </Text>
      
    </View>
</ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  page: {
    flex: 1, 
    backgroundColor: "white",
    paddingHorizontal: 20,
    marginTop: 40,
  }, 
  box: {
    height:40,
    width: 40,
    backgroundColor: 'grey'
  },
  row:{
    flexDirection: 'row',
    alignItems: "center",
  },
 
  txtinput1: {
    height: 40, 
    marginTop: 15,
    backgroundColor: "grey",
    borderWidth:1, 
    borderRadius: 10,
    borderColor: "grey"
  },
  signin: {
    height: 40,
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