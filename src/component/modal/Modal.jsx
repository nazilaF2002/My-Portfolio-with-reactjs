// here is my imports
// I used this componet inside the certificatCard component 
import React from 'react';
import  ReactDOM  from 'react-dom';
import styled from './Modal.module.css';
const ShowModal=(props)=>{
  // here I put a condition that if it be true the modal will be open otherwise it will be close
 return (props.isOpen && 
  // and here I used another function that when the modal be open by cliking on this div it will be close
    <div className={styled.modalDiv} onClick={()=>{props.onClose()}}>
         <img className={styled.modalImage} src={props.image} alt="" />
    </div>
    
    )
}
// here again I put last condition for returning this div 
// it will chage the backgroun of my modal to dim color
const Overlay=(props)=>{
return  props.isOpen && <div className={styled.overlay}></div> 
}
export default function Modal(props){
  return  (
  <>
  {/* and here I used portals to transfer my modal to index.html */}
  {ReactDOM.createPortal(<Overlay isOpen={props.isOpen} />,
  document.getElementById('modal'))}
  {ReactDOM.createPortal(<ShowModal isOpen={props.isOpen} onClose={props.onClose} image={props.image}  />,
  document.getElementById('modal'))}
  </>
  );  
}