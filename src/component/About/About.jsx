// import necessary components
// I used this componet inside the App component
import './About.css';
import Aos from 'aos';
import { useEffect } from 'react';
import { FaCode,FaHeart,FaAngleDoubleDown,FaLaptop} from 'react-icons/fa';
import aboutImage from '../images/about_Image.jpg';
import TimeLineInfo from './TilmeLIneInfo';
import CertificateCards from './CertificateCards';
// adding some internal css style
let style={
  color:'blueviolet'
}
export default function About(){
  // useing useEffect fro passing time of animation
  useEffect(()=>{
    Aos.init({duration:2000});
  })
     
    return(
      // in this section of code I used 5 rows to make it responsive and good design  
        <div id="about" className="container __backgroun mb-5 ovelflow" style={{minHeight:'87vh'}}>
          {/* this is the main row that contain 4 rows */}
            <div className="row justify-content-between  __about __height p-5">
              {/* this row is for the name of each section */}
              <div className="row">
                <div className="col-12 text-white">
                <h1 className=' side_text'>__About</h1>
                </div>
              </div>
              {/* this row is for the image and information about me */}
              <div className="row mt-md-5 pt-5">
                <div className="col-md-5 mt-md-5 ">
              <img className='border  image shadow ' data-aos='flip-down' src={aboutImage}  alt="" />
              {/* <img className='border w-100 h-75  image shadow ' data-aos='flip-down' src={aboutImage}  alt="" /> */}
              </div>
              <div className="col-md-7 text-start text-lg-center d-flex align-items-center  ">
                <h6 data-aos='flip-right' className='about_h5 mb-5 py-5'>I am Nazila Faizzadah Computer Sciense Student <FaLaptop style={style}/> at Herat university Software Enggenering Department <br />
                 Also student of Full Stak Engeenering class at Code to Inspire (CTI)  <br />
                 Coding is my Love <FaHeart style={{color:'red'}}/> I engoy practic coding,reading books and learning new things <br /> 
                 I wan to became Full Stack enegger <FaCode style={style}/> and great Programer  <br />this is my educational backgrond <FaAngleDoubleDown style={style}/>
                  </h6>
                </div>
              </div>
              {/* this row is for the timeline */}
                <div className="row">
                  <div className="col-12">
                 <TimeLineInfo/>
                  </div>
                </div>
             {/* and this is the last row of about component that contain the certifications dives */}
                <div className="row">
                  <CertificateCards/>
                </div>
            </div>
        </div>
    );
}