import React, { useEffect, useState } from "react";
import { ThemeContext } from "./Contexts";
import Home from "./pages/Home";

const App = () => {
  const [theme, setTheme] = useState({
    toggleTheme: (x) => {
      setTheme({
        ...theme,
        isDark: x
      })
    },
    isDark: false
  })
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    let isDark = true;
    if (darkThemeMq.matches) {
      isDark = true;
    } else {
      isDark = false;
    }
    theme.toggleTheme(isDark)
    return () => {

    }
  }, [])
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContext.Consumer>
        {value => {
          return (<div className={value.isDark ? "_dark" : "_light"}>
            <div className="container-wrap">
              <div className="container mx-auto">
                <Home />
              </div>
            </div>
          </div>)
        }
        }
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

export default App;
