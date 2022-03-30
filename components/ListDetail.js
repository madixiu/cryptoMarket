import React from 'react'
import { View, Text,Image } from 'react-native'
import jsonData from '../assets/data/coinMarketCapIDlist.json'

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
  return IDdata[symbol].id
}
const ListDetail = props => {
  
  return (
    <View style={styles.itemView}>
      <View style={styles.IconViewStyle}>
        <Image source={{ uri: 'https://s2.coinmarketcap.com/static/img/coins/64x64/'+iconIDfinder(props.symbol)+'.png', cache: 'force-cache'}} 
          style={{ width: 32, height: 32,marginLeft: 10, }}
        />
        <Text style={styles.symbolTextStyling}>{props.symbol}</Text>
      </View>
      <Text style={styles.priceTextStyling}>{props.price}</Text>
      <Text style={[styles.changeTextStyling, textColor(props.change)]} >{props.change}%</Text>

    </View>
  )
};


const styles = {
  itemView: {
    backgroundColor: 'gainsboro',
    marginLeft: 5,
    marginRight:5,
    marginBottom: 5,
    borderRadius: 7,
    // flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 74
  },
  symbolTextStyling: {
    fontSize: 15,
    paddingLeft: 10,
  },
  priceTextStyling: {
    fontSize: 15,
  },
  changeTextStyling: {
    fontSize: 15,
    paddingRight: 22,
  },
  IconViewStyle: {
    // backgroundColor: 'gainsboro',
    // height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 25

  },
  logo: {
    width: 16,
    height: 16,
  },
}
export default ListDetail