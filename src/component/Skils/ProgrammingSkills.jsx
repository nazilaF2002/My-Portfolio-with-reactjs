// here is my imports
// I used this component inside the skills component
import { useEffect } from 'react';
import Aos from 'aos';
import {DashedProgress} from 'react-dashed-progress';
import { useContext } from 'react';
import { themeContext } from '../../App';
// this is my programming skills data array
const ProgrammingSkillsData=[
    {
        name:'Html',
        targetNumber:100
    },
    {
        name:'Css',
        targetNumber:90
    },
    {
        name:'BootStrap',
        targetNumber:95
    },
    {
        name:'JavaScript',
        targetNumber:85
    },
    {
        name:'React js',
        targetNumber:80
    },
    {
        name:'java',
        targetNumber:65
    },
    {
        name:'Python',
        targetNumber:50
    },
];
export default function ProgrammingSkills(){
    // this is used for duration of animation
    useEffect(()=>{
        Aos.init({duration:3000});
      })
    //   here I used my themeContext with useEffect to chang the strokeColor dynamicaly
      const {theme} = useContext(themeContext);
return (  
 <div className="row ">
    {/* map is used here to print my array data in cols */}
   {ProgrammingSkillsData.map((item,index)=>(
      <div className="col-lg-3 col-md-6 text-center mb-5 p-3" data-aos='zoom-in' key={index}>
        <h5 className='prograses_h3'>{item.name}</h5>
        {/* here I used DashedProgress from react library to show my programming skills */}
        <DashedProgress  countBars={100} size={140}  strokeColor={`${theme === 'dark' ? 'var( --strok-dark-color)':'var(--strok-light-color)'}`} tooltipColor={`${theme === 'dark' ? 'white':'black'}`} value={item.targetNumber}/>
      </div>
   ))} 
</div> 
 );
}