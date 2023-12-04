// here is my imports
import './App.css';
import Header from './component/Header/Header';
import Parent from './component/Parent';
import About from './component/About/About';
import Skils from './component/Skils/Skills';
import Contact from './component/Contact/Contact';
import Navbar from './component/Navbar/Navbar';
import AgainProject from './component/Projects/AgainProject';
import Footer from './component/Footer/Footer';
import { createContext, useState } from 'react';
import Theme from './component/Themes/themes';
// creating context
export const themeContext=createContext(null);
function App() {
  // here is an state and a function that change the theme from light to dark an vice versa
 const [theme,setTheme]=useState('light');
 function toggletheme(){
  setTheme((current) => (current === 'dark' ? 'light':'dark'));
 }
  return (
    // all components are wrapped with the themeContext.Provider component to ensure that the themeContext is available to all child components
    //  that need to consume it using the useContext hook
    <themeContext.Provider value={{theme,toggletheme}}>
    <Parent id={theme} >
         <Navbar/>
         <Theme toggletheme={toggletheme} theme={theme}/>
         <Header/>
         <About/>
         <Skils/>
         <AgainProject/>
         <Contact/>
         <Footer/>
    </Parent>
    </themeContext.Provider>
  );
}

export default App;
