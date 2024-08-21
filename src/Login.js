import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import FormButton from './components/Button/FormButton';
import HeaderButton from './components/Button/HeaderButton';
import FormInput from './components/Input/FormInput';

const Login = ({ navigation }) => {
  return (
    <View style={styles.page}>
      {/* TOPPER  */}
      <HeaderButton title={'Login'} />
      {/* INPUT */}
      <FormInput title={'Email'} placeholder={'enter email'} />
      <FormInput title={'Password'} placeholder={'enter your password'} />
      {/* BUTTONS */}
      <FormButton title={"Login"} onPress={() => navigation.navigate("Main", { screen: "Bottom" })} />

      {/* DOWN PART  */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <Text style={{ color: 'black', fontSize: 15 }}>
          Doesn't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: '#BC5B5B', fontSize: 16, fontWeight: 'bold' }}>
            {' '}
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View
          style={{ height: 1, width: '40%', backgroundColor: 'black' }}></View>
        <Text style={{ fontSize: 14, color: 'black' }}>OR</Text>
        <View
          style={{ height: 1, width: '40%', backgroundColor: 'black' }}></View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: "center", }}>
        <TouchableOpacity>
          <Image source={require('../assets/images/google.jpg')}
            style={{ height: 40, width: 40, marginHorizontal: 20, }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fbtn}>
          <Image source={require('../assets/images/facebbook.png')}
            style={{ height: 40, width: 40, }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingTop: 15,
  },


  signCtn: {
    height: 45,
    backgroundColor: '#BC5B5B',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  fbtn: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#D8D8D8',
  }
});
