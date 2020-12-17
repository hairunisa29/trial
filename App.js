import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

const InputUsername = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={styles.userInput}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder='Username'
    />
  );
}

const InputPassword = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={styles.passwordInput}
      onChangeText={text => onChangeText(text)}
      secureTextEntry={true}
      value={value}
      placeholder='Password'
    />
  );
}

function formLogin() {
  return(
    <View style={styles.containerView}>
      <Image
        source={{uri:"https://codelatte.org/wp-content/uploads/2018/07/fixcil.png"}}
        style={{width: 80, height: 80}}
      />
      <Text style={styles.textTitle}>LOGIN HERE</Text>
      <InputUsername></InputUsername>
      <InputPassword></InputPassword>
      <TouchableOpacity> 
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.creditText}>© Hairunisa</Text>
    </View>
  );
}

const styles =  StyleSheet.create({
  containerView: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  textTitle:{
    fontWeight: "bold",
    color: "#43B2EC"
  },
  userInput:{
    height: 40, 
    borderColor: 'gray', 
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderWidth: 1, 
    borderRadius:8,
    marginTop: responsiveHeight(3),
  },
  passwordInput:{
    height: 40,
    borderColor: 'gray',
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderWidth: 1,
    borderRadius:8,
    marginTop: responsiveHeight(5)
  },
  buttonView:{
    backgroundColor:'#43B2EC',
    justifyContent: "center",
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    alignItems:"center",
    borderRadius: 8,
    marginTop: responsiveHeight(3)
  },
  buttonText:{
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  creditText:{
    fontSize:11,
    marginTop: responsiveHeight(15)
  }
})



export default formLogin;