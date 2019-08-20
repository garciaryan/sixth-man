import React from 'react';
import { Scene, Drawer, Actions, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import Home from './components/main/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="auth" hideNavBar>
          <Scene key="login" component={LoginForm} title="Log In" initial />
        </Scene>
        <Scene key="main">
          <Scene key="home" component={Home} title="Home" initial />
        </Scene>
      </Stack>
    </Router>
  );
}

export default RouterComponent;