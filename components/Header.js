import React from "react"
import { StyleSheet } from "react-native"
import {View, Text} from 'react-native'


const HeaderCostom = ()=>{


  return(
    <View style={style.wrapper}>
      <Text style={style.text}>Gallery </Text>
      <Text style={style.text}> Kizim Stepan </Text>
    </View>
  )
}
 const style = StyleSheet.create({
text:{
  color:'red'
  
}, 
wrapper:{
  display:"flex",
  flexDirection:  "row",
  justifyContent: "space-between",
  marginBottom:20, 
  marginTop:10
}
 })


export default HeaderCostom
