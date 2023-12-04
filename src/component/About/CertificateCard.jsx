// here is my imports
// I used this componet inside the CertificateCards component
import { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../modal/Modal';
import styled from './CertificateCard.module.css';
export default function CertificateCard(props) {
  // here I used useState to manage the modal
  const [isOpen,setIsOpen]=useState(false);
  return (
    // here I made a reuseable div for showing certificate 
    <div className={styled.main}>
      <div className={styled.inside}>
        <img src={props.image} alt="" />
      </div>
      <h4 className={ `${styled.title} card_h2`}>{props.title}</h4>
      <div className={styled.hidden_div}>
        <h6 className={ `${styled.text} card_p`}>{props.text} </h6>
        <h6 className='card_h4'>{props.date}</h6>
        {/* here I used button componet that I made it befor and pass a function for it that will open the modal */}
        <Button onClick={()=>{setIsOpen(true)}}>Zoom Picture</Button>
        {/* and here I used modal componet that made it befor it will show my certificat as a modal and I add three prop for it 
         every time that I click on my certificate picture the modal will be closed
        */}
        <Modal isOpen={isOpen} image={props.image} onClose={()=>{setIsOpen(false)}}/>
      </div>
    </div>
  );
}