import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import ShoppingListItem from './ShoppingListItem';
import { StackNavigator } from 'react-navigation';


export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('AddFormScreen')}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>-Shopping List-</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <ShoppingListItem />

      </ScrollView>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4DCD2",
  },
  header: {
    flexDirection: 'row',
    backgroundColor: "white",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  headerText: {
    color: "#3C384C",
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    backgroundColor: "#E4DCD2",
  },
  addButton: {
    zIndex: 11,
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#E47E6D",
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3C384C",
  }
});
