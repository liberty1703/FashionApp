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
        Log In
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
      placeholder='Enter your name'
      ></TextInput>
      <Text style={{
        fontSize: 20,
        marginTop: 30,
        color: "black"
      }}>
        Email
      </Text>
      <TextInput style={styles.txtinput1}
      placeholder='Enter your email'
      ></TextInput>
      <Text style={{
        fontSize: 20,
        marginTop: 30,
        color: "black"
      }}>
        Password
      </Text>
      <TextInput style={styles.txtinput1}
      placeholder='Enter your password'
      ></TextInput>
      <Text style={{
        fontSize: 20,
        marginTop: 30,
        color: "black",
        alignSelf: 'center'
      }}>
        OR
      </Text>
      <View style = {{flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20
      }}>
      <Image style = {[styles.box1, {marginHorizontal:20}]}
      source={require('../fashionapp/assets/images/google.jpg')}/>
      <Image style = {[styles.box1, {marginHorizontal: 20}]}
      source={require('../fashionapp/assets/images/facebbook.png')}/>
      </View>
      <TouchableOpacity>
      <Text style= {styles.signin}>
        Sign in
      </Text>
      </TouchableOpacity>
      <View style={styles.container}>
      <Text style={styles.text}>
        Doesn't I have an account?{' '}
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </Text>
    </View>
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
  box1: {
    height:45,
    width: 60,
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
        marginTop: 30,
        color: "white",
        textAlign: "center",
        textAlignVertical: 'center'
       },
       text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center', 
      },
      signUpText: {
        color: 'red',
        fontSize: 20,
      },
})