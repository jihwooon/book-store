import { ReactNode, createContext } from "react";
import { ThemeName } from "../style/theme";

interface State {
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void,
}

export const state = {
  themeName: 'light' as ThemeName,
  setThemeName: (themeName: ThemeName) => {},
};

export const ThemeContext = createContext<State>(state)

export const BookStoreThemeProvider = ({children}: {children: ReactNode}) => {
  return (
    <ThemeContext.Provider value={state} >
      {children}
    </ThemeContext.Provider>
  )
}
