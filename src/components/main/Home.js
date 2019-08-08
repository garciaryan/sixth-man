import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import { Button, CardSection } from '../common';
import { connect } from 'react-redux';
import { authorize } from '../../actions'

class Home extends Component {
  componentDidMount(){
    this.props.authorize();
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