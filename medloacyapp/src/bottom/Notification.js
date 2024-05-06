import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View style ={styles.Notificationcontainer}>
      <Text>Notification Bottom navigation</Text>
      console.log("no")
    </View>
  )
}



const styles =StyleSheet.create({

  Notificationcontainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },

})

export default Notification