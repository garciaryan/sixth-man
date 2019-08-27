import React from 'react';
import { Scene, Drawer, Actions, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import SideNav from './components/main/SideNav';
import Home from './components/main/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="auth" hideNavBar>
          <Scene key="login" component={LoginForm} title="Log In" initial />
          <Scene key="register" component={RegisterForm} title="Make an Account" />
        </Scene>
				<Drawer
					hideNavBar
					key="drawer"
					contentComponent={SideNav}
					gesturesEnabled={false}
				>
					<Scene key="main">
						<Scene key="home" component={Home} title="Home" initial />
					</Scene>
				</Drawer>
      </Stack>
    </Router>
  );
}

export default RouterComponent;