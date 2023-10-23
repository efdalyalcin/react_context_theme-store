import React, { useContext, useState, createContext } from 'react';

interface IThemeContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

type Children = {
  children: React.ReactNode;
};

export default function ThemeContextProvider({ children }: Children) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeStore() {
  return useContext(ThemeContext);
}
