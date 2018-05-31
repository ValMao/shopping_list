import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Timers, ScrollView, Alert, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import App from '../../App';

export default class ShoppingListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyANElXYMv5mYoua1ZbMcOs6BoZdkDfoKfs",
            authDomain: "shopping-list-7c69f.firebaseapp.com",
            databaseURL: "https://shopping-list-7c69f.firebaseio.com",
            projectId: "shopping-list-7c69f",
            storageBucket: "",
            messagingSenderId: "694161360376"
        };
        firebase.initializeApp(config);

        //get data every time value changes
        firebase.database().ref('listItem').on('value', (data) => {
            this.setState({ data: data.toJSON() });
            console.log(this.state.data)
        });
    }

    makeList() {
        var listArray = []
        var keys = Object.keys(this.state.data);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            console.log(k);
            console.log(this.state.data[k].name, this.state.data[k].description, this.state.data[k].quantity);
            listArray.push(
                <View key={k}>
                    <View style={styles.listItem}>
                        <View style={styles.header}>
                            <TouchableOpacity >
                                <Text style={styles.text} onPress={() => this.props.navigation.navigate('EditFormScreen')}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.delete(k)}>
                                <Text style={styles.text}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('./.././image/item.png')}></Image>
                            </View>
                            <View style={styles.description}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.name}>Name: {this.state.data[k].name}</Text>
                                    <Text style={styles.quantity}>X {this.state.data[k].quantity}</Text>
                                </View>
                                <Text style={styles.detail}>Description: {this.state.data[k].description}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
        return listArray;
    }

    delete(k) {
        Alert.alert(
            'Delete',
            'Are you sure to delete?',
            [
                {
                    text: 'YES', onPress: (error) => firebase.database().ref('listItem/' + k).remove()
                        .then(() => Alert.alert("deleted!"))
                        .catch(() => Alert.alert(error))
                },
                { text: 'NO' }
            ]
        );
    }

    render() {

        return (
            <View>
                {this.makeList()}
            </View >
        );

    }
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "white",
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        height: 140,
    },
    header: {
        flexDirection: 'row',
        right: 0,
        position: "absolute",
        zIndex: 10,
        marginRight: 5
    },
    text: {
        color: "#3C384C",
        marginRight: 5
    },
    body: {
        flexDirection: 'row',
        marginTop: 30,
    },
    imageContainer: {
        height: 120,
        width: 120,
    },
    image: {
        height: 100,
        width: 100,
        left: 20,
    },
    description: {
        height: 150,
        flex: 1,
    },
    name: {
        marginLeft: 20,
        color: "#E47E6D",
        fontWeight: 'bold',
    },
    quantity: {
        right: 50,
        position: "absolute",
        fontWeight: 'bold',
    },
    detail: {
        marginTop: 10,
        marginLeft: 20,
        color: "#E47E6D",
        fontWeight: 'bold',
    }
});