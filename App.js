import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  // Criação do construtor para criar o State nas Props
  constructor(props){
    super(props);
    this.state = {
      numero: 0
    };
    // Criação do bind da Function
    this.numberAlterMais = this.numberAlterMais.bind(this);
    this.numberAlterMenos = this.numberAlterMenos.bind(this);
  };

  // Function do Button
  numberAlterMais(){
    this.setState({
      numero: this.state.numero + 1
    })
  }
  numberAlterMenos(){
    if (this.state.numero == - 0) {
      alert('Number menor que ZERO (0)')
      this.setState({
        numero: 0,
      })
    }
    else{
      this.setState({
        numero: this.state.numero - 1,
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}> {this.state.numero} </Text>
        <Button 
        title='Count+'
        onPress={this.numberAlterMais} />
        <Button
        title='Count-' 
        onPress={this.numberAlterMenos} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500'
  },
});
