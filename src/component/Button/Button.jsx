// here is my import
// I used this component in different components
import styled from './Button.module.css'
export default function Button(props){
    // this component return a reuseable button 
    return(
        <button  className={ `${styled.button} ${props.className} ` } type={props.type} onClick={props.onClick}>{props.children}</button>
    );
}