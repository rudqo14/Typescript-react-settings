import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
import Main from '@pages/Main';
import Nav from '@components/Nav';

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Redirect exact path="/" to="/main" />
        <Route path="/main" component={Main} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </>
  );
};

export default App;
