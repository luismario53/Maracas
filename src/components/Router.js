import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/**Importacion de componentes */
import Ventas from "./Ventas";
import Navigation from "./Navigation";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        {/**Configuracion de las rutas */}
        <Switch>
          <Route exact path="/ventas" component={Ventas} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
