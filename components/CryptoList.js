import React, { Component } from 'react'
import { View,StyleSheet,FlatList } from 'react-native';
import axios from 'axios'
import { listingDataOptimizer } from './misc/dataOptimizer'
import ListDetail from './ListDetail'
export class CryptoList extends Component {
  constructor() {
    super();
    this.state = { cryptoList : []};
    this.state = { test : []};
  }
  componentDidMount() {
    // console.log("carlist mounted!");


    axios.get('https://api.alternative.me/v2/ticker/?limit=20').then (response => {
      let data = response.data.data;
      let dataEl = listingDataOptimizer(data)
      this.setState({cryptoList: dataEl})
    })
  }
  render() {
    return (
      <View style={styles.listView}> 
        <FlatList
          data={this.state.cryptoList}
          renderItem={({ item }) => {
            return   <ListDetail symbol={item.symbol} price={item.price} change={item.percent_change_24h}/>
          }}
  
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  listView: {
    flex:1,
    marginTop: 5,
    paddingBottom:20,
    // paddingTop: 20,
  },
 
});
export default CryptoList