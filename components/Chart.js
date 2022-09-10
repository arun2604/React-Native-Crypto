import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';

const Chart = (props) => {
    const {currentPrice,symbol,logo,name,pricechangepercentage,marketRank,onedayChange,high,low} = props;
    const priceChaneColor = pricechangepercentage > 0 ? 'green' : 'red';

  return (
    <View style={styles.chartWrapper}>
      {/* Titles */}
      <View style={styles.titlesWrapper}>
          <View style={styles.upperTitles}>
            <View style={styles.upperLeftTitle}>
              <Image source={{ uri: logo }} style={styles.image} />
              <Text style={styles.subtitle}>{name} </Text>
            </View>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>

          <View style={styles.lowerTitle}>
            <Text style={styles.boldTitle}>${currentPrice}</Text>
            <Text style={[styles.title,{color: priceChaneColor}]}>{pricechangepercentage.toFixed(2)}%</Text>
          </View>
          <View style={styles.detailswrapper}>
            <Text style={styles.details}>Rank: {marketRank}</Text>
            <Text style={styles.details}>one day Change: {onedayChange}</Text>
            <Text style={styles.details}>Highest in 24 hours: {high}</Text>
            <Text style={styles.details}>Lowest in 24 hours: {low}</Text>
          </View>
        </View>
    </View>
  )
}

export default Chart

const styles = StyleSheet.create({
  chartWrapper: {
    margin:16,
  },
  titlesWrapper: {},
  upperTitles: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  upperLeftTitle: {
    alignItems:'center',
    flexDirection:'row',
  },
  image: {
    width:26,
    height:26,
    marginRight: 6,
  },
  subtitle: {
    fontSize:14,
    color: 'gray',
  },
  lowerTitle: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  boldTitle: {
    fontSize:24,
    fontWeight: 'bold',    
  },
  title: {
    fontSize: 18,
  },
  detailswrapper:{
    marginTop:25,
  },
  details:{
    fontSize:16,
    marginBottom:4,
  }
})
