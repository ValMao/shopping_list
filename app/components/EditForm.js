import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,Alert } from 'react-native';
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';

const uuidv1 = require('uuid/v1');
uuidv1();


export default class AddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newItemName: "",
      newItemQuantity: "",
      newItemDescription: "",
    };
  }

  submit() {
    //insert or update data
    firebase.database().ref('listItem/' + uuidv1()).set(
      {
        name: this.state.newItemName,
        description: this.state.newItemDescription,
        quantity: parseInt(this.state.newItemQuantity)
      }
    ).then(() => {
      Alert.alert(
        'Success',
        "successfully created!"
      );
      
    }).catch((error) => {
      Alert.alert(error);
    });

  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.heading}>Edit Item</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.inputView}>
            <Text>Name</Text>
            <TextInput style={styles.input} onChangeText={(text) => this.setState({ newItemName: text })}></TextInput>
          </View>

          <View style={styles.inputView}>
            <Text>Quantity</Text>
            <TextInput style={styles.input} onChangeText={(text) => this.setState({ newItemQuantity: text })}></TextInput>

          </View>

          <View style={styles.inputView}>
            <Text>Description</Text>
            <TextInput style={styles.input} onChangeText={(text) => this.setState({ newItemDescription: text })}></TextInput>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
            <Text>SUBMIT</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4DCD2",
    padding: 30
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: "#3C384C",
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flexDirection: 'column',
  },
  inputView: {
    marginTop: 15,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#E47E6D",
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

