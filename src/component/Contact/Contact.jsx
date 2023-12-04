// here is my imports
// I used this component inside the App component
import Form from './Form';
import Aos from 'aos';
import { useEffect } from 'react';
export default function Contact() {
  // here I used useEffect to determine the animation duration 
  useEffect(()=>{
    Aos.init({duration:1000});
  })
  return (
    // I used bootstrap grid system to make my website responsive 
    <div id="contact" className="container  mt-5" style={{ minHeight: '90vh' }}>
      <div className="row   header pb-5" style={{ minHeight: '80vh' }}>
        <h1 className='p-lg-5 mt-lg-5  side_text'>__Contact</h1>
        <div className="row   mt-5 mt-lg-0 w-75 mx-auto  p-lg-5 second_row" >
        <h2 className='text-center  mb-4' style={{color:'var(--bg-color)',fontWeight:'bold'}}>Let's get in touch <span style={{fontSize:'50px'}}>🤝📞</span> </h2> 
         {/* in this col used form component that I made befor */}
          <div className="col-lg-6 ">
           <Form/>
          </div>
          {/* and in this col I used Iframe to display my location in the map */}
          <div className="col-lg-6 py-5 text-center">
            <iframe data-aos='zoom-in' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.186972410264!2d62.223902724729996!3d34.34571927304787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce7aca1ff4765%3A0xafc9c61a8aedd3bd!2z2KzYp9iv2Ycg2YXYrNuM2K_bjNiMINmH2LHYp9iq2Iwg2KfZgdi62KfZhtiz2KrYp9mG!5e0!3m2!1sfa!2s!4v1700682044922!5m2!1sfa!2s"
             width="100%" 
             height="100%"
             title='location'
             style={{border:'0',borderRadius:'10px'}}
               allowFullScreen=""
                loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}