import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import FormButton from './components/Button/FormButton'
import HeaderButton from './components/Button/HeaderButton'
import FormInput from './components/Input/FormInput'


const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      {/* TOPPER  */}
      <HeaderButton title={'Register'}/>
      {/* Registration input */}
      <FormInput
      title={'Full name'}
      placeholder={'enter your name'}
      />
      <FormInput
      title={'Email'}
      placeholder={'enter your email address'}
      />
      <FormInput
      title={'Password'}
      placeholder={'enter your password'}
      />
      {/* signup btn */}
      <FormButton title={"Sign up"} onPress={()=> navigation.navigate("Success")} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text style={{color: 'black', fontSize: 15}}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#BC5B5B', fontSize: 16, fontWeight: 'bold'}}>
            {' '}
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    page: {
        flex: 1, 
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingTop: 15,
    },
    
    textinpt1:{
        height: 45,
        backgroundColor: '#D8D8D8',
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    signupbtn:{
        height: 45,
        backgroundColor: '#BC5B5B',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
})