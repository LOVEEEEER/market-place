import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Products from "./layouts/Products";
import Main from "./layouts/Main";
import Basket from "./layouts/Basket";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./layouts/ErrorPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/basket" component={Basket} />
        <Route path="/products/:id?" component={Products} />
        <Route exact path="/" component={Main} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
