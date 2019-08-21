import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RouterComponent from './Router';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

export default class App extends React.Component {
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