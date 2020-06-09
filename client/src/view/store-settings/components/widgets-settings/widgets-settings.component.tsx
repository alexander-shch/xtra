import React, { Component } from "react";
import { SketchPicker, CirclePicker, ColorResult } from "react-color";
import { Toggle } from "@fevo-tech/component-library";
import Box from "../../../../components/box/box.component";

export default class WidgetsSettingsComponent extends Component {
  state = {
    themeColor: "",
    advancedColorPicker: false,
  };

  handleChangeComplete = (color: ColorResult) => {
    this.setState({ themeColor: color.hex });
  };

  toggleAdvancedColor = () => {
    this.setState({ advancedColorPicker: !this.state.advancedColorPicker });
  };

  render() {
    return (
      <Box title="Widget Settings" subtitle="Choose your website theme color">
        <p>Selected color: {this.state.themeColor}</p>
        <Toggle
          stateLabel={{
            on: "Advanced",
            off: "Simple",
          }}
          checked={this.state.advancedColorPicker}
          onChange={this.toggleAdvancedColor}
        />
        {this.state.advancedColorPicker ? (
          <SketchPicker
            color={this.state.themeColor}
            onChangeComplete={this.handleChangeComplete}
          />
        ) : (
          <CirclePicker
            color={this.state.themeColor}
            onChangeComplete={this.handleChangeComplete}
          />
        )}
      </Box>
    );
  }
}
