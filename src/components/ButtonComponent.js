import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

class ButtonComponent extends Component {
  render(){
    return(
      <>
        <TouchableOpacity style={styles.styleButton}>Entrar</TouchableOpacity>
      </>
    )
  }
}

const styles = StyleSheet.create({
  styleButton:{
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      borderRadius: 15,
      width: 200,
      height: 30,
      margin: 20,
      backgroundColor: '#9932CC',
      fontSize: 18
  }
})


export default ButtonComponent