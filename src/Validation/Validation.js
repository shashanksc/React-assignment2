import './Validation.css'
function validation(props){
    let validationMessage ='text too short';
    if(props.userInputLength>5){
        validationMessage='text long enough';
    }
    return(
        <div className="wrapper">
            <p>Validation Component</p>
                <div className="msg">{validationMessage}</div>
            
        </div>
        
    )
}
export default validation;