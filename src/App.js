import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Error from './components/Error';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeContext';
import About from './pages/About';
import Documentation from './pages/Documentation';
import SavedRecipes from './pages/SavedRecipes';
import Search from './pages/Search';

function App() {
  //const darkMode = useTheme();
  //const toggleTheme = useThemeUpdate();

  const [recipes, setRecipes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect( () => {
    const storageDarkMode = localStorage.getItem('storageDarkMode');
    if(storageDarkMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect( () => {
    localStorage.setItem('storageDarkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <ThemeProvider>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div>
          <Switch>
            <Route path='/' exact>
              <Search recipes={recipes} setRecipes={setRecipes} darkMode={darkMode}/>
            </Route>
            <Route path='/about' component={About}/>
            <Route path='/documentation' component={Documentation}/>
            <Route path='/saved-recipes'>
              <SavedRecipes darkMode={darkMode}/>
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
      </ThemeProvider>
    </div>
    
  );
}

export default App;
