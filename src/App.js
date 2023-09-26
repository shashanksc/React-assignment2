import React from 'react';
import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends React.Component {
  state ={
    userInput :''
  }
  inputChangedHandler = (event)=>{
    this.setState({userInput : event.target.value});
  }
  deleteHandler=(index)=>{
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput : updatedText});
  }
  
  render(){
  
    const charList = this.state.userInput.split('').map((ch,index)=>{
      return <Char 
      character = {ch}
      key={index}
      delete={()=>this.deleteHandler(index)}
      />
    });
    return (
      <div className="App">
        <p className='title'>
              Assignment 2
            </p>
            <ol className="list">
              <li className="listItem">Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
              <li className="listItem">Create a new component (= ValidationComponent) which receives the text length as a prop</li>
              <li className="listItem">Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
              <li className="listItem">Create another component (= CharComponent) and style it as an inline box (= display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
              <li className="listItem"> Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
              <li className="listItem">When you click a CharComponent, it should be removed from the entered text.</li>
            </ol>
            <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
            <hr/>
            <input 
              type="text" 
              onChange={this.inputChangedHandler}
              value ={this.state.userInput}/>
            <p className='textLen'>{this.state.userInput.length}</p>
            <Validation userInputLength={this.state.userInput.length}/>
            {charList}
      </div>
    );
  }
}

export default App;
