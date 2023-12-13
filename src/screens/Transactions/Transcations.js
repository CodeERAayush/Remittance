import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import TransactionCard from '../../Components/TransactionCard'

const Transactions = () => {

  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)

  const _getTransactions = async () => {
    setLoading(true)
    const user = await AsyncStorage.getItem("user")
    const params = {
      url: "https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/Transfers",
      method: "GET"
    }
    axios(params).then(r => {
      const trans = r?.data?.filter(data => data?.user_id === JSON.parse(user)?.user_id)
      setTransactions(trans)
    }).catch(e => console.log(e))
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    _getTransactions();
  }, [])
  return (
    <View style={styles.main}>

      <View style={styles.header}>
        <Text style={styles.headerText}>History</Text>
        {
          loading ? <ActivityIndicator
            size={"large"}
            style={{ position: 'absolute', right: 5, top: 8 }}
            color={'white'}
          /> : null
        }
      </View>
      <View style={styles.card_holder}>
        <FlatList
          data={transactions}
          keyExtractor={(item, index) => index}
          ListEmptyComponent={() => <Text style={{ alignSelf: 'center',color:'black' }}>No transactions found!</Text>}
          renderItem={({ item }) => <TransactionCard item={item} />}
          ListFooterComponent={() => <View
            style={{ marginBottom: 100 }}
          />}
          refreshControl={<RefreshControl
            onRefresh={() => _getTransactions()}
            refreshing={loading}
          />}
        />
      </View>
    </View>
  )
}

export default Transactions

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    width: '90%',
    height: 50,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 10
  },
  main: {
    flex: 1,
    backgroundColor: 'white'
  },
  card_holder: {
    flex: 1
  }
})