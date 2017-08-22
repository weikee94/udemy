import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
//state is what we do deal with user feedback

state = { email: '', password: '' , error: ''};

// helper method
onButtonPress() {
	const { email, password } = this.state;

	this.setState({ error: '' });

	// this will return promise(promise in javascript is a construct for handling some amount of asynchronous code, it will make request on firebase)
	firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				// in order to show error message need rerender using component level state
				firebase.auth().createUserWithEmailAndPassword(email, password)
						.catch(() => {
							this.setState({ error: 'Authentication Failed' });
						});
			});
}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					 />
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;