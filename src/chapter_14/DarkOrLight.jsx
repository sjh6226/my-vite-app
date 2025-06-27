import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";
import { useState, useCallback} from "react";

function DarkOrLight() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark' ) {
        setTheme('light');
    }
}, [theme]);

return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <MainContent />
    </ThemeContext.Provider>
);
}

export default DarkOrLight;