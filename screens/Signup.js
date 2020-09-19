import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Signup extends React.Component {
  goToLogin = () => this.props.navigation.navigate('Login')
  render() {
    return (
      <View style={styles.container}>
        <Text>Signup</Text>
        <View style={styles.buttonView}>
          <Button title='Go to Login' onPress={this.goToLogin} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonView: {
    padding: 10,
  },
});
