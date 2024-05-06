import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const InputBox = ({inputtitle,autoComplete,keyboardType,secureTextEntry=false, value, setValue}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={inputtitle}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  
  input: {
    borderWidth: 1,
    borderColor: '#3AAFA9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: 300,
    color:"#3AAFA9",
    fontSize:12

  },
});

export default InputBox