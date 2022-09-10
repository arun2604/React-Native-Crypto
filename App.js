import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Listitem from './components/Listitem';
import {BottomSheetModal,BottomSheetModalProvider,} from '@gorhom/bottom-sheet';
import { useEffect, useMemo, useRef, useState } from 'react';
import Chart from './components/Chart';
import { getCryptoData } from './Data/cryptoData';

export default function App() {
  const [data,setData] = useState([])
  const [coinData,setCoinData] = useState(null);

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['35%'], []);

  const openModel = (item) => {
    setCoinData(item)
    bottomSheetModalRef.current.present()
  }

  useEffect(()=>{
    const fetchCryptoData = async()=>{
      const cryptoData = await getCryptoData();
      setData(cryptoData);
    }
    fetchCryptoData()
  },[])

  return (

    <BottomSheetModalProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Crypto Details</Text>
      </View>

      <View style={styles.margin} />

        <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <Listitem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            pricechangepercentage={item.price_change_percentage_7d_in_currency}
            logo={item.image}
            onPress={()=> openModel(item)}
          />
        )}
      />       
      <StatusBar style="auto" />
    </SafeAreaView>

    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      style={styles.bottomSheet}
    >
     {coinData ? ( <Chart 
        currentPrice={coinData.current_price}
        logo={coinData.image}
        name={coinData.name}
        symbol={coinData.symbol}
        pricechangepercentage={coinData.price_change_percentage_7d_in_currency}
        marketRank = {coinData.market_cap_rank}
        onedayChange = {coinData.price_change_24h}
        high={coinData.high_24h}
        low={coinData.low_24h}
      />)
    : null
    }

    </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper:{
    marginTop: 50,
    paddingHorizontal:16,
  },
  largeTitle:{
    fontSize:24,
    fontWeight:"bold"
  },
  margin:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop:16,
  },
  bottomSheet:{
    shadowColor: 'black',
    shadowOffset:{
      height: -4,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
