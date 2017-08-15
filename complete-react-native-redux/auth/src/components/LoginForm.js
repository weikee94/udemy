import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
//state is what we do deal with user feedback

state = { text: '' };

	render() {
		return (
			<Card>
				<CardSection>
					<TextInput
						value={this.state.text}
						onChangeText={text => this.setState({ text })}
						style={{ height: 20, width: 100 }}
					 />
				</CardSection>
				<CardSection />
				<CardSection>
					<Button>
						Log In
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;