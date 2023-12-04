// here is my imports
// I used this componet inside to the ProjectData component it will show my rating stars
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
const style={
  appearance:'none' ,
  margin:'0' 
}
export default function StarRating(){
    const [rating, setRating] = useState(null)
    const rateColor=null;
    return(
       <>
       
       {[...Array(5)].map((star,index) => {
        const currentRate = index + 1
        return (
            
             <label key={index}>
             <input  type='radio' style={style} name='rate' 
             value={currentRate}
             onClick = { () => setRating (currentRate)}
             />
             <FaStar 
             color={currentRate <= (rateColor || rating) ? 'yellow' : 'grey'}
             />
             </label>
        )
       })}
       </>
    );
}