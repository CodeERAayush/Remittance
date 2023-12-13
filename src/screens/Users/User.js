import { FlatList, Image, RefreshControl, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UsersCard from '../../Components/UsersCard'
import AsyncStorage from '@react-native-async-storage/async-storage'

const User = ({ navigation }) => {

  const [users, setUsers] = useState([])
  const [myDetail, setMyDetail] = useState("")
  const [isRefresh, setRefresh] = useState(false)
  const _getUsers = async () => {
    setMyDetail(await AsyncStorage.getItem("user"))
    const params = {
      url: "https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/users",
      method: 'GET'
    }
    axios(params).then(r => setUsers(r?.data)).catch(e => console.log(e))
  }

  useEffect(() => {
    _getUsers()
  }, [])

  return (
    <View style={styles.mainScreen}>
      <StatusBar
        backgroundColor={'black'}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Recepients</Text>
        {myDetail !== "" ? <View style={{ alignItems: 'center', alignSelf: 'center', marginHorizontal: 10 }}>
          <Image
            source={{ uri: JSON.parse(myDetail)?.avatar }}
            style={{ height: 30, width: 30, borderRadius: 1000 }}
          />
          <Text style={{ fontSize: 10, color: 'white' }}>{JSON.parse(myDetail)?.name}</Text>
        </View> : null}
      </View>
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <UsersCard
              item={item}
              onPressNav={(data) => navigation.navigate("SendMoney", { data: data, user_id: JSON.parse(myDetail)?.user_id })}
            />
          )}
          ListFooterComponent={() => <View
            style={{ marginBottom: 100 }}
          />}
          refreshControl={<RefreshControl
            onRefresh={() => _getUsers()}
            refreshing={isRefresh}
          />}
        />
      </View>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: 'white'
  },
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
  container: {
    flex: 1,
  }
})