import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
const StatusScreen = () => {
  const route=useRoute()
  return (
    <View style={styles.main_screen}>
      <Text style={styles.text}>
      Sent Amount: {route?.params?.data?.sent_amount} Rs.
      </Text>
      <Text style={styles.text}>
      Received Amount: {route?.params?.data?.received_amount} Rs.
      </Text>
      <Text style={styles.text}>
      Rate: {route?.params?.data?.rate} 
      </Text>
    </View>
  )
}

export default StatusScreen

const styles = StyleSheet.create({
  main_screen:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  text:{
    color:'black',
    fontSize:14,
    fontWeight:'800'
  }
})