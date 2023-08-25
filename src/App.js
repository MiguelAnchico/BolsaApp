import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Formulario } from "./components/Formulario";

import "./custom.css";
import VacanteList from "./components/VacanteList";
import CiudadanoFormulario from "./components/CiudadanoFormulario";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/agregar" component={CiudadanoFormulario} />
        <Route path="/vacantes" component={VacanteList} />
      </Layout>
    );
  }
}
