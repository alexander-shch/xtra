import React from "react";

import { CustomButtonContainer } from "./MyButton.style";

const MyButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default MyButton;
