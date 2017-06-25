//@flow

import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, LoginForm, Button, Spinner } from './components/common';

type State = {
    loggedIn: boolean
}

class App extends Component {
    state: State = {
        loggedIn: null
    }
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
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ loggedIn: user ? true : false });
        });
    }
    renderContent = () => {
        const { loggedIn } = this.state;
        switch (loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
                )
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }
    render() {
        return (
            <View>
                <Header 
                    headerText="Auth"
                />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
