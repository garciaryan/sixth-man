import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../common';
import gstyles from '../../styles';
import authStyles from './styles';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)} style={authStyles.button}>
        <Text style={{ fontFamily: 'Lato-Light' }}>Login</Text>
      </Button>
    );
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../../../assets/court3-bg.jpg')}>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={gstyles.title}>Sixth Man</Text>
          </View>
          <Card style={authStyles.loginCard}>
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
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
          <View style={authStyles.bottomContainer}>
            <Text style={authStyles.bottomText}>Forgot Password?</Text>
            <Text style={authStyles.bottomText}>Create Account</Text>
          </View>
        </View>
      </ImageBackground>
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

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);