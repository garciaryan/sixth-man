import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { CardSection, Input, Card, Spinner, Button } from '../common';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, registerUser } from '../../actions'
import authStyles from './styles';
import gstyles from '../../styles';
import { Actions } from 'react-native-router-flux';

class RegisterForm extends Component {
	state = { error: '' }

  onButtonPress(){
		const { email, password } = this.props;
		if (password.length < 6){
			this.setState({ error: 'Password must be 6 or more characters.' })
		}
		if (![...email].includes('@')){
			this.setState({ error: 'Please enter a valid email address.' })
		}
		else {
			this.setState({ error: '' });
			this.props.registerUser({ email, password });
		}
	}
	onEmailChange(text){
		this.props.emailChanged(text);
	}
	onPasswordChange(text){
		this.props.passwordChanged(text);
	}
  renderButton(){
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)} style={authStyles.button}>
        <Text style={{ fontFamily: 'Lato-Bold' }}>Register</Text>
      </Button>
    );
	}
	renderError(){
		if (this.state.error){
			return <Text style={gstyles.errorTextStyle}>{this.state.error}</Text>
		}
		if (this.props.error){
			return <Text style={gstyles.errorTextStyle}>{this.props.error}</Text>
		}
		else {
			return <Text></Text>
		}
	}
  render(){
    return (
      <ImageBackground style={{ flex: 1, justifyContent: 'center' }} source={require('../../../assets/court2-bg.jpg')}>
        <View style={{ alignItems: 'center' }}>
					<Text style={gstyles.title}>Sign Up</Text>
				</View>
        <Card>
          <CardSection style={authStyles.cardSections}>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection style={authStyles.cardSections}>
            <Input
              label="Password"
              secureTextEntry
              placeholder="p@$$w0rd"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>
          
          {this.renderError()}
          
          <CardSection>
            {this.renderButton()}
          </CardSection>
          <Text style={[authStyles.bottomText, { textAlign: 'center', marginTop: 25 }]} onPress={() => Actions.pop()}>Back to login</Text>
        </Card>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
	const { email, password } = state.auth;
	return { email, password };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, registerUser })(RegisterForm);