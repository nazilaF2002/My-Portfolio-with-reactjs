// I used this component inside the App component as the parent
export default function Parent(props){
    const classes=props.className;
    const ides=props.id;
    return(
    <div className={classes} id={ides}>{props.children}</div>
)
}