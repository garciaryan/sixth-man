import React, { Component } from 'react';
import { Text, View, Linking, Alert } from 'react-native';
import { Button, CardSection } from '../common';
import { connect } from 'react-redux';
import { authorize } from '../../actions'

class Home extends Component {
  componentDidMount(){
    this.props.authorize();
	}
	
	componentDidUpdate(prevProps){
		if (prevProps.loginPage !== this.props.loginPage){
			Alert.alert(
				'Sign In Required',
				`You're being redirected to sign in with your Yahoo account. This is for data accuracy specific to your league.`,
				[{text: 'OK', onPress: () => Linking.openURL(this.props.loginPage).catch(err => console.log('An error occurred.'))}]
			)
		}
	}
  
  render(){
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

const mapStateToProps = ({ player }) => {
  const { loginPage } = player;
  return { loginPage };
}

export default connect(mapStateToProps, { authorize })(Home);