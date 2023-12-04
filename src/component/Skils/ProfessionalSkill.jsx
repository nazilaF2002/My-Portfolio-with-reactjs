// here is my imports
// I used this component inside the skills component
import { useEffect } from 'react';
import Aos from 'aos';
import {DashedProgress} from 'react-dashed-progress';
import { useContext } from 'react';
import { themeContext } from '../../App';
// this is my Professional Skills Data array
const ProfessionalSkillsData=[
    {
        name:'Creativity',
        targetNumber:85
    },
    {
        name:'Communication',
        targetNumber:60
    },
    {
        name:'Problem Solving',
        targetNumber:80
    },
    {
        name:'Teamwork',
        targetNumber:90
    }
];
// this is the object of my style like internal css
const rowStyle={
    borderRight:' 5px solid rgb(8, 64, 82)',
    borderLeft:'5px solid rgb(8, 64, 82)',
    width: '50%',
    minWidth: '250px'
}
export default function ProfessionalSkill(){
    // I used this for duration of animation
    useEffect(()=>{
        Aos.init({duration:3000});
      })
  //   here I used my themeContext with useEffect to chang the strokeColor dynamicaly
      const {theme}=useContext(themeContext);
    return(
        <div className="row  mx-auto " style={rowStyle} >
    {/* map is used here to print my array data in cols */}  
        {ProfessionalSkillsData.map((item,index)=>(
           <div className=" col-lg-6 text-center  mb-5 p-3  "    data-aos='flip-right' key={index}>
             <h5 className='prograses_h3'>{item.name}</h5>
               {/* here I used DashedProgress from react library to show my Professional skills */}
             <DashedProgress  countBars={100} size={140}  strokeColor={`${theme === 'dark' ? 'var( --strok-dark-color)':'var(--strok-light-color)'}`} tooltipColor={`${theme === 'dark' ? 'white':'black'}`} value={item.targetNumber}/>
           </div>
        ))} 
     </div> 
    )
}