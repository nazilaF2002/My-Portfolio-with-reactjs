// here is my imporst
// I used this component inside the about component
import CertificateCard from "./CertificateCard";
import web from '../images/web.jpg';
import python from '../images/python.jpg';
import beginner from '../images/beginner.jpg';
import pre_intemediate from '../images/pre_itermediate.jpg';
import school from '../images/school.jpg';
import { useEffect } from "react";
import Aos from 'aos';
// here is my certificate section date I devided them in two arrays because of my special design for tablet size 
const certificateData1=[
    {
        Image:web,
        title:'Web Design',
        text:'I took this certificate cause of compliting introduction to Web online course',
        date:'May 31 2023'
    },
    {
        Image:python,
        title:'Python',
        text:'I took this certificate cause of compliting introduction to Python online course',
        date:'May 31 2023'
    },
    {
        Image:beginner,
        title:'English',
        text:'I took this certificate cause of compliting the beginner level of English',
        date:'March 31 2018'
    }
    
];
const certificateData2=[
    {
        Image:pre_intemediate,
        title:'English',
        text:'I took this certificate cause of compliting  the Pre intermediate level of English',
        date:'March 28 2019'
    },
    {
        Image:school,
        title:'School',
        text:'I took this certificate cause of I got first position at school',
        date:'November 18 2019'
    }
];

export default function CertificateCards(){
    // here I used useEffect for adding time duration to my animations
    useEffect(()=>{
        Aos.init({duration:2000});
      })
    return(
        <div className="col-12">
           <br /><br /><br /> <br /><br />
           {/* here I used grid system again for making my design responsive*/}
           <div className="row text-center mb-0 mb-lg-5">
                {
                    // here I used map function to print dynamicaly my first array data in cols
                    certificateData1.map((item)=>{
                  return <div className="col-lg-4 col-md-6 text-center mb-5 mb-lg-0 mx-auto py-2 py-lg-0" key={item.title}  data-aos='flip-right'>    <CertificateCard  image={item.Image} title={item.title} text={item.text} date={item.date}   /></div>
                    })
                } 
           </div>
           <div className="row text-center">
           
              {
                //  here I used map function to print dynamicaly my second array data in cols
                    certificateData2.map((item)=>{
                    return  <div className="col-lg-4 col-md-6  mb-5 mb-lg-0 text-center mx-auto py-2  py-lg-0 " key={item.title} data-aos='flip-right'>  <CertificateCard  image={item.Image} title={item.title} text={item.text} date={item.date} /></div> 
                    })
                }
                <div className="col-lg-4 col-md-6 text-center mx-auto py-2  py-lg-0 "></div>
           </div>
              
       </div>    
    )
}
  