import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
//state is what we do deal with user feedback

state = { email: '' };

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

				</CardSection>
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