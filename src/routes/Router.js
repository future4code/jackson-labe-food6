import React from "react";

import { Route, Switch } from 'react-router-dom';
import LoginPage from '../screens/LoginPage/LoginForm';
import ProgressPage from "../screens/ProgressPage/index";
import FeedPage from "../screens/HomePage/index;";
import ErrorPage from "../screens/Errors/index";
import PerfilPage from "../screens/Perfil/index";
import RestaurantPage from "../screens/RestaurantPage/index";
import SignUpPage from "../screens/SignUpPage/index";
import CartPage from "../screens/Cart/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/login'}>
        <LoginPage/>
      </Route>
      <Route exact path={'/'}>
        <ProgressPage/>
      </Route>
      <Route exact path={'/feed'}>
        <FeedPage/>
      </Route>
      <Route exact path={'/error'}>
        <ErrorPage/>
      </Route>
      <Route exact path={'/perfil'}>
        <PerfilPage/>
      </Route>
      <Route exact path={'/restaurante'}>
        <RestaurantPage/>
      </Route>
      <Route exact path={'/cadastro'}>
        <SignUpPage/>
      </Route>
      <Route exact path={'/carrinho'}>
        <CartPage/>
      </Route>
    </Switch>

  );
};

export default Routes;
