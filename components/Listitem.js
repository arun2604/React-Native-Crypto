import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Listitem = (props) => {
    let {name,symbol, currentPrice, pricechangepercentage,logo,onPress}= props;
    const priceChaneColor = pricechangepercentage > 0 ? 'green' : 'red';

  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.itemWrapper}>
            {/* Left side */}
            <View style={styles.leftWrapper}>
                <Image source={{uri: logo}}
                style={styles.image}/>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                </View>
            </View>
            {/* Right side */}
            <View style={styles.rightWrapper}>
                <Text style={styles.title}>$ {currentPrice.toLocaleString('en-US', { currency: 'USD'})}</Text>
                <Text style={[styles.subtitle,{color:priceChaneColor}]}>{pricechangepercentage}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default Listitem

const styles = StyleSheet.create({
    itemWrapper:{
        paddingHorizontal:16,
        marginTop:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    image:{
        height:48,
        width:48,
    },
    leftWrapper:{
        flexDirection:'row',
        alignItems: 'center',
    },
    titleWrapper:{
        marginLeft:8,
    },
    rightWrapper:{
        alignItems: 'flex-end'
    },
    title:{
        fontSize:18,
    },
    subtitle:{
        fontSize:14,
        color:'#A9ABB1',
        marginTop:4,
    },
})