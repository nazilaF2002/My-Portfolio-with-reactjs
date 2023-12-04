// here is my imports
// I usede this component inside the App component
import ThemeItem from "./ThemeItem";
import './themes.css';
import { FaCog } from "react-icons/fa";
import{BsSun,BsMoon} from "react-icons/bs";
import { useState } from "react";
import { SetTheme } from "./ThemesColor";
export default function Theme({theme,toggletheme}){
    // this is the array of my colors
    const colors=['blueviolet','#F99417','#5FBDFF','#03C988','#FFDE00','#FFC5C5'];
    // this function will change the color of elements
      const setColor=(event)=>{
        const currentColor=event.target.style.getPropertyValue('--bg-color');
        SetTheme(currentColor);
    }
    // this is a state that according that I put some condition to my elements
    const [showSwitcher,setShowSitcher]=useState(false);
   return(
        <div className="">
             <div className={`${showSwitcher ? 'show-switcher':''}  style__switcher `}>
                <div className="style__switcher-toggler" onClick={()=>{setShowSitcher(!showSwitcher)}}>
                    <FaCog/>
                </div>
                <div className="theme-toggeler" onClick={toggletheme}>{theme === 'dark'? <BsSun/>:<BsMoon/>}</div>
                <h3 className="style__switcher-title">
                    style switcher
                </h3>
                <div className="style__switcher-items">
                  {/* map is used to print and fill each ThemeItem component according to the colors array data */}
                    {
                      colors.map((color,index)=>{
                        return <ThemeItem key={index} color={color} setColor={setColor} />;
                      })  
                    }
                </div>
                {/* this  is used to close the div of colors */}
                <div className="style__switcher-close" onClick={()=>{setShowSitcher(!showSwitcher)}}>
                     &times;
                </div>
             </div>
        </div>
    );
}