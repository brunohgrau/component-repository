import { Decorator } from "@storybook/react";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/styles/theme";
import { BrowserRouter } from "react-router-dom";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { Provider as StoreProvider } from "react-redux";
import { store } from "../src/app-state";

initialize();

const withRouter: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};

const withTheme: Decorator = (Story, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};

const withStore: Decorator = (Story) => {
  return (
    <StoreProvider store={store}>
      <Story />
    </StoreProvider>
  );
};

export const GlobalDecorators = [
  withTheme,
  withRouter,
  mswDecorator,
  withStore,
];
