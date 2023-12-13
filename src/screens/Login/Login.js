import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {


  const _checkUser=async()=>{
    const user = await AsyncStorage.getItem("user")
    if(user!==null){
      navigation.replace("MyTabs")
    }
  }

  React.useEffect(()=>{
    _checkUser()
  },[])

    React.useEffect(()=>{
        GoogleSignin.configure({
          webClientId: "77355742179-4s5oqeumbpbqmvcr7be8hijiookolv43.apps.googleusercontent.com", 
          offlineAccess: true
        });
      }, [])
    
      const GoogleSingUp = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          await GoogleSignin.signIn().then(result => {
            // console.log(result?.user?.id)
            if (result.user) {
              let data= {
                "name": result?.user?.name,
                "avatar": result?.user?.photo,
                "email": result?.user?.email,
                "user_id":result?.user?.id
            }
            const params={
              url:'https://654b68155b38a59f28ef05c2.mockapi.io/scopex/api/users',
              method:"POST",
              data:data
            }
            axios(params).then(async r=>{
              await AsyncStorage.setItem("user",JSON.stringify(r?.data))
              navigation.replace('MyTabs')
            }).catch(e=>console.log(e))
            }
          });
        } catch (error) {
            console.log(error)
        }
      };
      return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
          <TouchableOpacity
          onPress={()=>{
            GoogleSingUp()
          }}
          style={styles.button}>
            <Text style={{color:'white'}}>Signin With Google</Text>
          </TouchableOpacity>
        </View>
      )
}

export default Login

const styles = StyleSheet.create({
  button:{
backgroundColor:'blue',
paddingHorizontal:20,
paddingVertical:5,
borderRadius:99
  }
})