import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./app-state";

function App() {
  const theme = lightTheme;
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
