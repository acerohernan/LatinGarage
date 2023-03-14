import React, { PropsWithChildren } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

interface ProviderProps extends PropsWithChildren {
  theme: DefaultTheme;
}

const Provider: React.FC<ProviderProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Provider;
