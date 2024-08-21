import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HeaderButton = ({title}) => {
    const navigation =useNavigation();
  return (
    <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
        <TouchableOpacity onPress={()=> navigation.goBack()}  style={styles.arrowCtn}>
          <Image
            source={require('../../../assets/images/arrow.png')}
            style={{height: 20, width: 20, tintColor: 'grey'}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#000',
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 20,
          }}>
          {title}
        </Text>
      </View>
  )
}

export default HeaderButton

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