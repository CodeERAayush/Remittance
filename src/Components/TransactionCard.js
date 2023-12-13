import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TransactionCard = ({item}) => {
    // console.log(item)
  return (
        <View style={styles.card}>
            <View>
      <Text style={styles.detail_text_heading}>To: {item?.to}</Text>
      <Text style={styles.detail_text}>Sent: {item?.sent_amount} Rs.</Text>
      <Text style={styles.detail_text}>Recieved: {item?.received_amount} Rs.</Text>
      <Text style={styles.detail_text}>Rate: {item?.rate}</Text>

      <View style={styles.foot_holder}>
      <Text style={styles.foot_text}>Completed: {item?.completed?"Yes":"No"}</Text>
      <Text style={[styles.foot_text,{color:'#ec8e2c'}]}>    Pending: {item?.pending?"Yes ":"No"}</Text>
      </View>
      </View>
      </View>
  )
}

export default TransactionCard

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        width:'90%',
        elevation:5,
        marginVertical:5,
        borderRadius:10,
        alignSelf:'center',
        padding:10,
        flexDirection:'row'
    },
    detail_holder:{
        marginHorizontal:10,
    },
    foot_holder:{
        flexDirection:'row'
    },
    detail_text:{
        color:'black',
        fontWeight:'700',
        fontSize:12,
    },
    foot_text:{
        color:'green',
        fontWeight:'800'
    },
    detail_text_heading:{
        color:'black',
        fontSize:18,
        fontWeight:'bold',
    }
})