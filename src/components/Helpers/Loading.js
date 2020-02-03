import * as React from "react";
import css from "@emotion/css";
import { keyframes } from "@emotion/core";

const Loading = props => {
  return props.hide && <div>Sending...</div>;
};

export default Loading;
