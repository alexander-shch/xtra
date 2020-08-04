import React from "react";
import Spinner from "./Spinner";

const WithSpinner = (WarpedComponenet) => ({ loading, ...otherProps }) => {
  return loading ? <Spinner /> : <WarpedComponenet {...otherProps} />;
};

export default WithSpinner;
