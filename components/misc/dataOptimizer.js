import { twoDigitTruncator,priceOptimizer } from "./numberOptimizer";

export function listingDataOptimizer(data) {
  var dataEl = Object.values(data);
      dataEl.sort((a,b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0))
      for (let item of dataEl){
        item.price = priceOptimizer(item.quotes.USD.price)
        item.market_cap=item.quotes.USD.market_cap
        item.percent_change_24h=item.quotes.USD.percent_change_24h
        item.percent_change_1h=item.quotes.USD.percent_change_1h
        item.percent_change_7d=item.quotes.USD.percent_change_7d
        item.volume_24h=item.quotes.USD.volume_24h
        
        if (item.percent_change_24h != null && item.percent_change_24h !=0)
        item.percent_change_24h=twoDigitTruncator(item.percent_change_24h) 
      
        if (item.percent_change_1h != null && item.percent_change_1h !=0)
        item.percent_change_1h=twoDigitTruncator(item.percent_change_1h)
      
        if (item.percent_change_7d != null && item.percent_change_7d !=0)
        item.percent_change_7d=twoDigitTruncator(item.percent_change_7d)
        delete item["quotes"]
      }
      return dataEl
}