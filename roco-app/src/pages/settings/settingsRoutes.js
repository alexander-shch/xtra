import React from "react";
import { Route } from "react-router-dom";
import SettingsPage from "../settings/SettingsPage";

const SettingsRoutes = ({ match }) => {
  return <Route path={`${match.path}/:settingsID`} component={SettingsPage} />;
};

export default SettingsRoutes;
