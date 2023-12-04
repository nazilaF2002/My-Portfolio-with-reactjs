// I used this component inside the app component
// here is my imports
import './Header.css'
import profileImage from '../images/images (8).jpg';
import Position from './Position';
import Aos from 'aos';
import { useEffect } from 'react';
import Buttons from './Buttons';
import Cv from './CV.pdf';
export default function Header() {
// here I used useEffect to determine the time of my animations 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  })

  return (
    
    <div className='container-fluid ovelflow' id='header'>
      <div className="container my-5 header __backgroun ">
        <div className="row header_row  p-5 d-flex justify-content-between">
          {/* here is the header image col */}
          <div className="col-lg-3  col-md-6  d-flex justify-content-center align-items-center">
            <img className='profile-image ' data-aos="zoom-in" alt='' src={profileImage} />
          </div>
          {/* here is all header details */}
          <div className="col-lg-9 text-white  col-md-6 text-center header__details">
            <div className=" __detail__class">
              <h2 data-aos="fade-down-left" className='mb-5 header_h1 mt-md-5 mt-lg-3'>
                <span className='mb-5 '>Hi</span>  <br />
                I'm <span className='text-danger my_name  pl-5'>Nazila Faizzadah</span>
              </h2>
              <div data-aos="fade-up-right" className="position_border">
                {/* here I used position component that I made it before that will display my coding position */}
                <Position />
                <br />
                {/* here I used button component that will download my cv */}
                {/* <Buttons name='Read More' addresses='../' nameOfDownload='CV' /> */}
                <a href={Cv} download>
                <Buttons>Download CV</Buttons>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}