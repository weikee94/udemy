import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    //lifecycle method are method that are automatically invoked inside of our component
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA-1MyV5d12hH1UXtr1UIqW7gPL__XmxUs',
            authDomain: 'udemy-authentication-96113.firebaseapp.com',
            databaseURL: 'https://udemy-authentication-96113.firebaseio.com',
            projectId: 'udemy-authentication-96113',
            storageBucket: 'udemy-authentication-96113.appspot.com',
            messagingSenderId: '1031829487568'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;