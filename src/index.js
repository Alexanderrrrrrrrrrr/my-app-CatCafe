import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./them/default";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);