import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../screens/LoginPage';
import ProgressPage from "../screens/ProgressPage";
const Routes = () => {
  return (
    <Switch>
    <Route exact path={'/login'}>
      <LoginPage/>
    </Route>
    <Route exact path={'/'}>
      <ProgressPage/>
    </Route>
    </Switch>
  );
};

export default Routes;
