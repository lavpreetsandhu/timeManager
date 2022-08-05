import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'
import { TimeSplitBox, Header } from '../components'

export default function Main() {
    const timeData=[
        {id:1,name:"Demo",value:"50%",backgroundColor:"#0A5688"},
        {id:2,name:"Demo",value:"50%",backgroundColor:"#F3954F"},
        {id:3,name:"Demo",value:"50%",backgroundColor:"#F7CC3F"},
        {id:4,name:"Demo",value:"50%",backgroundColor:"#C62E46"},

    ]
    return (
        <View style={styles.mainContainer}>
            <Header />
            <FlatList 
                keyExtractor={timeData.id}
                contentContainerStyle={styles.flatListContainer}
                data={timeData}
                numColumns={2}
                renderItem={({item})=>{
                return <TimeSplitBox backgroundColor={item.backgroundColor} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer:{
        flex:1,
        justifyContent:'center'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "##FAFAFA",
        justifyContent:'space-between'
    },
    timeSplitBoxContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
    }
})