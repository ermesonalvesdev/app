import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends Component {

  // Criação do construtor para criar o State nas Props
  constructor(props) {
    super(props);
    this.state = {
      numero: 0
    };
    // Criação do bind da Function
    this.Increment = this.Increment.bind(this);
    this.btnDecrement = this.btnDecrement.bind(this);
  };

  // Function do Button
  Increment() {
    this.setState({
      numero: this.state.numero + 1
    })
  }
  btnDecrement() {
    if (this.state.numero == - 0) {
      alert('Number menor que ZERO (0)')
      this.setState({
        numero: 0,
      })
    }
    else {
      this.setState({
        numero: this.state.numero - 1,
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {this.state.numero} </Text>

        <TouchableOpacity style={styles.btnIncrement}
          onPress={this.Increment}>
          <View>
            <Text style={{color: '#fff'}}>Increment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnDecrement}
          onPress={this.btnDecrement}>
          <View>
            <Text>Decrement</Text>
          </View>
        </TouchableOpacity>
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
  btnIncrement: {
    width: 230,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 16,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  btnDecrement: {
    width: 230,
    height: 50,
    color: '#000',
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#000',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
});
