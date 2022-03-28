import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import CryptoList from './components/CryptoList'

export default function App() {
  return (
    <View>
      <View>
      <StatusBar style="auto" />
      {/* <Text>Open up App.js to start working on your</Text> */}
      <Header title={'CryptoMarket'}/>
      </View>
      <View >
        <CryptoList />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    color:'#555'
  }
});
