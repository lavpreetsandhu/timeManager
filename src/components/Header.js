import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Header() {
  return ( 
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    headerContainer:{
        height:60,
        width:'100%',
        alignItems:'center',
        backgroundColor:"#FF7524",
        justifyContent:'center',
        marginBottom:12,
        shadowOffset:{height:5,width:0},
        elevation:1,
        overflow:'hidden',
        shadowColor:'red',
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        color:"#fff"
    }
})