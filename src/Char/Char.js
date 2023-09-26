import './Char.css';
function Char(props){
    
    
    return (
    <div className='container' onClick ={props.delete}>
        
        {props.character}
    </div>
    );
}
export default Char;