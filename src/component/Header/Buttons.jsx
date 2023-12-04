// here is my import
import './button.css'
// I used this component in the Header component
export default function Buttons (props){
return(
    <button  className="btn button__color btn-lg my-5 d-inline-block" >{props.children}</button>
);
}