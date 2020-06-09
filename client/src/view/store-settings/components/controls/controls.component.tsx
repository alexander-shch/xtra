import React, { Component } from "react";
import { Toggle } from "@fevo-tech/component-library";
import Box from "../../../../components/box/box.component";

export default class AppControls extends Component {
  state = {
    injectWidgetsManually: false,
  };

  setInjectWidgetsManually = (checked: boolean) => {
    this.setState({ injectWidgetsManually: checked });
  };

  render() {
    return (
      <Box
        title="Widget behavior"
        subtitle="Control how your widgets will behave with the options below"
      >
        <p>
          Would you like to add the widgets manually into your theme? or would
          you like FEVO to try and inject them for you?
        </p>
        <Toggle
          stateLabel={{
            on: "FEVO",
            off: "Manual",
          }}
          checked={this.state.injectWidgetsManually}
          onChange={this.setInjectWidgetsManually}
        />
      </Box>
    );
  }
}
