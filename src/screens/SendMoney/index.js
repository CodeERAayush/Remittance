import { Image, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import axios from 'axios'

const SendMoney = () => {
    const route=useRoute()
    const [amount,setAmount]=useState()
    const [loading,setLoading]=useState(false)

    const _sendMoney=()=>{
      setLoading(true)
      const data={ 
        "sent_amount": amount,
        "to": route.params?.data?.name,
        "user_id": route.params?.user_id
}
const body={
  url:"https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/Transfers",
  data:data,
  method:"POST"
}
axios(body).then(r=>{
  setAmount()
  ToastAndroid.show(`Amount Successfully transferred to ${route.params?.data?.name}`,4000)
}).catch(e=>
  {
  ToastAndroid.show(`Some error occured!`,2000)
  }).finally(()=>setLoading(false))
    }

  return (
    <View style={styles.main}>
       <StatusBar
      backgroundColor={'black'}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>Send Money To {route.params?.data?.name}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Image
        source={{uri:route.params?.data?.avatar}}
        style={{backgroundColor:'gray',height:60,width:60,borderRadius:9999,marginHorizontal:20}}/>
        <View>
          <Text style={{color:'black',fontWeight:'bold'}}>{route.params?.data?.name}</Text>
          <Text style={styles.text}>{route.params?.data?.email}</Text>
          <Text style={{fontSize:12,color:route.params?.data?.kyc?"green":"red",fontWeight:'800'}}>KYC: {route.params?.data?.kyc?"Yes":"No"}</Text>
        </View>
      </View>
      <View style={styles.send_money}>
        <Text style={{color:'black',fontSize:18,fontWeight:'800'}}>Send Money</Text>
        <View style={styles.input_holder}>
          <Text style={styles.text}>Enter Amount</Text>
          <TextInput
          placeholder='Enter Amount'
          keyboardType="numeric"
          placeholderTextColor={"black"}
          style={styles.input}
          value={amount}
          onChangeText={(text)=>setAmount(text)}
          />
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={_sendMoney}
        >
          <Text style={styles.buttonText}>{loading?"Sending Money...":"Send"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SendMoney

const styles = StyleSheet.create({
    header:{
        backgroundColor:'black',
        width:'90%',
        height:50,
        marginVertical:10,
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
      },
      headerText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginLeft:10
      },
      send_money:{
        alignItems:'center',
        paddingVertical:50
      },
      input_holder:{
        width:'90%',
        marginTop:10
      },
      input:{
        borderRadius:10,
        borderWidth:2,
        color:'black'
      },
      button:{
        backgroundColor:'gray',
        borderRadius:10,
        paddingVertical:5,
        paddingHorizontal:20,
        marginTop:20
      },
      buttonText:{
        color:'white',
        letterSpacing:0.6,
      },
      text:{
        color:'black'
      }
})