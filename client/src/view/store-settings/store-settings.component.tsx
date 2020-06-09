import React, { Fragment } from "react";
import WidgetsSettingsComponent from "./components/widgets-settings/widgets-settings.component";
import AppControls from "./components/controls/controls.component";

export default () => {
  return (
    <Fragment>
      <div className='settings-content'>
        <AppControls />
        <WidgetsSettingsComponent />
      </div>
    </Fragment>
  );
};
