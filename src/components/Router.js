import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/**Importacion de componentes */
import Ventas from './Ventas';
import Autos from './Autos';
import Reportes from './Reportes';
import Navigation from './Navigation';
import Inicio from './Inicio';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        {/**Configuracion de las rutas */}
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/autos" component={Autos} />
          <Route exact path="/ventas" component={Ventas} />
          <Route exact path="/reportes" component={Reportes} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
