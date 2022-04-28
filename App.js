import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import CryptoList from './components/CryptoList'

export default function App() {
  return (
    <View style={styles.container}>
    {/* //   <View> */}
      <StatusBar style="auto" />
      <Header title={'CryptoMarket'}/>
    {/* //   </View> */}
      {/* <View > */}
      <CryptoList />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#999',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textCenter: {
    color:'#555'
  }
});
