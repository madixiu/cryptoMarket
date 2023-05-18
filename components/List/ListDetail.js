import React from 'react'
import { View, Text,Image,TouchableHighlight } from 'react-native'
import jsonData from '../../assets/data/coinMarketCapIDlist.json'
// ?functions
const textColor = (input) => {
  if (input > 0)
  return {color: 'green'} 
  else if (input < 0)
  return {color: 'red'}
  else
  return {color: 'black'}
}
const iconIDfinder = (symbol) => {
  let IDdata = jsonData
  if(IDdata[symbol])
  return IDdata[symbol].id
}
const onItemClick = (data,navigation) => {
    navigation.navigate('CryptoDetail',{data: data})
}
// ? *************

const ListDetail = (props) => {
  
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#999"
      onPress={() => 
        onItemClick({symbol: props.symbol,name: props.name},props.navigation)}
    >
      
      <View style={styles.container}>
        <View style={styles.IconViewStyle}>
          {/* <Image source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/'+iconIDfinder(props.symbol)+'.png', cache: 'force-cache'}} 
            style={{ width: 32, height: 32,marginLeft: 10, }}
          /> */}
          <Image source={{ uri: 'https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/'+props.symbol.toLowerCase() +'.png', cache: 'force-cache'}} 
            style={{ width: 32, height: 32,marginLeft: 10, }}
          />
          <View style={{paddingLeft:8}}>
            <Text style={styles.nameTextStyling}>{props.name}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={styles.rankTextView}>
                <Text style={styles.rankTextStyling}>{props.rank}</Text>
              </View>
              <Text style={styles.symbolTextStyling}>{props.symbol}</Text>
            </View>
          </View>
        </View>

        <View style={styles.PriceViewStyle}>
          <Text style={styles.priceTextStyling}>{props.price}</Text>
        </View>

        <View style={styles.ChangeViewStyle}>

          <View style={styles.ChangeSubViewStyle}>
            <Text style={[styles.changeTextStyling, textColor(props.change1h)]} >{props.change1h}%</Text>
            <Text style={[styles.changeTextStyling,{marginLeft:5}]}>1H</Text>
          </View>

          <View style={styles.ChangeSubViewStyle}>
            <Text style={[styles.changeTextStyling, textColor(props.change24h)]} >{props.change24h}%</Text>
            <Text style={[styles.changeTextStyling,{marginLeft:5}]}>1D</Text>
          </View>

          <View style={styles.ChangeSubViewStyle}>
            <Text style={[styles.changeTextStyling, textColor(props.change7d)]} >{props.change7d}%</Text>
            <Text style={[styles.changeTextStyling,{marginLeft:5}]}>7D</Text>
          </View>
          
        </View>
      </View>
    </TouchableHighlight>
  )
};


const styles = {
  container: {
    backgroundColor: 'rgb( 200, 200, 200)',
    // borderColor:'#888',
    // borderStyle:'solid',
    // borderWidth:0.5,
    elevation:3,
    // marginLeft: 5,
    // marginRight:5,
    marginBottom: 3,
    marginTop:1,
    borderRadius: 8,
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // minHeight: 74
  },
  symbolTextStyling: {
    fontSize: 12,
    // paddingLeft: 10,
  },
  nameTextStyling: {
    fontSize: 9,
    // paddingLeft: 10,
    color: '#666'
  },
  rankTextStyling:{
    fontSize:7,
    color:'white'
    
  },
  rankTextView:{
    backgroundColor:'#999999',
    borderRadius:2,
    padding:2,
    paddingHorizontal:5,
    marginRight:2

  },
  priceTextStyling: {
    fontSize: 12,
  },
  changeTextStyling: {
    fontSize: 11,
    // paddingRight: 22,
  },
  IconViewStyle: {
    // backgroundColor: 'gainsboro',
    // height: 70,
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingTop: 25
  },
  PriceViewStyle: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  ChangeViewStyle:{
    flex:1,
    justifyContent: 'flex-end',
    paddingTop: 5,
    paddingBottom: 5


  },
  ChangeSubViewStyle: {
    // flex:1,
    flexDirection:'row',
    justifyContent: 'flex-end',

    paddingRight: 22
  },
  logo: {
    width: 16,
    height: 16,
  },
}
export default ListDetail