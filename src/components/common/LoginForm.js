//@flow

import React, { Component } from 'react';
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
    render() {
        const { email } = this.state;
        return (
            <Card>
                <CardSection>
                    <Input 
                        value={email}
                        label="E-mail"
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>
                <CardSection>

                </CardSection>
                <CardSection>
                    <Button
                        onPress={() => console.log(this.state.email)}
                        autoCorrect={false}
                    >
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

//https://github.com/joaoeffting/react-native-firebase-auth-example.git