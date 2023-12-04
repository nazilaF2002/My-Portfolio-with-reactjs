// here is my imports
// I used this component inside the skills component
import { useEffect } from 'react';
import Aos from 'aos';
import './agianLanguageSkill.css';
// this is my Language Skill Data array
const LanguageSkillData=[
    {
        title:'Dari',
        number:'100%',
        class:'dari'
    },
    {
        title:'Pashto',
        number:'50%',
        class:'pashto'
    },
    {
        title:'English',
        number:'60%',
        class:'english'
    },
];
export default function AgainLanguageSkills(){
     // this is used for duration of animation
    useEffect(()=>{
        Aos.init({duration:2000});
      })
    return(
        <div className="row _container mx-auto my-4 ovelflow " data-aos='zoom-out'>
            {/* map is used here to print my array data in the card */}
          {
           LanguageSkillData.map((item,index)=>(
            <div className="col-12  skill_box my-5  " key={index}>
                <h4 className="title"> {item.title} </h4>
                <div className="skill_bar">
            <span className={`skill_per ${item.class}`}>
                <span className="_tooltip">
                    {item.number}
                </span>
            </span>
        </div>
            </div>
           )) 
          }
        </div>
    );
}