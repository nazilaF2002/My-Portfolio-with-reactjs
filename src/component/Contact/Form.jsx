// here is my import
// I used this component inside the Contact componet
import './Form.css';
export default function Form(){
  // this is a function that I wrote to  prevent refresh the site when we submit the form 
    function hundleSubmit(e){
        e.preventDefault();
    }
    return(
      // this is a form and contain some input and textarea 
      // and for a better management I put every input with it's label in a div
        <form action="" className="d-flex _form flex-column p-md-5 gap-3" onSubmit={hundleSubmit}>
            <div className="">
              <label htmlFor="fullName">Full Name</label> <br />
              <input id="fullName" className='input' type="text" placeholder='Nazila Faizzadah'/>
            </div>
            <div className="">
              <label htmlFor="email">Email</label><br />
              <input type="email" className='input' id="email" placeholder='nazilafaizzadah37@gmail.com'/>
            </div>
            <div className="">
              <label htmlFor="phone">Phone</label><br />
              <input type="phone" className='input' id="phone" placeholder='(+93) 798278412'/>
            </div>
            <div className="">
              <label htmlFor="">Message</label> <br />
              <textarea name="" id="" className='input' cols="30" rows="10" placeholder='Feel free to get in touch with me ... 🤍'></textarea> <br />
            </div>
            <div className="">
             <input type="submit" value="Submit" className='submit' />
            </div>
           </form>
    )
}