// here is my imports
import  Styled  from './Footer.module.css'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Aos from 'aos';
import { useEffect } from 'react';
export default function Footer(){
    // here I made a new date it will shows the year according to our computer date 
    let today=new Date();
    let year=today.getFullYear();
     // useing useEffect fro passing time of animation
  useEffect(()=>{
    Aos.init({duration:2000});
  })
    return(
        
        <div className="container mt-5  text-light">
        <div className={` row p-5 ${Styled.footer} mb-5 text-white`}>
            <div className="col  tex-center text-secondary d-flex flex-column justify-content-center align-items-center">
                <div className='p-2 w-100 text-center social_a' data-aos='zoom-in'>
                    {/* here is my social media links and social media Icons */}
                <a href="https://github.com/nazilaF2002" className={Styled.social__media}  ><FaGithub size={30}/></a><a href="https://www.linkedin.com/in/nazila-faizzadah-530556254/" className={Styled.social__media}><FaLinkedin size={30}/></a><a href="https://twitter.com/NazilaF2002" className={Styled.social__media}><FaTwitter size={30}/></a>
                </div>
                {/* here I used the year variable to change the year dynamicaly  */}
            <p className={`${Styled.footer_copyright} text-center`}>  <strong style={{fontSize:'20px'}}>©</strong> {year}  <strong><b><i>Nazila Faizzadah</i></b></strong> </p>
            </div>
        </div>
        
        </div>
        
    );
}