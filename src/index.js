import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// styled components
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const Global = createGlobalStyle`
*{
    // some styles
    // border: 1px solid red;
}
`;

// we can create some global variables and use them in any place in aour app
// example of using in button/styled components
const theme = {
  colors: {
    primary: "black",
    secondary: "white",
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>
);
