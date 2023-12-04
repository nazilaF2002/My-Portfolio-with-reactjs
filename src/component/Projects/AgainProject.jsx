// here is my imports
// I used this component inside of the App componet
import './AgainProject.css';
import { useState } from 'react';
import ProjectData from './ProjectData';
import Aos from 'aos';
import { useEffect } from 'react';
import SelectCatagories from './SelectCatagori';
import Paginatoin from './Pagination';
export default function AgainProject() {
  // pagination section
  // in here according to the number of my projects  I determine 
  // that how many page show I have and how many project should be 
  // visible per page 
  const [currentPage, setCurrentPage] = useState(1);
  const recordperPage = 4;
  const lastIndex = currentPage * recordperPage;
  const firstIndex = lastIndex - recordperPage;
  const records = ProjectData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(ProjectData.length / recordperPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  // search section state
  const [search, setSearch] = useState('');
  // selectCatagori  state
  const [selectCatagori, setSelectCatagori] = useState('');
  // this is a function that I got the data from the child component to the parent mean here 
  function Slectcatagories(date) {
    setSelectCatagori(date);
  }
//  and here again I determine three state and according to them one catogories of data
// will diplayed on the screen
  const [isSearch, setIsSearch] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [allCatagori, setAllCatagori] = useState(true);
  // this is a variable that I made and in the continue put data in it accoring conditions 
  let showProjects = '';
  function Search(e) {
    setSearch(e.target.value);
    setIsSearch(true);
    setIsSelect(false);
    setAllCatagori(false);
  
  }
  function Allcatagories(item) {
    setAllCatagori(item);
  }

 
  

  if (isSearch) {
    showProjects = records.filter((item) => {
      return search.toLocaleLowerCase() === '' ? item : item.projectName.toLowerCase().includes(search);
    }).map((item, index) => (
      <div className="col-lg-6  text-center "  key={index}>
        <div className="box mx-auto my-3 w-75 w-md-50">
          <div className="box-img">
            <img src={item.projectImage} alt="" />
          </div>
          <div className="content">
            <h5>{item.projectName}</h5>
            <p className='project-decription'>{item.details}</p>
          
          </div>
          <div className="button   mt-sm-0">
          <div className='rate '>
           <h5  className='rate_color '>Rate me</h5>
            {item.rating}
          </div>
        
            <li><a href={item.projectLink} >watch now</a></li>
          </div>
        </div>
      </div>
    ));
  }




  if (isSelect) {
    showProjects = ProjectData.filter((item) => {
      return selectCatagori === item.catagory;
    }).map((item, index) => (
      <div className="col-lg-6  text-center "   key={index}>
      <div className="box mx-auto my-3 w-75 w-md-50">
        <div className="box-img">
          <img src={item.projectImage} alt="" />
        </div>
        <div className="content">
          <h5>{item.projectName}</h5>
          <p className='project-decription'>{item.details}</p>
        
        </div>
        <div className="button  mt-sm-0">
        <div className='rate '>
         <h5 className='rate_color '>Rate me</h5>
         {item.rating }
        </div>
      
          <li><a href={item.projectLink} >watch now</a></li>
        </div>
      </div>
    </div>
    ));

  }



  if (allCatagori) {
    showProjects = records.map((item, index) => (
      <div className="col-lg-6  text-center "  data-aos="flip-up" key={index}>
        <div className="box mx-auto my-3 w-75 w-md-50">
          <div className="box-img">
            <img src={item.projectImage} alt="" />
          </div>
          <div className="content">
            <h5>{item.projectName}</h5>
            <p className='project-decription'>{item.details}</p>
          
          </div>
          <div className="button  mt-sm-0">
          <div className='rate'>
           <h5  className='rate_color'>Rate me</h5>
           {item.rating}
          </div>
        
            <li><a href={item.projectLink} >watch now</a></li>
          </div>
        </div>
      </div>
    ));
  }
//  I used useEffect to determine the duration of animations
  useEffect(()=>{
    Aos.init({duration:2000});
  })
  return (
    <div id="project" className="container ovelflow" style={{minHeight: '70vh' }}>
      <div className="row Project__row " style={{ minHeight: '80vh' }}>
        <h1 className='p-lg-5 mt-lg-5  side_text '>__Projects</h1>
        <div className="text-center d-flex justify-content-center gap-3  gap-lg-5 flex-wrap">

          <form action="" className='mb-0 mb-lg-5 text-center '>
            <input type="search" className='search_input' placeholder='Enter the Project name' onChange={Search} />
          </form>
          {/* here I used selectedcatagories component that made befor to show select Option*/}
          <SelectCatagories getData={Slectcatagories} isSelect={setIsSelect} allCatagori={setAllCatagori} Allcatagories={Allcatagories} />
        </div>
        {/* here my project will be shown */}
        {showProjects}
        {/* and here is pagination component that I made it before */}
        <Paginatoin firstIndex={firstIndex} lastIndex={lastIndex} currentPage={currentPage} setCurrentPage={setCurrentPage} numbers={numbers} />
      </div>
    </div>
  );
}