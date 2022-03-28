import React from 'react'
import { View, Text } from 'react-native'

const textColor = (input) => {
  if (input > 0)
  return {color: 'green'} 
  else if (input < 0)
  return {color: 'red'}
  else
  return {color: 'black'}
}
const ListDetail = props => {
 
  return (
    <View style={styles.itemView}>
      <Text style={styles.symbolTextStyling}>{props.symbol}</Text>
      <Text style={styles.priceTextStyling}>{props.price}</Text>
      <Text style={[styles.changeTextStyling, textColor(props.change)]} >{props.change}%</Text>

    </View>
  )
};


const styles = {
  itemView: {
    backgroundColor: 'gainsboro',
    marginLeft: 4,
    marginRight:4,
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
    paddingLeft: 22,
  },
  priceTextStyling: {
    fontSize: 15,
  },
  changeTextStyling: {
    fontSize: 15,
    paddingRight: 22,
  },
  viewStyle: {
    backgroundColor: 'gainsboro',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25

  }
}
export default ListDetail