// here is my variable
// I used this function inside the themes component 
let boxColor='';
let strockLightColor='';
let strockDarkColor='';
let prograsesTitleColor='';
let hederButtonHover='';
let navItemSmallSize='';
let timelineCircleDiv='';
let ReuseablebuttonHover='';
let languageBoxShodow='';
let inputColor='';
// here I used local storage to store the color when the page refresh
const storedColor = localStorage.getItem('themeColor');
const initialColor = storedColor || '#5FBDFF';

// this is the function that change the color
 export const SetTheme=(color)=>{
    //  1  blueviolet
   if(color === 'blueviolet'){
    boxColor ="linear-gradient(to bottom ,rgb(63, 63, 248), rgb(252, 128, 204))";
    strockLightColor='rgb(122, 142, 230)';
    strockDarkColor='rgb(89, 169, 235)';
    prograsesTitleColor='rgb(115, 30, 194)';
    hederButtonHover='rgb(64, 14, 110) ';
    navItemSmallSize='rgb(190, 136, 240)';
    timelineCircleDiv='rgb(232, 112, 243)';
    ReuseablebuttonHover='rgb(64, 14, 110)';
    languageBoxShodow='#E7BCDE';
    inputColor='#F1EAFF';
   }
  //    2  orange
  else if(color === '#F99417'){
    boxColor = 'linear-gradient(to bottom ,orange, #fff)';
    strockLightColor='#F5CCA0';
    strockDarkColor='#F5CCA0';
    prograsesTitleColor='#6B240C';
    hederButtonHover='#ce7912';
    navItemSmallSize='#F9F3CC';
    timelineCircleDiv='#FFD28F';
    ReuseablebuttonHover='#ce7912';
    languageBoxShodow='#E48F45';
    inputColor='#FFFFDD';
   }
//    3 blue
   else if(color === '#5FBDFF'){
    boxColor = 'linear-gradient(to bottom ,#5FBDFF, #fff)';
    strockLightColor='#3081D0';
    strockDarkColor='#7ED7C1';
    prograsesTitleColor='#7B66FF';
    hederButtonHover='#157274';
    navItemSmallSize='#9BE8D8';
    timelineCircleDiv='#B4BDFF';
    ReuseablebuttonHover='#157274';
    languageBoxShodow='rgb(148, 222, 245)';
    inputColor='#EFFFFD';
   }
   
//    4  green
else if(color === '#03C988'){
    boxColor = 'linear-gradient(to bottom ,#A7D129, rgb(216, 241, 192))';
    strockLightColor='#A7D129';
    strockDarkColor='#A7D129';
    prograsesTitleColor='#C6DE41';
    hederButtonHover='#005B41';
    navItemSmallSize='#C3EDC0';
    timelineCircleDiv='#A6CF98';
    ReuseablebuttonHover='#005B41';
    languageBoxShodow='#C7DCA7';
    inputColor='#EEF9BF';
   }
//    5  yellow
else if(color === '#FFDE00'){
    boxColor='linear-gradient(to bottom ,#FFE98A, #fff) ';
    strockLightColor='#D89216';
    strockDarkColor='#D89216';
    prograsesTitleColor='#F05454';
    hederButtonHover='#FFD369';
    navItemSmallSize='#FFFEC4';
    timelineCircleDiv='#FFE3BB';
    ReuseablebuttonHover='#FFD369';
    languageBoxShodow='#FFFB73';
    inputColor='#FBFACD';
   }
//    6 pink
   else if(color === '#FFC5C5'){
    boxColor = 'linear-gradient(to bottom ,palevioletred, #fff)';
   //  boxColor = 'linear-gradient(to bottom ,palevioletred, rgb(241, 192, 223))';
    strockLightColor='#FECDA6';
    strockDarkColor='#FECDA6';
    prograsesTitleColor='#F05454';
    hederButtonHover='#e48888';
    navItemSmallSize='#FFD9C0';
    timelineCircleDiv='rgb(232, 112, 243)';
    ReuseablebuttonHover='#e48888';
    languageBoxShodow='#F8BDEB';
    inputColor='#FAF3F0';
   }
//    here I changed the default color  of element according to the condition that I put befor
    document.documentElement.style.setProperty('--timeline-box-color',boxColor);
    document.documentElement.style.setProperty('--strok-dark-color',strockDarkColor);
    document.documentElement.style.setProperty('--strok-light-color',strockLightColor);
    document.documentElement.style.setProperty('--prograses-title-color',prograsesTitleColor);
    document.documentElement.style.setProperty('--header-bottone-hover',hederButtonHover);
    document.documentElement.style.setProperty('--nav-item-small-size-bg',navItemSmallSize);
    document.documentElement.style.setProperty('--timeline-circle-dive-color',timelineCircleDiv);
    document.documentElement.style.setProperty('--reuseable-button-hover-color',ReuseablebuttonHover);
    document.documentElement.style.setProperty('--language-box-shadow',languageBoxShodow);
    document.documentElement.style.setProperty('--input-color',inputColor);
    document.documentElement.style.setProperty('--bg-color',color);
    localStorage.setItem('themeColor', color);
  
}
SetTheme(initialColor);