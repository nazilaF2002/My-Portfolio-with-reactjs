// here is my components 
// I used this component inside the AgainProject component
import './pagination.css';
import { Link } from 'react-scroll';
export default function Paginatoin(props){
  // this function will transfer us to the next page
    function nextPage() {
        if (props.currentPage !== props.lastIndex) {
            props.setCurrentPage(props.currentPage + 1)
        }
      }
  // this function will transfer us to the last page
      function prePage() {
        if (props.currentPage !== props.firstIndex) {
            props.setCurrentPage(props.currentPage - 1);
        }
      }
  //  this function will transfer us to the clicked page 
      function changeCPage(id) {
        props.setCurrentPage(id);
    
      }
    return(
        <nav className='mt-5 '>
          <ul className='pagination  d-flex justify-content-center '>
            <li className='page-item  '>
              <Link to='project' className='page-link pre'
                onClick={prePage}>Prev</Link>
            </li>
            {
             props.numbers.map((n, i) => (
                <li className={`page-item ${props.currentPage === n ? 'active' : ''} `} key={i}>
                  <Link to='project' className="page-link" onClick={() => changeCPage(n)}>{n}</Link>
                </li>
              ))
            }
            <li className='page-item'>
              <Link to='project' className='page-link pre'
                onClick={nextPage}>Next</Link>
            </li>
          </ul>
        </nav>
    )
}