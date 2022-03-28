import React from 'react'
import { View, Text } from 'react-native'

const ListDetail = props => {
  // const { cryptoSlang, cryptoName, itemView } = styles;
  return (
    <View style={styles.itemView}>
      <Text style={styles.symbolTextStyling}>{props.symbol}</Text>
      <Text style={styles.priceTextStyling}>{props.price}</Text>
      <Text style={styles.changeTextStyling}>{props.change}</Text>

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