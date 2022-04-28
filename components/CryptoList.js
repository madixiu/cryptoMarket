import React, { Component } from 'react'
import { View,Text,StyleSheet,FlatList } from 'react-native';
import axios from 'axios'
import { listingDataOptimizer } from './misc/dataOptimizer'
import ListDetail from './ListDetail'
export class CryptoList extends Component {
  constructor() {
    super();
    this.state = { cryptoList : []};
  }
  componentDidMount() {
    axios.get('https://api.alternative.me/v2/ticker/?limit=20').then (response => {
      let data = response.data.data;
      let dataEl = listingDataOptimizer(data)
      this.setState({cryptoList: dataEl})
    })
  }
  render() {
    return (
      <View style={{flex:1}}>
      <View style={styles.listHeader}>
        <View style={{flex:1,alignItems: 'flex-start',flexWrap:'wrap',justifyContent:'center'}}>
          <Text style={{fontSize:11,color:'#444'}}>Coin</Text>

        </View>
        <View style={{alignItems:'center',flexWrap:'wrap',justifyContent:'center'}}>
          <Text style={{fontSize:11,color:'#444'}}>Price $</Text>

        </View>
{/* ,color:'#555' */}
        <View  style={{flex:1,alignItems:'flex-start',flexWrap:'wrap-reverse',justifyContent:'center'}}>
          <Text style={{fontSize:11,color:'#444'}}>Change %</Text>

        </View>

        </View>
      <View style={styles.listView}>
        
        <FlatList
          data={this.state.cryptoList}
          renderItem={({ item }) => {
            return   <ListDetail name={item.name} symbol={item.symbol} price={item.price} change24h={item.percent_change_24h} change1h={item.percent_change_1h} change7d={item.percent_change_7d}/>
          }}
  
        />
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  listView: {
    flex:1,
    // marginTop: 15,
    marginLeft: 5,
    marginRight:5,
    // paddingBottom:20,
    // paddingTop: 20,
  },
  listHeader:{
    // flex:1,
    flexDirection:'row',
    // justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,




    // paddingBottom:1

  }
 
});
export default CryptoList