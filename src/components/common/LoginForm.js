//@flow

import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './';

type State = {
    email: string,
    password: string
}

export class LoginForm extends Component {
    state: State = {
        email: '',
        password: ''
    }
    onButtonPress = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password);
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.email}
                        label="E-mail"
                        placeholder="username@gmail.com"
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        value={this.state.password}
                        label="Password"
                        secureTextEntry
                        placeholder="password"
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this.onButtonPress}
                        autoCorrect={false}
                    >
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
