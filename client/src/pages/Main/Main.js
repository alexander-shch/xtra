import React from "react";
import Header from "../../componnent/Header/Header";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../componnent/dashboard/Dashboard";
import SettingsRoutes from "../../pages/settings/settingsRoutes";
const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/settings" component={SettingsRoutes} />
      </Switch>
    </>
  );
};

export default Main;
