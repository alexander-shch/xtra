import React from "react";
import "./settingsPage.style.scss";

const SettingsPage = ({ match }) => {
  return (
    <div className="settingsPage">
      <h1>{match.params.settingsID}</h1>;
    </div>
  );
};

export default SettingsPage;
