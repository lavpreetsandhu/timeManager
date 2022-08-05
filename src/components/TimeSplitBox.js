import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function TimeSplitBox({backgroundColor="#fff",name='Demo',value='50%'}) {
  return (
    <View style={[styles.timeSplitBoxContainer,{backgroundColor}]}>
      <Text style={styles.timeSplitText}>Name</Text>
      <Text style={styles.timeSplitText}>{value}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    timeSplitBoxContainer:{
        backgroundColor:"#fff",
        height:180,
        flex:1,
        margin:15,
        borderRadius:20,
        padding:15,
        justifyContent:'center',
        alignItems:'center'
    },
    timeSplitText:{
        color:"#fff",
        fontSize:25,
        fontWeight:'bold'
    }
})