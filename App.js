import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Main from './app/components/Main';
import { StackNavigator } from 'react-navigation';
import AddForm from './app/components/AddForm';
import EditForm from './app/components/EditForm';
import ShoppingListItem from './app/components/ShoppingListItem';

const App = StackNavigator({
  MainScreen: { screen: Main },
  ShoppingListItemScreen: { screen: ShoppingListItem },
  AddFormScreen: { screen: AddForm },
  EditFormScreen: { screen: EditForm }
});

export class ShoppingListApp extends Component {
  render() {
    return (
      <Main />
    );
  }
}

export default App;

