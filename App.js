import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'
import Home from './components/Home/Home'
import List from './components/List/List';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={'CryptoMarket'}/>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='List' screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({color,size}) => (
              <FontAwesome5 name="home" color={'red'} size={16} />
          )}} />
          <Tab.Screen name="List" component={List} options={{ tabBarIcon: ({color,size}) => (
              <FontAwesome5 name="coins" color={'red'} size={16} />
              )}} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    // backgroundColor: '#999',
  },
  textCenter: {
    color:'#555'
  }
});
