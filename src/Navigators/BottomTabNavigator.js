import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View,Text,TouchableOpacity,Pressable} from 'react-native'
import Transactions from '../screens/Transactions/Transcations';
import DoTransaction from '../screens/DoTransaction/DoTransaction';
import Users from '../screens/Users/User';
const Tab = createBottomTabNavigator();

const CustomTabButton=({children,onPress})=>{
return(
  <Pressable
  style={{
    top:-20,
    justifyContent:'center',
    alignItems:'center',
    elevation:5
  }}
  onPress={()=>onPress()}
  >
<View 
style={{
  width:60,
  height:60,
  borderRadius:999,
  backgroundColor:'gray',
  elevation:5
}}
>
  {children}
</View>
  </Pressable>
)
}

function MyTabs() {




  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,

      tabBarStyle:{
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        elevation:1,
        borderWidth:1,
        borderColor:'gray',
        backgroundColor:'white',
        borderRadius:20,
        height:55
      }
    }}>
<Tab.Screen
     options={{
      tabBarActiveTintColor: "black",
      tabBarIcon: ({ color, size,focused }) => (
       <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={{backgroundColor:focused?'gray':"transparent",position:'absolute',width:"90%",height:"100%",alignSelf:'center',top:0,opacity:.4,borderRadius:999}}></View>
         <FontAwesome5 name="users" color={color} size={focused?18:12} />
         <Text style={{color:color,fontSize:focused?13:12}}>Users</Text>
       </View>
      ),
      headerShown: false,
  }}
      name={"Users"} component={Users} />
{/* <Tab.Screen
     options={{
      tabBarActiveTintColor:"white",
      tabBarIcon: ({ color, size,focused }) => (
       <View style={{justifyContent:'center',alignItems:'center'}}>
       <FontAwesome5 name="users" color={"white"} size={focused?18:18} />
         <Text style={{color:"white",fontSize:focused?8:8}}>Send Money</Text>
       </View>
      ),
      tabBarButton:(props)=>(
        <CustomTabButton
        {...props}
        />
      ),
      headerShown: false,
  }}
      name={"Send Money"} component={DoTransaction} /> */}
<Tab.Screen
     options={{
      tabBarActiveTintColor: "black",
      tabBarIcon: ({ color, size,focused }) => (
       <View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={{backgroundColor:focused?'gray':"transparent",position:'absolute',width:"90%",height:"100%",alignSelf:'center',top:0,opacity:.4,borderRadius:999}}></View>
         <FontAwesome5 name="history" color={color} size={focused?18:12} />
         <Text style={{color:color,fontSize:focused?13:12}}>History</Text>
       </View>
      ),
      headerShown: false,
  }}
      name={"History"} component={Transactions} />
     
    
    </Tab.Navigator>
  );
}

export default MyTabs