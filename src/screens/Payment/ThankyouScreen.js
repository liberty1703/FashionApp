import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FormHeader from '../../components/Button/FormHeader'
import FormButton2 from '../../components/Button/FormButton2'

const ThankyouScreen = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <FormHeader />
      <Image source={require('../../../assets/images/success.jpg')} style={{
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
        Thank You!
      </Text>
      <Text style={styles.text}>
        Congratulations your payment
      </Text>
      <Text style={styles.text}>
        was successful.
      </Text>
      <View style={{ marginTop: 100 }}>
        <FormButton2
          title={'Thank You'}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  )
}

export default ThankyouScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
})