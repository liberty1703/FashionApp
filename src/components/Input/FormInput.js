import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const FormInput = ({title, placeholder}) => {
  return (
    <View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 14, fontWeight: '500', color: '#000000'}}>
            {title}
          </Text>
          <View style={styles.textInput}>
            <TextInput
              placeholder={placeholder}
              style={{fontSize: 13, color: '#000'}}
            />
          </View>
        </View>
      </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
    textInput: {
        height: 45,
        backgroundColor: '#D8D8D8',
        borderRadius: 5,
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
      },
})