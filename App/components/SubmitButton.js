import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({handleSubmit, btntitle, loading}) => {
  return (
    <TouchableOpacity style={styles.submitbtn} onPress={handleSubmit}>
        <Text style={styles.btnText} >
            {loading ? "Please wait.." : btntitle}
            </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    submitbtn:{
        backgroundColor:"#3AAFA9",
        height:40,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:8,
        textAlign:"center",
        marginTop:20,
        alignSelf:'stretch',
        marginHorizontal:30,

    },

    btnText:
    {
        color: "#fff",
        fontSize:16,
        fontWeight:"bold",
    }
})

export default SubmitButton