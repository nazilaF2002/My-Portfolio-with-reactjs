
// I used this component inside the Themes component
export default function ThemeItem({color,setColor}){
    // this will return an empty  div its background color is according to the props color
    return(
    <div className="_circle" style={{ '--bg-color': color }} onClick={setColor}></div>
    );
}
