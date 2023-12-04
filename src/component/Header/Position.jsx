// here is my import
// I used this component inside the header component
import './position.css'
// here is the position letter array
const animatedLettersFirsttWord=['D','E','V','E','L','O','P','E','R'];

export default function Position(){
    return(
      <div className='text-center d-inline-block  '>
        <h2 className='d-flex flex-wrap   justify-content-center text '><span className='position_span'>Frontend</span>
        {/* to print the position I used a ul  and put each letter inside a li with map function to prin them dynamicaly */}
           <ul className='p_ul m-0 p-0 d-flex  '>  
              {
                animatedLettersFirsttWord.map((item,index)=>(
                   <li className='p_li  ' key={index}>{item}</li> 
                ))
              }
           </ul>
        </h2>
        <h5 className='mt-1 position_h5 '>based in <span className='text-danger'>Herat</span> , Aghanistan</h5>
      
      </div>
    );  
}







































