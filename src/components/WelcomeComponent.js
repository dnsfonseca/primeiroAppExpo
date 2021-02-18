import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class WelcomeComponent extends Component {
  
  render(){
    let nome = 'Daniel Araújo'
    return(
      <>
          <Text style={styles.boaVindas}>Olá, seja bem vindo!</Text>

          <Text><Text style={styles.textVariable}>{nome}</Text>, obrigado por visitar nosso projeto Expo.</Text>
      </>
    )
  }
}

const styles = StyleSheet.create({
  boaVindas:{
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold'
  },
  textVariable:{
    fontWeight: 'bold',
    fontSize: 18
  }
})


export default WelcomeComponent