import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { CardSection, Input, Card, Spinner, Button } from '../common';
import authStyles from './styles';
import gstyles from '../../styles';
import { Actions } from 'react-native-router-flux';

class RegisterForm extends Component {
  onButtonPress(){

  }
  renderButton(){
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)} style={authStyles.button}>
        <Text style={{ fontFamily: 'Lato-Light' }}>Register</Text>
      </Button>
    );
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
              //onChangeText={this.onEmailChange.bind(this)}
              //value={this.props.email}
            />
          </CardSection>
          <CardSection style={authStyles.cardSections}>
            <Input
              label="Password"
              secureTextEntry
              placeholder="p@$$w0rd"
              //onChangeText={this.onEmailChange.bind(this)}
              //value={this.props.email}
            />
          </CardSection>
          
          <Text style={gstyles.errorTextStyle}>
            {this.props.error}
          </Text>
          
          <CardSection>
            {this.renderButton()}
          </CardSection>
          <Text style={[authStyles.bottomText, { textAlign: 'center', marginTop: 25 }]} onPress={() => Actions.pop()}>Back to login</Text>
        </Card>
      </ImageBackground>
    );
  }
}

export default RegisterForm;