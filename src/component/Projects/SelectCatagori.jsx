// I used this component to the AgainProject Componet
export default function SelectCatagories(props){
  // this function will give the value of options and according of that some changes will happen
  function Changes(event){
   const variable=event.target.value;
   props.isSelect(true);
   props.allCatagori(false);
   props.getData(variable);
   console.log(variable);
  }
  // this is internal css in react
  const selectCatagori={
    width:'210px',
    height:'35px',
    borderRadius:'20px',
    padding:'5px 13px',
    outline:'blue',
    border:'none',
    boxShadow:' 1px 2px 10px 2px var(--bg-color)'
  }
    return(
      // and here is my select options
    <select style={selectCatagori}   value={props.selectCatagori} onChange={Changes}>
        <option value="reactjs">Select Catagory</option>
        <option value="html">Html</option>
        <option value="css">Css</option>
        <option value="bootstrap">Bootstrap</option>
        <option value="javascript">JavaScript</option>
        <option value="reactjs">Reactjs</option>
    </select>
    );
}
