//@flow

import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, LoginForm } from './components/common';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDh2NgDVVq7uBNCZGvmklL-TZrS3ehd8lw',
            authDomain: 'auth-f6c4b.firebaseapp.com',
            databaseURL: 'https://auth-f6c4b.firebaseio.com',
            projectId: 'auth-f6c4b',
            storageBucket: 'auth-f6c4b.appspot.com',
            messagingSenderId: '662027354929'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <View>
                <Header 
                    headerText="Auth"
                />
                <LoginForm />
            </View>
        );
    }
}

export default App;
