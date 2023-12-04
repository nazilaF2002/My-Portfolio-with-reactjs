// here is my imports 
// I used this component inside the App component
import { useState } from 'react';
import Button from '../Button/Button';
import AgainLanguageSkills from './agianLanguageSkills';
import ProfessionalSkill from './ProfessionalSkill';
import ProgrammingSkills from './ProgrammingSkills';

export default function Skils(){
  // here is my states that according that according to them one group of skills will be shown
  const [programing,setProgramming]=useState(true);
  const [lunguage,setLanguage]=useState(false);
  const [personality,setPersonality]=useState(false);
  // this function will be execute when I click to the programming button
  function Programming(){
       setProgramming(true);
       setPersonality(false);
       setLanguage(false);
  }
  // this function will be execute when I click to the Language button
  function Language(){
    setProgramming(false);
    setPersonality(false);
    setLanguage(true);
  }
   // this function will be execute when I click to the Personality button
  function Personality(){
    setProgramming(false);
    setPersonality(true);
    setLanguage(false);
  }
    return(
        <div id="skills" className="container  mb-5  " style={{minHeight:'90vh'}}>
          <div className="row " style={{minHeight:'85vh'}} >
            <h1 className='p-lg-5 mt-lg-5  side_text'>__Skills</h1>
            {/* each condition that be true will be execute it's component */}
                {programing &&   <ProgrammingSkills/>} 
                {lunguage &&  <AgainLanguageSkills/>} 
                {personality &&  <ProfessionalSkill/> } 

           <div className="row px-5  pb-5 ">
             <div className="col-12 text-center ">
              {/* by clicking on of this button one function will be call and one condion will become true */}
              <Button onClick={Programming} >Technical</Button>
              <Button onClick={Language} >Language</Button>
              <Button onClick={Personality}>Professional</Button>
             </div>
          </div>
          </div>
        </div>
    );
}