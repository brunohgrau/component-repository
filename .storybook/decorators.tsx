import { Decorator } from "@storybook/react";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/styles/theme";

const withTheme: Decorator = (Story) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
);

export const GlobalDecorators = [withTheme];
