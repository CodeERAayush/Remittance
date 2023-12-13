import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UsersCard = ({ item, onPressNav }) => {
  return (
    <Pressable
      onPress={() => onPressNav(item)}
      style={styles.card}>
      <Image
        source={{ uri: !item?.avatar  ? "https://e7.pngegg.com/pngimages/81/570/png-clipart-profile-logo-computer-icons-user-user-blue-heroes-thumbnail.png" : item?.avatar }}
        style={{ width: 50, height: 50, borderRadius: 10000, backgroundColor: 'gray' }}
      />
      <View style={styles.detail_holder}>
        <Text style={styles.text_name}>{item?.name}</Text>
        <Text style={styles.text}>{item?.email}</Text>
        <Text style={styles.text}>{item?.kyc ? "KYC" : ""}</Text>
      </View>
    </Pressable>
  )
}

export default UsersCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
    marginVertical: 5,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 10,
    flexDirection: 'row'
  },
  detail_holder: {
    marginHorizontal: 10
  },
  text_name: {
    fontSize: 18,
    color: "black",
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    color: "#767676"
  }
})