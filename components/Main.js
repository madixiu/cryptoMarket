import React from 'react';
import { Text, View } from 'react-native';
import CryptoList from './CryptoList'
const Main = () => {
  const { textStyling, viewStyle } = styles;
  return (
    <View style={viewStyle}>
        <View>
          <CryptoList />
        </View>
        <Text style={textStyling}>Main</Text>
    </View>
  );
};

const styles = {
  textStyling: {
    fontSize: 22,
  },
  viewStyle: {
    backgroundColor: '#555',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 25

  }
}
export default Main;
