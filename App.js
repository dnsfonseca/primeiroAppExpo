import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeComponent from './src/components/WelcomeComponent';
import ImageComponent from './src/components/ImageComponent'
import ButtonComponent from './src/components/ButtonComponent';

class App extends Component {
  render(){
    return(
      <View style={styles.conteiner}>
        <WelcomeComponent />
        <ImageComponent />
        <ButtonComponent />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conteiner:{
      flex: 1,
      alignItems: 'center'
  }
})


export default App