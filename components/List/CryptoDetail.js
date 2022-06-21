import { View, Text,Button } from 'react-native'
import React from 'react'

function backBotton(navigation,route){
  console.log(navigation,route);
  navigation.navigate('CryptoList')
}
const CryptoDetail = ({ navigation, route })  => {



  return (
    <View style={{flex:1,backgroundColor:'#999'}}>
      <Text>{route.params?.data.symbol}</Text>
      <Text>{route.params?.data.name }</Text>


      {/* <Text onPress={backBotton(navigation,route)}>back</Text> */}
      <Button
          onPress={() => {backBotton(navigation,route)}}
          title="Back"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
    </View>
  )
}

export default CryptoDetail;