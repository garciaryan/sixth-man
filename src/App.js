import React from 'react';
import { StyleSheet, Linking } from 'react-native';
import RouterComponent from './Router';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { YAHOO_API_ID, YAHOO_API_SECRET } from 'react-native-dotenv';
// import { JSO, Popup } from 'jso';

// const client = new JSO({
// 	providerID: 'yahoo',
// 	client_id: YAHOO_API_ID,
// 	redirect_uri: 'com.sixthman:/callback',
// 	authorization: `https://api.login.yahoo.com/oauth2/`,
// 	response_type: 'code',
// 	client_secret: YAHOO_API_SECRET,
// 	debug: true
// })

export default class App extends React.Component {
	componentDidMount(){
		//client.callback();
		Linking.addEventListener('url', url => {
			console.log('url: ', url)
		})
	}

	componentWillUnmount(){
		Linking.removeEventListener('url', () => {
			console.log('removed')
		})
	}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});