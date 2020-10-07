import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../screens/Cart";
import ErrorPage from "../screens/Errors";
import HomePage from "../screens/HomePage";
import LoginPage from "../screens/LoginPage";
import NotFoundPage from "../screens/NotFoundPage";
import PerfilPage from "../screens/Perfil";
import ProgressPage from "../screens/ProgressPage";
import RestaurantPage from "../screens/RestaurantPage";
import SignUpPage from "../screens/SignUpPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <LoginPage />
      </Route>
      <Route exact path={"/"}>
        <ProgressPage />
      </Route>
      <Route exact path={"/feed"}>
        <HomePage />
      </Route>
      <Route exact path={"/error"}>
        <ErrorPage />
      </Route>
      <Route exact path={"/perfil"}>
        <PerfilPage />
      </Route>
      <Route exact path={"/restaurante"}>
        <RestaurantPage />
      </Route>
      <Route exact path={"/cadastro"}>
        <SignUpPage />
      </Route>
      <Route exact path={"/carrinho"}>
        <Cart />
      </Route>
      <Route>
        <NotFoundPage />
       </Route>
    </Switch>
  );
};

export default Routes;
