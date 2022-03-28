import React, { Component } from 'react'
import { View,Text,StyleSheet,FlatList } from 'react-native';
import axios from 'axios'
import ListDetail from './ListDetail'
export class CryptoList extends Component {
  constructor() {
    super();
    this.state = { cryptoList : []};
    this.state = { test : []};
  }
  // const { listView } = styles;
  componentDidMount() {
    console.log("carlist mounted!");
    // const { listView } = styles


    axios.get('https://api.alternative.me/v2/ticker/?limit=10').then (response => {

      var data = response.data.data;
      var dataEl = Object.values(data);
      dataEl.sort((a,b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0))
      for (let item of dataEl){
        item.price = item.quotes.USD.price
        item.market_cap=item.quotes.USD.market_cap
        item.percent_change_24h=item.quotes.USD.percent_change_24h
        item.percent_change_1h=item.quotes.USD.percent_change_1h
        item.percent_change_7d=item.quotes.USD.percent_change_7d
        item.volume_24h=item.quotes.USD.volume_24h
        
        if (item.percent_change_24h != null && item.percent_change_24h !=0)
        item.percent_change_24h=item.percent_change_24h.toLocaleString()
      
        if (item.percent_change_1h != null && item.percent_change_1h !=0)
        item.percent_change_1h=item.percent_change_1h.toLocaleString()
      
        if (item.percent_change_7d != null && item.percent_change_7d !=0)
        item.percent_change_7d=item.percent_change_7d.toLocaleString()
      
        dataEl[0].percent_change_7d = dataEl[0].percent_change_7d.toLocaleString()
        delete item["quotes"]
      }
      this.setState({cryptoList: dataEl})
      this.setState({test: [{
        "symbol": "BTC",
        "id": 1
      },
      {
        "symbol": "ETH",
        "id": 1027
      },
      {
        "symbol": "USDT",
        "id": 825
      },
      {
        "symbol": "BNB",
        "id": 1839
      },
      {
        "symbol": "USDC",
        "id": 3408
      },
      {
        "symbol": "XRP",
        "id": 52
      },
      {
        "symbol": "ADA",
        "id": 2010
      },
      {
        "symbol": "SOL",
        "id": 5426
      },
      {
        "symbol": "LUNA",
        "id": 4172
      },
      {
        "symbol": "AVAX",
        "id": 5805
      },
      {
        "symbol": "DOT",
        "id": 6636
      },
      {
        "symbol": "DOGE",
        "id": 74
      },
      {
        "symbol": "BUSD",
        "id": 4687
      }]})


      console.log(this.state.cryptoList);

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
          // keyExtractor={(id) => id.id}
          // renderItem={({item}) =>
          // <Text>
          //   {item.symbol}
          // </Text>
    // <ListDetail 
    //         symbol={item.symbol}
            
            

    //       />
        // }
        />
      </View>
      // <View>
      //   <Text>here</Text>
      // </View>
    )
  }
}
const styles = StyleSheet.create({
  listView: {
    marginTop: 5,
    // paddingTop: 20,
  },
 
});
export default CryptoList